from ast import Return
from operator import truediv
from django.shortcuts import render
# adding required imports
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from FitnessFactoryApp.models import Products
from FitnessFactoryApp.serializers import ProductSerializer

# Create your views here.
@csrf_exempt
def ProductAPI(request,id=0):
    if request.method=='GET':
        products_json=Products.objects.all()
        productserializer_json=ProductSerializer(products_json,many=True)
        return JsonResponse(productserializer_json.data,safe=False)
        return JsonResponse("Failed to get item",safe=False)
    
    elif request.method=='POST':
        products_data=JSONParser().parse(request)
        productserializer_json=ProductSerializer(data=products_data)
        if productserializer_json.is_valid():
            productserializer_json.save()
            return JsonResponse("Item added successfully",safe=False)
        return JsonResponse("Failed to add item",safe=False)