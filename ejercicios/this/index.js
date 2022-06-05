console.log(`this es ${this}`);

function whoIsThis() {
	console.log(`this es ${this}`);
}

console.log(`whiIsThis() es ${whoIsThis()}`);

const person = {
	nombre: 'Juan',
	saludar: function () {
		console.log(`Hola ${this.nombre}`);
	}
};

person.saludar();

const accion = person.saludar;
accion();

//this class

function Person(nombre) {
	this.nombre = nombre;
}

Person.prototype.saludar = function () {
	console.log(`Hola ${this.nombre}`);
};

const angela = new Person('Angela');
console.log(angela.saludar());

function Hero(nombre) {
	this.nombre = nombre;
}

Hero.prototype.saludar = function () {
	console.log(`Hola ${this.nombre}`);
};

const zelda = new Hero('Zelda');
console.log('Name:', zelda.nombre);
console.log('saludar:', zelda.saludar);

console.log(zelda.hasOwnProperty('nombre'));
//Promesas son micro tareas siempre se van encolar antes de las tareas
