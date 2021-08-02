from rest_framework import generics
from .models import MenuItem, Ingredient
from .serializers import MenuItemSerializer, IngredientSerializer

 # ?active=True/

class IngredientListAPIView(generics.ListCreateAPIView):
    serializer_class = IngredientSerializer


    def get_queryset(self):
        queryset = Ingredient.objects.order_by('name')
        active = self.request.query_params.get('active')
        if active is not None:
            active = bool(active)
            queryset = queryset.filter(is_active=active)
        return queryset



class IngredientEditAPIView(generics.RetrieveUpdateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class MenuItemListAPIView(generics.ListCreateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer


class MenuItemEditAPIView(generics.RetrieveUpdateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
