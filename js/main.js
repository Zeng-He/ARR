$(document).ready(function() {
	
	//-----------REOS---------------
	$("#reos").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','');
		$("#asignacionActiviades").attr('class','');
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
		$('#buttonGuardarReoAlta').click(function(e) {
			e.preventDefault();
			nom=$('inputNombreReoAlta').val()
			ap=$('inputApellidoReoAlta').val()
			direc=$('inputDirreccionReoAlta').val()
			edad=$('inputEdadReoAlta').val()
			dni=$('inputDniReoAlta').val()
			tiem=$('inputTiempoCondenaReoAlta').val()
			fec=$('inputFechaIngresoReoAlta').val()
			hue=$('inputHuellaReoAlta').val()
			cal=$('inputCalabozoReoAlta').val()
			PyAsync('altaReoInterf',{
				args:[nom,ap,direc,edad,dni,tiem,fec,hue,cal],
				callback: function(data) {
					alert(data)
				}
			})
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
		$("#datosBusquedaReo").css({'display':'inline'})
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

	//-----------------POLICIAS-------------------
	$("#policias").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','active');
		$("#asignacionActiviades").attr('class','');
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
		$("#asignacionActiviades").attr('class','');
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
		$("#asignacionActiviades").attr('class','');
		$("#traslado").attr('class','');
		$("#equipamiento").attr('class','active');
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
	})

	//-----------------ASIGANACION-EQUIPAMIENTO-------------------
	$("#asignacionEquipamiento").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','');
		$("#asignacionActiviades").attr('class','');
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
	})

	//-----------------ASIGNACION-ACTIVIDADES-------------------
	// $("#asignacionActiviades").click(function(e){
	// 	e.preventDefault();
	// 	$("#infoInicio").css({'display':'none'});
	// 	$("#policias").attr('class','');
	// 	$("#asignacionActiviades").attr('class','active');
	// 	$("#traslado").attr('class','');
	// 	$("#equipamiento").attr('class','');
	// 	$("#asignacionEquipamiento").attr('class','');
	// 	$("#reos").attr('class','');
	// 	//Buttons de Reos
	// 	$("#reoInicio").css({'display':'none'})
	// 	$("#reoBusqueda").css({'display':'none'});
	// 	$("#reoAlta").css({'display':'none'});
	// 	$("#reoModificacion").css({'display':'none'});
	// 	$("#reoBaja").css({'display':'none'});
	// 	//Buttons de Policias
	// 	$("#policiaInicio").css({'display':'none'})
	// 	$("#policiaEfectivoInicio").css({'display':'none'})
	// 	$("#policiaEfectivoBusqueda").css({'display':'none'})
	// 	$("#policiaEfectivoAlta").css({'display':'none'})
	// 	$("#policiaEfectivoModificacion").css({'display':'none'})
	// 	$("#formularioModificacionEfectivoPolicia").css({'display':'none'})
	// 	$("#policiaEfectivoBaja").css({'display':'none'})
	// 	$("#datosBajaPoliciaEfectivo").css({'display':'none'})
	// 	$("#policiaAdministrativoInicio").css({'display':'none'})	
	// 	$("#policiaAdministrativoBusqueda").css({'display':'none'})
	// 	$("#datosBusquedaAdministrativoPolicia").css({'display':'none'})
	// 	$("#policiaAdministrativoAlta").css({'display':'none'})
	// 	$("#policiaAdministrativoModificacion").css({'display':'none'})
	// 	$("#formularioModificacionAdministrativoPolicia").css({'display':'none'})
	// 	$("#policiaAdministrativoBaja").css({'display':'none'})
	// 	$("#datosBajaPoliciaAdministrativo").css({'display':'none'})
	// })
})