from django.db import models



# class MenuItemIngredient(models.Model):
#     pass
    # ingredient relationship to an ingredient (that includes price per pound)
    # menuItem relationship to a menuItem (that includes the ingredient_weight)

# Create your models here.
class MenuItem(models.Model):
    name = models.CharField(max_length = 255)
    # ingredients = models.JSONField(max_length = 255) # contain objects [{ingredient_id, ingredient_weight for the specific menu item},{}]

    def __str__(self):
        return self.name
