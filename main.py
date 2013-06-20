import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ARR.settings")
import datetime
from Desktop.models import *

def altaAntecedente(**kw):
	error = False
	if (("antecedente" in kw)and("condena" in kw)and("reo" in kw)):
		if (not(isinstance(kw['antecedente'],str))):
			error=True
		elif (not(isinstance(kw['condena'],str))):
			error=True
		elif (not(isinstance(kw['reo'],Reo))):
			error=True
	else:
		error=True

	if(error):
		return False

	a = Antecedentes()
	try:
		alta(a,**kw)
		return(a)
	except Exception, e:
		return False

def buscarAntecedentes(idReo):
	return(Antecedentes.objects.filter(Reo_id=idReo))

def realizarTraslado(**kw):
	a = Traslados()
	if (("descripcion" in kw)and("responsable" in kw)and("fecha" in kw)and("reo" in kw)):
		if((isinstance(kw["descripcion"],str))and(isinstance(kw["responsable"],Efectivo))and(isinstance(kw["fecha"],datetime.date))and(isinstance(kw["reo"],Reo))):
			try:
				alta(a,**kw)
			except Exception:
				return False
		else:
			False
	else:
		False

def buscarTraslado(idReo):
	return(Traslados.objects.filter(Reo_id=idReo))

def altaEfectivo(**kw):
	a = Efectivo()
	if(('nombre' in kw)and('apellido' in kw)and('direccion' in kw)and('edad' in kw)and('dni' in kw)and("num_placa" in kw)and("fecha_ingreso" in kw)and("cargo" in kw)and("sueldo" in kw)and("es_jefe" in kw)and("tarea" in kw)and("horario_patrull" in kw)):
		if((isinstance(kw['nombre'],str))and(isinstance(kw['apellido'],str))and(isinstance(kw['direccion'],str))and(isinstance(kw['edad'],int))and(isinstance(kw['dni'],int))and(isinstance(kw["num_placa"],int))and(isinstance(kw["fecha_ingreso"],datetime.date))and(isinstance(kw["cargo"],str))and(isinstance(kw["saldo"],float))and(isinstance(kw["es_jefe"],Policia))and(isinstance(kw["tarea"],str))and(isinstance(kw["horario_patrull"],str))):
			try:
				alta(a,**kw)			
			except Exception:
					return False
	return False

def modificarEfectivo(r,**kw):
	error = False
	if(("nombre" in kw):
		if not(isinstance(kw['nombre'],str)):
			error=True
	if(("apellido" in kw):
		if not(isinstance(kw['apellido'],str)):
			error=True
	if(("direccion" in kw):
		if not(isinstance(kw['direccion'],str)):
			error=True
	if(("edad" in kw):
		if not(isinstance(kw['edad'],int)):
			error=True
	if(("dni" in kw):
		if not(isinstance(kw['dni'],int)):
			error=True
	if(("num_placa" in kw):
		if not(isinstance(kw['num_placa'],int)):
			error=True
	if(("fecha_ingreso" in kw):
		if not(isinstance(kw['fecha_ingreso'],datetime.date)):
			error=True
	if(("cargo" in kw):
		if not(isinstance(kw['cargo'],str)):
			error=True
	if(("sueldo" in kw):
		if not(isinstance(kw['sueldo'],float)):
			error=True
	if(("es_jefe" in kw):
		if not(isinstance(kw['es_jefe'],Policia)):
			error=True
	if(("tarea" in kw):
		if not(isinstance(kw['tarea'],str)):
			error=True
	if(("horario_patrull" in kw):
		if not(isinstance(kw['horario_patrull'],str)):
			error=True	
	if(error):
		return False
	else:
		modificar(r,**kw)

def buscarEfectivo(idEfe):
	return(Efectivo.objects.filter(Efectivo_id=idEfe))

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

def altaArticulo(**kw):
	a = Articulos
	if(("nombre" in kw)and("estado" in kw)and("tipo" in kw)):
		if((isinstance(kw("nombre"),str))and(isinstance(kw("estado"),str))and(isinstance(kw("tipo"),str))):
			try:
				alta(a,**kw)
			except Exception:
				return False
	return False

def buscarArticulo(idAr):
	return(Articulos.objects.filter(Articulos=idAr))

def modificacionArticulo(r,**kw):
	error = False
	if(("nombre" in kw):
		if not(isinstance(kw['nombre'],str)):
			error=True
	if(("estado" in kw):
		if not(isinstance(kw['apellido'],str)):
			error=True
	if(("tipo" in kw):
		if not(isinstance(kw['tipo'],str)):
			error=True
	if (error):
		return False
	else:
		modificar(r,**kw)

def AsignacionEquipamiento(**kw):
	a = Asignasiones()
	if(("equipamiento" in kw)and("policia" in kw)and("asignado_por" in kw)and("fecha_asignacion" in kw)):
		if((isinstance(kw("equipamiento"),Equipamiento))and(isinstance(kw("policia"),Policia))and(isinstance(kw("asignado_por"),Policia))and(isinstance(kw("fecha_asignacion"),datetime.date))):	
			try:
				alta(a,**kw)
			except Exception:
				return False
		else:
			return False
	else:
		return False

def altaVehiculo(**kw):
	a = Vehiculo
	if(("nombre" in kw)and("estado" in kw)and("marca" in kw)and("modelo" in kw)and("capacidad") in kw):
		if((isinstance(kw("nombre"),str))and(isinstance(kw("estado"),str))and(isinstance(kw("marca"),str))and(isinstance(kw("modelo"),str))and(isinstance(kw("capacidad"),int))):
			try:
				alta(a,**kw)		
			except Exception:
					return False
		else:
			return False
	return False