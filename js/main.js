$(document).ready(function() {

	//----------Borrar--------------
	borrar=function() {
		$('input').val('')
	}
	
	//-----------REOS---------------
	$("#reos").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','');
		$("#antecedentes").attr('class','');
		$("#calabozo").attr('class','');
		$("#traslado").attr('class','');
		$("#equipamiento").attr('class','');
		$("#asignacionEquipamiento").attr('class','');
		$("#reos").attr('class','active');
		$("#reoInicio").css({'display':'inline'})
		//Buttons de Reos
		$("#reoBusqueda").css({'display':'none'});
		$("#reoAlta").css({'display':'none'});
		$("#reoModificacion").css({'display':'none'});
		$("#reoBaja").css({'display':'none'});
		$("#reoBusqueda").css({'display':'none'});
		$("#datosBajaReo").css({'display':'none'})
		$("#datosBusquedaReo").css({'display':'none'})
		//Buttons de Policias
		$("#policiaInicio").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoBusqueda").css({'display':'none'})
		$("#policiaEfectivoAlta").css({'display':'none'})
		$("#policiaEfectivoModificacion").css({'display':'none'})
		$("#formularioModificacionEfectivoPolicia").css({'display':'none'})
		$("#policiaEfectivoBaja").css({'display':'none'})
		$("#datosBajaPoliciaEfectivo").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'none'})	
		$("#policiaAdministrativoBusqueda").css({'display':'none'})
		$("#datosBusquedaAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoAlta").css({'display':'none'})
		$("#policiaAdministrativoModificacion").css({'display':'none'})
		$("#formularioModificacionAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'none'})
		$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
		//Buttons Traslado
		$("#trasladoInicio").css({'display':'none'})
		$("#formularioTraslado").css({'display':'none'})
		//Button Equipamiento
		$("#equipamientoInicio").css({'display':'none'});
		$("#articuloInicio").css({'display':'none'})
		$("#articuloBusqueda").css({'display':'none'})
		$("#datosBusquedaArticulo").css({'display':'none'})
		$("#articuloAlta").css({'display':'none'})
		$("#articuloBaja").css({'display':'none'})
		$("#datosBajaArticulo").css({'display':'none'})
		$("#articuloModificacion").css({'display':'none'})
		$("#formularioModificacionArticulo").css({'display':'none'})
		$("#municionInicio").css({'display':'none'})
		$("#municionBusqueda").css({'display':'none'})
		$("#datosBusquedaMunicion").css({'display':'none'})
		$("#municionAlta").css({'display':'none'})
		$("#municionBaja").css({'display':'none'})
		$("#datosBajaMunicion").css({'display':'none'})
		$("#municionModificacion").css({'display':'none'})
		$("#formularioModificacionMunicion").css({'display':'none'})
		$("#armamentoInicio").css({'display':'none'})
		$("#armamentoBusqueda").css({'display':'none'})
		$("#datosBusquedaArmamento").css({'display':'none'})
		$("#armamentoAlta").css({'display':'none'})
		$("#armamentoBaja").css({'display':'none'})
		$("#datosBajaArmamento").css({'display':'none'})
		$("#armamentoModificacion").css({'display':'none'})
		$("#formularioModificacionArmamento").css({'display':'none'})
		//Buttons Antecedentes
		$("#antecedentesInicio").css({'display':'none'})
		$("#busquedaAntecedente").css({'display':'none'})
		$("#datosBusquedaAntecedente").css({'display':'none'})
		$("#altaAntecedente").css({'display':'none'})
		$("#modificacionAntecedente").css({'display':'none'})
		$("#formularioModificacionAntecedente").css({'display':'none'})
		//Buttons Calabozo
		$("#calabozoInicio").css({'display':'none'})
		$("#busquedaCalabozo").css({'display':'none'})
		$("#altaCalabozo").css({'display':'none'})
		$("#bajaCalabozo").css({'display':'none'})
		$("#datosBajaCalabozo").css({'display':'none'})
		$("#modificacionCalabozo").css({'display':'none'})
		$("#formularioModificacionCalabozo").css({'display':'none'})
		borrar()
	})

	$("#buttonBuscarReo").click(function(e){
		e.preventDefault();
		$("#reoInicio").css({'display':'none'});
		$("#reoBusqueda").css({'display':'inline'});
		borrar()
	})

	$("#buttonAltaReo").click(function(e){
		e.preventDefault();
		$("#reoInicio").css({'display':'none'});
		$("#reoAlta").css({'display':'inline'});
		borrar()
	})	

	$('#buttonGuardarReoAlta').click(function(e) {
		e.preventDefault();
		nom=$('#inputNombreReoAlta').val()
		ap=$('#inputApellidoReoAlta').val()
		direc=$('#inputDirreccionReoAlta').val()
		edad=Number($('#inputEdadReoAlta').val())
		dni=Number($('#inputDniReoAlta').val())
		tiem=$('#inputTiempoCondenaReoAlta').val()
		fec=$('#inputFechaIngresoReoAlta').val()
		hue=Number($('#inputHuellaReoAlta').val())
		cal=Number($('#inputCalabozoReoAlta').val())
		PyAsync('altaReoInterf',{
			args:[nom,ap,direc,edad,dni,tiem,fec,hue,cal],
			callback: function(data) {
				if (data) {
					$('#guardarAlta span').text(data)
					$('#guardarAlta').attr('class','')
					borrar()
				}else{
					$('#guardarAlta span').text('Verifique los campos')
					$('#guardarAlta').attr('class','error')
				}
			}
		})
	})
	
	$('#buttonEliminarReoBaja').click(function(e) {
		e.preventDefault();
		dni=Number($('#dniBajaReo').text())
		PyAsync('bajaReoInterf',{
			args:[dni],
			callback: function(data) {
				if (data) {
					$('#guardarBaja span').text(data)
					$('#guardarBaja').attr('class','')
					borrar()
				}else{
					$('#guardarBaja span').text('Error')
					$('#guardarBaja').attr('class','error')
				}
			}
		})
	})

	$('#buttonGuardarReoModificacion').click(function(e) {
		e.preventDefault();
		nom=$('#nombreReoModif').val()
		ap=$('#apellidoReoModif').val()
		direc=$('#direccionReoModif').val()
		edad=Number($('#edadReoModif').val())
		dni=Number($('#dniReoModif').val())
		tiem=$('#tiempoCondenaReoModif').val()
		fec=$('#fechaIngresoReoModif').val()
		hue=Number($('#idHuellaReoModif').val())
		cal=Number($('#calabozoReoModif').val())
		PyAsync('modifReoInterf',{
			args:[nom,ap,direc,edad,dni,tiem,fec,hue,cal],
			callback: function(data) {
				if (data) {
					$('#guardarModif span').text('Reo modificado con exito')
					$('#guardarModif').attr('class','')
					borrar()
				}else{
					$('#guardarModif span').text('Verifique los campos')
					$('#guardarModif').attr('class','error')
				}
			}
		})
	})

	$("#buttonModificarReo").click(function(e){
		e.preventDefault();
		$("#reoInicio").css({'display':'none'});
		$("#reoModificacion").css({'display':'inline'});
		borrar()
	})

	$("#buttonBajaReo").click(function(e){
		e.preventDefault();
		$("#reoInicio").css({'display':'none'});
		$("#reoBaja").css({'display':'inline'});
		borrar()
	})

	$("#buttonCancelarReoBaja").click(function(e){
		e.preventDefault();
		$("#datosBajaReo").css({'display':'none'})
		$("#reoBaja").css({'display':'none'})
		$("#reoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonDatosBusquedaReo").click(function(e){
		e.preventDefault();
		huella=$('#reoBusqueda #optionsRadios1').is(':checked')
		dni=$('#reoBusqueda #optionsRadios2').is(':checked')
		if (huella==true) {
			valor='huella'
			op=0
		}else{
			valor=$('#paramBusqueda').val()
			if (valor=='') {
				$('#buscadorReo').attr('class','control-group error')
				$('#buscadorReo span').text('Campo vacio')
				return
			};
			op=1
		};
		attr=['nombre','apellido','direccion','edad','dni','tiempoCondena','fechaIngreso','idHuella','calabozo']
		PyAsync('buscarReoInterf',{
			args:[Number(valor),op],
			callback:function(data) {
				if (data){
					$('#buscadorReo').attr('class','')
					$('#buscadorReo span').text('')
					$.each(attr,function(i,l) {
						$('#'+l+'BusquedaReo').text(data[i])
					})
					$("#datosBusquedaReo").css({'display':'inline'})
				}else{
					$("#datosBusquedaReo").css({'display':'none'})
					$('#buscadorReo').attr('class','control-group error')
					$('#buscadorReo span').text("Error, verifique los valores de la busqueda")
					borrar()
				}
			}
		})
	})	

	$("#buttonDatosBusquedaModificacionReo").click(function(e){
		e.preventDefault();
		huella=$('#reoModificacion #optionsRadios1').is(':checked')
		dni=$('#reoModificacion #optionsRadios2').is(':checked')
		if (huella==true) {
			valor='huella'
			op=0
		}else{
			valor=$('#reoModificacion #paramBusqueda').val()
			if (valor=='') {
				$('#buscadorReoM').attr('class','control-group error')
				$('#buscadorReoM span').text('Campo vacio')
				return
			};
			op=1
		};
		attr=['nombre','apellido','direccion','edad','dni','tiempoCondena','fechaIngreso','idHuella','calabozo']
		PyAsync('buscarReoInterf',{
			args:[Number(valor),op],
			callback:function(data) {
				if (data){
					$('#buscadorReoM').attr('class','')
					$('#buscadorReoM span').text('')
					$.each(attr,function(i,l) {
						$('#'+l+'ReoModif').val(data[i])
					})
		 			$("#formularioModificacionReo").css({'display':'inline'})
				}else{
		 			$("#formularioModificacionReo").css({'display':'none'})
					$('#buscadorReoM').attr('class','control-group error')
					$('#buscadorReoM span').text("Error, verifique los valores de la busqueda")
					borrar()
				}
			}
		})
	})

	$("#buttonBusquedaBajaReo").click(function(e){
		e.preventDefault();
		huella=$('#reoBaja #optionsRadios1').is(':checked')
		dni=$('#reoBaja #optionsRadios2').is(':checked')
		if (huella==true) {
			valor='huella'
			op=0
		}else{
			valor=$('#buscadorReoB #paramBusqueda').val()
			if (valor=='') {
				$('#buscadorReoB').attr('class','control-group error')
				$('#buscadorReoB span').text('Campo vacio')
				return
			};
			op=1
		};
		attr=['nombre','apellido','direccion','edad','dni','tiempoCondena','fechaIngreso','idHuella','calabozo']
		PyAsync('buscarReoInterf',{
			args:[Number(valor),op],
			callback:function(data) {
				if (data){
					$('#buscadorReoB').attr('class','')
					$('#buscadorReoB span').text('')
					$.each(attr,function(i,l) {
						$('#'+l+'BajaReo').text(data[i])
					})
		 			$("#datosBajaReo").css({'display':'inline'})
				}else{
		 			$("#datosBajaReo").css({'display':'none'})
					$('#buscadorReoB').attr('class','control-group error')
					$('#buscadorReoB span').text("Error, verifique los valores de la busqueda")
					borrar()
				}
			}
		})
	})

	$("#buttonAtrasBusquedaReo").click(function(e){
		e.preventDefault();
		$("#datosBusquedaReo").css({'display':'none'})
		$("#reoBusqueda").css({'display':'none'})
		$("#reoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasReoAlta").click(function(e){
		e.preventDefault();
		$("#reoAlta").css({'display':'none'})
		$("#reoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasBusquedaModificacionReo").click(function(e){
		e.preventDefault();
		$("#reoModificacion").css({'display':'none'})
		$("#formularioModificacionReo").css({'display':'none'})
		$("#reoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasBajaReo").click(function(e){
		e.preventDefault();
		$("#reoBaja").css({'display':'none'})
		$("#datosBajaReo").css({'display':'none'})
		$("#reoInicio").css({'display':'inline'})
		borrar()
	})	

	$('#huella_button').click(function(e) {
		e.preventDefault()
		$("#capturarHuella").modal('show')
		PyAsync('regHuella',{
			args:[],
			callback:function(data) {
				if (data==false) {
					$('#huella_alta').attr('class','control-group error')
					$('#formularioAltaReo span').text('Error')
				} else{
					$('#formularioAltaReo span').text('')
					$('#huella_alta').attr('class','control-group')
					$('inputHuellaReoAlta').text(data)
				};
				$('#capturarHuella').modal('hide')
			}
		})
	})

	$('#huella_buttonM').click(function(e) {
		e.preventDefault()
		$("#capturarHuellaM").modal('show')
		PyAsync('regHuella',{
			args:[],
			callback:function(data) {
				if (data==false) {
					$('#huella_modif').attr('class','control-group error')
					$('#formularioAltaReo span').text('Error')
				} else{
					$('#formularioModificacionReo span').text('')
					$('#huella_modif').attr('class','control-group')
					$('idHuellaReoModif').text(data)
				};
				$('#capturarHuellaM').modal('hide')
			}
		})
	})

	//-----------------POLICIAS-------------------
	$("#policias").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','active');
		$("#antecedentes").attr('class','');
		$("#calabozo").attr('class','');
		$("#traslado").attr('class','');
		$("#equipamiento").attr('class','');
		$("#asignacionEquipamiento").attr('class','');
		$("#reos").attr('class','');
		$("#policiaInicio").css({'display':'inline'})
		//Buttons de Reos
		$("#reoInicio").css({'display':'none'})
		$("#reoBusqueda").css({'display':'none'});
		$("#reoAlta").css({'display':'none'});
		$("#reoModificacion").css({'display':'none'});
		$("#reoBaja").css({'display':'none'});
		//Buttons de Efectivos
		$("#policiaEfectivoInicio").css({'display':'none'})	
		$("#policiaEfectivoBusqueda").css({'display':'none'})
		$("#datosBusquedaEfectivoPolicia").css({'display':'none'})
		$("#policiaEfectivoAlta").css({'display':'none'})
		$("#policiaEfectivoModificacion").css({'display':'none'})
		$("#formularioModificacionEfectivoPolicia").css({'display':'none'})
		$("#policiaEfectivoBaja").css({'display':'none'})
		$("#datosBajaPoliciaEfectivo").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'none'})	
		$("#policiaAdministrativoBusqueda").css({'display':'none'})
		$("#datosBusquedaAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoAlta").css({'display':'none'})
		$("#policiaAdministrativoModificacion").css({'display':'none'})
		$("#formularioModificacionAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'none'})
		$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
		//Buttons Traslado
		$("#trasladoInicio").css({'display':'none'})
		$("#formularioTraslado").css({'display':'none'})
		//Button Equipamiento
		$("#equipamientoInicio").css({'display':'none'});
		$("#articuloInicio").css({'display':'none'})
		$("#articuloBusqueda").css({'display':'none'})
		$("#datosBusquedaArticulo").css({'display':'none'})
		$("#articuloAlta").css({'display':'none'})
		$("#articuloBaja").css({'display':'none'})
		$("#datosBajaArticulo").css({'display':'none'})
		$("#articuloModificacion").css({'display':'none'})
		$("#formularioModificacionArticulo").css({'display':'none'})
		$("#municionInicio").css({'display':'none'})
		$("#municionBusqueda").css({'display':'none'})
		$("#datosBusquedaMunicion").css({'display':'none'})
		$("#municionAlta").css({'display':'none'})
		$("#municionBaja").css({'display':'none'})
		$("#datosBajaMunicion").css({'display':'none'})
		$("#municionModificacion").css({'display':'none'})
		$("#formularioModificacionMunicion").css({'display':'none'})
		$("#armamentoInicio").css({'display':'none'})
		$("#armamentoBusqueda").css({'display':'none'})
		$("#datosBusquedaArmamento").css({'display':'none'})
		$("#armamentoAlta").css({'display':'none'})
		$("#armamentoBaja").css({'display':'none'})
		$("#datosBajaArmamento").css({'display':'none'})
		$("#armamentoModificacion").css({'display':'none'})
		$("#formularioModificacionArmamento").css({'display':'none'})
		//Buttons Antecedentes
		$("#antecedentesInicio").css({'display':'none'})
		$("#busquedaAntecedente").css({'display':'none'})
		$("#datosBusquedaAntecedente").css({'display':'none'})
		$("#altaAntecedente").css({'display':'none'})
		$("#modificacionAntecedente").css({'display':'none'})
		$("#formularioModificacionAntecedente").css({'display':'none'})
		//Buttons Calabozo
		$("#calabozoInicio").css({'display':'none'})
		$("#busquedaCalabozo").css({'display':'none'})
		$("#altaCalabozo").css({'display':'none'})
		$("#bajaCalabozo").css({'display':'none'})
		$("#datosBajaCalabozo").css({'display':'none'})
		$("#modificacionCalabozo").css({'display':'none'})
		$("#formularioModificacionCalabozo").css({'display':'none'})
		borrar()
	})

	$("#buttonEfectivosPolicia").click(function(e){
		e.preventDefault();
		$("#policiaInicio").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBuscarEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoBusqueda").css({'display':'inline'})
		borrar()
	})

	$("#buttonDatosBusquedaEfectivoPolicia").click(function(e){
		e.preventDefault();
		valor=$('#buscadorEfectivoPolicia #paramBusqueda').val()
			if (valor=='') {
				$('#buscadorEfectivoPolicia').attr('class','control-group error')
				$('#buscadorEfectivoPolicia span').text('Campo vacio')
				return
			};
		attr=['nombre','apellido','direccion','edad','dni','numeroPlaca','fechaIngreso','cargo','sueldo','jefe','tarea','horaPatrulla']
		PyAsync('buscarEfectivoInterf',{
			args:[Number(valor)],
			callback:function(data) {
				if (data) {
					$('#buscadorEfectivoPolicia').attr('class','control-group')
					$('#buscadorEfectivoPolicia span').text('')
					$.each(attr,function(i,l) {
						$('#'+l+'BusquedaEfectivoPolicia').text(data[i])
					})
					$("#datosBusquedaEfectivoPolicia").css({'display':'inline'})
				} else{
					$("#datosBusquedaEfectivoPolicia").css({'display':'none'})
					$('#buscadorEfectivoPolicia').attr('class','control-group error')
					$('#buscadorEfectivoPolicia span').text("Error, verifique los valores de la busqueda")
					borrar()
				};
			}
		})
	})

	$("#buttonDatosBusquedaAdministrativoPolicia").click(function(e){
		e.preventDefault();
		valor=$('#buscadorAdministrativoPolicia #paramBusqueda').val()
			if (valor=='') {
				$('#buscadorAdministrativoPolicia').attr('class','control-group error')
				$('#buscadorAdministrativoPolicia span').text('Campo vacio')
				return
			};
		attr=['nombre','apellido','direccion','edad','dni','numeroPlaca','fechaIngreso','cargo','sueldo','jefe','tarea','horaTrabajo']
		PyAsync('buscarAdministrativoInterf',{
			args:[Number(valor)],
			callback:function(data) {
				if (data) {
					$('#buscadorAdministrativoPolicia').attr('class','control-group')
					$('#buscadorAdministrativoPolicia span').text('')
					$.each(attr,function(i,l) {
						$('#'+l+'BusquedaAdministrativoPolicia').text(data[i])
					})
					$("#datosBusquedaAdministrativoPolicia").css({'display':'inline'})
				} else{
					$("#datosBusquedaAdministrativoPolicia").css({'display':'none'})
					$('#buscadorAdministrativoPolicia').attr('class','control-group error')
					$('#buscadorAdministrativoPolicia span').text("Error, verifique los valores de la busqueda")
					borrar()
				};
			}
		})
	})

	$('#buttonGuardarAltaPoliciaEfectivo').click(function(e) {
		e.preventDefault();
		nom=$('#inputNombreAltaPoliciaEfectivo').val()
		ap=$('#inputApellidoAltaPoliciaEfectivo').val()
		direc=$('#inputDirreccionAltaPoliciaEfectivo').val()
		edad=Number($('#inputEdadAltaPoliciaEfectivo').val())
		dni=Number($('#inputDniAltaPoliciaEfectivo').val())
		plac=Number($('#inputNumeroPlacaAltaPoliciaEfectivo').val())
		fec=$('#inputFechaIngresoAltaPoliciaEfectivo').val()
		cargo=$('#inputCargoAltaPoliciaEfectivo').val()
		sueldo=Number($('#inputSueldoAltaPoliciaEfectivo').val())
		jefe=Number($('#inputJefeAltaPoliciaEfectivo').val())
		tarea=$('#inputTareaAltaPoliciaEfectivo').val()
		hor=$('#inputHorarioPatrullaAltaPoliciaEfectivo').val()
		PyAsync('altaEfectivoInterf',{
			args:[nom,ap,direc,edad,dni,plac,fec,cargo,sueldo,jefe,tarea,hor],
			callback: function(data) {
				if (data) {
					$('#guardarAltaE span').text(data)
					$('#guardarAltaE').attr('class','')
					borrar()
				}else{
					$('#guardarAltaE span').text('Verifique los campos')
					$('#guardarAltaE').attr('class','error')
				}
			}
		})
	})

	$('#buttonGuardarAltaPoliciaAdministrativo').click(function(e) {
		e.preventDefault();
		nom=$('#inputNombreAltaPoliciaAdministrativo').val()
		ap=$('#inputApellidoAltaPoliciaAdministrativo').val()
		direc=$('#inputDirreccionAltaPoliciaAdministrativo').val()
		edad=Number($('#inputEdadAltaPoliciaAdministrativo').val())
		dni=Number($('#inputDniAltaPoliciaAdministrativo').val())
		plac=Number($('#inputNumeroPlacaAltaPoliciaAdministrativo').val())
		fec=$('#inputFechaIngresoAltaPoliciaAdministrativo').val()
		cargo=$('#inputCargoAltaPoliciaAdministrativo').val()
		sueldo=Number($('#inputSueldoAltaPoliciaAdministrativo').val())
		jefe=Number($('#inputJefeAltaPoliciaAdministrativo').val())
		tarea=$('#inputTareaAltaPoliciaAdministrativo').val()
		hor=Number($('#inputHorasTAltaPoliciaAdministrativo').val())
		PyAsync('altaAdministrativoInterf',{
			args:[nom,ap,direc,edad,dni,plac,fec,cargo,sueldo,jefe,tarea,hor],
			callback: function(data) {
				if (data) {
					$('#guardarAltaA span').text(data)
					$('#guardarAltaA').attr('class','')
					borrar()
				}else{
					$('#guardarAltaA span').text('Verifique los campos')
					$('#guardarAltaA').attr('class','error')
				}
			}
		})
	})

	$('#buttonGuardarModificacionPoliciaEfectivo').click(function(e) {
		e.preventDefault();
		nom=$('#nombreModificacionPoliciaEfectivo').val()
		ap=$('#apellidoModificacionPoliciaEfectivo').val()
		direc=$('#direccionModificacionPoliciaEfectivo').val()
		edad=Number($('#edadModificacionPoliciaEfectivo').val())
		dni=Number($('#dniModificacionPoliciaEfectivo').val())
		plac=Number($('#numeroPlacaModificacionPoliciaEfectivo').val())
		fec=$('#fechaIngresoModificacionPoliciaEfectivo').val()
		cargo=$('#cargoModificacionPoliciaEfectivo').val()
		sueldo=Number($('#sueldoModificacionPoliciaEfectivo').val())
		jefe=Number($('#jefeModificacionPoliciaEfectivo').val())
		tarea=$('#tareaModificacionPoliciaEfectivo').val()
		hor=$('#horarioPatrullaModificacionPoliciaEfectivo').val()
		PyAsync('modifEfectivoInterf',{
			args:[nom,ap,direc,edad,dni,plac,fec,cargo,sueldo,jefe,tarea,hor],
			callback: function(data) {
				if (data) {
					$('#guardarModifE span').text('Efectivo modificado con exito')
					$('#guardarModifE').attr('class','control-group')
					borrar()
				}else{
					$('#guardarModifE span').text('Verifique los campos')
					$('#guardarModifE').attr('class','control-group error')
				}
			}
		})
	})

	$('#buttonGuardarModificacionPoliciaAdministrativo').click(function(e) {
		e.preventDefault();
		nom=$('#nombreModificacionPoliciaAdministrativo').val()
		ap=$('#apellidoModificacionPoliciaAdministrativo').val()
		direc=$('#direccionModificacionPoliciaAdministrativo').val()
		edad=Number($('#edadModificacionPoliciaAdministrativo').val())
		dni=Number($('#dniModificacionPoliciaAdministrativo').val())
		plac=Number($('#numeroPlacaModificacionPoliciaAdministrativo').val())
		fec=$('#fechaIngresoModificacionPoliciaAdministrativo').val()
		cargo=$('#cargoModificacionPoliciaAdministrativo').val()
		sueldo=Number($('#sueldoModificacionPoliciaAdministrativo').val())
		jefe=Number($('#jefeModificacionPoliciaAdministrativo').val())
		tarea=$('#tareaModificacionPoliciaAdministrativo').val()
		hor=$('#horarioTModificacionPoliciaAdministrativo').val()
		PyAsync('modifAdministrativoInterf',{
			args:[nom,ap,direc,edad,dni,plac,fec,cargo,sueldo,jefe,tarea,hor],
			callback: function(data) {
				if (data) {
					$('#guardarModifA span').text('Administrativo modificado con exito')
					$('#guardarModifA').attr('class','control-group')
					borrar()
				}else{
					$('#guardarModifA span').text('Verifique los campos')
					$('#guardarModifA').attr('class','control-group error')
				}
			}
		})
	})

	$("#buttonAtrasBusquedaEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#datosBusquedaEfectivoPolicia").css({'display':'none'})
		$("#policiaEfectivoBusqueda").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonAltaEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoAlta").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasAltaPoliciaEfectivo").click(function(e){
		e.preventDefault();
		$("#policiaEfectivoAlta").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonModificarEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoModificacion").css({'display':'inline'})
		borrar()
	})

	$("#buttonDatosBusquedaModificacionEfectivoPolicia").click(function(e){
		e.preventDefault();
		valor=$('#buscadorModificacionEfectivoPolicia #paramBusqueda').val()
			if (valor=='') {
				$('#buscadorModificacionEfectivoPolicia').attr('class','control-group error')
				$('#buscadorModificacionEfectivoPolicia span').text('Campo vacio')
				return
			};
		attr=['nombre','apellido','direccion','edad','dni','numeroPlaca','fechaIngreso','cargo','sueldo','jefe','tarea','horarioPatrulla']
		PyAsync('buscarEfectivoInterf',{
			args:[Number(valor)],
			callback:function(data) {
				if (data){
					$('#buscadorModificacionEfectivoPolicia').attr('class','')
					$('#buscadorModificacionEfectivoPolicia span').text('')
					$.each(attr,function(i,l) {
						$('#'+l+'ModificacionPoliciaEfectivo').val(data[i])
					})
		 			$("#formularioModificacionEfectivoPolicia").css({'display':'inline'})
				}else{
		 			$("#formularioModificacionEfectivoPolicia").css({'display':'none'})
					$('#buscadorModificacionEfectivoPolicia').attr('class','control-group error')
					$('#buscadorModificacionEfectivoPolicia span').text("Error, verifique los valores de la busqueda")
					borrar()
				}
			}
		})
	})

	$("#buttonAtrasBusquedaModificacionEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#formularioModificacionEfectivoPolicia").css({'display':'none'})
		$("#policiaEfectivoModificacion").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBajaEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoBaja").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasBajaPoliciaEfectivo").click(function(e){
		e.preventDefault();
		$("#datosBajaPoliciaEfectivo").css({'display':'none'})
		$("#policiaEfectivoBaja").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBusquedaBajaPoliciaEfectivo").click(function(e){
		e.preventDefault();
		valor=$('#buscadorBajaPoliciaEfectivo #paramBusqueda').val()
			if (valor=='') {
				$('#buscadorBajaPoliciaEfectivo').attr('class','control-group error')
				$('#buscadorBajaPoliciaEfectivo span').text('Campo vacio')
				return
			};
		attr=['nombre','apellido','direccion','edad','dni','numeroPlaca','fechaIngreso','cargo','sueldo','jefe','tarea','horarioPatrulla']
		PyAsync('buscarEfectivoInterf',{
			args:[Number(valor)],
			callback:function(data) {
				if (data) {
					$('#buscadorBajaPoliciaEfectivo').attr('class','control-group')
					$('#buscadorBajaPoliciaEfectivo span').text('')
					$.each(attr,function(i,l) {
						$('#'+l+'BajaPoliciaEfectivo').text(data[i])
					})
					$("#datosBajaPoliciaEfectivo").css({'display':'inline'})
				} else{
					$("#datosBajaPoliciaEfectivo").css({'display':'none'})
					$('#buscadorBajaPoliciaEfectivo').attr('class','control-group error')
					$('#buscadorBajaPoliciaEfectivo span').text("Error, verifique los valores de la busqueda")
					borrar()
				};
			}
		})
	})

	$("#buttonCancelarBajaPoliciaEfectivo").click(function(e){
		e.preventDefault();
		$("#datosBajaPoliciaEfectivo").css({'display':'none'})
		$("#policiaEfectivoBaja").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaInicio").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBuscarAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaAdministrativoInicio").css({'display':'none'})
		$("#policiaAdministrativoBusqueda").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasBusquedaAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#datosBusquedaAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoBusqueda").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonAltaAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaAdministrativoInicio").css({'display':'none'})
		$("#policiaAdministrativoAlta").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasAltaPoliciaAdministrativo").click(function(e){
		e.preventDefault();
		$("#policiaAdministrativoAlta").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonModificarAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaAdministrativoInicio").css({'display':'none'})
		$("#policiaAdministrativoModificacion").css({'display':'inline'})
		borrar()
	})

	$("#buttonDatosBusquedaModificacionAdministrativoPolicia").click(function(e){
		e.preventDefault();
		valor=$('#buscadorModificacionAdministrativoPolicia #paramBusqueda').val()
			if (valor=='') {
				$('#buscadorModificacionAdministrativoPolicia').attr('class','control-group error')
				$('#buscadorModificacionAdministrativoPolicia span').text('Campo vacio')
				return
			};
		attr=['nombre','apellido','direccion','edad','dni','numeroPlaca','fechaIngreso','cargo','sueldo','jefe','tarea','horarioT']
		PyAsync('buscarAdministrativoInterf',{
			args:[Number(valor)],
			callback:function(data) {
				if (data){
					$('#buscadorModificacionAdministrativoPolicia').attr('class','')
					$('#buscadorModificacionAdministrativoPolicia span').text('')
					$.each(attr,function(i,l) {
						$('#'+l+'ModificacionPoliciaAdministrativo').val(data[i])
					})
		 			$("#formularioModificacionAdministrativoPolicia").css({'display':'inline'})
				}else{
		 			$("#formularioModificacionAdministrativoPolicia").css({'display':'none'})
					$('#buscadorModificacionAdministrativoPolicia').attr('class','control-group error')
					$('#buscadorModificacionAdministrativoPolicia span').text("Error, verifique los valores de la busqueda")
					borrar()
				}
			}
		})
	})

	$("#buttonAtrasBusquedaModificacionAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#formularioModificacionAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoModificacion").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBajaAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaAdministrativoInicio").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasBajaPoliciaAdministrativo").click(function(e){
		e.preventDefault();
		$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBusquedaBajaPoliciaAdministrativo").click(function(e){
		e.preventDefault();
		valor=$('#buscadorBajaPoliciaAdministrativo #paramBusqueda').val()
			if (valor=='') {
				$('#buscadorBajaPoliciaAdministrativo').attr('class','control-group error')
				$('#buscadorBajaPoliciaAdministrativo span').text('Campo vacio')
				return
			};
		attr=['nombre','apellido','direccion','edad','dni','numeroPlaca','fechaIngreso','cargo','sueldo','jefe','tarea','horarioT']
		PyAsync('buscarAdministrativoInterf',{
			args:[Number(valor)],
			callback:function(data) {
				if (data) {
					$('#buscadorBajaPoliciaAdministrativo').attr('class','control-group')
					$('#buscadorBajaPoliciaAdministrativo span').text('')
					$.each(attr,function(i,l) {
						$('#'+l+'BajaPoliciaAdministrativo').text(data[i])
					})
					$("#datosBajaPoliciaAdministrativo").css({'display':'inline'})
				} else{
					$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
					$('#buscadorBajaPoliciaAdministrativo').attr('class','control-group error')
					$('#buscadorBajaPoliciaAdministrativo span').text("Error, verifique los valores de la busqueda")
					borrar()
				};
			}
		})
	})

	$("#buttonCancelarBajaPoliciaAdministrativo").click(function(e){
		e.preventDefault();
		$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
		borrar()
	})

	$('#buttonEliminarBajaPoliciaEfectivo').click(function(e) {
		e.preventDefault();
		dni=Number($('#dniBajaPoliciaEfectivo').text())
		PyAsync('bajaEfectivoInterf',{
			args:[dni],
			callback: function(data) {
				if (data) {
					$('#guardarBajaE span').text(data)
					$('#guardarBajaE').attr('class','control-group')
					borrar()
				}else{
					$('#guardarBajaE span').text('Error')
					$('#guardarBajaE').attr('class','control-group error')
				}
			}
		})
	})
	
	$('#buttonEliminarBajaPoliciaAdministrativo').click(function(e) {
		e.preventDefault();
		dni=Number($('#dniBajaPoliciaAdministrativo').text())
		PyAsync('bajaAdministrativoInterf',{
			args:[dni],
			callback: function(data) {
				if (data) {
					$('#guardarBajaA span').text(data)
					$('#guardarBajaA').attr('class','control-group')
					borrar()
				}else{
					$('#guardarBajaA span').text('Error')
					$('#guardarBajaA').attr('class','control-group error')
				}
			}
		})
	})

	//-----------------TRASLADOS-------------------
	$("#traslado").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','');
		$("#antecedentes").attr('class','');
		$("#calabozo").attr('class','');
		$("#traslado").attr('class','active');
		$("#equipamiento").attr('class','');
		$("#asignacionEquipamiento").attr('class','');
		$("#reos").attr('class','');
		$("#trasladoInicio").css({'display':'inline'});
		//Buttons de Reos
		$("#reoInicio").css({'display':'none'})
		$("#reoBusqueda").css({'display':'none'});
		$("#reoAlta").css({'display':'none'});
		$("#reoModificacion").css({'display':'none'});
		$("#reoBaja").css({'display':'none'});
		//Buttons de Policias
		$("#policiaInicio").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoBusqueda").css({'display':'none'})
		$("#policiaEfectivoAlta").css({'display':'none'})
		$("#policiaEfectivoModificacion").css({'display':'none'})
		$("#formularioModificacionEfectivoPolicia").css({'display':'none'})
		$("#policiaEfectivoBaja").css({'display':'none'})
		$("#datosBajaPoliciaEfectivo").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'none'})	
		$("#policiaAdministrativoBusqueda").css({'display':'none'})
		$("#datosBusquedaAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoAlta").css({'display':'none'})
		$("#policiaAdministrativoModificacion").css({'display':'none'})
		$("#formularioModificacionAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'none'})
		$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
		//Buttons Traslado 
		$("#formularioTraslado").css({'display':'none'})
		//Button Equipamiento
		$("#equipamientoInicio").css({'display':'none'});
		$("#articuloInicio").css({'display':'none'})
		$("#articuloBusqueda").css({'display':'none'})
		$("#datosBusquedaArticulo").css({'display':'none'})
		$("#articuloAlta").css({'display':'none'})
		$("#articuloBaja").css({'display':'none'})
		$("#datosBajaArticulo").css({'display':'none'})
		$("#articuloModificacion").css({'display':'none'})
		$("#formularioModificacionArticulo").css({'display':'none'})
		$("#municionInicio").css({'display':'none'})
		$("#municionBusqueda").css({'display':'none'})
		$("#datosBusquedaMunicion").css({'display':'none'})
		$("#municionAlta").css({'display':'none'})
		$("#municionBaja").css({'display':'none'})
		$("#datosBajaMunicion").css({'display':'none'})
		$("#municionModificacion").css({'display':'none'})
		$("#formularioModificacionMunicion").css({'display':'none'})
		$("#armamentoInicio").css({'display':'none'})
		$("#armamentoBusqueda").css({'display':'none'})
		$("#datosBusquedaArmamento").css({'display':'none'})
		$("#armamentoAlta").css({'display':'none'})
		$("#armamentoBaja").css({'display':'none'})
		$("#datosBajaArmamento").css({'display':'none'})
		$("#armamentoModificacion").css({'display':'none'})
		$("#formularioModificacionArmamento").css({'display':'none'})
		//Buttons Antecedentes
		$("#antecedentesInicio").css({'display':'none'})
		$("#busquedaAntecedente").css({'display':'none'})
		$("#datosBusquedaAntecedente").css({'display':'none'})
		$("#altaAntecedente").css({'display':'none'})
		$("#modificacionAntecedente").css({'display':'none'})
		$("#formularioModificacionAntecedente").css({'display':'none'})
		//Buttons Calabozo
		$("#calabozoInicio").css({'display':'none'})
		$("#busquedaCalabozo").css({'display':'none'})
		$("#altaCalabozo").css({'display':'none'})
		$("#bajaCalabozo").css({'display':'none'})
		$("#datosBajaCalabozo").css({'display':'none'})
		$("#modificacionCalabozo").css({'display':'none'})
		$("#formularioModificacionCalabozo").css({'display':'none'})
		borrar()
	})

	$("#buttonDatosBusquedaReoTraslado").click(function(e){
		e.preventDefault();
		$("#formularioTraslado").css({'display':'inline'})
		borrar()
	})

	//-----------------EQUIPAMIENTO-------------------
	$("#equipamiento").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','');
		$("#antecedentes").attr('class','');
		$("#calabozo").attr('class','');
		$("#traslado").attr('class','');
		$("#equipamiento").attr('class','active');
		$("#asignacionEquipamiento").attr('class','');
		$("#reos").attr('class','');
		$("#equipamientoInicio").css({'display':'inline'});
		//Buttons de Reos
		$("#reoInicio").css({'display':'none'})
		$("#reoBusqueda").css({'display':'none'});
		$("#reoAlta").css({'display':'none'});
		$("#reoModificacion").css({'display':'none'});
		$("#reoBaja").css({'display':'none'});
		//Buttons de Policias
		$("#policiaInicio").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoBusqueda").css({'display':'none'})
		$("#policiaEfectivoAlta").css({'display':'none'})
		$("#policiaEfectivoModificacion").css({'display':'none'})
		$("#formularioModificacionEfectivoPolicia").css({'display':'none'})
		$("#policiaEfectivoBaja").css({'display':'none'})
		$("#datosBajaPoliciaEfectivo").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'none'})	
		$("#policiaAdministrativoBusqueda").css({'display':'none'})
		$("#datosBusquedaAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoAlta").css({'display':'none'})
		$("#policiaAdministrativoModificacion").css({'display':'none'})
		$("#formularioModificacionAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'none'})
		$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
		//Buttons Traslado
		$("#trasladoInicio").css({'display':'none'})
		$("#formularioTraslado").css({'display':'none'})
		//Buttons Equipamiento
		$("#articuloInicio").css({'display':'none'})
		$("#articuloBusqueda").css({'display':'none'})
		$("#datosBusquedaArticulo").css({'display':'none'})
		$("#articuloAlta").css({'display':'none'})
		$("#articuloBaja").css({'display':'none'})
		$("#datosBajaArticulo").css({'display':'none'})
		$("#articuloModificacion").css({'display':'none'})
		$("#formularioModificacionArticulo").css({'display':'none'})
		$("#municionInicio").css({'display':'none'})
		$("#municionBusqueda").css({'display':'none'})
		$("#datosBusquedaMunicion").css({'display':'none'})
		$("#municionAlta").css({'display':'none'})
		$("#municionBaja").css({'display':'none'})
		$("#datosBajaMunicion").css({'display':'none'})
		$("#municionModificacion").css({'display':'none'})
		$("#formularioModificacionMunicion").css({'display':'none'})
		$("#armamentoInicio").css({'display':'none'})
		$("#armamentoBusqueda").css({'display':'none'})
		$("#datosBusquedaArmamento").css({'display':'none'})
		$("#armamentoAlta").css({'display':'none'})
		$("#armamentoBaja").css({'display':'none'})
		$("#datosBajaArmamento").css({'display':'none'})
		$("#armamentoModificacion").css({'display':'none'})
		$("#formularioModificacionArmamento").css({'display':'none'})
		//Buttons Antecedentes
		$("#antecedentesInicio").css({'display':'none'})
		$("#busquedaAntecedente").css({'display':'none'})
		$("#datosBusquedaAntecedente").css({'display':'none'})
		$("#altaAntecedente").css({'display':'none'})
		$("#modificacionAntecedente").css({'display':'none'})
		$("#formularioModificacionAntecedente").css({'display':'none'})
		//Buttons Calabozo
		$("#calabozoInicio").css({'display':'none'})
		$("#busquedaCalabozo").css({'display':'none'})
		$("#altaCalabozo").css({'display':'none'})
		$("#bajaCalabozo").css({'display':'none'})
		$("#datosBajaCalabozo").css({'display':'none'})
		$("#modificacionCalabozo").css({'display':'none'})
		$("#formularioModificacionCalabozo").css({'display':'none'})
		borrar()
	})

	$("#buttonArticulosEquipamiento").click(function(e){
		e.preventDefault();
		$("#equipamientoInicio").css({'display':'none'})
		$("#articuloInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBusquedaArticulos").click(function(e){
		e.preventDefault();
		$("#articuloInicio").css({'display':'none'})
		$("#articuloBusqueda").css({'display':'inline'})
		borrar()
	})

	$("#buttonDatosBusquedaArticulo").click(function(e){
		e.preventDefault();
		$("#datosBusquedaArticulo").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasBusquedaArticulo").click(function(e){
		e.preventDefault();
		$("#datosBusquedaArticulo").css({'display':'none'})
		$("#articuloBusqueda").css({'display':'none'})
		$("#articuloInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonAltaArticulo").click(function(e){
		e.preventDefault();
		$("#articuloInicio").css({'display':'none'})
		$("#articuloAlta").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasAltaArticulo").click(function(e){
		e.preventDefault();
		$("#articuloAlta").css({'display':'none'})
		$("#articuloInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBajaArticulo").click(function(e){
		e.preventDefault();
		$("#articuloInicio").css({'display':'none'})
		$("#articuloBaja").css({'display':'inline'})
		borrar()
	})

	$("#buttonDatosBajaArticulo").click(function(e){
		e.preventDefault();
		$("#datosBajaArticulo").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasBajaArticulo").click(function(e){
		e.preventDefault();
		$("#articuloBaja").css({'display':'none'})
		$("#articuloInicio").css({'display':'inline'})
		$("#datosBajaArticulo").css({'display':'none'})
		borrar()
	})

	$("#buttonCancelarBajaArticulo").click(function(e){
		e.preventDefault();
		$("#articuloBaja").css({'display':'none'})
		$("#articuloInicio").css({'display':'inline'})
		$("#datosBajaArticulo").css({'display':'none'})
		borrar()
	})
	
	$("#buttonMoficacionArticulo").click(function(e){
		e.preventDefault();
		$("#articuloInicio").css({'display':'none'})
		$("#articuloModificacion").css({'display':'inline'})		
		borrar()
	})
	
	$("#buttonAtrasModificacionArticulo").click(function(e){
		e.preventDefault();
		$("#articuloInicio").css({'display':'inline'})
		$("#articuloModificacion").css({'display':'none'})
		$("#formularioModificacionArticulo").css({'display':'none'})		
		borrar()
	})

	$("#buttonDatosModificacionArticulo").click(function(e){
		e.preventDefault();
		$("#formularioModificacionArticulo").css({'display':'inline'})		
	})

	//Municion
	$("#buttonMunicionesEquipamiento").click(function(e){
		e.preventDefault();
		$("#equipamientoInicio").css({'display':'none'})
		$("#municionInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBusquedaMunicion").click(function(e){
		e.preventDefault();
		$("#municionInicio").css({'display':'none'})
		$("#municionBusqueda").css({'display':'inline'})
		borrar()
	})

	$("#buttonDatosBusquedaMunicion").click(function(e){
		e.preventDefault();
		$("#datosBusquedaMunicion").css({'display':'inline'})
	})

	$("#buttonAtrasBusquedaMunicion").click(function(e){
		e.preventDefault();
		$("#datosBusquedaMunicion").css({'display':'none'})
		$("#municionBusqueda").css({'display':'none'})
		$("#municionInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonAltaMunicion").click(function(e){
		e.preventDefault();
		$("#municionInicio").css({'display':'none'})
		$("#municionAlta").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasAltaMunicion").click(function(e){
		e.preventDefault();
		$("#municionAlta").css({'display':'none'})
		$("#municionInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBajaMunicion").click(function(e){
		e.preventDefault();
		$("#municionInicio").css({'display':'none'})
		$("#municionBaja").css({'display':'inline'})
		borrar()
	})

	$("#buttonDatosBajaMunicion").click(function(e){
		e.preventDefault();
		$("#datosBajaMunicion").css({'display':'inline'})
	})

	$("#buttonAtrasBajaMunicion").click(function(e){
		e.preventDefault();
		$("#municionBaja").css({'display':'none'})
		$("#municionInicio").css({'display':'inline'})
		$("#datosBajaMunicion").css({'display':'none'})
		borrar()
	})

	$("#buttonCancelarBajaMunicion").click(function(e){
		e.preventDefault();
		$("#municionBaja").css({'display':'none'})
		$("#municionInicio").css({'display':'inline'})
		$("#datosBajaMunicion").css({'display':'none'})
		borrar()
	})

	$("#buttonMoficacionMunicion").click(function(e){
		e.preventDefault();
		$("#municionInicio").css({'display':'none'})
		$("#municionModificacion").css({'display':'inline'})		
		borrar()
	})
	
	$("#buttonAtrasModificacionMunicion").click(function(e){
		e.preventDefault();
		$("#municionInicio").css({'display':'inline'})
		$("#municionModificacion").css({'display':'none'})
		$("#formularioModificacionMunicion").css({'display':'none'})		
		borrar()
	})

	$("#buttonDatosModificacionMunicion").click(function(e){
		e.preventDefault();
		$("#formularioModificacionMunicion").css({'display':'inline'})		
	})

	//Armamento
	$("#buttonArmamentosEquipamiento").click(function(e){
		e.preventDefault();
		$("#equipamientoInicio").css({'display':'none'})
		$("#armamentoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBusquedaArmamento").click(function(e){
		e.preventDefault();
		$("#armamentoInicio").css({'display':'none'})
		$("#armamentoBusqueda").css({'display':'inline'})
		borrar()
	})

	$("#buttonDatosBusquedaArmamento").click(function(e){
		e.preventDefault();
		$("#datosBusquedaArmamento").css({'display':'inline'})
	})

	$("#buttonAtrasBusquedaArmamento").click(function(e){
		e.preventDefault();
		$("#datosBusquedaMunicion").css({'display':'none'})
		$("#armamentoBusqueda").css({'display':'none'})
		$("#armamentoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonAltaArmamento").click(function(e){
		e.preventDefault();
		$("#armamentoInicio").css({'display':'none'})
		$("#armamentoAlta").css({'display':'inline'})
		borrar()
	})

	$("#buttonAtrasAltaArmamento").click(function(e){
		e.preventDefault();
		$("#armamentoAlta").css({'display':'none'})
		$("#armamentoInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonBajaArmamento").click(function(e){
		e.preventDefault();
		$("#armamentoInicio").css({'display':'none'})
		$("#armamentoBaja").css({'display':'inline'})
		borrar()
	})

	$("#buttonDatosBajaArmamento").click(function(e){
		e.preventDefault();
		$("#datosBajaArmamento").css({'display':'inline'})
	})

	$("#buttonAtrasBajaArmamento").click(function(e){
		e.preventDefault();
		$("#armamentoBaja").css({'display':'none'})
		$("#armamentoInicio").css({'display':'inline'})
		$("#datosBajaArmamento").css({'display':'none'})
		borrar()
	})

	$("#buttonCancelarBajaArmamento").click(function(e){
		e.preventDefault();
		$("#armamentoBaja").css({'display':'none'})
		$("#armamentoInicio").css({'display':'inline'})
		$("#datosBajaArmamento").css({'display':'none'})
		borrar()
	})

	$("#buttonMoficacionArmamento").click(function(e){
		e.preventDefault();
		$("#armamentoInicio").css({'display':'none'})
		$("#armamentoModificacion").css({'display':'inline'})		
		borrar()
	})
	
	$("#buttonAtrasModificacionArmamento").click(function(e){
		e.preventDefault();
		$("#armamentoInicio").css({'display':'inline'})
		$("#armamentoModificacion").css({'display':'none'})
		$("#formularioModificacionArmamento").css({'display':'none'})		
		borrar()
	})

	$("#buttonDatosModificacionArmamento").click(function(e){
		e.preventDefault();
		$("#formularioModificacionArmamento").css({'display':'inline'})		
	})

	//-----------------ASIGANACION-EQUIPAMIENTO-------------------
	$("#asignacionEquipamiento").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','');
		$("#antecedentes").attr('class','');
		$("#calabozo").attr('class','');
		$("#traslado").attr('class','');
		$("#equipamiento").attr('class','');
		$("#asignacionEquipamiento").attr('class','active');
		$("#reos").attr('class','');
		//Buttons de Reos
		$("#reoInicio").css({'display':'none'})
		$("#reoBusqueda").css({'display':'none'});
		$("#reoAlta").css({'display':'none'});
		$("#reoModificacion").css({'display':'none'});
		$("#reoBaja").css({'display':'none'});
		//Buttons de Policias
		$("#policiaInicio").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoBusqueda").css({'display':'none'})
		$("#policiaEfectivoAlta").css({'display':'none'})
		$("#policiaEfectivoModificacion").css({'display':'none'})
		$("#formularioModificacionEfectivoPolicia").css({'display':'none'})
		$("#policiaEfectivoBaja").css({'display':'none'})
		$("#datosBajaPoliciaEfectivo").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'none'})	
		$("#policiaAdministrativoBusqueda").css({'display':'none'})
		$("#datosBusquedaAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoAlta").css({'display':'none'})
		$("#policiaAdministrativoModificacion").css({'display':'none'})
		$("#formularioModificacionAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'none'})
		$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
		//Buttons Traslado
		$("#trasladoInicio").css({'display':'none'})
		$("#formularioTraslado").css({'display':'none'})
		//Button Equipamiento
		$("#equipamientoInicio").css({'display':'none'});
		$("#articuloInicio").css({'display':'none'})
		$("#articuloBusqueda").css({'display':'none'})
		$("#datosBusquedaArticulo").css({'display':'none'})
		$("#articuloAlta").css({'display':'none'})
		$("#articuloBaja").css({'display':'none'})
		$("#datosBajaArticulo").css({'display':'none'})
		$("#articuloModificacion").css({'display':'none'})
		$("#formularioModificacionArticulo").css({'display':'none'})
		$("#municionInicio").css({'display':'none'})
		$("#municionBusqueda").css({'display':'none'})
		$("#datosBusquedaMunicion").css({'display':'none'})
		$("#municionAlta").css({'display':'none'})
		$("#municionBaja").css({'display':'none'})
		$("#datosBajaMunicion").css({'display':'none'})
		$("#municionModificacion").css({'display':'none'})
		$("#formularioModificacionMunicion").css({'display':'none'})
		$("#armamentoInicio").css({'display':'none'})
		$("#armamentoBusqueda").css({'display':'none'})
		$("#datosBusquedaArmamento").css({'display':'none'})
		$("#armamentoAlta").css({'display':'none'})
		$("#armamentoBaja").css({'display':'none'})
		$("#datosBajaArmamento").css({'display':'none'})
		$("#armamentoModificacion").css({'display':'none'})
		$("#formularioModificacionArmamento").css({'display':'none'})
		//Buttons Antecedentes
		$("#antecedentesInicio").css({'display':'none'})
		$("#busquedaAntecedente").css({'display':'none'})
		$("#datosBusquedaAntecedente").css({'display':'none'})
		$("#altaAntecedente").css({'display':'none'})
		$("#modificacionAntecedente").css({'display':'none'})
		$("#formularioModificacionAntecedente").css({'display':'none'})
		//Buttons Calabozo
		$("#calabozoInicio").css({'display':'none'})
		$("#busquedaCalabozo").css({'display':'none'})
		$("#altaCalabozo").css({'display':'none'})
		$("#bajaCalabozo").css({'display':'none'})
		$("#datosBajaCalabozo").css({'display':'none'})
		$("#modificacionCalabozo").css({'display':'none'})
		$("#formularioModificacionCalabozo").css({'display':'none'})
		borrar()
	})

	//-----------------ANTECEDENTES-------------------
	 $("#antecedentes").click(function(e){
	 	e.preventDefault();
	 	$("#infoInicio").css({'display':'none'});
	 	$("#policias").attr('class','');
	 	$("#antecedentes").attr('class','active');
	 	$("#calabozo").attr('class','');
		$("#traslado").attr('class','');
	 	$("#equipamiento").attr('class','');
	 	$("#asignacionEquipamiento").attr('class','');
	 	$("#reos").attr('class','');
	 	$("#antecedentesInicio").css({'display':'inline'})
	 	//Buttons de Reos
	 	$("#reoInicio").css({'display':'none'})
	 	$("#reoBusqueda").css({'display':'none'});
	 	$("#reoAlta").css({'display':'none'});
 		$("#reoModificacion").css({'display':'none'});
	 	$("#reoBaja").css({'display':'none'});
	 	//Buttons de Policias
	 	$("#policiaInicio").css({'display':'none'})
	 	$("#policiaEfectivoInicio").css({'display':'none'})
	 	$("#policiaEfectivoBusqueda").css({'display':'none'})
	 	$("#policiaEfectivoAlta").css({'display':'none'})
	 	$("#policiaEfectivoModificacion").css({'display':'none'})
	 	$("#formularioModificacionEfectivoPolicia").css({'display':'none'})
	 	$("#policiaEfectivoBaja").css({'display':'none'})
	 	$("#datosBajaPoliciaEfectivo").css({'display':'none'})
	 	$("#policiaAdministrativoInicio").css({'display':'none'})	
	 	$("#policiaAdministrativoBusqueda").css({'display':'none'})
	 	$("#datosBusquedaAdministrativoPolicia").css({'display':'none'})
	 	$("#policiaAdministrativoAlta").css({'display':'none'})
	 	$("#policiaAdministrativoModificacion").css({'display':'none'})
	 	$("#formularioModificacionAdministrativoPolicia").css({'display':'none'})
	 	$("#policiaAdministrativoBaja").css({'display':'none'})
	 	$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
	 	//Buttons Traslado
		$("#trasladoInicio").css({'display':'none'})
		$("#formularioTraslado").css({'display':'none'})
		//Button Equipamiento
		$("#equipamientoInicio").css({'display':'none'});
		$("#articuloInicio").css({'display':'none'})
		$("#articuloBusqueda").css({'display':'none'})
		$("#datosBusquedaArticulo").css({'display':'none'})
		$("#articuloAlta").css({'display':'none'})
		$("#articuloBaja").css({'display':'none'})
		$("#datosBajaArticulo").css({'display':'none'})
		$("#articuloModificacion").css({'display':'none'})
		$("#formularioModificacionArticulo").css({'display':'none'})
		$("#municionInicio").css({'display':'none'})
		$("#municionBusqueda").css({'display':'none'})
		$("#datosBusquedaMunicion").css({'display':'none'})
		$("#municionAlta").css({'display':'none'})
		$("#municionBaja").css({'display':'none'})
		$("#datosBajaMunicion").css({'display':'none'})
		$("#municionModificacion").css({'display':'none'})
		$("#formularioModificacionMunicion").css({'display':'none'})
		$("#armamentoInicio").css({'display':'none'})
		$("#armamentoBusqueda").css({'display':'none'})
		$("#datosBusquedaArmamento").css({'display':'none'})
		$("#armamentoAlta").css({'display':'none'})
		$("#armamentoBaja").css({'display':'none'})
		$("#datosBajaArmamento").css({'display':'none'})
		$("#armamentoModificacion").css({'display':'none'})
		$("#formularioModificacionArmamento").css({'display':'none'})
		//Buttons Antecedentes
		$("#busquedaAntecedente").css({'display':'none'})
		$("#datosBusquedaAntecedente").css({'display':'none'})
		$("#altaAntecedente").css({'display':'none'})
		$("#modificacionAntecedente").css({'display':'none'})
		$("#formularioModificacionAntecedente").css({'display':'none'})
		//Buttons Calabozo
		$("#calabozoInicio").css({'display':'none'})
		$("#busquedaCalabozo").css({'display':'none'})
		$("#altaCalabozo").css({'display':'none'})
		$("#bajaCalabozo").css({'display':'none'})
		$("#datosBajaCalabozo").css({'display':'none'})
		$("#modificacionCalabozo").css({'display':'none'})
		$("#formularioModificacionCalabozo").css({'display':'none'})
		borrar()
	 })

	$("#buttonBusquedaAntecedente").click(function(e){
		e.preventDefault();
		$("#antecedentesInicio").css({'display':'none'})
		$("#busquedaAntecedente").css({'display':'inline'})		
		borrar()
	})

	$("#buttonDatosBusquedaReoAntecedente").click(function(e){
		e.preventDefault();
		$("#datosBusquedaAntecedente").css({'display':'inline'})
	})

	$("#buttonAtrasBusquedaAntecedente").click(function(e){
		e.preventDefault();
		$("#busquedaAntecedente").css({'display':'none'})		
		$("#datosBusquedaAntecedente").css({'display':'none'})
		$("#antecedentesInicio").css({'display':'inline'})
		borrar()
	})

	$("#buttonAltaAntecedente").click(function(e){
		e.preventDefault();
		$("#antecedentesInicio").css({'display':'none'})
		$("#altaAntecedente").css({'display':'inline'})		
		borrar()
	})

	$("#buttonAtrasAltaAntecedente").click(function(e){
		e.preventDefault();
		$("#antecedentesInicio").css({'display':'inline'})
		$("#altaAntecedente").css({'display':'none'})		
		borrar()
	})

	$("#buttonModificacionAntecedente").click(function(e){
		e.preventDefault();
		$("#antecedentesInicio").css({'display':'none'})
		$("#modificacionAntecedente").css({'display':'inline'})		
		borrar()
	})

	$("#buttonDatosModificacionReoAntecedente").click(function(e){
		e.preventDefault();
		$("#formularioModificacionAntecedente").css({'display':'inline'})
	})

	$("#buttonAtrasModificacionAntecedente").click(function(e){
		e.preventDefault();
		$("#formularioModificacionAntecedente").css({'display':'none'})		
		$("#modificacionAntecedente").css({'display':'none'})
		$("#antecedentesInicio").css({'display':'inline'})
		borrar()
	})

		//-----------------CALABOZO-------------------
	 $("#calabozo").click(function(e){
	 	e.preventDefault();
	 	$("#infoInicio").css({'display':'none'});
	 	$("#policias").attr('class','');
	 	$("#antecedentes").attr('class','');
	 	$("#calabozo").attr('class','active');
		$("#traslado").attr('class','');
	 	$("#equipamiento").attr('class','');
	 	$("#asignacionEquipamiento").attr('class','');
	 	$("#reos").attr('class','');
	 	$("#calabozoInicio").css({'display':'inline'})
	 	//Buttons de Reos
	 	$("#reoInicio").css({'display':'none'})
	 	$("#reoBusqueda").css({'display':'none'});
	 	$("#reoAlta").css({'display':'none'});
 		$("#reoModificacion").css({'display':'none'});
	 	$("#reoBaja").css({'display':'none'});
	 	//Buttons de Policias
	 	$("#policiaInicio").css({'display':'none'})
	 	$("#policiaEfectivoInicio").css({'display':'none'})
	 	$("#policiaEfectivoBusqueda").css({'display':'none'})
	 	$("#policiaEfectivoAlta").css({'display':'none'})
	 	$("#policiaEfectivoModificacion").css({'display':'none'})
	 	$("#formularioModificacionEfectivoPolicia").css({'display':'none'})
	 	$("#policiaEfectivoBaja").css({'display':'none'})
	 	$("#datosBajaPoliciaEfectivo").css({'display':'none'})
	 	$("#policiaAdministrativoInicio").css({'display':'none'})	
	 	$("#policiaAdministrativoBusqueda").css({'display':'none'})
	 	$("#datosBusquedaAdministrativoPolicia").css({'display':'none'})
	 	$("#policiaAdministrativoAlta").css({'display':'none'})
	 	$("#policiaAdministrativoModificacion").css({'display':'none'})
	 	$("#formularioModificacionAdministrativoPolicia").css({'display':'none'})
	 	$("#policiaAdministrativoBaja").css({'display':'none'})
	 	$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
	 	//Buttons Traslado
		$("#trasladoInicio").css({'display':'none'})
		$("#formularioTraslado").css({'display':'none'})
		//Button Equipamiento
		$("#equipamientoInicio").css({'display':'none'});
		$("#articuloInicio").css({'display':'none'})
		$("#articuloBusqueda").css({'display':'none'})
		$("#datosBusquedaArticulo").css({'display':'none'})
		$("#articuloAlta").css({'display':'none'})
		$("#articuloBaja").css({'display':'none'})
		$("#datosBajaArticulo").css({'display':'none'})
		$("#articuloModificacion").css({'display':'none'})
		$("#formularioModificacionArticulo").css({'display':'none'})
		$("#municionInicio").css({'display':'none'})
		$("#municionBusqueda").css({'display':'none'})
		$("#datosBusquedaMunicion").css({'display':'none'})
		$("#municionAlta").css({'display':'none'})
		$("#municionBaja").css({'display':'none'})
		$("#datosBajaMunicion").css({'display':'none'})
		$("#municionModificacion").css({'display':'none'})
		$("#formularioModificacionMunicion").css({'display':'none'})
		$("#armamentoInicio").css({'display':'none'})
		$("#armamentoBusqueda").css({'display':'none'})
		$("#datosBusquedaArmamento").css({'display':'none'})
		$("#armamentoAlta").css({'display':'none'})
		$("#armamentoBaja").css({'display':'none'})
		$("#datosBajaArmamento").css({'display':'none'})
		$("#armamentoModificacion").css({'display':'none'})
		$("#formularioModificacionArmamento").css({'display':'none'})
		//Buttons Antecedentes
		$("#antecedentesInicio").css({'display':'none'})
		$("#busquedaAntecedente").css({'display':'none'})
		$("#datosBusquedaAntecedente").css({'display':'none'})
		$("#altaAntecedente").css({'display':'none'})
		$("#modificacionAntecedente").css({'display':'none'})
		$("#formularioModificacionAntecedente").css({'display':'none'})
		//Buttons Calabozo
		$("#busquedaCalabozo").css({'display':'none'})
		$("#altaCalabozo").css({'display':'none'})
		$("#bajaCalabozo").css({'display':'none'})
		$("#datosBajaCalabozo").css({'display':'none'})
		$("#modificacionCalabozo").css({'display':'none'})
		$("#formularioModificacionCalabozo").css({'display':'none'})
		borrar()
	})

	$("#buttonBuscarCalabozo").click(function(e){
		e.preventDefault();
		$("#calabozoInicio").css({'display':'none'})
		$("#busquedaCalabozo").css({'display':'inline'})		
		borrar()
	})
	
	$("#buttonAtrasBusquedaCalabozo").click(function(e){
		e.preventDefault();
		$("#busquedaCalabozo").css({'display':'none'})
		$("#calabozoInicio").css({'display':'inline'})		
		borrar()
	})

	$("#buttonAltaCalabozo").click(function(e){
		e.preventDefault();
		$("#calabozoInicio").css({'display':'none'})
		$("#altaCalabozo").css({'display':'inline'})		
		borrar()
	})

	$("#buttonAtrasAltaCalabozo").click(function(e){
		e.preventDefault();
		$("#altaCalabozo").css({'display':'none'})
		$("#calabozoInicio").css({'display':'inline'})		
		borrar()
	})

	$("#buttonBajaCalabozo").click(function(e){
		e.preventDefault();
		$("#calabozoInicio").css({'display':'none'})
		$("#bajaCalabozo").css({'display':'inline'})		
		borrar()
	})

	$("#buttonAtrasBajaCalabozo").click(function(e){
		e.preventDefault();
		$("#bajaCalabozo").css({'display':'none'})
		$("#calabozoInicio").css({'display':'inline'})
		$("#datosBajaCalabozo").css({'display':'none'})		
		borrar()
	})

	$("#buttonDatosBajaCalabozo").click(function(e){
		e.preventDefault();
		$("#datosBajaCalabozo").css({'display':'inline'})	
		borrar()
	})

	$("#buttonCancelarBajaCalabozo").click(function(e){
		e.preventDefault();
		$("#bajaCalabozo").css({'display':'none'})
		$("#calabozoInicio").css({'display':'inline'})
		$("#datosBajaCalabozo").css({'display':'none'})		
		borrar()
	})

	$("#buttonModificarCalabozo").click(function(e){
		e.preventDefault();
		$("#calabozoInicio").css({'display':'none'})
		$("#modificacionCalabozo").css({'display':'inline'})		
		borrar()
	})

	$("#buttonAtrasModificacionCalabozo").click(function(e){
		e.preventDefault();
		$("#modificacionCalabozo").css({'display':'none'})
		$("#calabozoInicio").css({'display':'inline'})
		$("#formularioModificacionCalabozo").css({'display':'none'})		
		borrar()
	})

	$("#buttonDatosModificacionCalabozo").click(function(e){
		e.preventDefault();
		$("#formularioModificacionCalabozo").css({'display':'inline'})		
		borrar()
	})
})