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





	// $('#cal').click(function() {
	// 	t=$('#inputCalT').val()
	// 	e=$('#inputCalE').val()
	// 	PyAsync('altaCalabozoInterf',{
	// 		args:[t,e],
	// 		callback: function(data) {
	// 			alert(data)
	// 		}
	// 	})
	// })

	// $('#cCal').click(function() {
	// 	PyAsync('test_calabozo',{
	// 		args:['Ladero','Ladero2'],
	// 		callback:function(data) {
	// 			alert(data)
	// 		}
	// 	})
	// })
	// $('#cCal').click(function() {
	// 	tipo=$('#inputTipo').val()
	// 	estado=$('#inputEstado').val()
	// 	alert(tipo)
	// 	PyAsinc('test_calabozo',{
	// 		args:[tipo,estado],
	// 		callback:function(data) {
	// 			alert('ladero')
	// 			$('#cCal').attr('class','btn btn-success disabled')
	// 		}
	// 	})
	// })
})