from rest_framework import serializers
from .models import Profile
from django.conf import settings

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
