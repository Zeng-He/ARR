$(document).ready(function() {
	$('#cal').click(function() {
		t=$('#inputCalT').val()
		e=$('#inputCalE').val()
		PyAsync('altaCalabozoInterf',{
			args:[t,e],
			callback: function(data) {
				alert(data)
			}
		})
	})

	/*$('#cCal').click(function() {
		PyAsync('test_calabozo',{
			args:['Ladero','Ladero2'],
			callback:function(data) {
				alert(data)
			}
		})
	})
	$('#cCal').click(function() {
		tipo=$('#inputTipo').val()
		estado=$('#inputEstado').val()
		alert(tipo)
		PyAsinc('test_calabozo',{
			args:[tipo,estado],
			callback:function(data) {
				alert('ladero')
				$('#cCal').attr('class','btn btn-success disabled')
			}
		})
	})*/
})