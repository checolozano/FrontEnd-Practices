window.onload = function (){
	var signos = "+-*/";
	document.getElementById('valor').onkeypress = function(event){
		return numeros(event);
	} 
	var x = document.querySelectorAll("input[type=button]");
	for (var i = 0; i < x.length; i++) {
		x[i].onclick = function(){
			let n = this.value;
			if(n=="C"){
				borrar();
			}else if(n=="<"){
				borrarCaracter();
			}else if(n=="="){
				calcular();
			}else if(signos.indexOf(n)>-1){
				validarSigno(n);

			}else{
				regresar(n);
			}
		}
	}
}
/****************************
FUNCIONES
****************************/
function numeros(e){
	let tecla = e.keyCode;
	let teclado = String.fromCharCode(tecla);
	let especiales = new Array();
	especiales["backspace"] = 8;
	especiales["Izquierda"] = 37;
	especiales["Derecha"] = 39;
	let bandera = false;
	let numeros = "0123456789.";
	//
	bandera = especiales.includes(tecla);
	//
	if (numeros.indexOf(teclado)==-1 && bandera==false) {
		return false;
	}
	console.log(teclado);
}

function borrar(){
	document.forma.valor.value="";
	}

function borrarCaracter(){
	let anterior = document.forma.valor.value;
	let nuevo = anterior.substring(0,anterior.length-1);
	document.getElementById("valor").value=nuevo;
}
function calcular(){
	let resultado = eval(document.forma.valor.value);
	if (resultado=="Infinity"){
		document.forma.valor.value= "no se puede dividir entre cero"
	}else{
		document.forma.valor.value = resultado;
	}
	
}
function validarSigno(n){
	let anterior = document.forma.valor.value;
	if(anterior!=""){
		document.getElementById("valor").value = anterior +n;
		cadena = document.getElementById("valor").value;

		let record = 0;
		let igual = 1;

		for (var a = 0; a < cadena.length; a++) {
			if(cadena.charAt(a)=="+" || cadena.charAt(a)=="-" || cadena.charAt(a)=="*" ||
			 cadena.charAt(a)=="/" || cadena.charAt(a)=="."){
				igual++;
			}else{
				if (igual>record){
					record = igual;
				}else{
					igual = 1;
				}
			}
			if(igual>record){
				record = igual;
			}
			if(record>2){
				var numero = cadena.substring(0,cadena.length-1);
				document.getElementById("valor").value = numero;
				record=0; igual = 1;
			}
		}
	}
}

function regresar(n){
	let anterior = document.forma.valor.value;
	let nuevo = anterior+n;
	document.getElementById("valor").value=nuevo;
}
