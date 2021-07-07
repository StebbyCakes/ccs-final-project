from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Ingredient(models.Model):
    ingredient = models.CharField(max_length = 255)
    priceperpound = models.DecimalField(max_digits=4, decimal_places=2)

    def __str__(self):
        return self.ingredient
