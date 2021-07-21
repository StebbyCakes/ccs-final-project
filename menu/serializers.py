from rest_framework import serializers
from .models import MenuItem, Ingredient

class MenuItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = MenuItem
        fields = '__all__'


class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = '__all__'
