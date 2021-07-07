from django.urls import path

from .views import IngredientListAPIView, IngredientEditAPIView

app_name = 'ingredient'

urlpatterns = [
    path('<int:pk/', IngredientEditAPIView.as_view(), name = 'edit_ingredient'),
    path('', IngredientListAPIView.as_view(), name = "ingredient_list"),
]
