from turtle import clear
from django.db import models
from django.db.models import JSONField
#import jsonfield
# Create your models here.

class Products(models.Model):
    ID=models.AutoField(primary_key=True)
    Name=models.CharField(max_length=20)
    Category=models.CharField(max_length=20)
    FeaturedImage=models.CharField(max_length=100)
    Price=models.CharField(max_length=20)
    StockCount=models.IntegerField()
