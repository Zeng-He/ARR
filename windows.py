from PyQt4.QtCore import QUrl, SIGNAL
from PyQt4.QtGui import QApplication
from PyQt4.QtWebKit import QWebPage, QWebView, QWebSettings

import sys
import json
import main
import datetime

class JSListener(object):
	py_calls = {}

def listen_js(fn):
	JSListener.py_calls[fn.__name__] = fn
	return fn

class SimpleWindow(QWebView):
	
	def __init__(self, index = "index.html", allow_js = True, developer_tools=True):
		QWebView.__init__(self)
		self.load(QUrl(index))
		
		self.connect(self,
					 SIGNAL("titleChanged (const QString&)"),
					 self.__handle_js_call)
					 
		self.loadFinished.connect(self.__loaded)
		
		self.javascriptEnabled(allow_js)
		self.developerExtrasEnabled(developer_tools)
		
		self.show()
		
	
	def javascriptEnabled(self, enabled):
		self.settings()\
		.setAttribute(QWebSettings.JavascriptEnabled, enabled)

	def developerExtrasEnabled(self, enabled):
		self.settings()\
		.setAttribute(QWebSettings.DeveloperExtrasEnabled, enabled)

	def __handle_js_call(self, js_call_data):
		try:
			js_call_data = json.loads(str(js_call_data))
		except:
			js_call_data = None

		if js_call_data:
			returned = JSListener.py_calls[js_call_data['name']](self, *js_call_data['args'])
			self.evaluateJavaScript("PyAnswer(%s, %s);" % (json.dumps(js_call_data['callback_id']), json.dumps(returned)))
	
	def __loaded(self):
		with open("js/webcat.js","r") as wc:
			self.evaluateJavaScript(wc.read())
	
	def evaluateJavaScript(self, script):
		return self.page().mainFrame().evaluateJavaScript(script)

	def toString(self,obj):
		salida=[]
		if isinstance(obj,main.Reo):
			attr=['nombre','apellido','direccion','edad','dni','tiempo_condena','fecha_ingreso','id_huella','calabozo_id']
			for x in attr:
				salida.append(str(getattr(obj,x)))
		if isinstance(obj,main.Efectivo):
			attr=['nombre','apellido','direccion','edad','dni','num_placa','fecha_ingreso','cargo','sueldo','es_jefe','tarea','horario_patrull']
			for x in attr:
				if x=='es_jefe':
					a=getattr(obj,x)
					if isinstance(a,main.Persona):
						salida.append(str(a.dni))
					else:
						salida.append('')
				else:
					salida.append(str(getattr(obj,x)))
			return(salida)
		if isinstance(obj,main.Administrativo):
			attr=['nombre','apellido','direccion','edad','dni','num_placa','fecha_ingreso','cargo','sueldo','es_jefe','tarea','cant_horas']
			for x in attr:
				if x=='es_jefe':
					a=getattr(obj,x)
					if isinstance(a,main.Persona):
						salida.append(str(a.dni))
					else:
						salida.append('')
				else:
					salida.append(str(getattr(obj,x)))
		if isinstance (obj,main.Antecedentes):
			attr=['antecedente','condena']
			for x in attr:
				salida.append(str(getattr(obj,x)))
		return(salida)

	# Altas
	@listen_js
	def altaCalabozoInterf(self,tipo,estado):
		try:
			main.altaCalabozo(tipo=str(tipo), estado=str(estado))
			return('Creacion exitosa')
		except Exception, e:
			return('Error')

	@listen_js
	def altaReoInterf(self, nombre, apellido, direccion, edad, dni, tiempo_condena, fecha_ingreso, id_huella, id_calabozo):
		fec=fecha_ingreso.split('-')
		try:
			fecha_ingreso=datetime.date(int(fec[0]),int(fec[1]),int(fec[2]))
		except Exception,e:
			return False
		try:
			main.altaReo(nombre=nombre, apellido=apellido, direccion=direccion, edad=edad, dni=dni, tiempo_condena=tiempo_condena, fecha_ingreso=fecha_ingreso, id_huella=id_huella, calabozo=main.Calabozo.objects.get(pk=id_calabozo)) 
			return ("Reo almacenado exitosamente")
		except Exception,e:
			return False

	@listen_js
	def altaAntecedenteInterf(self, antecedente, condena, dni):
		try:
			main.altaAntecedente(antecedente=antecedente,condena=condena,reo=main.Reo.objects.get(dni=dni))
			return ("Antecedente almacenado exitosamente")
		except Exception,e:
			raise e
			return False

	@listen_js
	def altaEfectivoInterf(self,nombre,apellido,direccion,edad,dni,num_placa,fecha_ingreso,cargo,sueldo,id_es_jefe,tarea,horario_patrull):
		fec=fecha_ingreso.split('-')
		try:
			fecha_ingreso=datetime.date(int(fec[0]),int(fec[1]),int(fec[2]))
		except Exception,e:
			return False
		if id_es_jefe == 0:
			try:
				main.altaEfectivo(nombre=nombre,apellido=apellido,direccion=direccion,edad=edad,dni=dni,num_placa=num_placa,fecha_ingreso=fecha_ingreso,cargo=cargo,sueldo=sueldo,es_jefe=0,tarea=tarea,horario_patrull=horario_patrull)
				return ("Datos efectivo almacenado exitosamente")
			except Exception,e:
				return False
		else:
			try:
				main.altaEfectivo(nombre=nombre,apellido=apellido,direccion=direccion,edad=edad,dni=dni,num_placa=num_placa,fecha_ingreso=fecha_ingreso,cargo=cargo,sueldo=sueldo,es_jefe=main.Policia.objects.get(dni=id_es_jefe),tarea=tarea,horario_patrull=horario_patrull)
				return ("Datos efectivo almacenado exitosamente")
			except Exception,e:
				return False

	@listen_js
	def altaArticuloInterf(self, nombre, estado, tipo):
		try:
			main.altaArticulo(nombre=nombre,estado=estado,tipo=tipo)
			return ("Articulo almacenado exitosamente")
		except Exception:
			return ("Error, verifique campos")

	@listen_js
	def altaAdministrativoInterf(self,nombre,apellido,direccion,edad,dni,num_placa,fecha_ingreso,cargo,sueldo,id_es_jefe,tarea,cant_horas):
		fec=fecha_ingreso.split('-')
		try:
			fecha_ingreso=datetime.date(int(fec[0]),int(fec[1]),int(fec[2]))
		except Exception,e:
			return False
		if id_es_jefe == 0:
			try:
				main.altaAdministrativo(nombre=nombre,apellido=apellido,direccion=direccion,edad=edad,dni=dni,num_placa=num_placa,fecha_ingreso=fecha_ingreso,cargo=cargo,sueldo=sueldo,es_jefe=0,tarea=tarea,cant_horas=cant_horas)
				return ("Datos administrativo almacenado exitosamente")
			except Exception,e:
				return False
		else:
			try:
				main.altaAdministrativo(nombre=nombre,apellido=apellido,direccion=direccion,edad=edad,dni=dni,num_placa=num_placa,fecha_ingreso=fecha_ingreso,cargo=cargo,sueldo=sueldo,es_jefe=main.Policia.objects.get(dni=id_es_jefe),tarea=tarea,cant_horas=cant_horas)
				return ("Datos administrativo almacenado exitosamente")
			except Exception,e:
				return False

	@listen_js
	def altaArmamentoInterf(self,nombre,estado,tipo_municion,codigo):
		try:
			main.altaArmamento(nombre=nombre,estado=estado,tipo_municion=tipo_municion,codigo=codigo)
			return ("Articulo almacenado exitosamente")
		except Exception:
			return ("Error, verifique campos")

	@listen_js
	def altaMunicionInterf(self,nombre,estado,tipo,cantidad):
		try:
			main.altaMunicion(nombre=nombre,estado=estado,tipo=tipo,cantidad=cantidad)
			return ("Municion almacenado exitosamente")
		except Exception:
			return ("Error, verifique campos")

	@listen_js
	def altaVehiculoInterf(self,nombre,estado,marca,modelo,capacidad):
		try:
			main.altaVehiculo(nombre=nombre,estado=estado,marca=marca,modelo=modelo,capacidad=capacidad)
			return ("Articulo almacenado exitosamente")
		except Exception:
			return ("Error, verifique campos")

	# Busquedas

	@listen_js
	def buscarAdministrativoInterf(self, valor):
		if isinstance(valor,int):
			try:
				adm=main.busquedaAdmin(valor)
			except Exception:
				return False
		else:
			return False
		try:
			returned=self.toString(adm[0])
		except Exception,e:
			raise e
			return False
		return (returned)

	@listen_js
	def buscarArticulos(self):
		if isinstance(valor,int):
			art=main.busquedaArticulo(valor)
		else:
			return str("Error, verifique los valor de la busqueda")
		try:
			returned=toString(art)
		except Exception:
			return (str('Articulos no encontrado.'))
		return (returned)

	@listen_js
	def buscarReoInterf(self, valor, op):
		if isinstance(valor,int):
			if(op==0):
				try:
					id_h=main.obtenerHuella(a)
					reo = main.busquedaReoHuella(id_h)
				except Exception:
					return False
			else:
				try:
					reo = main.busquedaReoDNI(valor)
				except Exception:
					return False
		else:
			return False
		try:
			returned = self.toString(reo[0])
		except Exception,e:
			return False
		return(returned)

	@listen_js
	def buscarEfectivoInterf(self, valor):
		if isinstance(valor,int):
			try:
				efec=main.buscarEfectivo(valor)
			except Exception,e:
				return False
		else:
			return False
		try:
			returned=self.toString(efec[0])
		except Exception,e:
			return False
		return (returned)
	
	@listen_js
	def buscarTrasladoInterf(self, valor, op):
		if isinstance(valor,int):
			if(op==0):
				reo = main.busquedaReoHuella(valor)
			else:
				reo = main.busquedaReoDNI(valor)
		else:
			return str("Error, verifique los valor de la busqueda")
		try:
			t=main.buscarTraslado(reo.pk)
			returned=toString(t)
		except Exception:
			return('Traslado no encontrado.')
		return (returned)

	@listen_js
	def buscarAntecedentesInterf(self, valor, op=1):
		returned=[]
		if isinstance(valor,int):
			if op:
				try:
					reo = main.busquedaReoDNI(valor)
				except Exception:
					return False
			else:
				try:
					id_h=main.obtenerHuella(a)
					reo = main.busquedaReoHuella(id_h)
				except Exception:
					return False
		else:
			return False
		try:
			antecedentes=main.buscarAntecedentes(reo[0].pk)
			for unAntec in antecedentes:
				returned.append(self.toString(unAntec))
			return (returned)
		except Exception,e:
			raise e
			return False
	
	@listen_js
	def buscarArmamento(self,valor):
		if isinstance(valor,int):
			art=main.busquedaArmamento(valor)
		else:
			return str("Error, verifique los valor de la busqueda")
		try:
			returned=toString(art)
		except Exception:
			return (str('Armamento no encontrado.'))
		return (returned)

	@listen_js
	def buscarMunicion(self,valor):
		if isinstance(valor,int):
			art=main.busquedaMunicion(valor)
		else:
			return str("Error, verifique los valor de la busqueda")
		try:
			returned=toString(art)
		except Exception:
			return (str('Municion no encontrada.'))
		return (returned)

	@listen_js
	def buscarVehiculo(self,valor):
		if isinstance(valor,int):
			art=main.busquedaVehiculo(valor)
		else:
			return str("Error, verifique los valor de la busqueda")
		try:
			returned=toString(art)
		except Exception:
			return (str('Vehiculo no encontrado.'))
		return (returned)

	# Bajas

	@listen_js
	def bajaAntecedenteInterf(self,idO):
		try:
			main.baja(main.Antecedentes.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaEfectivoInterf(self,dni):
		try:
			main.baja(main.Efectivo.objects.filter(dni=dni))
			return('Eliminacion exitosa.')
		except:
			return False

	@listen_js
	def bajaReoInterf(self,dni):
		try:
			main.baja(main.Reo.objects.filter(dni=dni))
			return('Eliminacion exitosa.')
		except Exception,e:
			return False

	@listen_js
	def bajaArticuloInterf(self,idO):
		try:
			main.baja(main.Articulos.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaAdministrativoInterf(self,dni):
		try:
			main.baja(main.Administrativo.objects.filter(dni=dni))
			return('Eliminacion exitosa.')
		except Exception,e:
			return False

	@listen_js
	def bajaCalabozoInterf(self,idO):
		try:
			main.baja(main.Calabozo.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaArmamentoInterf(self,idO):
		try:
			main.baja(main.Armamento.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaMunicionInterf(self,idO):
		try:
			main.baja(main.Municion.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaVehiculoInterf(self,idO):
		try:
			main.baja(main.Vehiculo.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	#Modificaciones

	@listen_js
	def modifReoInterf(self,nombre,apellido,direccion,edad,dni,tiempo_condena,fecha_ingreso,id_huella,id_calabozo):
		fec=fecha_ingreso.split('-')
		try:
			fecha_ingreso=datetime.date(int(fec[0]),int(fec[1]),int(fec[2]))
		except Exception,e:
			return False
		try:
			r=main.Reo.objects.get(dni=dni)
			main.modifReo(r,nombre=nombre, apellido=apellido, direccion=direccion, edad=edad, dni=dni, tiempo_condena=tiempo_condena, fecha_ingreso=fecha_ingreso, id_huella=id_huella, calabozo=main.Calabozo.objects.get(pk=id_calabozo)) 
			return ("Datos del Reo modificados exitosamente")
		except Exception,e:
			raise e
			return False

	@listen_js
	def modifEfectivoInterf(self,nom,ap,direc,edad,dni,plac,fecha_ingreso,cargo,sueldo,jefe,tarea,hor):
		fec=fecha_ingreso.split('-')
		try:
			fecha_ingreso=datetime.date(int(fec[0]),int(fec[1]),int(fec[2]))
		except Exception,e:
			return False
		if jefe == 0:
			try:
				r=main.Efectivo.objects.get(dni=dni)
				main.modifEfectivo(r,nombre=nom,apellido=ap,direccion=direc,edad=edad,dni=dni,num_placa=plac,fecha_ingreso=fecha_ingreso,cargo=cargo,sueldo=sueldo,es_jefe=0,tarea=tarea,horario_patrull=hor) 
				return ("Datos del Reo modificados exitosamente")
			except Exception,e:
				raise e
				return False
		else:
			try:
				r=main.Efectivo.objects.get(dni=dni)
				main.modifEfectivo(r,nombre=nom,apellido=ap,direccion=direc,edad=edad,dni=dni,num_placa=plac,fecha_ingreso=fecha_ingreso,cargo=cargo,sueldo=sueldo,es_jefe=main.Policia.objects.get(dni=jefe),tarea=tarea,horario_patrull=hor) 
				return ("Datos del Reo modificados exitosamente")
			except Exception,e:
				raise e
				return False

	@listen_js
	def modifAdministrativoInterf(self,nom,ap,direc,edad,dni,plac,fecha_ingreso,cargo,sueldo,jefe,tarea,hor):
		fec=fecha_ingreso.split('-')
		try:
			fecha_ingreso=datetime.date(int(fec[0]),int(fec[1]),int(fec[2]))
		except Exception,e:
			return False
		if jefe == 0:
			try:
				r=main.Administrativo.objects.get(dni=dni)
				main.modifAdmin(r,nombre=nom,apellido=ap,direccion=direc,edad=edad,dni=dni,num_placa=plac,fecha_ingreso=fecha_ingreso,cargo=cargo,sueldo=sueldo,es_jefe=0,tarea=tarea,vant_horas=hor) 
				return ("Datos del Reo modificados exitosamente")
			except Exception,e:
				raise e
				return False
		else:
			try:
				r=main.Administrativo.objects.get(dni=dni)
				main.modifAdmin(r,nombre=nom,apellido=ap,direccion=direc,edad=edad,dni=dni,num_placa=plac,fecha_ingreso=fecha_ingreso,cargo=cargo,sueldo=sueldo,es_jefe=main.Policia.objects.get(dni=jefe),tarea=tarea,cant_horas=hor) 
				return ("Datos del Reo modificados exitosamente")
			except Exception,e:
				raise e
				return False

	@listen_js
	def regHuella(self):
		try:
			returned=main.regHuella(a)
			return(returned)
		except Exception, e:
			return(1) # <------- FALSE SOLO PARA PRUEBAS
		

a=main.Huella2.Controlador()
def start_app(window_class, *args, **kwargs):
	app = QApplication(sys.argv)
	window = window_class(*args, **kwargs)
	a.inicio()
	return app.exec_()


if __name__ == "__main__":
	start_app(SimpleWindow)


	
# def realizarTrasladoInterf(self, descripcion, responsable, fecha, id_reo):
# 	try:
# 		b = realizarTraslado(descripcion,responsable,fecha,Reo.objects.get(pk=id_reo))
# 		return str("Traslado almacenado exitosamente")
# 	except Exception:
# 		return str("Error, verifique campos")	

# def modificarEfectivoInterf(self, **kw):
# 	try:
# 		d = modificarEfectivo(**kw)
# 		return str("Datos del Efectivo modificados exitosamente")
# 	except Exception:
# 		return str("Error, verifique campos")

# def bajaEfectivoInterf(self, valor):
# 	if isinstance(valor,int):
# 		efectivo = busquedaReoDNI(valor)
# 	else:
# 		return str("Error, verifique los valor de la busqueda")
# 	try:
# 		baja(efectivo)
# 		return ("El Efectivo ha sido dado de baja correctamente")
# 	except Exception:
# 		return ("Error, verifique los valores de la busqueda")

