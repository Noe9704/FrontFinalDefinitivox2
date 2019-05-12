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