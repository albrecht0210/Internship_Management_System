# import uuid

# from django.db import models
# from django.utils.translation import gettext_lazy as _

# class Task(models.Model):
#     id = models.UUIDField(_('Task ID'), primary_key=True, default=uuid.uuid4, editable=False)

#     # 1, 2, 3
#     title = models.CharField(_('Title'), max_length=200)
#     instruction = models.TextField(_('Instruction'))
#     deadline = models.DateTimeField(_('Deadline'))
    
#     TASK_TYPES = [
#         ('Daily Task', 'Daily Task'),
#         ('Team Task', 'Team Task'),
#         ('Self Task', 'Self Task'),
#     ]

#     task_type = models.CharField(_('Task Type'), choices=TASK_TYPES)
#     posted_by = models.ForeignKey('Account', on_delete=models.CASCADE)
#     # 2
#     department = models.ForeignKey('Department', on_delete=models.CASCADE, null=True, blank=True)
#     team = models.ForeignKey('Team', on_delete=models.CASCADE, null=True, blank=True)
    
#     # 1
#     for_everyone = models.BooleanField(_('For Everyone?'), default=False)
#     # 3
#     approved_by = models.ForeignKey('Account', on_delete=models.CASCADE, null=True, blank=True)
    
#     file_url = models.FileField(_('File'), upload_to='tasks/', null=True, blank=True)
    
#     created_at = models.DateTimeField(_('Created At'), auto_now_add=True)
#     updated_at = models.DateTimeField(_('Updated At'), auto_now=True)
    
#     def __str__(self):
#         return self.title
    
# class TaskAssignment(models.Model):
#     id = models.UUIDField(_('Task Assignment ID'), primary_key=True, default=uuid.uuid4, editable=False)

#     task = models.ForeignKey('Task', on_delete=models.CASCADE)
#     account = models.ForeignKey('Account', on_delete=models.CASCADE)

#     TASK_STATUS = [
#         ('Pending', 'Pending'),
#         ('In Progress', 'In Progress'),
#         ('Completed', 'Completed'),
#     ]

#     status = models.CharField(choices=TASK_STATUS, max_length=20, default='Pending')

#     completion_date = models.DateField(null=True, blank=True)

#     card_name = models.CharField(_('Card Name'), max_length=200, blank=True, null=True)
#     card_link = models.URLField(_('Card Link'), blank=True, null=True)
#     screenshot_link = models.URLField(_('Screenshot Link'), blank=True, null=True)


