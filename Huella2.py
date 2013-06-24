import sys
import serial
import threading
import time

serialOcupado = False; #indica el estado del puerto para que el hilo no haga cagadas
corriendo = True; #se lo pone en falso para hacer terminar el hilo
hilo = 0; #declaramos el puntero a la hebra de ejecución

def registrarhuella(idh):
	serialOcupado = True;
	s.write(idh);
	recibido = s.read(10);
	if len(recibido)!=0:
		print "RECIBIDO: " + recibido
	else:
		print "TIMEOUT Sin conexion";
		return False
	s.write("E");
	recibido2 = s.read(40);
	if len(recibido2)!=0:
		print "RECIBIDO: " + recibido2
		print "Registrado correctamente"
		return True
	else:
		print "NO Registro huella";
		return False
	serialOcupado = False;

def obtenerid():
	serialOcupado = True;
	s.write("I");
	recibido = s.read(50);
	if len(recibido)!=0:
		print "RECIBIDO: " + recibido
		print "Id obtenido y enviado"
		return (int(recibido[-5:-1]))
	else:
		print "TIMEOUT Falla Sin conexion";
		return False
	serialOcupado = False;

def funcionHilo():
	while(corriendo): #mientras el hilo viva
		time.sleep(25); #cada 25 segundos
		if(not serialOcupado): #si el puerto en serie no esta ocupado
			s.write('A'); #mantenemos con vida al aparato
def finHilo():
	s.close()
	corriendo = False; #hacemos que el hilo termine solo
	hilo.join() #y lo juntamos con el hilo principal del programa

def inicio():
	print "============Conectando sensores==========="
	try:
		s = serial.Serial(0, 115200)
		s.timeout=5;
	except serial.SerialException:
		sys.stderr.write("Error al abrir puerto (%s)\n" % str(0))
		sys.exit(1)
	print "Puerto (%d): %s" % (0,s.portstr)
	hilo = threading.Thread(target=funcionHilo); #instanciamos un hilo y le decimos que funcion va a ser la concurrente
	hilo.start(); #le damos el ok para que empiece  
