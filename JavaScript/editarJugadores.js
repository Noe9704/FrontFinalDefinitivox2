

let admin = ""
let salir = ""
if(localStorage.getItem('token') != null){
	admin += `<button><a href="./Administrador.html">Administrador</a></button>`
	salir += `<button id="salir" type="submit"><a href="../index.html">Salir</a></button>`
	$('#login').text("")
	$('#menu').append(admin)
	$('#menu').append(salir)

	$('#salir').click(function(){
		localStorage.removeItem('token')
	})
}

var token = localStorage.getItem('token');
if (token) {
  token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
}


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
		//url : 'http://localhost:3000/editar/jugadores/' + id.val(),
		url:'https://finalwebd.herokuapp.com/editar/jugadores/' + id.val(),
		crossDomain: true,
		//dataType: 'json',
		//contentType: "application/json; charset=utf-8",
		data: JSON.stringify({
					numero: numero.val(),
					equipo: equipo.val()
				}),
		headers:{
			'Content-Type':'application/json',
			'Authorization': 'Bearer ' + token
		},
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
		//url : 'http://localhost:3000/editar/jugadores/' + idBorrar.val(),
		url:'https://finalwebd.herokuapp.com/editar/jugadores/' + idBorrar.val(),
		crossDomain: true,
		//dataType: 'json',
		headers:{
			'Content-Type':'application/json',
			'Authorization': 'Bearer ' + token
		},
		//contentType:'application/json',
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
var idEquipoDelJugador = $('#idEquipoJugadorAct');

$('#agregar').click(function(){
	var datos = {
		nombre: nombreJugador.val(),
		apellido:apellidoJugador.val(),
		equipo:equipoJugador.val(),
		numero:numActJugador.val(),
		posicion:posJugador.val(),
		imagen:linkJugador.val(),
		equipoID:idEquipoDelJugador.val()
	};
	console.log(datos);
	$.ajax({
		//url : 'http://localhost:3000/jugador' + $(buscartext).val(),
		type : 'POST',
		//url : 'http://localhost:3000/editar/equipos', //+ $('#buscartext').val(),
		url : 'https://finalwebd.herokuapp.com/editar/jugadores',
		crossDomain: true,
		//dataType: 'json',
		//contentType:'application/json',
		headers:{
			'Content-Type':'application/json',
			'Authorization': 'Bearer ' + token
		},
		//contentType: "application/json; charset=utf-8",
		data: JSON.stringify({
		nombre: nombreJugador.val(),
		apellido:apellidoJugador.val(),
		equipo:equipoJugador.val(),
		numero:numActJugador.val(),
		posicion:posJugador.val(),
		imagen:linkJugador.val(),
		equipoID:idEquipoDelJugador.val()}),
		success: function(data){
			alertify.success("Jugador registrado con exito");
			//location.reload(),
			console.log("Entra")
			//clearTextAgregarEquipos()
			clearTextAgregarJugadores();
			
		},
		error:function(error){
			alertify.error('El jugador no se ha podido registrar');
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
		//url : 'http://localhost:3000/editar/equipos/' + idEquipos.val(),
		url : 'https://finalwebd.herokuapp.com/editar/equipos/' + idEquipos.val(),
		crossDomain: true,
		//dataType: 'json',
		//contentType:'application/json',
		//contentType: "application/json; charset=utf-8",
		headers:{
			'Content-Type':'application/json',
			'Authorization': 'Bearer ' + token
		},
		data: JSON.stringify({
					nombre: nuevoNombreEquipo.val(),
					titulosliga: titulosNuevoLiga.val(),
					titulosinter: titulosNuevosInternacionales.val()
				}),
		success: function(data){
			alertify.success("Equipo editado con exito");
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
		//url : 'http://localhost:3000/editar/equipos', //+ $('#buscartext').val(),
		url : 'https://finalwebd.herokuapp.com/editar/equipos',
		crossDomain: true,
		//dataType: 'json',
		//contentType:'application/json',
		headers:{
			'Content-Type':'application/json',
			'Authorization': 'Bearer ' + token
		},
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



var buscarIdJugador = $('#idBuscarJugador');
var container = $('.datosJugador');

$('#buscarBotonIdJugador').click(function(){
	clearHtml()
	//console.log(buscarIdJugador.val());
	$.ajax({
		type : "GET",
		//url : 'http://localhost:3000/consultar/jugadores/',
		url : 'https://finalwebd.herokuapp.com/consultar/jugadores/',
		crossDomain: true,		 
		dataType : "json",

		success: function(data){
			//console.log(data);
			let new_html = ""
			for(let i = 0; i < data.length;i++){

				if(data[i].nombre == buscarIdJugador.val()){
					new_html += `Nombre del jugador : ${data[i].nombre} ${data[i].apellido} id: ${data[i]._id} <br>`
				}			
		}
		console.log(new_html);
		container.append(new_html);
		clearTextBuscarIdJugador()
		},
		error:function(error){
			console.log("Falla")
		}
	});
});

var buscarIdJugadorBorrar = $('#idBuscarJugadorBorrar');
var containerBorrar = $('.datosJugadorBorrar');

$('#buscarBotonIdJugadorBorrar').click(function(){
	clearHtmlBorrar()
	//console.log(buscarIdJugador.val());
	$.ajax({
		type : "GET",
		//url : 'http://localhost:3000/consultar/jugadores/',
		url : 'https://finalwebd.herokuapp.com/consultar/jugadores/',
		crossDomain: true,		 
		dataType : "json",

		success: function(data){
			//console.log(data);
			let new_htmlBorrar = ""
			for(let i = 0; i < data.length;i++){

				if(data[i].nombre == buscarIdJugadorBorrar.val()){
					new_htmlBorrar += `Nombre del jugador : ${data[i].nombre} ${data[i].apellido} id: ${data[i]._id} <br>`
				}			
		}
		//console.log(new_htmlBorrar);
		containerBorrar.append(new_htmlBorrar);
		clearTextBuscarIdJugadorBorrar()
		},
		error:function(error){
			console.log("Falla")
		}
	});
});


var buscarIdEquipoEditar = $('#idBuscarEditarEquipo');
var containerIdEquipo = $('.datosEquiposBuscar');

$('#buscarBotonIdEquipo').click(function(){
	//clearHtmlBorrar()
	//console.log(buscarIdJugador.val());
	clearHtmlEquipos()
	$.ajax({
		type : "GET",
		//url : 'http://localhost:3000/consultar/equipos/',
		url : 'https://finalwebd.herokuapp.com/consultar/equipos/',
		crossDomain: true,		 
		dataType : "json",

		success: function(data){
			//console.log(data);
			let new_htmlEquipos = ""
			for(let i = 0; i < data.length;i++){

				if(data[i].nombre == buscarIdEquipoEditar.val()){
					new_htmlEquipos += `Nombre del equipo : ${data[i].nombre} id_:${data[i]._id}`
				}			
		}
		console.log(new_htmlEquipos);
		containerIdEquipo.append(new_htmlEquipos);
		//clearTextBuscarIdJugadorBorrar()
		clearTextBuscarIdEquipos()
		},
		error:function(error){
			console.log("Falla")
		}
	});
});


var buscarIdEquipoJugadores = $('#idBuscarEquipo');
var containerIdEquipoJugadores = $('.datosEquiposVer');

$('#buscarBotonIdEquipoJugador').click(function(){

	clearHtmlBuscaridEquiposJugador()
	$.ajax({
		type : "GET",
		//url : 'http://localhost:3000/consultar/equipos/',
		url : 'https://finalwebd.herokuapp.com/consultar/equipos/',
		crossDomain: true,		 
		dataType : "json",
		success: function(data){
			//console.log(data);
			let new_htmlIdEquipos = ""
			for(let i = 0; i < data.length;i++){

				if(data[i].nombre == buscarIdEquipoJugadores.val()){
					new_htmlIdEquipos += `Nombre del equipo : ${data[i].nombre} id_:${data[i]._id}`
				}			
		}
		console.log(new_htmlIdEquipos);
		containerIdEquipoJugadores.append(new_htmlIdEquipos);
		clearTextBuscarIdEquiposJugador()
		},
		error:function(error){
			console.log("Falla")
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

function clearTextAgregarJugadores(){
	document.getElementById('nombreJugador').value = "";
    document.getElementById('apellidoJugador').value = "";
    document.getElementById('equipoJugadorAct').value = "";
    document.getElementById('numActJugador').value = "";
    document.getElementById('posJugador').value = "";
    document.getElementById('linkJugador').value = "";
    document.getElementById('idEquipoJugadorAct').value = "";
}

function clearHtml()  
{
    document.getElementById('containerJugador').innerHTML = "";
} 


function clearTextBuscarIdJugador(){
	document.getElementById('idBuscarJugador').value = "";
} 


function clearHtmlBorrar(){
    document.getElementById('containerJugadorBorrar').innerHTML = "";
} 


function clearTextBuscarIdJugadorBorrar(){
	document.getElementById('idBuscarJugadorBorrar').value = "";
} 

function clearHtmlEquipos(){
    document.getElementById('containerEquipoBuscar').innerHTML = "";
} 


function clearTextBuscarIdEquipos(){
	document.getElementById('idBuscarEditarEquipo').value = "";
} 

function clearHtmlBuscaridEquiposJugador(){
    document.getElementById('containerIdEquipos').innerHTML = "";
} 


function clearTextBuscarIdEquiposJugador(){
	document.getElementById('idBuscarEquipo').value = "";
} 