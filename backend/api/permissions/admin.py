from rest_framework.permissions import BasePermission
from rest_framework.exceptions import PermissionDenied

class AdminPermission(BasePermission):
    """
    Permission to allow only users with the admin role.
    """
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            raise PermissionDenied("User is not authenticated.")
        
        # Check if the user is an admin
        if not request.user.is_admin:
            raise PermissionDenied("User does not have admin role.")
        
        return True
    