# Generated by Django 3.0.3 on 2020-09-01 23:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0007_auto_20200901_2013'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='departament',
            new_name='department',
        ),
    ]