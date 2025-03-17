import uuid

from django.db import models
from django.utils.translation import gettext_lazy as _

class Department(models.Model):
    id = models.UUIDField(_('Department ID'), primary_key=True, default=uuid.uuid4, editable=False)

    name = models.CharField(_('Name'), max_length=50)
    
    created_at = models.DateTimeField(_('Created At'), auto_now_add=True)
    updated_at = models.DateTimeField(_('Updated At'), auto_now=True)

    def __str__(self):
        return f'{self.name} Department'

class DepartmentMember(models.Model):
    id = models.UUIDField(_('Department Member ID'), primary_key=True, default=uuid.uuid4, editable=False)

    department = models.ForeignKey('Department', on_delete=models.CASCADE)
    account = models.ForeignKey('Account', on_delete=models.CASCADE)
    is_supervisor = models.BooleanField(_('Is Supervisor?'), default=False)
    
    created_at = models.DateTimeField(_('Created At'), auto_now_add=True)
    updated_at = models.DateTimeField(_('Updated At'), auto_now=True)
    