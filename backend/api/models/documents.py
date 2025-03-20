import uuid

from django.db import models
from django.utils.translation import gettext_lazy as _

class Document(models.Model):
    id = models.UUIDField(_('Document ID'), primary_key=True, default=uuid.uuid4, editable=False)

    name = models.CharField(_('Name'), max_length=200)
    account = models.ForeignKey('Account', on_delete=models.CASCADE, related_name='documents')
    document_link = models.URLField(_('Document Link'), null=True, blank=True)

    class Status(models.TextChoices):
        PENDING = 'pending', _('Pending')
        APPROVED = 'approved', _('Approved')
        REJECTED = 'rejected', _('Rejected')

    status = models.CharField(
        _('Status'), 
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING
    )
    checked_by = models.ForeignKey('Account', on_delete=models.CASCADE, related_name='checked_documents')

    def __str__(self):
        return self.name