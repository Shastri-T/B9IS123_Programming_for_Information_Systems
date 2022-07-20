from ast import Return
from operator import truediv
from django.shortcuts import render
# adding required imports
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from FitnessFactoryApp.models import Products,Cart
from FitnessFactoryApp.serializers import ProductSerializer,CartSerializer

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
    
    elif request.method=='PUT':
        products_data=JSONParser().parse(request)
        products=Products.objects.get(ID=products_data['ID'])
        products_serializer=ProductSerializer(products,data=products_data)
        if products_serializer.is_valid():
            products_serializer.save()
            return JsonResponse("Item Updated",safe=False)
        return JsonResponse("Failed to Update item")
    
    elif request.method=='DELETE':
        product=Products.objects.get(ID=1)
        product.delete()
        return JsonResponse("Item Deleted",safe=False)


@csrf_exempt
def CartAPI(request,id=0):
    if request.method=='GET':
        cart_json=Cart.objects.all()
        cartserializer_json=CartSerializer(cart_json,many=True)
        return JsonResponse(cartserializer_json.data,safe=False)
        return JsonResponse("Failed to get item",safe=False)
    
    elif request.method=='POST':
        cart_data=JSONParser().parse(request)
        cartserializer_json=CartSerializer(data=cart_data)
        if cartserializer_json.is_valid():
            cartserializer_json.save()
            return JsonResponse("Item added successfully",safe=False)
        return JsonResponse("Failed to add item",safe=False)
    
    elif request.method=='PUT':
        cart_data=JSONParser().parse(request)
        cart=Cart.objects.get(ID=cart_data['ID'])
        cart_serializer=CartSerializer(cart,data=cart_data)
        if cart_serializer.is_valid():
            cart_serializer.save()
            return JsonResponse("Item Updated",safe=False)
        return JsonResponse("Failed to Update item")
    
    elif request.method=='DELETE':
        cart=Cart.objects.get(ID=1)
        cart.delete()
        return JsonResponse("Item Deleted",safe=False)