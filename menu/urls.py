from django.urls import path

from . import views

app_name = 'menu'

urlpatterns = [
    path('ingredients/<int:pk>/', views.IngredientEditAPIView.as_view(), name = 'ingredient_detail'),
    path('ingredients/', views.IngredientListAPIView.as_view(), name = "ingredient_list"),
    path('<int:pk>/', views.MenuItemEditAPIView.as_view(), name ='menu_detail'),
    path('', views.MenuItemListAPIView.as_view(), name = 'menu_list'),
]
