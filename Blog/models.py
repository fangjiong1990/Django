from django.db import models

# Create your models here.
# __str__的作用是在admin里面美化打印出来的结果

class Test(models.Model):
    name = models.CharField(max_length=20)
    def __str__(self):
        return self.name


class Car(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class People(models.Model):
    name = models.CharField(max_length=200)
    age = models.IntegerField(default=0)
    email = models.EmailField()
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

