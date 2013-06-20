import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ARR.settings")

from Desktop.models import *

def altaAntecedente(**kw):
	error = False
	if (("antecedente" in kw)and("condena" in kw)and("reo" in kw)):
		if (not(isinstance(kw['antecedente'],str))):
			error=True
			break
		elif (not(isinstance(kw['condena'],str))):
			error=True
			break
		else (not(isinstance(kw['reo'],Reo))):
			error=True
	else:
		error=True

	if(error):
		return False

	a = Antecedentes()
	try:
		alta(a,**kw)
		return(a)
	except Exception, e:
		return False

def buscarAntecedentes(idReo):
	return(Antecedentes.objects.filter(reo_id=idReo))

#def realizarTraslado(**kw):
#	if (("descripcion" in kw)and("responsable" in kw)and("fecha" in kw)and("reo" in kw)):