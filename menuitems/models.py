from django.db import models

# Create your models here.
class MenuItem(models.Model):
    name = CharField(max_length = 255)
