from django.db import models

class Persona(models.Model):
	nombre = models.CharField(max_length=30)
	apellido = models.CharField(max_length=30)
	direccion = models.CharField(max_length=30)

class Reo(models.Model):
	fecha_ingreso = models.DateField()

class Antecedentes(models.Model):
	Antecedente = models.TextField()
	reo = models.ForeignKey('Reo')
