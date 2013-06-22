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
		raise Exception

	a = Antecedentes()
	try:
		alta(a,**kw)
		return(a)
	except Exception, e:
		raise e

def buscarAntecedentes(idReo):
	a=Antecedentes.objects.filter(Reo_id=idReo)
	if a :
		returned=[]
		for x in a:
			returned.append(x.antecedente)
		return(returned)
	else:
		return (str('Antecedente no encontrado.'))

def realizarTraslado(**kw):
	a = Traslados()
	if (("descripcion" in kw)and("responsable" in kw)and("fecha" in kw)and("reo" in kw)):
		if((isinstance(kw["descripcion"],str))and(isinstance(kw["responsable"],Efectivo))and(isinstance(kw["fecha"],datetime.date))and(isinstance(kw["reo"],Reo))):
			try:
				alta(a,**kw)
			except Exception,e:
				raise e
		else:
			raise Exception
	else:
		raise Exception

def buscarTraslado(idReo):
	r=Traslados.objects.filter(Reo_id=idReo)
	if r :
		return(str(r[0].pk))
	else:
		return('Traslado no encontrado.')

def altaEfectivo(**kw):
	a = Efectivo()
	if(('nombre' in kw)and('apellido' in kw)and('direccion' in kw)and('edad' in kw)and('dni' in kw)and("num_placa" in kw)and("fecha_ingreso" in kw)and("cargo" in kw)and("sueldo" in kw)and("es_jefe" in kw)and("tarea" in kw)and("horario_patrull" in kw)):
		if((isinstance(kw['nombre'],str))and(isinstance(kw['apellido'],str))and(isinstance(kw['direccion'],str))and(isinstance(kw['edad'],int))and(isinstance(kw['dni'],int))and(isinstance(kw["num_placa"],int))and(isinstance(kw["fecha_ingreso"],datetime.date))and(isinstance(kw["cargo"],str))and(isinstance(kw["saldo"],float))and(isinstance(kw["es_jefe"],Policia))and(isinstance(kw["tarea"],str))and(isinstance(kw["horario_patrull"],str))):
			try:
				alta(a,**kw)
				return(a)
			except Exception, e:
				raise e
	raise Exception

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
		raise Exception
	else:
		modificar(r,**kw)
		return(str('Modificacion exitosa'))

def buscarEfectivo(idEfe):
	e=Efectivo.objects.filter(Efectivo_id=idEfe)
	if e:
		return(e[0].pk)
	else:
		return('Efectivo no encontrado.')

def baja(r):
	try:
		r.delete()
		return('Baja exitosa')
	except Exception, e:
		raise e

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
			except Exception, e:
				raise e
	raise e

def modifReo(r,**kw):
	if 'nombre' in kw:
		if not(isinstance(kw['nombre'],str)):
			raise Exception
	if 'apellido' in kw:
		if not(isinstance(kw['apellido'],str)):
			raise Exception
	if 'direccion' in kw:
		if not(isinstance(kw['direccion'],str)):
			raise Exception
	if 'edad' in kw:
		if not(isinstance(kw['edad'],int)):
			raise Exception
	if 'dni' in kw:
		if not(isinstance(kw['dni'],int)):
			raise Exception
	if 'tiempo_condena' in kw:
		if not(isinstance(kw['tiempo_condena'],str)):
			raise Exception
	if 'fecha_ingreso' in kw:
		if not(isinstance(kw['fecha_ingreso'],datetime.date)):
			raise Exception
	if 'id_huella' in kw:
		if not(isinstance(kw['id_huella'],int)):
			raise Exception
	if 'calabozo' in kw:
		if not(isinstance(kw['calabozo'],Calabozo)):
			raise Exception
	modificar(r,**kw)
	return(str('Modificacion exitosa'))


def busquedaReoDNI(dni):
	r=Reo.objects.filter(dni=dni)
	if r:
		return (r[0].pk)
	else:
		return (str('Reo no encontrado.'))

def busquedaReoHuella(id_h):
	r=Reo.objects.filter(id_huella=id_h)
	if r:
		return (r[0].pk)
	else:
		return (str('Reo no encontrado.'))

def altaArticulo(**kw):
	a = Articulos
	if(("nombre" in kw)and("estado" in kw)and("tipo" in kw)):
		if((isinstance(kw("nombre"),str))and(isinstance(kw("estado"),str))and(isinstance(kw("tipo"),str))):
			try:
				alta(a,**kw)
			except Exception, e:
				raise e
	raise Exception

def altaAdministrativo(**kw):
	a=Administrativo()
	if ('nombre' in kw) and ('apellido' in kw) and ('direccion' in kw) and ('edad' in kw) and ('dni' in kw) and ('num_placa' in kw) and ('fecha_ingreso' in kw) and ('cargo' in kw) and ('sueldo' in kw) and ('es_jefe' in kw) and ('tarea' in kw) and ('cant_horas' in kw):
		if ((isinstance(kw['nombre'],str)) and (isinstance(kw['apellido'],str)) and (isinstance(kw['direccion'],str)) and (isinstance(kw['edad'],int)) and (isinstance(kw['dni'],int)) and (isinstance(kw['num_placa'],int)) and (isinstance(kw['fecha_ingreso'],datetime.date)) and (isinstance(kw['cargo'],str)) and (isinstance(kw['sueldo'],float)) and (isinstance(kw['es_jefe'],Policia)) and (isinstance(kw['tarea'],str)) and (isinstance(kw['cant_horas'],int))):
			try:
				alta(a,**kw)
			except Exception,e:
				raise e
	raise Exception

def buscarArticulo(idAr):
	a=Articulos.objects.filter(Articulos=idAr)
	if a :
		return(a[0].pk)
	else:
		return(str('Articulo no encontrado.'))

def modifAdmin(r,**kw):
	if 'nombre' in kw:
		if not(isinstance(kw['nombre'],str)):
			raise Exception
	if 'apellido' in kw:
		if not(isinstance(kw['apellido'],str)):
			raise Exception
	if 'direccion' in kw:
		if not(isinstance(kw['direccion'],str)):
			raise Exception
	if 'edad' in kw:
		if not(isinstance(kw['edad'],int)):
			raise Exception
	if 'dni' in kw:
		if not(isinstance(kw['dni'],int)):
			raise Exception
	if 'num_placa' in kw:
		if not(isinstance(kw['num_placa'],int)):
			raise Exception
	if 'fecha_ingreso' in kw:
		if not(isinstance(kw['fecha_ingreso'],datetime.date)):
			raise Exception
	if 'cargo' in kw:
		if not(isinstance(kw['cargo'],str)):
			raise Exception
	if 'sueldo' in kw:
		if not(isinstance(kw['sueldo'],float)):
			raise Exception
	if 'es_jefe' in kw:
		if not(isinstance(kw['es_jefe'],Policia)):
			raise Exception
	if 'tarea' in kw:
		if not(isinstance(kw['tarea'],str)):
			raise Exception
	if 'cant_horas' in kw:
		if not(isinstance(kw['cant_horas'],int)):
			raise Exception
	modificar(r,**kw)
	return(str('Modificacion exitosa'))

def busquedaAdmin(dni):
	a=Administrativo.objects.filter(dni=dni)
	if a :
		return (a[0].pk)
	else:
		return(str('Administrativo no encontrado'))
	
def altaCalabozo(**kw):
	c=Calabozo()
	if ('tipo' in kw) and ('estado' in kw):
		if (isinstance(kw['tipo'],str)) and (isinstance(kw['estado'],str)):
			try:
				alta(c,**kw)
			except Exception,e:
				raise e
	raise Exception

def modifCalab(c,**kw):
	if 'estado' in kw:
		if not(isinstance(kw['estado'],str)):
			raise Exception
	if 'tipo' in kw:
		if not(isinstance(kw['tipo'],int)):
			raise Exception
	modificar(r,**kw)
	return(str('Modificacion exitosa'))
	
def altaArmamento(**kw):
	a=Armamento()
	if ('nombre' in kw) and ('estado' in kw) and ('tipo_municion' in kw) and ('codigo' in kw):
		if (isinstance(kw['nombre'],str)) and (isinstance(kw['estado'],str)) and (isinstance(kw['tipo_municion'],str)) and (isinstance(kw['codigo'],str)):
			try:
				alta(a,**kw)
			except Exception,e:
				raise e
	raise Exception

def modifArmamento(a,**kw):
	if 'nombre' in kw:
		if not(isinstance(kw['nombre'],str)):
			raise Exception
	if 'estado' in kw:
		if not(isinstance(kw['estado'],str)):
			raise Exception
	if 'tipo_municion' in kw:
		if not(isinstance(kw['tipo_municion'],str)):
			raise Exception
	if 'codigo' in kw:
		if not(isinstance(kw['codigo'],str)):
			raise Exception
	modificar(a,**kw)
	return(str('Modificacion exitosa'))

def altaMunicion(**kw):
	m=municion()
	if ('nombre' in kw) and ('estado' in kw) and ('tipo' in kw) and ('cantidad' in kw):
		if (isinstance(kw['nombre'],str)) and (isinstance(kw['estado'],str)) and (isinstance(kw['tipo'],str)) and (isinstance(kw['cantidad'],int)):
			try:
				alta(m,**kw)
			except Exception,e:
				raise e
	raise Exception

def modifMuncion(m,**kw):
	if 'nombre' in kw:
		if not(isinstance(kw['nombre'],str)):
			raise Exception
	if 'estado' in kw:
		if not(isinstance(kw['estado'],str)):
			raise Exception
	if 'tipo' in kw:
		if not(isinstance(kw['tipo_municion'],str)):
			raise Exception
	if 'cantidad' in kw:
		if not(isinstance(kw['codigo'],int)):
			raise Exception
	modificar(m,**kw)
	return(str('Modificacion exitosa'))

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
		raise Exception
	else:
		modificar(r,**kw)
		return(str('Modificacion exitosa'))

def AsignacionEquipamiento(**kw):
	a = Asignasiones()
	if(("equipamiento" in kw)and("policia" in kw)and("asignado_por" in kw)and("fecha_asignacion" in kw)):
		if((isinstance(kw("equipamiento"),Equipamiento))and(isinstance(kw("policia"),Policia))and(isinstance(kw("asignado_por"),Policia))and(isinstance(kw("fecha_asignacion"),datetime.date))):	
			try:
				alta(a,**kw)
			except Exception,e:
				raise e
		else:
			raise Exception
	else:
		raise Exception

def altaVehiculo(**kw):
	a = Vehiculo
	if(("nombre" in kw)and("estado" in kw)and("marca" in kw)and("modelo" in kw)and("capacidad") in kw):
		if((isinstance(kw("nombre"),str))and(isinstance(kw("estado"),str))and(isinstance(kw("marca"),str))and(isinstance(kw("modelo"),str))and(isinstance(kw("capacidad"),int))):
			try:
				alta(a,**kw)		
			except Exception,e:
				raise e
		else:
			raise Exception
	raise Exception