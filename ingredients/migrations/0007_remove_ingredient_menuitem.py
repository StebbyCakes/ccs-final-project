# Generated by Django 3.2.5 on 2021-07-14 20:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ingredients', '0006_ingredient_menuitem'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ingredient',
            name='menuitem',
        ),
    ]
