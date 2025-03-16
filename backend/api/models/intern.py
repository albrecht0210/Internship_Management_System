import uuid

from django.db import models
from django.utils.translation import gettext_lazy as _

class Intern(models.Model):
    id = models.UUIDField(_('Intern ID'), primary_key=True, default=uuid.uuid4, editable=False)
    
    account = models.ForeignKey('Account', on_delete=models.CASCADE)
    school = models.CharField(_('School'), max_length=200)
    course = models.CharField(_('Course'), max_length=200)
    hours = models.IntegerField(_('Hours'))
    personal_email = models.EmailField(_('Personal Email'))
    facebook_link = models.URLField(_('Facebook Link'))
    