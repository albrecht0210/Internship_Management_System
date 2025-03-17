import uuid

from django.db import models
from django.utils.translation import gettext_lazy as _

class Attendance(models.Model):
    id = models.UUIDField(_('Attendance ID'), primary_key=True, default=uuid.uuid4, editable=False)

    account = models.ForeignKey('Account', on_delete=models.CASCADE)
    time_in = models.DateTimeField(_('Time In'))
    time_out = models.DateTimeField(_('Time Out'))
    remark = models.TextField(_('Remarks'))
