import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ARR.settings")
import datetime
from Desktop.models import *
import Huella2


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
	a = Antecedentes()
	if ((kw["antecedente"]!='')and(kw["condena"] !='')and(kw["reo"] !='')):
		try:
			alta(a,**kw)
			return(a)
		except Exception, e:
			raise e
	else:
		raise Exception

def altaEfectivo(**kw):
	a = Efectivo()
	if((kw['nombre'] !='')and(kw['apellido'] !='')and(kw['direccion'] !='')and(kw['edad'] !=0)and(kw['dni'] !=0)and(kw["num_placa"] !=0)and(kw["fecha_ingreso"] !='')and(kw["cargo"] !='')and(kw["sueldo"] !=0)and(kw["tarea"] !='')and(kw["horario_patrull"] !='')):
		if kw['es_jefe'] == 0:
			del kw['es_jefe']
		try:
			alta(a,**kw)
			return(a)
		except Exception, e:
			raise e
	else:
		raise Exception

def altaReo(**kw):
	r=Reo()
	if (kw['nombre'] !='') and (kw['apellido'] !='') and (kw['direccion'] !='') and (kw['edad'] !=0) and (kw['dni'] !=0) and (kw['tiempo_condena'] !='') and (kw['fecha_ingreso'] !='') and (kw['id_huella'] !=0) and (kw['calabozo'] !=0):
		try:
			alta(r,**kw)
			return (r)
		except Exception, e:
			raise e
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
	if((kw['nombre'] !='')and(kw['apellido'] !='')and(kw['direccion'] !='')and(kw['edad'] !=0)and(kw['dni'] !=0)and(kw["num_placa"] !=0)and(kw["fecha_ingreso"] !='')and(kw["cargo"] !='')and(kw["sueldo"] !=0)and(kw["tarea"] !='')and(kw["cant_horas"] !=0)):
		if kw['es_jefe']==0:
			del kw['es_jefe']
		try:
			alta(a,**kw)
		except Exception,e:
			raise e
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
	e=Traslados.objects.filter(reo_id=idReo)
	if r :
		return(e)
	else:
		raise Exception

def buscarAntecedentes(idReo):
	a=Antecedentes.objects.filter(reo_id=idReo)
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
	if (kw['nombre'] !='') and (kw['apellido'] !='') and (kw['direccion'] !='') and (kw['edad'] !=0) and (kw['dni'] !=0) and (kw['tiempo_condena'] !='') and (kw['fecha_ingreso'] !='') and (kw['id_huella'] !=0) and (kw['calabozo'] !=0):
		try:
			modificar(r,**kw)
			return(r)
		except Exception, e:
			raise e
	else:
		raise Exception

def modifEfectivo(r,**kw):
	if(kw["nombre"] !='') and (kw["apellido"] !='') and (kw["direccion"] !='') and (kw["edad"] !=0) and (kw["dni"] !=0) and (kw["num_placa"] !=0) and (kw["fecha_ingreso"] !='') and (kw["cargo"] !='') and (kw["sueldo"] !=0) and (kw["tarea"] !='') and (kw["horario_patrull"]!=''):
		if kw['es_jefe']==0:
			del kw['es_jefe']
		try:
			modificar(r,**kw)
			return r
		except Exception, e:
			raise e
	else:
		raise Exception

def modifAdmin(r,**kw):
	if(kw["nombre"] !='') and (kw["apellido"] !='') and (kw["direccion"] !='') and (kw["edad"] !=0) and (kw["dni"] !=0) and (kw["num_placa"] !=0) and (kw["fecha_ingreso"] !='') and (kw["cargo"] !='') and (kw["sueldo"] !=0) and (kw["tarea"] !='') and (kw["cant_horas"]!=0):
		if kw['es_jefe']==0:
			del kw['es_jefe']
		try:
			modificar(r,**kw)
			return r
		except Exception, e:
			raise e
	else:
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

def regHuella(obj):
	if Reo.objects.all() :
		id_h=Reo.objects.all().aggregate(models.Max('id_huella'))
		id_h=id_h.values()[0]
	else:
		id_h=0
	id_h+=1
	id_h=str(id_h).zfill(4)
	try:
		returned=obj.registrarhuella(id_h)
		return(id_h)
	except Exception, e:
		raise e

def obtenerHuella(obj):
	returned=Huella2.obtenerid(obj)
	if returned:
		return returned
	else:
		raise Exception