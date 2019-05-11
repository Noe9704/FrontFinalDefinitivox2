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
    url: 'http://localhost:3000/consultar/equipos/',
    crossDomain: true,
    dataType: "json",

    success: function(data){
        let new_html = ""
        let new_html2 = ""
        var cont = 1
        for(let i = 0; i<data.length; i++){
            //new_html2 += `<br>`
            //new_html += `<a href="./PorEquipo.html"><p>${data[i].nombre}</p><img id="imagen" width="250" height="250" src="${data[i].imagen}"><a>`
            //new_html += `${data[i].nombre}`
            /*if(cont == 1){
                new_html2 += `<span class="row row-no-gutters" id="equipo"><span class="jumbotron" id="prueba"><a href="./PorEquipo.html"><span id="tit">${data[i].nombre}</span><img id="imagen" width="250" height="250" src="${data[i].imagen}"></a></span></span>`
                //container.append(new_html2);
                cont = 2
            } else if(cont == 2){
                new_html2 += `<span class="row row-no-gutters" id="equipo1"><span class="jumbotron" id="prueba"><a href="./PorEquipo.html"><span id="tit">${data[i].nombre}</span><img id="imagen" width="250" height="250" src="${data[i].imagen}"></a></span></span>`
                //container.append(new_html2);
                cont = 3
            } else if(cont == 3){
                new_html2 += `<span class="row row-no-gutters" id="equipo2"><span class="jumbotron" id="prueba"><a href="./PorEquipo.html"><span id="tit">${data[i].nombre}</span><img id="imagen" width="250" height="250" src="${data[i].imagen}"></a></span></span>`
                //container.append(new_html2);
                cont = 1
            }*/
            new_html += `<br>`
            new_html2 += `<span class="cont" id="${data[i]._id}"><a id="pointer"><img width="250" height="250" src="${data[i].imagen}"></a></span>`

            /*var id = data[0]._id
            console.log(id)*/

            /*if(cont == 1){
                new_html2 += `<a href="./PorEquipo.html"><span id="tit">${data[i].nombre}</span><img id="imagen" width="250" height="250" src="${data[i].imagen}"></a>`
                //container.append(new_html2);
                cont = 2
            } else if(cont == 2){
                new_html2 += `<a href="./PorEquipo.html"><span id="tit">${data[i].nombre}</span><img id="imagen" width="250" height="250" src="${data[i].imagen}"></a>`
                //container.append(new_html2);
                cont = 3
            } else if(cont == 3){
                new_html2 += `<a href="./PorEquipo.html"><span id="tit">${data[i].nombre}</span><img id="imagen" width="250" height="250" src="${data[i].imagen}"></a>`
                //container.append(new_html2);
                cont = 1
            }*/
            
        }
        /*$.ajax({
            type: "GET",
            url: 'http://localhost:3000/consultar/equipos/'+id,
            crossDomain: true,
            dataType: "json",

            success: function(data){
                let equi = ""
                equi += `<img id="imagen" width="250" height="250" src="${data.nombre}">`
            }
        })*/
        container.append(new_html2);
        //equipo.append(equi)
        
        //container.append(new_html2);
    }
}).done(function(response){
    $('.cont').click(function(event){
    var id = event.currentTarget.id;
    window.location = ("./PorEquipo.html?id="+id);
    });
});