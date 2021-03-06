# Generated by Django 3.0.3 on 2020-09-01 19:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0005_task_created_at'),
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
            ],
        ),
        migrations.AddField(
            model_name='taskcomment',
            name='task',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='tasks.Task'),
        ),
        migrations.CreateModel(
            name='TaskAssignation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department_current', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='department_current', to='tasks.Department')),
                ('department_old', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='department_old', to='tasks.Department')),
            ],
        ),
        migrations.AlterField(
            model_name='task',
            name='departament',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='task_department', to='tasks.Department'),
        ),
    ]
