from rest_framework import generics
from .models import Ingredient
from .serializers import IngredientSerializer
from .permissions import IsAuthOrReadOnly


# Create your views here.
class IngredientListAPIView(generics.ListAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    permission_classes = (IsAuthOrReadOnly,)
