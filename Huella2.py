import sys
import serial
import threading
import time

ocupado = False;

class Controlador():
	serialOcupado = False; #indica el estado del puerto para que el hilo no haga cagadas

	def registrarhuella(self,idh):
		if(not self.s.isOpen()):
			self.s = serial.Serial(0, 115200);# comentar
		print("Funcion registrarhuella");#comentar
		print("ID: ",idh);#comentar
		self.serialOcupado = True; ocupado = True;
		self.s.timeout = 1;
		#self.finHilo();
		self.s.flushInput();
		self.s.write(idh);
		self.recibido = self.s.read(10);
		#if len(self.recibido)!=0:
		#	print "RECIBIDO: " + self.recibido
		#else:
		#	print "TIMEOUT Sin conexion";
		#--------------------------------
		self.s.flushInput();
		self.s.timeout = 5;
		self.s.write('E');
		#--------------------------------
		if(self.hilo.isAlive()):
			print"El hilo esta corriendo";
		else:
			print"El hilo esta Parado";
		#--------------------------------
		self.recibido2 = self.s.read(40);
		if len(self.recibido2)!=0:
			print "RECIBIDO: " + self.recibido2
			print "Registrado correctamente"
			return True
		else:
			print "NO Registro huella";
			raise Exception
		#--------------------------------
		self.s.flushInput();
		self.serialOcupado = False; ocupado = False;
		#self.finHilo();
		#self.comenzarHilo();
		#self.s.close();# comentar

	def obtenerid(self):
		#self.finHilo();
		self.serialOcupado = True;
		self.s.write('I');
		self.recibido = self.s.read(50);
		if len(self.recibido)!=0:
			print "RECIBIDO: " + self.recibido
			print "Id obtenido y enviado"
			return (int(self.recibido[-5:-1]))
		else:
			print "TIMEOUT Falla Sin conexion";
			return False
		self.serialOcupado = False;
		#self.comenzarHilo();

	def funcionHilo(self):
		print ("Comezando A correr");
		while(self.corriendo): #mientras el hilo viva
			time.sleep(3); #cada 25 segundos
			print "espera del hilo ";
			#if(not self.serialOcupado): #si el puerto en serie no esta ocupado
			if(not ocupado):
				if(not self.s.isOpen()):
					self.s = serial.Serial(0, 115200);# comentar
				self.s.timeout = 1;
				self.s.flush();
				self.s.write('A'); #mantenemos con vida al aparato
				print("Ping");
				#self.s.close();# comentar

	def funcionTimer(self):
		if(not self.serialOcupado): #si el puerto en serie no esta ocupado
			self.s.write('A'); #mantenemos con vida al aparato
			print("Ping");

	def comenzarHilo(self):
		self.corriendo = True; #se lo pone en falso para hacer terminar el hilo
		#self.hilo = threading.Timer(10, self.funcionTimer);
		#args=[s,10];
		self.hilo = threading.Thread(target=self.funcionHilo); #instanciamos un hilo y le decimos que funcion va a ser la concurrente
		self.hilo.start(); #le damos el ok para que empiece

	def finHilo(self):
		self.corriendo = False; #hacemos que el hilo termine solo
		#self.hilo.cancel();
		self.hilo.join() #y lo juntamos con el hilo principal del programa

	def inicio(self):
		print "============Conectando sensores==========="
		try:
			self.s = serial.Serial(0, 115200)
			self.s.timeout=5;
		except serial.SerialException:
			sys.stderr.write("Error al abrir puerto (%s)\n" % str(0))
		# 	sys.exit(1)
		# print "Puerto (%d): %s" % (0,self.s.portstr)
		# self.finComunicacion();
		# self.comenzarHilo();

	def finComunicacion(self):
		self.s.close();