var numero = $('#numeroJugador');
var equipo = $('#equipoJugador');
var id = $('#idJugador');


$('#buscar').click(function(){
	console.log("hola")
	var datos = {
		numero: numero.val(),
		equipo: equipo.val()		
	}
	console.log(datos)
	$.ajax({
		type : 'PATCH',
		url : 'http://localhost:3000/editar/jugadores/' + id.val(),
		crossDomain: true,
		//dataType: 'json',
		contentType:'application/json',
		//contentType: "application/json; charset=utf-8",
		data: JSON.stringify({
					numero: numero.val(),
					equipo: equipo.val()
				}),
		success: function(data){
			location.reload(),
			console.log("Entra")

			clearText();
		},
		error:function(error){
			console.log("falla")

		}
	});
});

var idBorrar = $('#idJugadorBorrar')

$('#borrar').click(function(){
	console.log("hola")
	//console.log(datos)
	$.ajax({
		//url : 'http://localhost:3000/jugador' + $(buscartext).val(),
		type : 'DELETE',
		url : 'http://localhost:3000/editar/jugadores/' + idBorrar.val(),
		crossDomain: true,
		//dataType: 'json',
		contentType:'application/json',
		//contentType: "application/json; charset=utf-8",
		success: function(data){
			location.reload(),
			console.log("Entra")

			clearTextEliminar();
		},
		error:function(error){
			console.log("falla")

		}
	});
});


var nombreJugador = $('#nombreJugador');
var apellidoJugador = $('#apellidoJugador');
var equipoJugador = $('#equipoJugadorAct');
var numActJugador = $('#numActJugador');
var posJugador = $('#posJugador');
var linkJugador = $('#linkJugador');


$('#agregar').click(function(){
	var datos = {
		nombre: nombreJugador.val(),
		apellido: apellidoJugador.val(),
		equipo: equipoJugador.val(),
		numero:numActJugador.val(),
		posicion:posJugador.val(),
		imagen:linkJugador.val()
	}
	console.log(equipoJugador.val())
	$.ajax({
		//url : 'http://localhost:3000/jugador' + $(buscartext).val(),
		type : 'POST',
		url : 'http://localhost:3000/editar/jugadores', //+ $('#buscartext').val(),
		crossDomain: true,
		//dataType: 'json',
		contentType:'application/json',
		//contentType: "application/json; charset=utf-8",
		data: JSON.stringify({
				nombre: nombreJugador.val(),
				apellido: apellidoJugador.val(),
				equipo: equipoJugador.val(),
				numero:numActJugador.val(),
				posicion:posJugador.val(),
				imagen:linkJugador.val()}),
		success: function(data){
			location.reload(),
			console.log("Entra")
			clearTextAgregar();
		},
		error:function(error){
			console.log("falla")

		}
	});
});

function clearText()  
{
    document.getElementById('numeroJugador').value = "";
    document.getElementById('equipoJugador').value = "";
    document.getElementById('idJugador').value = "";
}  

function clearTextEliminar()  
{
    document.getElementById('idJugadorBorrar').value = "";
    
}  

function clearTextAgregar(){
	document.getElementById('nombreJugador').value = "";
    document.getElementById('apellidoJugador').value = "";
    document.getElementById('equipoJugadorAct').value = "";
    document.getElementById('numActJugador').value = "";
    document.getElementById('posJugador').value = "";
    document.getElementById('linkJugador').value = "";
}