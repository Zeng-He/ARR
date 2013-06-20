from django.db import models

class Persona(models.Model):
	nombre = models.CharField(max_length=30)
	apellido = models.CharField(max_length=30)
	direccion = models.CharField(max_length=30)
	edad = models.IntegerField()
	dni = models.IntegerField(unique=True)

class Reo(Persona):
	tiempo_condena = models.CharField(max_length=30)
	fecha_ingreso = models.DateField()
	id_huella = models.IntegerField(unique=True)
	calabozo = models.OneToOneField('Calabozo')

class Traslados(models.Model):
	reo = models.ForeignKey('Reo')
	descripcion = models.TextField()
	fecha = models.DateField()
	responsable = models.ForeignKey('Efectivo')

class Antecedentes(models.Model):
	antecedente = models.TextField()
	condena = models.CharField(max_length=30)
	reo = models.ForeignKey('Reo')

class Calabozo(models.Model):
	tipo=models.TextField()
	estado=models.CharField(max_length=30)

class Policia(Persona):
	num_placa = models.IntegerField()
	fecha_ingreso = models.DateField()
	cargo = models.CharField(max_length=50)
	sueldo = models.FloatField()
	es_jefe = models.ForeignKey('Policia',related_name='jefe')
	tarea = models.TextField()

class Administrativo(Policia):
	cant_horas = models.IntegerField()

class Efectivo(Policia):
	horario_patrull = models.CharField(max_length=30)

class Equipamiento(models.Model):
	nombre = models.CharField(max_length=30)
	estado = models.CharField(max_length=30)

class Asignaciones(models.Model):
	equipamiento = models.ForeignKey('Equipamiento')
	policia = models.ForeignKey('Policia',related_name='policia')
	asignado_por = models.ForeignKey('Policia',related_name='asignador')
	fecha_asignacion = models.DateField()

class Articulos(Equipamiento):
	tipo = models.CharField(max_length=50)

class Armamento(Equipamiento):
	tipo_municion = models.CharField(max_length=30)
	codigo = models.CharField(max_length=30)

class Municion(Equipamiento):
	tipo = models.CharField(max_length=30)
	cantidad = models.IntegerField()

class Vehiculo(Equipamiento):
	marca = models.CharField(max_length=30)
	modelo = models.CharField(max_length=30)
	capacidad = models.IntegerField()