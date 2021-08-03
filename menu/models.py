from django.db import models
import datetime


class Category(models.Model):
    name = models.CharField(max_length=255)


class Ingredient(models.Model):
    name = models.CharField(max_length = 255)
    price_listings = models.JSONField(null=True) # {price_per_pound, active_date}
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class MenuItem(models.Model):
    name = models.CharField(max_length=255)
    ingredients = models.JSONField(null=True)
    menu_price = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True) # updates at creation
    is_active = models.BooleanField(default=True)
    # image = models.ImageField(upload_to='menu/', null=True)
    # category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'Menu Item'
        verbose_name_plural = 'Menu Items'

    def __str__(self):
        return self.name
