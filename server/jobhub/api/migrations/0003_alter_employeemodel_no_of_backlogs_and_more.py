# Generated by Django 5.0.6 on 2024-05-31 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_employeemodel_no_of_backlogs_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employeemodel',
            name='no_of_backlogs',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='employeemodel',
            name='qualification_percentage',
            field=models.CharField(max_length=100),
        ),
    ]
