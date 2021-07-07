from django.urls import path

from .views import IngredientListAPIView

app_name = 'ingredient'

urlpatterns = [
    path('', IngredientListAPIView.as_view(), name = "ingredient_list"),
]
