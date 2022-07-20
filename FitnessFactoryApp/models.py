from turtle import clear
from django.db import models
from django.db.models import JSONField
#import jsonfield
# Create your models here.

class Products(models.Model):
    ID=models.IntegerField(primary_key=True)
    Name=models.CharField(max_length=20)
    Category=models.CharField(max_length=20)
    FeaturedImage=models.TextField()
    Price=models.CharField(max_length=10)
    StockCount=models.IntegerField()
    Description=models.TextField()
    Features=JSONField()
    AdditionalImages=JSONField()
    Reviews=JSONField()

class Cart(models.Model):
    ID=models.IntegerField(primary_key=True)
    Quantity=models.IntegerField()
    Price=models.CharField(max_length=10)