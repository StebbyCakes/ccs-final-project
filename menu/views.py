from rest_framework import generics
from .models import MenuItem, Ingredient
from .serializers import MenuItemSerializer, IngredientSerializer


class IngredientListAPIView(generics.ListCreateAPIView):
    queryset = Ingredient.objects.order_by('name')
    serializer_class = IngredientSerializer


class IngredientEditAPIView(generics.RetrieveUpdateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class MenuItemListAPIView(generics.ListCreateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer


class MenuItemEditAPIView(generics.RetrieveUpdateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
