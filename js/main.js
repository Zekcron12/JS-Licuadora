let licuadora = "apagada"; //declaro variable.
let contenedorLicuadora = document.getElementById("blender"); //llamo al ID del primer div

function logicaLicuadora() { //funcion que pregunta el estado de la licuadora.
	if (licuadora == "apagada") { //si esta apagada, lo cambia a estado encendido.
		licuadora = "encendido";
		playSound(); //se inicia el sonido al clickear el boton.
		contenedorLicuadora.classList.add("active"); //agrega la clase 'active', es decir aplica los estilos de esta clase.
	} else { //si esta encendida, lo cambia a estado apagado.
		licuadora = "apagada";
		playSound(); //se detiene el sonido al clickear el boton.
		contenedorLicuadora.classList.remove("active"); //remueve la clase 'active'
	}
}

//SONIDOS
let sonidoLicuadora = document.getElementById("blender-licuadora-sound");
let botonLicuadora = document.getElementById("blender-button-sound");

function playSound() { //si el sonido esta en pausa, ejecutame las 2 condiciones de abajo
	if (sonidoLicuadora.paused ) {
		botonLicuadora.play();
		sonidoLicuadora.play();
	} else {
		botonLicuadora.play();
		sonidoLicuadora.pause();
		sonidoLicuadora.currentTime = 0; //resetea el sonido, lo vuelve al principio al poner pause.
	}
}
