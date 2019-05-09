var container = $('#container')
var equipo = $('#equipo')
var imagen = $('.imagen')
var jumb = $('#jumb')
var img = $('#img')
var info = $('#info')
var conta = $('#cont')

$.ajax({
    type: "GET",
    url: 'http://localhost:3000/consultar/equipos/',
    //url: 'http://localhost:3000/consultar/jugadores',
    crossDomain: true,
    dataType: "json",

    success: function(data){
        let new_html = ""
        let new_html2 = ""
        let new_html3= ""
        var nombreEquipo = data[0].nombre

        new_html += `<h1 id="titequipo">${data[0].nombre}</h1>`
        new_html2 += `<td><h2>Titulos de Liga: ${data[0].titulosliga}</h2><br><h2>Titulos de Internacionales: ${data[0].titulosinter}</h2></td>`
        new_html3 += `<td><img width="250" height="250" src="${data[0].imagen}"></td>`

        jumb.append(new_html);
        jumb.append(new_html3);
        jumb.append(new_html2);

        console.log(nombreEquipo)

        $.ajax({
            type: "GET",
            url: 'http://localhost:3000/consultar/jugadores/',
            crossDomain: true,
            dataType: "json",

            success: function(data){
                let new_html_equipo = ""

                for(let i=0; i<data.length; i++){
                    if(data[i].equipo == nombreEquipo){
                        //new_html_equipo += `Nombre: ${data[i].nombre} ${data[i].apellido}<br>Numero: ${data[i].numero}<br><img width="250" height="250" src="${data[i].imagen}"><br>`
                        new_html_equipo += `<img width="250" height="250" src="${data[i].imagen}">`
                    }
                }
                conta.append(new_html_equipo); 
            }
        })

        //new_html2 += `<img id="imagen" width="250" height="250" src="${data[i].imagen}">`
        /*if(data[i].equipo == data[0].nombre){
            //new_html += `<p>Nombre: ${data[i].nombre} ${data[i].apellido} <br>Numero: ${data[i].numero}</p>`
            new_html2 += `<img id="imagen" width="250" height="250" src="${data[0].imagen}">`
        }*/
        //container.append(new_html2);
    }
})