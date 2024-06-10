from django.shortcuts import render
from .serializers import EmployeeSerializer,CompanySerializer
from .models import EmployeeModel,CompanyModel
from rest_framework.viewsets import ModelViewSet

# Create your views here.

class EmployeeModelViewSet(ModelViewSet):
    serializer_class=EmployeeSerializer
    queryset=EmployeeModel.objects.all()

class CompanyModelViewSet(ModelViewSet):
    serializer_class=CompanySerializer
    queryset=CompanyModel.objects.all()