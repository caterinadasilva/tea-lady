function mostrarData() {
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var email = document.getElementById('email').value;
	var address = document.getElementById('address').value;
	var phone = document.getElementById('phone').value;
	var selectorIndex = document.getElementById('selector').selectedIndex;
	var selectorOpts = document.getElementById("selector").options;
	var pack = selectorOpts[selectorIndex].value;
	console.log(firstName);
	console.log(lastName);
	console.log(email);
	console.log(address);
	console.log(phone);
	console.log(selectorIndex);
	console.log(pack);
	console.log(check);
	if (firstName === "" || lastName === "" || email === "" || address === "" || phone === "" || selectorIndex === 0) {
		alert("Por favor, rellene todos los campos.");
	} else if (document.getElementById('check').checked === false) {
		alert("Para poder recibir su pack, debe aceptar la suscripción mensual a nuestro newsletter.");
	} else {
		document.getElementById("clientes").innerHTML += '<div class="dataBox"><h4>' + firstName + ' ' + lastName + '</h4><p><b>Mail: </b>' + email + '</p><p><b>Dirección: </b>' + address + '</p><p><b>Teléfono: </b>' + phone + '</p><p><b>Opción: </b>' + pack + '</p></div>';
		document.getElementById('firstName').value = "";
		document.getElementById('lastName').value = "";
		document.getElementById('email').value = "";
		document.getElementById('address').value = "";
		document.getElementById('phone').value = "";
		document.getElementById('selector').selectedIndex = 0;
		document.getElementById('check').checked = false;
		return false;
	}
}