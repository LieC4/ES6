/*Iteración #1: Arrows**


Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros*/



const sumar = (a = 10, b = 5) => {
    return a + b;
}
console.log(sumar());
console.log(sumar(10));
console.log(sumar(20, 69));



/* Iteración #2: Destructuring */
/* 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto. */


const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;

console.log(gender);
console.log(gender[0]);
console.log(title);
console.log(year);


/*2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/

const fruits = ['Banana', 'Strawberry', 'Orange'];


let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);


/*2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
    return {nombre: 'Bengal Tiger', race: 'Tiger'}
};

let {nombre} = animalFunction();
let {race} = animalFunction();

console.log(nombre);
console.log(race); 


/* 2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo. */

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };

let {name} = car;
let {itv} = car;
console.log(itv);

let itv1 = car.itv[0];
console.log(itv1);

let itv2 = car.itv[1];
console.log(itv2);

let itv3 = car.itv[2];
console.log(itv3);


/*     Iteración #3: Spread Operator */

//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

let copypointsList = [...pointsList];
console.log(copypointsList);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let copytoy= {...toy};
console.log(copytoy);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
//spread operatos.
const pointsLists = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

let bothpointLists = [...pointsLists, ...pointsLis2];
console.log(bothpointLists);

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
//con spread operators.
const toys = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

let bothtoys = {...toys, ...toyUpdate};
console.log(bothtoys);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
//pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let newcolors = [...colors];
newcolors.splice(2,1);
console.log(newcolors);

/* Iteración #4: Map */

//4.1 Dado el siguiente array, devuelve un array con sus nombres 
//utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersNames = users.map(users => users.name);
console.log(usersNames);

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
//empiece por 'A'.
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const users2 = users1.map(users1 => users1.name.startsWith('A') ? 'Anacleto' : users1.name);
console.log(users2);


//4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
//cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}];

const visitedcities = (list, item) => {
    return list.map(item => {
        if (isVisited=true ? (cities.name + 'Visitado') : cities.name)
        console.log()
    })
}
console.log(visitedcities(cities));


/* Iteración #5: Filter */

//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayores = ages.filter(function (age) {
    return age>17})

console.log(mayores);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages2.filter(function (par) {
    return par % 2 == 0
})

console.log(pares);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const gameLoL = streamers.filter(Lol => Lol.gameMorePlayed == 'League of Legends'
);
console.log(gameLoL);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
//usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const LosU = streamers2.filter(nombre => nombre.name.includes('u'));
console.log(LosU);

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
//.age sea mayor que 35.

//const Legendas = streamers2.filter(juego => juego.gameMorePlayed.includes('Legends'))


//const edadmayor = Legendas.map(asdf => {(asdf.age>35) ? asdf.gameMorePlayed.toUpperCase(): '' ; return asdf});
//console.log(edadmayor);

//const mayusculas = edadmayor.map(letras => letras.gameMorePlayed.toUpperCase());
//console.log(mayusculas);
const towStreamers = streamers.filter( values => values.gameMorePlayed.includes('Legends'));
const newArray = towStreamers.map( values => ( values.age > 35 ) ? values.gameMorePlayed = values.gameMorePlayed.toUpperCase() : values.gameMorePlayed);
console.log(newArray);


//5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
//los streamers que incluyan la palabra introducida en el input. De esta forma, si 
//introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'} ];


/* Iteración #6: Find */

//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];

let numero = numbers.find (number => number == 100);
console.log(numero);

//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

let movie = movies.find(peli=>peli.date == 2010);
console.log(movie);

//6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
//'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
//spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
//lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

let alien = aliens.find(alienigena=> alienigena.name == 'Cucushumush');
let mutacion = mutations.find(mutante => mutante.name == 'Porompompero');
const newalien = {...alien, mutation: mutacion};
console.log(newalien);

/* Iteración #7: Reduce */
//7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
//los alumnos usando la función .reduce().


const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const notas = exams.reduce(function (acc, nota) {
    return acc + nota.score;}, 0);
console.log(notas);

//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
//alumnos que esten aprobados usando la función .reduce().

const aprobados = exams.filter(function (notass) {
        return notass.score>5});

const notas2 = aprobados.reduce(function (acc, asd) {
    return acc + asd.score;}, 0);

console.log(notas2);

//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
const notas3 = exams.reduce(function (acc, nota) {
    return (acc + nota.score)/exams.length;}, 0);
console.log(notas3);
