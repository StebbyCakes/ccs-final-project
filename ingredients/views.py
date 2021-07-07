from django.shortcuts import render
from .models import Ingredient
from .serialzers import IngredientSerializer

# Create your views here.
class IngredientListAPIView(generics.ListAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
