from django.urls import URLPattern,re_path
from FitnessFactoryApp import views

urlpatterns =[
    re_path(r'product/',views.ProductAPI),
    re_path(r'product/([0-9]+)',views.ProductAPI)
]