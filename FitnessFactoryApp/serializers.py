from rest_framework import serializers
from FitnessFactoryApp.models import Products,Cart

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields=('ID','Name','Category','FeaturedImage','Price','StockCount','Description','Features','AdditionalImages','Reviews')


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model=Cart
        fields=('UserID','ID','Quantity')