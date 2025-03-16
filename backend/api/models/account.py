import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from ..managers import AccountManager

class Account(AbstractUser):
    id = models.UUIDField(_('Account ID'), primary_key=True, default=uuid.uuid4, editable=False)
    
    username = None
    email = models.EmailField(_('Email Address'), unique=True)
    is_intern = models.BooleanField(_('Is Intern?'), default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = AccountManager()

    def __str__(self):
        return self.email
    