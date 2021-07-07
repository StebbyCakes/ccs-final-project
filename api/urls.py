from django.urls import path, include

app_name = 'api_v1'

urlpatterns = [
    path('ingredient/', include('ingredient.urls', namespace='ingredient')),
]
