import uuid

from django.db import models
from django.utils.translation import gettext_lazy as _

class Document(models.Model):
    id = models.UUIDField(_('Document ID'), primary_key=True, default=uuid.uuid4, editable=False)

    name = models.CharField(_('Name'), max_length=200)
    account = models.ForeignKey('Account', on_delete=models.CASCADE)
    document_link = models.URLField(_('Document Link'), null=True, blank=True)
    STATUS_CHOICES = [
        ('Pending', 'Pending'), 
        ('Approved', 'Approved'), 
        ('Rejected', 'Rejected')
    ]
    status = models.CharField(_('Status'), choices=STATUS_CHOICES, max_length=20, default='Pending')
    checked_by = models.ForeignKey('Account', on_delete=models.CASCADE)

    def __str__(self):
        return self.name