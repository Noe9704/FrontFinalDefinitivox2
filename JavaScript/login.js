
$('#iniciar').click(function(){
	var email = $('#username').val();
	var password = $('#password').val();

	json_to_send = {
		"email": email,
		"password": password
	};

	json_to_send = JSON.stringify(json_to_send);
	console.log(json_to_send)
	$.ajax({
		//url : 'http://localhost:3000/jugador' + $(buscartext).val(),
		method : 'POST',
		url : 'http://localhost:3000/users/login', //+ $('#buscartext').val(),
		headers: {
			 'Content-Type':'application/json'
			},
		dataType: 'json',
		data: json_to_send,
		//contentType: "application/json; charset=utf-8",
		success: function(data){
			//location.reload(),
			//alertify.success("Jugador agregado con exito");
			 // guardar token en localstorage o cookie
			 alert(data.token);
			localStorage.setItem('token', data.token)

			console.log("Entra")
			window.location = '../index.html'
			//clearTextAgregar();
		},
		error:function(error){
			//alertify.error('El jugador no se ha podido agregar');
			console.log("falla")

		}
	});
});
