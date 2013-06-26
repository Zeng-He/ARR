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
					$('#guardarAlta span').text('Reo agregado con exito')
					$('#guardarAlta').attr('class','')
					borrar()
				}else{
					$('#guardarAlta span').text('Verifique los campos')
					$('#guardarAlta').attr('class','error')
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

	$("#buttonBusquedaBajaReo").click(function(e){
		e.preventDefault();
		$("#datosBajaReo").css({'display':'inline'})
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
					$('#buscadorReo').attr('class','control-group error')
					$('#buscadorReo span').text("Error, verifique los valor de la busqueda")
					borrar()
				}
			}
		})
		borrar()
	})	

	$("#buttonDatosBusquedaModificacionReo").click(function(e){
		e.preventDefault();
		$("#formularioModificacionReo").css({'display':'inline'})
		borrar()
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
					//$('#inputHuellaReoAlta').val(1) COMENTAR
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
		$("#datosBusquedaEfectivoPolicia").css({'display':'inline'})
		borrar()
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
		$("#policiaEfectivoInicio").css({'display':'none'})
		$("#formularioModificacionEfectivoPolicia").css({'display':'inline'})
		borrar()
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
		$("#datosBajaPoliciaEfectivo").css({'display':'inline'})
		borrar()
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

	$("#buttonDatosBusquedaAdministrativoPolicia").click(function(e){
		e.preventDefault();
		$("#datosBusquedaAdministrativoPolicia").css({'display':'inline'})
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
		$("#policiaAdministrativoInicio").css({'display':'none'})
		$("#formularioModificacionAdministrativoPolicia").css({'display':'inline'})
		borrar()
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
		$("#datosBajaPoliciaAdministrativo").css({'display':'inline'})
		borrar()
	})

	$("#buttonCancelarBajaPoliciaAdministrativo").click(function(e){
		e.preventDefault();
		$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
		$("#policiaAdministrativoBaja").css({'display':'none'})
		$("#policiaAdministrativoInicio").css({'display':'inline'})
		borrar()
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
		$("#articuloBusqueda").css({'display':'none'})
		$("#datosBusquedaArticulo").css({'display':'none'})
		$("#articuloAlta").css({'display':'none'})
		$("#articuloBaja").css({'display':'none'})
		$("#datosBajaArticulo").css({'display':'none'})
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
		borrar()
	 })
})