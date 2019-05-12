var container = $('.container');
var tabla = $('.tabla');
var img = $('.imagen');
var texto = $('#personaNombre');
var nom = $('.nom')
var ima = $('.ima')
var prueba = $('.prueba')
var bre = $('.bre')
var errorhtml = $('#error');
var menu = $('menu')

//Si se tiene el token se habilitan los botones de administrador
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

$('#buscar').click(function(){
	$.ajax({
		type : "GET",
		url : 'https://finalwebd.herokuapp.com/consultar/jugadores/',
		crossDomain: true,		 
		dataType : "json",

		success: function(data){
			console.log(data);
			let new_html = ""
			let new_html2 = ""
			let error = ""
			let br = ""
			var cont = 0
			for(let i = 0; i < data.length;i++){
				var flag = 0;
				var id = 0;

				if(data[i].nombre == texto.val() || data[i].apellido == texto.val()){

					new_html += `<td>Nombre: ${data[i].nombre} ${data[i].apellido} <br>Numero: ${data[i].numero}<br>Equipo: <span class"equipoID" id="${data[i].equipoID}"><a href="./PorEquipo.html?id=${data[i].equipoID}">${data[i].equipo}</a></span></td>`
					new_html2 += `<td><img width="250" height="250" src="${data[i].imagen}"></td>`
					console.log(data[i].equipoID)	
				}

				else {
					flag = 1;
				}
				console.log(data.length);
		}
		nom.append(new_html);
		ima.append(new_html2);
		clearText();
		}
	}).done(function(response){
		$('.equipoID').click(function(event){ 
		alert('hola')
		console.log(event)
		var id = event.currentTarget.id;
		window.location = ("./PorEquipo.html?id="+id);
		});
	});
});

function clearText()  
{
    document.getElementById('personaNombre').value = "";
 
} 
