from rest_framework import serializers
from .models import EmployeeModel,CompanyModel

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=EmployeeModel
        fields="__all__"

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model=CompanyModel
        fields="__all__"