from django.db import models
# from django.contrib.auth.models import User

# Create your models here.
class Ingredient(models.Model):
    name = models.CharField(max_length = 255)
    price_per_pound = models.DecimalField(max_digits=4, decimal_places=2, null=True)

    def __str__(self):
        return self.name
