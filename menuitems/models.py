from django.db import models

# Create your models here.
class MenuItem(models.Model):
    name = CharField(max_length = 255)
    ingredient = CharField(max_length = 255)
    ingredient_weight = models.DecimalField(max_digits=4, decimal_places=2, null=True)
