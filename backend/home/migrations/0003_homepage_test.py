# Generated by Django 2.2.13 on 2020-06-18 22:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_load_initial_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='test',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]