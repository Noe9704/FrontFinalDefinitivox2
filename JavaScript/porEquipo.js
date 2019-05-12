var container = $('#container')
var equipo = $('#equipo')
var imagen = $('.imagen')
var jumb = $('#jumb')
var img = $('#img')
var info = $('#info')
var conta = $('#cont')
var url_string = window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("id");

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

$.ajax({
    type: "GET",
    url: 'https://finalwebd.herokuapp.com/consultar/equipos/' + id,
    crossDomain: true,
    dataType: "json",

    success: function(data){
        let new_html = ""
        let new_html2 = ""
        let new_html3= ""
        var nombreEquipo = data.nombre

        new_html += `<h1 id="titequipo">${data.nombre}</h1>`
        new_html2 += `<td><h2>Titulos de Liga: ${data.titulosliga}</h2><br><h2>Titulos Internacionales: ${data.titulosinter}</h2></td>`
        new_html3 += `<td><img width="250" height="250" src="${data.imagen}"></td>`

        jumb.append(new_html);
        jumb.append(new_html3);
        jumb.append(new_html2);

        console.log(nombreEquipo)

        //Traer los jugadores del equipo data.nombre
        $.ajax({
            type: "GET",
            url : 'https://finalwebd.herokuapp.com/consultar/jugadores',
            crossDomain: true,
            dataType: "json",

            success: function(data){
                let new_html_equipo = ""

                for(let i=0; i<data.length; i++){
                    if(data[i].equipo == nombreEquipo){
                        new_html_equipo += `<img width="250" height="250" src="${data[i].imagen}">`
                    }
                }
                conta.append(new_html_equipo); 
            }
        })
    }
})