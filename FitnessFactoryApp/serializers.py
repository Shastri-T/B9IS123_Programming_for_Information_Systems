from rest_framework import serializers
from FitnessFactoryApp.models import Products

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields=('ID','Name','Category','FeaturedImage','Price','StockCount')