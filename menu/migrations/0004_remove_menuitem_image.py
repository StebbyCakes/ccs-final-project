# Generated by Django 3.2.5 on 2021-08-03 00:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0003_remove_menuitem_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menuitem',
            name='image',
        ),
    ]