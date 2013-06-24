import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ARR.settings")
import datetime
from Desktop.models import *

# Basicas

def alta(o,**kw):
	for x,i in kw.items():
		setattr(o,x,i)
	try:
		o.save()
	except Exception, e:
		raise e

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

# Altas

def altaAntecedente(**kw):
	error = False
	if ((kw["antecedente"]!='')and(kw["condena"] !='')and(kw["reo"] !='')):
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

def altaEfectivo(**kw):
	a = Efectivo()
	if((kw['nombre'] !='')and(kw['apellido'] !='')and(kw['direccion'] !='')and(kw['edad'] !='')and(kw['dni'] !='')and(kw["num_placa"] !='')and(kw["fecha_ingreso"] !='')and(kw["cargo"] !='')and(kw["sueldo"] !='')and(kw["es_jefe"] !='')and(kw["tarea"] !='')and(kw["horario_patrull"] !='')):
		if((isinstance(kw['nombre'],str))and(isinstance(kw['apellido'],str))and(isinstance(kw['direccion'],str))and(isinstance(kw['edad'],int))and(isinstance(kw['dni'],int))and(isinstance(kw["num_placa"],int))and(isinstance(kw["fecha_ingreso"],datetime.date))and(isinstance(kw["cargo"],str))and(isinstance(kw["sueldo"],float))and(isinstance(kw["es_jefe"],Policia))and(isinstance(kw["tarea"],str))and(isinstance(kw["horario_patrull"],str))):
			try:
				alta(a,**kw)
				return(a)
			except Exception, e:
				raise e
		else:
			raise Exception
	else:
		raise Exception

def altaReo(**kw):
	r=Reo()
	if (kw['nombre'] !='') and (kw['apellido'] !='') and (kw['direccion'] !='') and (kw['edad'] !='') and (kw['dni'] !='') and (kw['tiempo_condena'] !='') and (kw['fecha_ingreso'] !='') and (kw['id_huella'] !='') and (kw['calabozo'] !=''):
		if (isinstance(kw['nombre'],str)) and (isinstance(kw['apellido'],str)) and (isinstance(kw['direccion'],str)) and (isinstance(kw['edad'],int)) and (isinstance(kw['dni'],int)) and (isinstance(kw['tiempo_condena'],str)) and (isinstance(kw['fecha_ingreso'],datetime.date)) and (isinstance(kw['id_huella'],int)) and (isinstance(kw['calabozo'],Calabozo)):
			try:
				alta(r,**kw)
				return (r)
			except Exception, e:
				raise e
		else:
			raise Exception
	else:
		raise Exception

def altaArticulo(**kw):
	a = Articulos
	if((kw["nombre"] !='')and(kw["estado"] !='')and(kw["tipo"] !='')):
		if((isinstance(kw("nombre"),str))and(isinstance(kw("estado"),str))and(isinstance(kw("tipo"),str))):
			try:
				alta(a,**kw)
			except Exception, e:
				raise e
		else:
			raise Exception
	else:
		raise Exception

def altaAdministrativo(**kw):
	a=Administrativo()
	if (kw['nombre'] !='') and (kw['apellido'] !='') and (kw['direccion'] !='') and (kw['edad'] !='') and (kw['dni'] !='') and (kw['num_placa'] !='') and (kw['fecha_ingreso'] !='') and (kw['cargo'] !='') and (kw['sueldo'] !='') and (kw['es_jefe'] !='') and (kw['tarea'] !='') and (kw['cant_horas'] !=''):
		if ((isinstance(kw['nombre'],str)) and (isinstance(kw['apellido'],str)) and (isinstance(kw['direccion'],str)) and (isinstance(kw['edad'],int)) and (isinstance(kw['dni'],int)) and (isinstance(kw['num_placa'],int)) and (isinstance(kw['fecha_ingreso'],datetime.date)) and (isinstance(kw['cargo'],str)) and (isinstance(kw['sueldo'],float)) and (isinstance(kw['es_jefe'],Policia)) and (isinstance(kw['tarea'],str)) and (isinstance(kw['cant_horas'],int))):
			try:
				alta(a,**kw)
			except Exception,e:
				raise e
		else:
			raise Exception
	else:
		raise Exception

def altaCalabozo(**kw):
	c=Calabozo()
	if ('tipo' !='') and ('estado' != ''):
		if (isinstance(kw['tipo'],str)) and (isinstance(kw['estado'],str)):
			try:
				alta(c,**kw)
			except Exception,e:
				raise e
		else:
			raise Exception
	else:		
		raise Exception
	
def altaArmamento(**kw):
	a=Armamento()
	if (kw['nombre'] !='') and (kw['estado'] !='') and (kw['tipo_municion'] !='') and (kw['codigo'] !=''):
		if (isinstance(kw['nombre'],str)) and (isinstance(kw['estado'],str)) and (isinstance(kw['tipo_municion'],str)) and (isinstance(kw['codigo'],str)):
			try:
				alta(a,**kw)
			except Exception,e:
				raise e
		else:
			raise Exception
	else:
		raise Exception

def altaMunicion(**kw):
	m=municion()
	if (kw['nombre'] !='') and (kw['estado'] !='') and (kw['tipo'] !='') and (kw['cantidad'] !=''):
		if (isinstance(kw['nombre'],str)) and (isinstance(kw['estado'],str)) and (isinstance(kw['tipo'],str)) and (isinstance(kw['cantidad'],int)):
			try:
				alta(m,**kw)
			except Exception,e:
				raise e
		else:
			raise Exception
	else:
		raise Exception

def altaVehiculo(**kw):
	a = Vehiculo
	if((kw["nombre"] !='')and(kw["estado"] !='')and(kw["marca"] !='')and(kw["modelo"] !='')and(kw["capacidad"]) !=''):
		if((isinstance(kw("nombre"),str))and(isinstance(kw("estado"),str))and(isinstance(kw("marca"),str))and(isinstance(kw("modelo"),str))and(isinstance(kw("capacidad"),int))):
			try:
				alta(a,**kw)		
			except Exception,e:
				raise e
		else:
			raise Exception
	else:
		raise Exception

# Busquedas

def busquedaAdmin(dni):
	a=Administrativo.objects.filter(dni=dni)
	if a :
		return (a)
	else:
		raise Exception

def buscarArticulo(idAr):
	a=Articulos.objects.filter(pk=idAr)
	if a :
		return(a)
	else:
		raise Exception

def busquedaReoDNI(dni):
	r=Reo.objects.filter(dni=dni)
	if r:
		return (r)
	else:
		raise Exception

def busquedaReoHuella(id_h):
	r=Reo.objects.filter(id_huella=id_h)
	if r:
		return (r)
	else:
		raise Exception

def buscarEfectivo(dni):
	e=Efectivo.objects.filter(dni=dni)
	if e:
		return(e)
	else:
		raise Exception

def buscarTraslado(idReo):
	e=Traslados.objects.filter(Reo_id=idReo)
	if r :
		return(e)
	else:
		raise Exception

def buscarAntecedentes(idReo):
	a=Antecedentes.objects.filter(Reo_id=idReo)
	if a :
		return(a)
	else:
		raise Exception

def buscarArmamento(idAr):
	arm=Armamento.objects.filter(pk=idAr)
	if a :
		return(a)
	else:
		raise Exception

def buscarMunicion(idMu):
	arm=Municion.objects.filter(pk=idMu)
	if a :
		return(a)
	else:
		raise Exception

def buscarVehiculo(idVe):
	arm=Vehiculo.objects.filter(pk=idVe)
	if a :
		return(a)
	else:
		raise Exception

# Modificaciones

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

def modifCalab(c,**kw):
	if 'estado' in kw:
		if not(isinstance(kw['estado'],str)):
			raise Exception
	if 'tipo' in kw:
		if not(isinstance(kw['tipo'],int)):
			raise Exception
	modificar(r,**kw)
	return(str('Modificacion exitosa'))

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

#Varios

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
