from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer

class ProfileListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer

    def perform_update(self, serializer):
        instance = serializer.save(user=self.request.user)
