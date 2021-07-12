from django.urls import path
from .views import MenuItemListAPIView, MenuItemEditAPIView

app_name = 'menuitem'

urlpatterns = [
    path('<int:pk>/', MenuItemEditAPIView.as_view(), name ='edit_menu'),
    path('', MenuItemListAPIView.as_view(), name = 'menu_list'),
]
