from django.db import models

# Create your models here.
class MenuItem(models.Model):
    name = models.CharField(max_length = 255)
    ingredients = models.CharField(max_length = 255)
    ingredient_weight = models.DecimalField(max_digits=4, decimal_places=2, null=True)

    def __str__(self):
        return self.name
