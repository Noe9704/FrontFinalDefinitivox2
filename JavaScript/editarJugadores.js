

//------------------------------JUGADORES---------------------
///EDITAR JUGADORES
var numero = $('#numeroJugador');
var equipo = $('#equipoJugador');
var id = $('#idJugador');


$('#buscar').click(function(){
	//console.log("hola")
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
			alertify.success("Jugador editado con exito");
			//location.reload(),
			console.log("Entra")

			clearText();
		},
		error:function(error){
			console.log("falla")
			alertify.error('El jugador no se ha podido editar');

		}
	});
});

//BORRAR JUGADORES
var idBorrar = $('#idJugadorBorrar')

$('#borrar').click(function(){
	//console.log("hola")
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
			alertify.success("Jugador borrado con exito");
			//location.reload(),

			console.log("Entra")

			clearTextEliminar();
		},
		error:function(error){
			alertify.error('El jugador no se ha podido eliminar');
			console.log("falla")

		}
	});
});

//AGREGAR JUGADORES
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
			//location.reload(),
			alertify.success("Jugador agregado con exito");
			console.log("Entra")
			clearTextAgregar();
		},
		error:function(error){
			alertify.error('El jugador no se ha podido agregar');
			console.log("falla")

		}
	});
});




///----------------------------------------EQUIPOS----------------------

//EDITAR EQUIPOS--------------------------------------------------

var nuevoNombreEquipo = $('#nuevoNombreEquipo');
var titulosNuevoLiga = $('#titulosNuevosLiga');
var titulosNuevosInternacionales = $('#titulosNuevosInternacionales');
var idEquipos = $('#idEquipos');

$('#guardarCambioEquipo').click(function(){
	//console.log("hola")
	var datos = {
		nombre: nuevoNombreEquipo.val(), 
		titulosliga: titulosNuevoLiga.val(),
		titulosinter: titulosNuevosInternacionales.val()	
	}
	console.log(datos)
	$.ajax({
		type : 'PATCH',
		url : 'http://localhost:3000/editar/equipos/' + idEquipos.val(),
		crossDomain: true,
		//dataType: 'json',
		contentType:'application/json',
		//contentType: "application/json; charset=utf-8",
		data: JSON.stringify({
					nombre: nuevoNombreEquipo.val(),
					titulosliga: titulosNuevoLiga.val(),
					titulosinter: titulosNuevosInternacionales.val()
				}),
		success: function(data){
			location.reload(),
			console.log("Entra")
			clearTextEditarEquipos();

			//clearText();
		},
		error:function(error){
			alertify.error('El equipo no se ha podido editar');
			console.log("falla")

		}
	});
});



//AGREGAR EQUIPOS--------------------------------------------------


var nombreEquipo = $('#nombreEquipo');
var titulosLiga = $('#titulosLiga');
var titulosInter = $('#titulosInter');
var fundacion = $('#fundacion');
var imagenEquipo = $('#imagenEquipo');

$('#guardarNuevoEquipo').click(function(){
	var datos = {
		nombre: nombreEquipo.val(),
		titulosliga: titulosLiga.val(),
		titulosinter: titulosInter.val(),
		fundacion:fundacion.val(),
		imagen:imagenEquipo.val()
	}
	console.log(datos);
	$.ajax({
		//url : 'http://localhost:3000/jugador' + $(buscartext).val(),
		type : 'POST',
		url : 'http://localhost:3000/editar/equipos', //+ $('#buscartext').val(),
		crossDomain: true,
		//dataType: 'json',
		contentType:'application/json',
		//contentType: "application/json; charset=utf-8",
		data: JSON.stringify({
				nombre: nombreEquipo.val(),
				titulosliga: titulosLiga.val(),
				titulosinter: titulosInter.val(),
				fundacion: fundacion.val(),
				imagen:imagenEquipo.val()}),
		success: function(data){
			alertify.success("Equipo registrado con exito");
			//location.reload(),
			console.log("Entra")
			clearTextAgregarEquipos()
			
		},
		error:function(error){
			alertify.error('El equipo no se ha podido registrar');
			console.log("falla")

		}
	});
});















//-----------------------------------------FUNCIONES----------------------------------------
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

function clearTextEditarEquipos(){
	document.getElementById('nuevoNombreEquipo').value = "";
    document.getElementById('titulosNuevosLiga').value = "";
    document.getElementById('titulosNuevosInternacionales').value = "";
    document.getElementById('idEquipos').value = "";
}

function clearTextAgregarEquipos(){
	document.getElementById('nombreEquipo').value = "";
    document.getElementById('titulosLiga').value = "";
    document.getElementById('titulosInter').value = "";
    document.getElementById('fundacion').value = "";
    document.getElementById('imagenEquipo').value = "";
}