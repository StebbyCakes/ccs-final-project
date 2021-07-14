from django.db import models
from menuitems.models import MenuItem
# from django.contrib.auth.models import User

# Create your models here.
class Ingredient(models.Model):
    name = models.CharField(max_length = 255)
    price_per_pound = models.DecimalField(max_digits=4, decimal_places=2, null=True)
    # menuitem = models.ManyToManyField(MenuItem)

    def __str__(self):
        return self.name
