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
    Price=models.IntegerField()
    StockCount=models.IntegerField()
    Description=models.TextField()
    Features=JSONField()
    AdditionalImages=JSONField()
    Reviews=JSONField()

class Cart(models.Model):
    UserID=models.IntegerField()
    ID=models.IntegerField()
    Quantity=models.IntegerField()