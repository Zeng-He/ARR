import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ARR.settings")

from Desktop import models

p=Persona()
p.nombre=raw_input('ingrese nombre')
p.apellido=raw_input('ingrese apellido')
p.save()