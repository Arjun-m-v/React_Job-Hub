# Generated by Django 5.0.6 on 2024-06-06 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_companymodel'),
    ]

    operations = [
        migrations.AddField(
            model_name='companymodel',
            name='image',
            field=models.ImageField(default='https://t3.ftcdn.net/jpg/02/52/37/18/360_F_252371808_YjQRQY8aOCMfQcFZsWrjfevycGgEOzSn.jpg', upload_to='company_images'),
        ),
    ]