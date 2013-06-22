from PyQt4.QtCore import QUrl, SIGNAL
from PyQt4.QtGui import QApplication
from PyQt4.QtWebKit import QWebPage, QWebView, QWebSettings

import sys
import json
import main

from datetime import datetime

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
		try:
			c = altaReo(nombre, apellido, direccion, edad, dni, tiempo_condena, fecha_ingreso, id_huella, Calabozo.objects.get(id_calabozo)) 
			return str("Datos Reo almacenado exitosamente")
		except Exception:
			return str("Error, verifique campos")

	# Fin Altas

def start_app(window_class, *args, **kwargs):
	app = QApplication(sys.argv)
	window = window_class(*args, **kwargs)
	return app.exec_()


if __name__ == "__main__":
	start_app(SimpleWindow)

# def altaAntecedenteInterf(self, antecedente, condena, id_reo):
# 	try:
# 		a = altaAntecedente(antecedente,condena,Reo.objects.get(pk=id_reo))
# 		return str("Antecedente almacenado exitosamente")
# 	except Exception:
# 		return str("Error, verifique campos")

# def buscarAntecedentesInterf(self, valor, op):
# 	if isinstance(valor,int):
# 		if(op=0):
# 			reo = busquedaReoHuella(valor)
# 		else:
# 			reo = busquedaReoDNI(valor)
# 	else:
# 		return str("Error, verifique los valor de la busqueda")
# 	return (buscarAntecedentes(reo))
	
# def realizarTrasladoInterf(self, descripcion, responsable, fecha, id_reo):
# 	try:
# 		b = realizarTraslado(descripcion,responsable,fecha,Reo.objects.get(pk=id_reo))
# 		return str("Traslado almacenado exitosamente")
# 	except Exception:
# 		return str("Error, verifique campos")	

# def buscarTrasladoInterf(self, valor, op):
# 	if isinstance(valor,int):
# 		if(op=0):
# 			reo = busquedaReoHuella(valor)
# 		else:
# 			reo = busquedaReoDNI(valor)
# 	else:
# 		return str("Error, verifique los valor de la busqueda")
# 	return (buscarTraslado(reo))

# def altaEfectivoInterf(self, nombre, apellido, direccion, edad, dni, num_placa, fecha_ingreso, cargo, sueldo, id_es_jefe, tarea, horario_patrull):
# 	try:
# 		c = altaEfectivo(nombre, apellido, direccion, edad, dni, num_placa, fecha_ingreso, cargo, sueldo, Policia.objects.get(pk=id_es_jefe), tarea, horario_patrull)
# 		return str("Datos Efectivo almacenado exitosamente")
# 	except Exception:
# 		return str("Error, verifique campos")

# def modificarEfectivoInterf(self, **kw):
# 	try:
# 		d = modificarEfectivo(**kw)
# 		return str("Datos del Efectivo modificados exitosamente")
# 	except Exception:
# 		return str("Error, verifique campos")

# def buscarEfectivoInterf(self, valor):
# 	if isinstance(valor,int):
# 		efectivo = busquedaReoDNI(valor)
# 	else:
# 		return str("Error, verifique los valor de la busqueda")
# 	return (buscarEfectivo(efectivo))

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

# def buscarReoInterf(self, valor, op):
# 	if isinstance(valor,int):
# 		if(op=0):
# 			reo = busquedaReoHuella(valor)
# 		else:
# 			reo = busquedaReoDNI(valor)
# 	else:
# 		return str("Error, verifique los valor de la busqueda")
# 	#FALTA DEFINIR LA FUNCION TOSTRING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# 	returned = toString(Reo.objects.get(reo))
# 	return(returned)

# def altaArticuloInterf(self, nombre, estado, tipo):
# 	try:
# 		a = altaArticulo(nombre,estado,tipo)
# 		return str("Articulo almacenado exitosamente")
# 	except Exception:
# 		return str("Error, verifique campos")	