$('#iniciar').click(function(){
	var email = $('#username').val();
	var password = $('#password').val();

	json_to_send = {
		"email": email,
		"password": password
	};

	json_to_send = JSON.stringify(json_to_send);
	//console.log(json_to_send)

	$.ajax({
		method : 'POST',
		url: 'https://finalwebd.herokuapp.com/users/login',
		headers: {
			 'Content-Type':'application/json'
			},
		dataType: 'json',
		data: json_to_send,
		//Si se inicia sesion correctamente te manda a la pagina de administrador
		success: function(data){
			//guardar token en localstorage o cookie
			localStorage.setItem('token', data.token)

			console.log("Entra")
			window.location = './Administrador.html'
		},
		error:function(error){
			console.log("falla")

		}
	});
});
