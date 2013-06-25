$(document).ready(function() {
	
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
	})

	$("#buttonBuscarReo").click(function(e){
		e.preventDefault();
		$("#reoInicio").css({'display':'none'});
		$("#reoBusqueda").css({'display':'inline'});
	})

	$("#buttonAltaReo").click(function(e){
		e.preventDefault();
		$("#reoInicio").css({'display':'none'});
		$("#reoAlta").css({'display':'inline'});
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
		console.log(nom,ap,direc,edad,dni,tiem,fec,hue,cal)
		PyAsync('altaReoInterf',{
			args:[nom,ap,direc,edad,dni,tiem,fec,hue,cal],
			callback: function(data) {
				alert(data)
			}
		})
	})

	$("#buttonModificarReo").click(function(e){
		e.preventDefault();
		$("#reoInicio").css({'display':'none'});
		$("#reoModificacion").css({'display':'inline'});
	})

	$("#buttonBajaReo").click(function(e){
		e.preventDefault();
		$("#reoInicio").css({'display':'none'});
		$("#reoBaja").css({'display':'inline'});
	})

	$("#buttonBusquedaBajaReo").click(function(e){
		e.preventDefault();
		$("#datosBajaReo").css({'display':'inline'})
	})
	
	$("#buttonCancelarReoBaja").click(function(e){
		e.preventDefault();
		$("#datosBajaReo").css({'display':'none'})
		$("#reoBaja").css({'display':'none'})
		$("#reoInicio").css({'display':'inline'})
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
		PyAsync('buscarReoInterf',{
			args:[valor,op],
			callback:function(data) {
				if (data != "Error, verifique los valores de la busqueda"){
					$('#buscadorReo').attr('class','')
					$('#buscadorReo span').text('')
					$("#datosBusquedaReo").css({'display':'inline'})
				}else{
					$('#buscadorReo').attr('class','control-group error')
					$('#buscadorReo span').text(data)
				}
			}
		})
	})	

	$("#buttonDatosBusquedaModificacionReo").click(function(e){
		e.preventDefault();
		$("#formularioModificacionReo").css({'display':'inline'})
	})

	$("#buttonAtrasBusquedaReo").click(function(e){
		e.preventDefault();
		$("#datosBusquedaReo").css({'display':'none'})
		$("#reoBusqueda").css({'display':'none'})
		$("#reoInicio").css({'display':'inline'})
	})

	$("#buttonAtrasReoAlta").click(function(e){
		e.preventDefault();
		$("#reoAlta").css({'display':'none'})
		$("#reoInicio").css({'display':'inline'})
	})

	$("#buttonAtrasBusquedaModificacionReo").click(function(e){
		e.preventDefault();
		$("#reoModificacion").css({'display':'none'})
		$("#formularioModificacionReo").css({'display':'none'})
		$("#reoInicio").css({'display':'inline'})
	})

	$("#buttonAtrasBajaReo").click(function(e){
		e.preventDefault();
		$("#reoBaja").css({'display':'none'})
		$("#datosBajaReo").css({'display':'none'})
		$("#reoInicio").css({'display':'inline'})
	})	

	$('#huella_button').click(function() {
		PyAsync('regHuella',{
			args:[],
			callback:function(data) {
				if (data==false) {
					$('#huella_alta').attr('class','control-group error')
					$('#formularioAltaReo span').text('Error')
					$('#inputHuellaReoAlta').val(1) //COMENTAR
				} else{
					$('#formularioAltaReo span').text('')
					$('#huella_alta').attr('class','')
					$('inputHuellaReoAlta').text(data)
				};
				$('#capturarHuella').modal('hide')
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
	})

	$("#buttonEfectivosPolicia").click(function(e){
		e.preventDefault();
		$("#policiaInicio").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
	})

	$("#buttonBuscarEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoBusqueda").css({'display':'inline'})
	})

	$("#buttonDatosBusquedaEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#datosBusquedaEfectivoPolicia").css({'display':'inline'})
	})

	$("#buttonAtrasBusquedaEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#datosBusquedaEfectivoPolicia").css({'display':'none'})
		$("#policiaEfectivoBusqueda").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
	})

	$("#buttonAltaEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoAlta").css({'display':'inline'})
	})

	$("#buttonAtrasAltaPoliciaEfectivo").click(function(e){
		e.preventDefault();
		$("#policiaEfectivoAlta").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
	})

	$("#buttonModificarEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoModificacion").css({'display':'inline'})
	})

	$("#buttonDatosBusquedaModificacionEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#formularioModificacionEfectivoPolicia").css({'display':'inline'})
	})

	$("#buttonAtrasBusquedaModificacionEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#formularioModificacionEfectivoPolicia").css({'display':'none'})
		$("#policiaEfectivoModificacion").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
	})

	$("#buttonBajaEfectivoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#policiaEfectivoBaja").css({'display':'inline'})
	})

	$("#buttonAtrasBajaPoliciaEfectivo").click(function(e){
		e.preventDefault();
		$("#datosBajaPoliciaEfectivo").css({'display':'none'})
		$("#policiaEfectivoBaja").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
	})

	$("#buttonBusquedaBajaPoliciaEfectivo").click(function(e){
		e.preventDefault();
		$("#datosBajaPoliciaEfectivo").css({'display':'inline'})
	})

	$("#buttonCancelarBajaPoliciaEfectivo").click(function(e){
		e.preventDefault();
		$("#datosBajaPoliciaEfectivo").css({'display':'none'})
		$("#policiaEfectivoBaja").css({'display':'none'})
		$("#policiaEfectivoInicio").css({'display':'inline'})
	})

	$("#buttonAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaInicio").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
	})

	$("#buttonBuscarAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaAdministrativoInicio").css({'display':'none'})
		$("#policiaAdministrativoBusqueda").css({'display':'inline'})
	})

	$("#buttonDatosBusquedaAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#datosBusquedaAdministrativoPolicia").css({'display':'inline'})
	})

	$("#buttonAtrasBusquedaAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#datosBusquedaAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoBusqueda").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
	})

	$("#buttonAltaAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaAdministrativoInicio").css({'display':'none'})
		$("#policiaAdministrativoAlta").css({'display':'inline'})
	})

	$("#buttonAtrasAltaPoliciaAdministrativo").click(function(e){
		e.preventDefault();
		$("#policiaAdministrativoAlta").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
	})

	$("#buttonModificarAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaAdministrativoInicio").css({'display':'none'})
		$("#policiaAdministrativoModificacion").css({'display':'inline'})
	})

	$("#buttonDatosBusquedaModificacionAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaAdministrativoInicio").css({'display':'none'})
		$("#formularioModificacionAdministrativoPolicia").css({'display':'inline'})
	})

	$("#buttonAtrasBusquedaModificacionAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#formularioModificacionAdministrativoPolicia").css({'display':'none'})
		$("#policiaAdministrativoModificacion").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
	})

	$("#buttonBajaAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#policiaAdministrativoInicio").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'inline'})
	})

	$("#buttonAtrasBajaPoliciaAdministrativo").click(function(e){
		e.preventDefault();
		$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
	})

	$("#buttonBusquedaBajaPoliciaAdministrativo").click(function(e){
		e.preventDefault();
		$("#datosBajaPoliciaAdministrativo").css({'display':'inline'})
	})

	$("#buttonCancelarBajaPoliciaAdministrativo").click(function(e){
		e.preventDefault();
		$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
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
	})

	$("#buttonDatosBusquedaReoTraslado").click(function(e){
		e.preventDefault();
		$("#formularioTraslado").css({'display':'inline'})
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
	})

	$("#buttonArticulosEquipamiento").click(function(e){
		e.preventDefault();
		$("#equipamientoInicio").css({'display':'none'})
		$("#articuloInicio").css({'display':'inline'})
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
	 })
})