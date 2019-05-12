var container = $('#container')
var equipo = $('#Equipo')
var imagen = $('.imagen')
var jumb = $('#jumb')
var imagen = $('#imagen')

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
    url: 'https://finalwebd.herokuapp.com/consultar/equipos/',
    crossDomain: true,
    dataType: "json",

    success: function(data){
        let new_html = ""
        let new_html2 = ""
        var cont = 1
        for(let i = 0; i<data.length; i++){
            new_html += `<br>`
            new_html2 += `<span class="cont" id="${data[i]._id}"><a id="pointer"><img width="250" height="250" src="${data[i].imagen}"></a></span>`
        }
        container.append(new_html2);
    }
}).done(function(response){
    $('.cont').click(function(event){
    var id = event.currentTarget.id;
    window.location = ("./PorEquipo.html?id="+id);
    });
});