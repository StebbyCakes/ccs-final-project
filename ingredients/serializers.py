from rest_framework import serializers
from .models import Ingredient

class IngredientSerializer(serializers.ModelSerializer):
    has_owner_permissions = serializers.SerializerMethodField('get_owner_status')
    owner = serializers.ReadOnlyField(source='user.username')

    def get_owner_status(self, obj):
        return obj.user == self.context['request'].user
    class Meta:
        model = Ingredient
        fields = '__all__'
