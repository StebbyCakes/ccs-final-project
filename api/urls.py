from django.urls import path, include

app_name = 'api_v1'

urlpatterns = [
    path('ingredients/', include('ingredients.urls', namespace='ingredients')),
     path('users/', include('accounts.urls')),
]
