# Generated by Django 3.2.5 on 2021-07-12 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MenuItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('ingredient', models.CharField(max_length=255)),
                ('ingredient_weight', models.DecimalField(decimal_places=2, max_digits=4, null=True)),
            ],
        ),
    ]
