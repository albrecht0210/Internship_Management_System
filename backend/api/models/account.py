import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from ..managers import AccountManager

class Account(AbstractUser):
    id = models.UUIDField(_('Account ID'), primary_key=True, default=uuid.uuid4, editable=False)
    
    username = None
    email = models.EmailField(_('Email Address'), unique=True)

    class Role(models.TextChoices):
        ADMIN = 'admin', _('Admin')
        EMPLOYEE = 'employee', _('Employee')
        INTERN = 'intern', _('Intern')

    role = models.CharField(
        _('Role'),
        max_length=20,
        choices=Role.choices,
        default=Role.EMPLOYEE
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = AccountManager()

    def __str__(self):
        return self.email
    
    @property
    def is_admin(self):
        return self.role == self.Role.ADMIN

    @property
    def is_employee(self):
        return self.role == self.Role.EMPLOYEE

    @property
    def is_intern(self):
        return self.role == self.Role.INTERN
    