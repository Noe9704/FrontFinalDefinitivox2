var container = $('.container');
var tabla = $('.tabla');
var img = $('.imagen');
var texto = $('#personaNombre');
var nom = $('.nom')
var ima = $('.ima')
var prueba = $('.prueba')
var bre = $('.bre')

$('#buscar').click(function(){
	//alert($("#buscartext").val());
	$.ajax({
		//url : 'http://localhost:3000/jugador' + $(buscartext).val(),
		type : "GET",
		url : 'http://localhost:3000/consultar/jugadores/', //+ $('#buscartext').val(),
		crossDomain: true,		 
		dataType : "json",

		success: function(data){
			console.log(data);
			let new_html = ""
			let new_html2 = ""
			let br = ""
			var cont = 0
			for(let i = 0; i < data.length;i++){
				/*if(data[i].nombre == texto.val()){

					//console.log(data[i].name + " " + data[i].age);
					console.log(data.length);
					container.append(data[i].nombre + " " + data[i].numero)
					//img.append(data[i].img);
					new_html += `<img id="imagen" width="250" height="250" src="${data[i].img}">`
					img.append(new_html);
					break;
				}
				else{
					container.append("Usuario No encontrado");
					break;
				}*/
				if(data[i].nombre == texto.val() || data[i].apellido == texto.val()){

					new_html += `<td>Nombre: ${data[i].nombre} ${data[i].apellido} <br>Numero: ${data[i].numero}<br>Equipo: <a href= "./PorEquipo.html">${data[i].equipo}</a></td>`
					new_html2 += `<td><img width="250" height="250" src="${data[i].imagen}"></td>`
					
					//new_html += `<div><span> Jugador: ${data[i].nombre} numero: ${data[i].numero}<br><img id="imagen" width="250" height="250" src="${data[i].imagen}"></span></div>`
					//container.append("Jugador: " + data[i].nombre + " numero: " + data[i].numero)
					//img.append(data[i].img);
					//new_html += `<img id="imagen" width="250" height="250" src="${data[i].imagen}">`
					
				}
				else{
					new_html2 += `<span>No se encontro al Jugador ${texto.val()}</hspan>`
					
				}
				console.log(data.length);

			//container.append(data[0].name);
		}
		//img.append(new_html);
		br += `<td><br></td>`
		nom.append(new_html);
		ima.append(new_html2);
		cont = cont + 1
		if(cont == 3){
			bre.append(br)
		}
			//$.each(data,function(index,item){
				/*
				$.each(item, function(key,value){
					container.append( value + '</br>');
				});
				container.append('<br/></br>');
			});*/
		},
		error:function(error){
			console.log("Falla")
		}
	
	});
});