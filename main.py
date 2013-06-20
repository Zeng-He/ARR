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
	if("nombre" in kw):
		if not(isinstance(kw['nombre'],str)):
			error=True
	if("apellido" in kw):
		if not(isinstance(kw['apellido'],str)):
			error=True
	if("direccion" in kw):
		if not(isinstance(kw['direccion'],str)):
			error=True
	if("edad" in kw):
		if not(isinstance(kw['edad'],int)):
			error=True
	if("dni" in kw):
		if not(isinstance(kw['dni'],int)):
			error=True
	if("num_placa" in kw):
		if not(isinstance(kw['num_placa'],int)):
			error=True
	if("fecha_ingreso" in kw):
		if not(isinstance(kw['fecha_ingreso'],datetime.date)):
			error=True
	if("cargo" in kw):
		if not(isinstance(kw['cargo'],str)):
			error=True
	if("sueldo" in kw):
		if not(isinstance(kw['sueldo'],float)):
			error=True
	if("es_jefe" in kw):
		if not(isinstance(kw['es_jefe'],Policia)):
			error=True
	if("tarea" in kw):
		if not(isinstance(kw['tarea'],str)):
			error=True
	if("horario_patrull" in kw):
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

def modificar(r,**kw):
	for x,i in kw.items():
		modif(r,x,i)

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
				return False
	return False

def instance(x,tipo):
	if isinstance(x,tipo):
		return True
	return False

def modifReo(r,**kw):
	if 'nombre' in kw:
		if not(isinstance(kw['nombre'],str)):
			return False
	if 'apellido' in kw:
		if not(isinstance(kw['apellido'],str)):
			return False
	if 'direccion' in kw:
		if not(isinstance(kw['direccion'],str)):
			return False
	if 'edad' in kw:
		if not(isinstance(kw['edad'],int)):
			return False
	if 'dni' in kw:
		if not(isinstance(kw['dni'],int)):
			return False
	if 'tiempo_condena' in kw:
		if not(isinstance(kw['tiempo_condena'],str)):
			return False
	if 'fecha_ingreso' in kw:
		if not(isinstance(kw['fecha_ingreso'],datetime.date)):
			return False
	if 'id_huella' in kw:
		if not(isinstance(kw['id_huella'],int)):
			return False
	if 'calabozo' in kw:
		if not(isinstance(kw['calabozo'],Calabozo)):
			return False
	modificar(r,**kw)


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

def altaAdministrativo(**kw):
	a=Administrativo()
	if ('nombre' in kw) and ('apellido' in kw) and ('direccion' in kw) and ('edad' in kw) and ('dni' in kw) and ('num_placa' in kw) and ('fecha_ingreso' in kw) and ('cargo' in kw) and ('sueldo' in kw) and ('es_jefe' in kw) and ('tarea' in kw) and ('cant_horas' in kw):
		if ((isinstance(kw['nombre'],str)) and (isinstance(kw['apellido'],str)) and (isinstance(kw['direccion'],str)) and (isinstance(kw['edad'],int)) and (isinstance(kw['dni'],int)) and (isinstance(kw['num_placa'],int)) and (isinstance(kw['fecha_ingreso'],datetime.date)) and (isinstance(kw['cargo'],str)) and (isinstance(kw['sueldo'],float)) and (isinstance(kw['es_jefe'],Policia)) and (isinstance(kw['tarea'],str)) and (isinstance(kw['cant_horas'],int))):
			try:
				alta(a,**kw)
				return(a)
			except Exception:
				return False
	return False

def buscarArticulo(idAr):
	return(Articulos.objects.filter(Articulos=idAr))

def modifAdmin(r,**kw):
	if 'nombre' in kw:
		if not(isinstance(kw['nombre'],str)):
			return False
	if 'apellido' in kw:
		if not(isinstance(kw['apellido'],str)):
			return False
	if 'direccion' in kw:
		if not(isinstance(kw['direccion'],str)):
			return False
	if 'edad' in kw:
		if not(isinstance(kw['edad'],int)):
			return False
	if 'dni' in kw:
		if not(isinstance(kw['dni'],int)):
			return False
	if 'num_placa' in kw:
		if not(isinstance(kw['num_placa'],int)):
			return False
	if 'fecha_ingreso' in kw:
		if not(isinstance(kw['fecha_ingreso'],datetime.date)):
			return False
	if 'cargo' in kw:
		if not(isinstance(kw['cargo'],str)):
			return False
	if 'sueldo' in kw:
		if not(isinstance(kw['sueldo'],float)):
			return False
	if 'es_jefe' in kw:
		if not(isinstance(kw['es_jefe'],Policia)):
			return False
	if 'tarea' in kw:
		if not(isinstance(kw['tarea'],str)):
			return False
	if 'cant_horas' in kw:
		if not(isinstance(kw['cant_horas'],int)):
			return False
	modificar(r,**kw)

def busquedaAdmin(dni):
	return (Administrativo.objects.filter(dni=dni))
	
def altaCalabozo(**kw):
	c=Calabozo()
	if ('tipo' in kw) and ('estado' in kw):
		if (isinstance(kw['tipo'],str)) and (isinstance(kw['estado'],str)):
			try:
				alta(c,**kw)
				return(c)
			except Exception:
				return False
	return False

def modifCalab(c,**kw):
	if 'estado' in kw:
		if not(isinstance(kw['estado'],str)):
			return False
	if 'tipo' in kw:
		if not(isinstance(kw['tipo'],int)):
			return False
	modificar(r,**kw)
	
def altaArmamento(**kw):
	a=Armamento()
	if ('nombre' in kw) and ('estado' in kw) and ('tipo_municion' in kw) and ('codigo' in kw):
		if (isinstance(kw['nombre'],str)) and (isinstance(kw['estado'],str)) and (isinstance(kw['tipo_municion'],str)) and (isinstance(kw['codigo'],str)):
			try:
				alta(a,**kw)
				return(a)
			except Exception:
				return False
	return False

def modifArmamento(a,**kw):
	if 'nombre' in kw:
		if not(isinstance(kw['nombre'],str)):
			return False
	if 'estado' in kw:
		if not(isinstance(kw['estado'],str)):
			return False
	if 'tipo_municion' in kw:
		if not(isinstance(kw['tipo_municion'],str)):
			return False
	if 'codigo' in kw:
		if not(isinstance(kw['codigo'],str)):
			return False
	modificar(a,**kw)

def altaMunicion(**kw):
	m=municion()
	if ('nombre' in kw) and ('estado' in kw) and ('tipo' in kw) and ('cantidad' in kw):
		if (isinstance(kw['nombre'],str)) and (isinstance(kw['estado'],str)) and (isinstance(kw['tipo'],str)) and (isinstance(kw['cantidad'],int)):
			try:
				alta(m,**kw)
				return(m)
			except Exception:
				return False
	return False

def modifMuncion(m,**kw):
	if 'nombre' in kw:
		if not(isinstance(kw['nombre'],str)):
			return False
	if 'estado' in kw:
		if not(isinstance(kw['estado'],str)):
			return False
	if 'tipo' in kw:
		if not(isinstance(kw['tipo_municion'],str)):
			return False
	if 'cantidad' in kw:
		if not(isinstance(kw['codigo'],int)):
			return False
	modificar(m,**kw)

def modificacionArticulo(r,**kw):
	error = False
	if("nombre" in kw):
		if not(isinstance(kw['nombre'],str)):
			error=True
	if("estado" in kw):
		if not(isinstance(kw['apellido'],str)):
			error=True
	if("tipo" in kw):
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