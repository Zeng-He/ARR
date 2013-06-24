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
	})

	$("#policias").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','active');
		$("#asignacionActiviades").attr('class','');
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
	})

	$("#asignacionActiviades").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','');
		$("#asignacionActiviades").attr('class','active');
		$("#traslado").attr('class','');
		$("#equipamiento").attr('class','');
		$("#asignacionEquipamiento").attr('class','');
		$("#reos").attr('class','');
	})

	$("#traslado").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','');
		$("#asignacionActiviades").attr('class','');
		$("#traslado").attr('class','active');
		$("#equipamiento").attr('class','');
		$("#asignacionEquipamiento").attr('class','');
		$("#reos").attr('class','');
	})

	$("#equipamiento").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','');
		$("#asignacionActiviades").attr('class','');
		$("#traslado").attr('class','');
		$("#equipamiento").attr('class','active');
		$("#asignacionEquipamiento").attr('class','');
		$("#reos").attr('class','');
	})

	$("#asignacionEquipamiento").click(function(e){
		e.preventDefault();
		$("#infoInicio").css({'display':'none'});
		$("#policias").attr('class','');
		$("#asignacionActiviades").attr('class','');
		$("#traslado").attr('class','');
		$("#equipamiento").attr('class','');
		$("#asignacionEquipamiento").attr('class','active');
		$("#reos").attr('class','');
	})

	$("#buttonBuscarReo").click(function(e){
		e.preventDefault();
		$("#reoInicio").css({'display':'none'});
		$("#reoBusqueda").css({'display':'inline'});
	})

	$('')

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

	$("#buttonEliminarReoBaja").click(function(e){
		e.preventDefault();
		$("#datosBajaReo").css({'display':'none'})
		$("#reoBaja").css({'display':'none'})
		$("#reoInicio").css({'display':'inline'})
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
})