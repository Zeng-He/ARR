import sys
import serial
import threading
import time
class Controlador():
	serialOcupado = False; #indica el estado del puerto para que el hilo no haga cagadas
	corriendo = True; #se lo pone en falso para hacer terminar el hilo
	hilo = 0; #declaramos el puntero a la hebra de ejecucion

	def registrarhuella(self,idh):
		self.serialOcupado = True;
		self.s.write(idh);
		self.recibido = self.s.read(10);
		if len(self.recibido)!=0:
			print "RECIBIDO: " + self.recibido
		else:
			print "TIMEOUT Sin conexion";
			raise Exception
		self.s.write("E");
		self.recibido2 = self.s.read(40);
		if len(self.recibido2)!=0:
			print "RECIBIDO: " + self.recibido2
			print "Registrado correctamente"
			return True
		else:
			print "NO Registro huella";
			raise Exception
		self.serialOcupado = False;

	def obtenerid(self):
		self.serialOcupado = True;
		self.s.write("I");
		self.recibido = self.s.read(50);
		if len(self.recibido)!=0:
			print "RECIBIDO: " + self.recibido
			print "Id obtenido y enviado"
			return (int(self.recibido[-5:-1]))
		else:
			print "TIMEOUT Falla Sin conexion";
			return False
		self.serialOcupado = False;

	def funcionHilo(self):
		while(self.corriendo): #mientras el hilo viva
			time.sleep(25); #cada 25 segundos
			if(not self.serialOcupado): #si el puerto en serie no esta ocupado
				self.s.write('A'); #mantenemos con vida al aparato
				print('Pin')

	def finHilo(self):
		self.s.close()
		self.corriendo = False; #hacemos que el hilo termine solo
		self.hilo.join() #y lo juntamos con el hilo principal del programa

	def inicio(self):
		print "============Conectando sensores==========="
		try:
			self.s = serial.Serial(0, 115200)
			self.s.timeout=5;
		except serial.SerialException:
			sys.stderr.write("Error al abrir puerto (%s)\n" % str(0))
			raise serial.SerialException
		print "Puerto (%d): %s" % (0,self.s.portstr)
		self.hilo = threading.Thread(target=self.funcionHilo); #instanciamos un hilo y le decimos que funcion va a ser la concurrente
		self.hilo.start(); #le damos el ok para que empiece