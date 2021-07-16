from django.db import models
from ingredients.models import Ingredient



# class MenuItemIngredient(models.Model):
#     pass
    # ingredient relationship to an ingredient (that includes price per pound)
    # menuItem relationship to a menuItem (that includes the ingredient_weight)

# Create your models here.
# contain objects [{ingredient_id, ingredient_weight for the specific menu item},{}]
class MenuItem(models.Model):
    name = models.CharField(max_length=255)
    ingredients = models.JSONField(null=True) # [{},{},{},{}]
    # weight_of_ingredient = models.DecimalField(max_digits=6, decimal_places=2, null=True)

    def __str__(self):
        return self.name
