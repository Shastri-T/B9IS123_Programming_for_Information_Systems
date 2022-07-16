from django.db import models

# Create your models here.

class Products(models.Model):
    productID=models.AutoField(primary_key=True)
    productName=models.CharField(max_length=20)
