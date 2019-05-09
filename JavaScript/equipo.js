var container = $('#container')
var equipo = $('#equipo')
var imagen = $('.imagen')
var jumb = $('#jumb')

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
            new_html2 += `<span id="equi"><a href="./PorEquipo.html"><img id="imagen" width="250" height="250" src="${data[i].imagen}"></a></span>`


            /*$.ajax({
                type: "GET",
                url: 'http://localhost:3000/consultar/equipos/',
                crossDomain: true,
                dataType: "json",
            })*/
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
        container.append(new_html2);
        
        //container.append(new_html2);
    }
})