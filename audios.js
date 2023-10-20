let sound = true;

 //NOMBRE DE LA VARIABLE CREADA DENTRO DE LA FUNCIÓN - ID DE AUDIO CREADO EN LA TARJETA CON LA IMAGEN

 //------MENU-------
function Bien_Comencemos(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let bien = document.getElementById("Bien");
		bien.src="mp3/Bien_Comencemos.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		bien.volume = 0.7; //VOLUMEN DEL AUDIO
		bien.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function TChandra(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let chandra = document.getElementById("Chandra");
		chandra.src="mp3/chandra.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		chandra.volume = 0.7; //VOLUMEN DEL AUDIO
		chandra.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function TChandra_En(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let chandra = document.getElementById("ChandraEn");
		chandra.src="mp3/chandraIngles.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		chandra.volume = 0.7; //VOLUMEN DEL AUDIO
		chandra.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function Explorer(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let explorer = document.getElementById("Hey");
		explorer.src="mp3/heyexplore.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		explorer.volume = 0.7; //VOLUMEN DEL AUDIO
		explorer.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function Explorador(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let explorador = document.getElementById("Hola");
		explorador.src="mp3/hola.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		explorador.volume = 0.7; //VOLUMEN DEL AUDIO
		explorador.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function THubble(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let hubble = document.getElementById("Hubble");
		hubble.src="mp3/Hubble.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		hubble.volume = 0.7; //VOLUMEN DEL AUDIO
		hubble.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function THubble_En(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let hubble = document.getElementById("Hubble_En");
		hubble.src="mp3/HubbleIngles.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		hubble.volume = 0.7; //VOLUMEN DEL AUDIO
		hubble.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function I_Want(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let iwant = document.getElementById("Want");
		iwant.src="mp3/iwantto.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		iwant.volume = 0.7; //VOLUMEN DEL AUDIO
		iwant.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function TJames(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let james = document.getElementById("James");
		james.src="mp3/james.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		james.volume = 0.7; //VOLUMEN DEL AUDIO
		james.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function TJames_En(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let james = document.getElementById("James_En");
		james.src="mp3/jamesIngles.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		james.volume = 0.7; //VOLUMEN DEL AUDIO
		james.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function LetsGo(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let lets = document.getElementById("Lets");
		lets.src="mp3/letsgo.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		lets.volume = 0.7; //VOLUMEN DEL AUDIO
		lets.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function Quiero_Mostrar(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let quiero = document.getElementById("Quiero");
		quiero.src="mp3/Quiero_Mostrarse.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		quiero.volume = 0.7; //VOLUMEN DEL AUDIO
		quiero.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function TSpitzer(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let spitzer = document.getElementById("Spitzer");
		spitzer.src="mp3/Spitzer.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		spitzer.volume = 0.7; //VOLUMEN DEL AUDIO
		spitzer.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}

function TSpitzer_En(){ //NOMBRE DE LA FUNCIÓN CREADA PARA MANDAR A LLAMAR
	if(sound){
		let spitzer = document.getElementById("Spitzer_En");
		spitzer.src="mp3/SpitzerIngles.mp3"; //CREACIÓN DE VARIABLE E INDICACIÓN DE DONDE ESTA GUARDADO EL AUDIO
		spitzer.volume = 0.7; //VOLUMEN DEL AUDIO
		spitzer.play(); //COMANDO PARA LA REPRODUCCIÓN DEL AUDIO	
	}
}



//ESTO SE UTILIZARÁ EN EL ARCHIVO QUE QUIERAS REPRODUCIR EL AUDIO
//LLAMA EL ARCHIVO CON <script src="audios.js"></script>
//Para utilizar se tendrá que poner dentro del mapeado de la imagen
//Ponen el nombre de la función dentro del onclick del audio que se quiere utilizar

