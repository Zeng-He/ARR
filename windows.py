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
		fec=fecha_ingreso.split('/')
		try:
			fecha_ingreso=datetime.date(int(fec[2]),int(fec[1]),int(fec[0]))
		except Exception:
			return False
		try:
			main.altaReo(nombre=nombre, apellido=apellido, direccion=direccion, edad=edad, dni=dni, tiempo_condena=tiempo_condena, fecha_ingreso=fecha_ingreso, id_huella=id_huella, calabozo=main.Calabozo.objects.get(pk=id_calabozo)) 
			return ("Reo almacenado exitosamente")
		except Exception,e:
			return False

	@listen_js
	def altaAntecedenteInterf(self, antecedente, condena, id_reo):
		try:
			main.altaAntecedente(antedente=antecedente,condena=condena,reo=main.Reo.objects.get(pk=id_reo))
			return ("Antecedente almacenado exitosamente")
		except Exception:
			return ("Error, verifique campos")

	@listen_js
	def altaEfectivoInterf(self,nombre,apellido,direccion,edad,dni,num_placa,fecha_ingreso,cargo,sueldo,id_es_jefe,tarea,horario_patrull):
		try:
			main.altaEfectivo(nombre=nombre,apellido=apellido,direccion=direccion,edad=edad,dni=dni,nom_placa=num_placa,fecha_ingreso=fecha_ingreso,cargo=cargo,sueldo=sueldo,es_jefe=main.Policia.objects.get(pk=id_es_jefe),tarea=tarea,horario_patrull=horario_patrull)
			return ("Datos Efectivo almacenado exitosamente")
		except Exception:
			return ("Error, verifique campos")

	@listen_js
	def altaArticuloInterf(self, nombre, estado, tipo):
		try:
			main.altaArticulo(nombre=nombre,estado=estado,tipo=tipo)
			return ("Articulo almacenado exitosamente")
		except Exception:
			return ("Error, verifique campos")

	@listen_js
	def altaAdministrativoInterf(self,nombre,apellido,direccion,edad,dni,num_placa,fecha_ingreso,cargo,sueldo,id_es_jefe,tarea,cant_horas):
		try:
			main.altaAdministrativo(nombre=nombre,apellido=apellido,direccion=direccion,edad=edad,dni=dni,nom_placa=num_placa,fecha_ingreso=fecha_ingreso,cargo=cargo,sueldo=sueldo,es_jefe=main.Policia.objects.get(pk=id_es_jefe),tarea=tarea,cant_horas=cant_horas)
			return ("Articulo almacenado exitosamente")
		except Exception:
			return ("Error, verifique campos")

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
			return ("Articulo almacenado exitosamente")
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
			adm=main.busquedaAdmin(valor)
		else:
			return str("Error, verifique los valor de la busqueda")
		try:
			returned=toString(adm)
		except Exception:
			return(str('Administrativo no encontrado'))
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
				# obtener ID
				reo = main.busquedaReoHuella(id_h)
			else:
				reo = main.busquedaReoDNI(valor)
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
			efec=main.busquedaEfectivo(valor)
		else:
			return str("Error, verifique los valor de la busqueda")
		try:
			returned=toString(efec)
		except Exception:
			return('Efectivo no encontrado.')
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
		if isinstance(valor,int):
			if op :
				reo = main.busquedaReoHuella(valor)
			else:
				reo = main.busquedaReoDNI(valor) # Cuando es 0reo = busquedaReoDNI(valor) # Cuando es 0
		else:
			return str("Error, verifique los valor de la busqueda")
		try:
			a=main.buscarAntecedentes(reo.pk)
			returned=toString(a)
		except Exception:
			return (str('Antecedente no encontrado.'))
		return (returned)
	
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
			baja(main.Antecedentes.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaEfectivoInterf(self,idO):
		try:
			baja(main.Efectivo.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaReoInterf(self,idO):
		try:
			baja(main.Reo.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaArticuloInterf(self,idO):
		try:
			baja(main.Articulos.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaAdministrativoInterf(self,idO):
		try:
			baja(main.Administrativo.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaCalabozoInterf(self,idO):
		try:
			baja(main.Calabozo.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaArmamentoInterf(self,idO):
		try:
			baja(main.Armamento.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaMunicionInterf(self,idO):
		try:
			baja(main.Municion.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def bajaVehiculoInterf(self,idO):
		try:
			baja(main.Vehiculo.objects.get(id0))
			return('Eliminacion exitosa.')
		except:
			return('Error.')

	@listen_js
	def regHuella(self):
		try:
			returned=main.regHuella(a)
			return(returned)
		except Exception, e:
			return(False)
		

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

# def modificarReoInterf(self, **kw):
# 	try:
# 		d = modifReo(**kw)
# 		return str("Datos del Reo modificados exitosamente")
# 	except Exception:
# 		return str("Error, verifique campos")