import sys
import serial
import time
class Controlador():

	def registrarhuella(self,idh):
		if(not self.s.isOpen()):
			self.abrirPuerto();
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

	def obtenerid(self):
		if(not self.s.isOpen()):
				self.abrirPuerto();
		self.s.write("I");
		self.recibido = self.s.read(50);
		if len(self.recibido)!=0:
			print "RECIBIDO: " + self.recibido
			print "Id obtenido y enviado"
			return (int(self.recibido[-5:-1]))
		else:
			print "TIMEOUT Falla Sin conexion";
			return False

	def inicio(self):
		print "============Conectando sensores==========="
		self.abrirPuerto();
			
	def abrirPuerto(self):
		try:
			self.s = serial.Serial(0, 115200)
			self.s.timeout=5;
		except serial.SerialException:
			sys.stderr.write("Error al abrir puerto (%s)\n" % str(0))
		print "Puerto (%d): %s" % (0,self.s.portstr)