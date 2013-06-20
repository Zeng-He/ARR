from django.db import models

class Persona(models.Model):
	nombre = models.CharField(max_length=30)
	apellido = models.CharField(max_length=30)
	direccion = models.CharField(max_length=30)
	edad = models.IntegerField()
	dni = models.IntegerField()

class Reo(Persona):
	tiempo_condena = models.CharField(max_length=30)
	fecha_ingreso = models.DateField()
	id_huella = models.IntegerField()

class Antecedentes(models.Model):
	antecedente = models.TextField()
	reo = models.ForeignKey('Reo')
	calabozo = models.OneToOneField('Calabozo')

class Calabozo(models.Model):
	tipo=models.TextField()
	estado=models.CharField(max_length=30)

class Policia(Persona):
	num_placa = models.IntegerField()
	fecha_ingreso = models.DateField()
	cargo = models.CharField(max_length=50)
	sueldo = models.FloatField()

class Administrativo(Policia):
	cant_horas = models.IntegerField()

class Efectivo(Policia):
	horario_patrull = models.CharField(max_length=30)

class Equipamiento(models.Model):
	estado=models.CharField(max_length=30)

class Articulos(Equipamiento):
	tipo = models.CharField(max_length=50)
	asignado = models.ManyToManyField('Administrativo')

class Armamento(Equipamiento):
	asignado = models.ForeignKey('Efectivo')

class Municion(Equipamiento):
	asignado = models.ForeignKey('Efectivo')

class Vehiculo(Equipamiento):
	asignado = models.ForeignKey('Efectivo')


# Debe controlar los reos que esten asignados a dicha seccional. Estos reos, pueden 
# ingresar, ser  trasladados de celdas dentro de la institucion, ser transferidos a otra comisaria 
# o carcel, o eventualmente, ser liberados. Estos reos tienen un nombre y apellido, un numero 
# de documento, una huella dactilar que lo identifica en una base de datos y se relaciona con 
# un listado de antecedentes, una fecha de ingreso y un tiempo de condena, expresado en dias, 
# meses o anios (segun corresponda).
# Si un preso fuera trasladado o transferido (ya sea de celda o de comisaria/carcel), debe 
# registrarse dicho movimiento, indicando la fecha del traslado, y un comentario que describa 
# el por que de dicho movimiento, y un responsable interno encargado de la transferencia.
# Ademas, la comisaria maneja el equipamiento disponible. Este equipamiento, 
# comprende armamento, municion y coches patrulla. Cada elemento del equipamiento, se 
# asigna a un efectivo policial (por ejemplo: un policia utiliza cierta arma, que dispara cierto tipo 
# de municion, o realiza patrullaje con cierto vehiculo acompaniado un numero determinado 
# de companieros definidos). Cada asignacion, debe tener, por supuesto, un efectivo y un 
# equipamiento, indicando la fecha de la asignacion, y el encargado que realizo la asignacion.