import uuid

from django.db import models
from django.utils.translation import gettext_lazy as _

class Team(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    name = models.CharField(_('Name'), max_length=50)
    department = models.ForeignKey('Department', on_delete=models.CASCADE)

    created_at = models.DateTimeField(_('Created At'), auto_now_add=True)
    updated_at = models.DateTimeField(_('Updated At'), auto_now=True)
    
    def __str__(self):
        return self.name

class TeamMember(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    team = models.ForeignKey('Team', on_delete=models.CASCADE)
    account = models.ForeignKey('Account', on_delete=models.CASCADE)
    is_lead = models.BooleanField(default=False)

    created_at = models.DateTimeField(_('Created At'), auto_now_add=True)
    updated_at = models.DateTimeField(_('Updated At'), auto_now=True)
    