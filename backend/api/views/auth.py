from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status, permissions, viewsets
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from django.contrib.auth import authenticate

from ..serializers import AccountLoginSerializer

class AuthViewSet(viewsets.ViewSet):
    @action(methods=['post'], detail=False, permission_classes=[permissions.AllowAny])
    def login(self, request):
        serializer = AccountLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data.get("email")
        password = serializer.validated_data.get("password")

        user = authenticate(email=email, password=password)
        if not user:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

        token = RefreshToken.for_user(user)
        access_token = str(token.access_token)
        refresh_token = str(token)

        response = Response({"message": "Login successful"}, status=status.HTTP_200_OK)

        response.set_cookie(
            key="access",
            value=access_token,
            httponly=True,  
            secure=True,  
            samesite="Strict",  
            max_age=900,  
        )

        response.set_cookie(
            key="refresh",
            value=refresh_token,
            httponly=True,
            secure=True,
            samesite="Strict",
            max_age=604800,  
        )

        return response

    @action(methods=['post'], detail=False, permission_classes=[permissions.AllowAny])
    def relogin(self, request):
        refresh_token = request.COOKIES.get("refresh_token")

        if not refresh_token:
            return Response({"message": "Refresh token missing"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            token = RefreshToken(refresh_token)
            access_token = str(token.access_token)
            refresh_token = str(token)
        except Exception:
            return Response({"message": "Invalid refresh token"}, status=status.HTTP_401_UNAUTHORIZED)

        response = Response({"message": "New access token generated"}, status=status.HTTP_200_OK)

        response.set_cookie(
            key="access",
            value=access_token,
            httponly=True,
            secure=True,
            samesite="Strict",
            max_age=900,
        )

        response.set_cookie(
            key="refresh",
            value=refresh_token,
            httponly=True,
            secure=True,
            samesite="Strict",
            max_age=604800,  
        )

        return response

    @action(methods=['post'], detail=False, permission_classes=[permissions.AllowAny])
    def verify(self, request):
        """Verify if the access token is valid."""
        access_token = request.COOKIES.get("access_token")

        if not access_token:
            return Response({"message": "Access token missing"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            AccessToken(access_token)  # Validates the token
            return Response({"message": "Token is valid"}, status=status.HTTP_200_OK)
        except Exception:
            return Response({"message": "Invalid or expired token"}, status=status.HTTP_401_UNAUTHORIZED)
