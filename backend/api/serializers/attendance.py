from rest_framework import serializers
from django.contrib.auth import get_user_model

Account = get_user_model()

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'first_name', 'last_name', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        account = Account.objects.create_user(**validated_data)
        return account