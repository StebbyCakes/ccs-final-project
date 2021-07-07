from rest_framework import generics
from .models import Ingredient
from .serializers import IngredientSerializer
# from .permissions import IsAuthOrReadOnly


# Create your views here.
class IngredientListAPIView(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    # permission_classes = (IsAuthOrReadOnly,)

class IngredientEditAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class= IngredientSerializer
