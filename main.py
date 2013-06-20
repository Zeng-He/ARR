import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ARR.settings")
import datetime
from Desktop.models import *

def baja(r):
	r.delete()

def modif(r,campo,nuevo):
	setattr(r,campo,nuevo)
	r.save()

def alta(o,**kw):
	for x,i in kw.items():
		setattr(o,x,i)
	try:
		o.save()
	except Exception, e:
		raise e

def altaReo(**kw):
	r=Reo()
	if ('nombre' in kw) and ('apellido' in kw) and ('direccion' in kw) and ('edad' in kw) and ('dni' in kw) and ('tiempo_condena' in kw) and ('fecha_ingreso' in kw) and ('id_huella' in kw) and ('calabozo' in kw):
		if (isinstance(kw['nombre'],str)) and (isinstance(kw['apellido'],str)) and (isinstance(kw['direccion'],str)) and (isinstance(kw['edad'],int)) and (isinstance(kw['dni'],int)) and (isinstance(kw['tiempo_condena'],str)) and (isinstance(kw['fecha_ingreso'],datetime.date)) and (isinstance(kw['id_huella'],int)) and (isinstance(kw['calabozo'],Calabozo)):
			try:
				alta(r,**kw)
				return (r)
			except Exception:
				return ('Sali')
			return
	return False

def busquedaReoDNI(dni):
	return (Reo.objects.filter(dni=dni))

def busquedaReoHuella(id_h):
	return (Reo.objects.filter(id_huella=id_h))

# def altaAdministrativo(**kw):
# 	pass

#main.altaReo(nombre='Juan',apellido='Fulanito',direccion='Calle Falsa 123',edad=41,dni=37183012,tiempo_condena='14 anios',fecha_ingreso=main.datetime.date(2013,1,1),id_huella=2,calabozo=c)