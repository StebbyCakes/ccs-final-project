# Generated by Django 3.2.5 on 2021-07-15 21:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menuitems', '0005_rename_ingredient_menuitem_ingredients'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menuitem',
            name='ingredients',
        ),
    ]