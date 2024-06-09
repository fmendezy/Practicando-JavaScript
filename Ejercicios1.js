/* 
               ,,                              ,,             ,,                    
`7MM"""YMM     db                              db             db                    
  MM    `7                                                                          
  MM   d     `7MM  .gP"Ya  `7Mb,od8  ,p6"bo  `7MM   ,p6"bo  `7MM   ,pW"Wq.  ,pP"Ybd 
  MMmmMM       MM ,M'   Yb   MM' "' 6M'  OO    MM  6M'  OO    MM  6W'   `Wb 8I   `" 
  MM   Y  ,    MM 8M""""""   MM     8M         MM  8M         MM  8M     M8 `YMMMa. 
  MM     ,M    MM YM.    ,   MM     YM.    ,   MM  YM.    ,   MM  YA.   ,A9 L.   I8 
.JMMmmmmMMM    MM  `Mbmmd' .JMML.    YMbmd'  .JMML. YMbmd'  .JMML. `Ybmd9'  M9mmmP' 
            QO MP                                                                   
            `bmP     
            
    Desarrollo de ejercicios de programación en JavaScript
s
    // FIGURAS anscii
    https://fsymbols.com/es/arte-de-texto/#all_cats 

    // Generador de nombres anscii
    https://fsymbols.com/es/generadores/tarty/

*/


/* 
´´´´´´´´´´´´´´´´´´´´´´¶¶¶¶¶¶¶¶¶
´´´´´´´´´´´´´´´´´´´´¶¶´´´´´´´´´´¶¶
´´´´´´¶¶¶¶¶´´´´´´´¶¶´´´´´´´´´´´´´´¶¶
´´´´´¶´´´´´¶´´´´¶¶´´´´´¶¶´´´´¶¶´´´´´¶¶
´´´´´¶´´´´´¶´´´¶¶´´´´´´¶¶´´´´¶¶´´´´´´´¶¶
´´´´´¶´´´´¶´´¶¶´´´´´´´´¶¶´´´´¶¶´´´´´´´´¶¶
´´´´´´¶´´´¶´´´¶´´´´´´´´´´´´´´´´´´´´´´´´´¶¶
´´´´¶¶¶¶¶¶¶¶¶¶¶¶´´´´´´´´´´´´´´´´´´´´´´´´¶¶
´´´¶´´´´´´´´´´´´¶´¶¶´´´´´´´´´´´´´¶¶´´´´´¶¶
´´¶¶´´´´´´´´´´´´¶´´¶¶´´´´´´´´´´´´¶¶´´´´´¶¶
´¶¶´´´¶¶¶¶¶¶¶¶¶¶¶´´´´¶¶´´´´´´´´¶¶´´´´´´´¶¶
´¶´´´´´´´´´´´´´´´¶´´´´´¶¶¶¶¶¶¶´´´´´´´´´¶¶
´¶¶´´´´´´´´´´´´´´¶´´´´´´´´´´´´´´´´´´´´¶¶
´´¶´´´¶¶¶¶¶¶¶¶¶¶¶¶´´´´´´´´´´´´´´´´´´´¶¶
´´¶¶´´´´´´´´´´´¶´´¶¶´´´´´´´´´´´´´´´´¶¶
´´´¶¶¶¶¶¶¶¶¶¶¶¶´´´´´¶¶´´´´´´´´´´´´¶¶
´´´´´´´´´´´´´´´´´´´´´´´¶¶¶¶¶¶¶¶¶¶¶

    1.- Escribe una función que tome una cadena como argumento y devuelva la cadena invertida.
    ===============================
    Escribe una función que tome una cadena como argumento y devuelva la cadena invertida.
*/

/*
█▀█ ▄▀█ █▄░█ █▀▀ █░█ █▀█
█▀▀ █▀█ █░▀█ █▄▄ █▀█ █▄█
*/
var cadena = "Bartolomeo"
function invertiendo(cadena){
    var resultado = [];// declaro array vacio
    var str2array = cadena.split('');
    var array = Array.from(cadena);
    for(let i = array.length -1; i>= 0; i--){
        resultado.push(cadena[i]);
    }
    resultado = resultado.join('');
    return console.log(resultado);
}
invertiendo(cadena);

/*
█▀▀ █ ▄▀█ █▄░█ █░░ █░█ █▀▀ ▄▀█
█▄█ █ █▀█ █░▀█ █▄▄ █▄█ █▄▄ █▀█
*/
const cadenita = "Pikacho"; 

function revertir(cadena) {
    let convertir = cadena.split(''); 
    let darVuelta = convertir.reverse(); 
    let unir = darVuelta.join('');
    console.log(unir)
}

revertir(cadenita); 


/*
__________________________________________________
__________________oSSo__________SSSo______________
_________________8¶¶¶¶S________$¶¶¶¶S_____________
_________________¶¶¶¶¶8________¶¶¶¶¶S_____________
_________________¶¶¶¶¶8________¶¶¶¶¶S_____________
_________________$¶¶¶¶$________¶¶¶¶¶S_____________
_________________$¶¶¶¶$________¶¶¶¶¶S_____________
_________________¶¶¶¶¶8_______S¶¶¶¶¶S_____________
______ooo_______o¶¶¶¶¶S_______$¶¶¶¶$______________
____o$¶¶¶8______8¶¶¶¶¶_______8¶¶¶¶¶o______________
____S¶¶¶¶¶______S¶¶¶¶S______o¶¶¶¶¶$_______________
____S¶¶¶¶¶________oo_________$¶¶¶$o_______________
____S¶¶¶¶¶o____________________o__________________
____o¶¶¶¶¶8____________________________S88S_______
_____8¶¶¶¶¶o_________________________S¶¶¶¶¶8______
_____o¶¶¶¶¶¶o_____________________S$¶¶¶¶¶¶¶o______
______S¶¶¶¶¶¶8So_______________o8¶¶¶¶¶¶¶¶8o_______
__8$$$$¶¶¶¶¶¶¶¶¶¶$8So_______oS$¶¶¶¶¶¶¶8So_________
o¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶$S_____________
¶¶¶¶Soooo8¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶8o_______________
¶¶¶$_____o$¶¶¶8S8¶¶¶¶$$$¶¶¶$88So__________________
¶¶¶¶$88Soooo8$¶¶¶¶¶$S_____________________________
o$¶¶¶¶¶¶¶¶¶¶¶¶¶¶$So_______________________________
___oSS8$$$$$$So___________________________________


    2.- Eliminar duplicados de un array:
    ●	Escribe una función que tome un array y devuelva un nuevo array sin elementos duplicados.
*/

/*
█▀█ ▄▀█ █▄░█ █▀▀ █░█ █▀█
█▀▀ █▀█ █░▀█ █▄▄ █▀█ █▄█
*/

/*
Referencias:
    https://www.freecodecamp.org/espanol/news/javascript-splice-como-ulitizar-el-metodo-splice-de-arreglo-en-js/
    https://www.freecodecamp.org/espanol/news/tutorial-de-arrayfilter-de-javascript-como-iterar-a-traves-de-los-elementos-en-un-arreglo/
*/
let lista = [1,9,2,2,3,1,4,4,'22','22', "Francisco", "Francisco", "Francisco"];
function eliminarDuplicados(lista){
    let array = [];
    for(let i = 0; i<lista.length; i++){
        if(!array.includes(lista[i])){
            array.push(lista[i]);
        }
    }
    return console.log(array);
}
eliminarDuplicados(lista);// resultado en consola [ 1, 9, 2, 3, 4, '22', 'Francisco' ]

/*
█▀▀ ▄▀█ █▀█ █░░ █▀█ █▀
█▄▄ █▀█ █▀▄ █▄▄ █▄█ ▄█
*/
let listaOriginal = [1,1,2,2,3,3,4,4, '22', '22'];

function eliminarDuplicadosConSet(lista){
    const dataArray = new Set(a);
    let listaCorregida = [...dataArray];
    return console.log(listaCorregida);
}   
eliminarDuplicadosConSet(listaOriginal);


// esta funcion modifica la primera lista, no creando un array nuevo, pero mostrando los valores como los esperamos
function eliminarDuplicadosCarlos(listaCarlos) {
    let resultado = listaCarlos.filter((item,index)=>{
        return listaCarlos.indexOf(item) === index;
    })
    console.log(resultado);
}
eliminarDuplicadosCarlos(listaOriginal);


/*
3.- Buscar el número más grande en un array:
●	Escribe una función que tome un array de números y devuelva el número más grande.
*/

/*
█▀█ ▄▀█ █▄░█ █▀▀ █░█ █▀█
█▀▀ █▀█ █░▀█ █▄▄ █▀█ █▄█
*/
let listDeNumeros = [1,1,2,2,100,3,4,4,5];

function buscandoaNemo(a){
    let maximo = Math.max(...a);
    return console.log(maximo);
}
buscandoaNemo(listDeNumeros);


/*
█▀▀ ▄▀█ █▀█ █░░ █▀█ █▀
█▄▄ █▀█ █▀▄ █▄▄ █▄█ ▄█
*/
const listaValorAlto = [1, 3, 2, 9];

function numeroMasAlto(){
    return console.log(Math.max(...lista));
}

numeroMasAlto(listaValorAlto);


/*
4.- Sumar todos los números de un array:
●	Escribe una función que tome un array de números y devuelva la suma de todos los números.
*/

/*
█▀▀ ▄▀█ █▀█ █░░ █▀█ █▀
█▄▄ █▀█ █▀▄ █▄▄ █▄█ ▄█
*/
const listaOriginal2 = [1, 3, 2];

function sumaTotalArray(){
    let total = numero.reduce((a , b) => a + b, 0);
    return console.log(total);
}
sumaTotalArray(listaOriginal2)


/*
█▀▀ █ ▄▀█ █▄░█ █░░ █░█ █▀▀ ▄▀█
█▄█ █ █▀█ █░▀█ █▄▄ █▄█ █▄▄ █▀█
*/
const array = [1, 2, 3, 4, 5];
const suma = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma);

/*

## 5.- Comprobar si una cadena es un palíndromo:
●	Escribe una función que tome una cadena y devuelva true si es un palíndromo y false en caso contrario.
*/

/*
█▀▀ ▄▀█ █▀█ █░░ █▀█ █▀
█▄▄ █▀█ █▀▄ █▄▄ █▄█ ▄█

█▀▀ █ ▄▀█ █▄░█ █░░ █░█ █▀▀ ▄▀█
█▄█ █ █▀█ █░▀█ █▄▄ █▄█ █▄▄ █▀█
*/
const cadenita = "Eye"; //creamos variable con su valor en String

function revertir(cadena) {
    let minuscula = cadena.toLowerCase(); // pasamos el valor a minuscula
    let convertir = minuscula.split(""); //metodo split pasa una cadena de texto a un array
    let darVuelta = convertir.reverse(); //da vuelta un array
    let unir = darVuelta.join(''); //convierte array a string y los une
    if (minuscula === unir){ //comparamos la variable "minuscula" con "unir"
        return console.log("True")
    }else{
        return console.log("False")
    }
}

revertir(cadenita); // llamamos la funcion


/*
## 6.- Contar la cantidad de vocales en una cadena:
●	Escribe una función que tome una cadena y devuelva el número de vocales en la cadena.
*/

/*
█▀▀ █ ▄▀█ █▄░█ █░░ █░█ █▀▀ ▄▀█
█▄█ █ █▀█ █░▀█ █▄▄ █▄█ █▄▄ █▀█
*/
let palabra = "perrito";

function contarVocales(palabrita) {
    let contador = 0;
    for (let i = 0; i < palabrita.length; i++) {
        if ('aeiou'.includes(palabrita[i])) {
            contador++;
        }
    }
    console.log(contador); 
}

contarVocales(palabra);

/*
█▀▀ ▄▀█ █▀█ █░░ █▀█ █▀
█▄▄ █▀█ █▀▄ █▄▄ █▄█ ▄█
*/
let palabra2 = "perrito";
function countVocales(vocales){
    let convertir = vocales.match(/[aeiou]/gi).length;
    console.log(convertir)
}

countVocales(palabra2)


/*
_____________________$$$
____________________$___$
_____________________$$$
_____________________$_$
_____________________$_$
___________________$$$_$$$
_________________$$__$$$__$$$
_______________$$__$$$$$$$___$
______________$_______________$
_____________$_________________$
_____________$_________________$
_____________$_____$$$$$$$$$$$$$$$
_____________$____$_______________$
_____________$____$___$$$$$$$$$$$$$
_____________$___$___$___________$$$
_____________$___$___$_$$$___$$$__$$
_____________$___$___$_$$$___$$$__$$
_____________$___$___$___________$$$
_____________$____$___$$$$$$$$$$$$$
_____________$_____$$$$$$$$$$$$$$
_____________$_________________$
_____________$____$$$$$$$$$$$$$$
_____________$___$__$__$__$__$
_____________$__$$$$$$$$$$$$$$
_____________$__$___$__$__$__$
_____________$___$$$$$$$$$$$$$$$
____________$$$_________________$$$
__________$$___$$$_________$$$$$___$$
________$$________$$$$$$$$$__________$$$
_______$__$$_____________________$$$$___$$
____$$$$$___$$$$$$$$______$$$$$$$_______$_$
__$______$$_________$$$$$$______________$_$$
_$____$____$____________________________$_$_$
_$_____$___$______________$$$$$$$$$$$___$_$_$$
_$$$____$___$__$$$$$$$$$$$$__________$___$_$_$$
$___$$$$____$__$_____________________$___$_$$_$
$$$____$___$$__$_____________________$$__$_$__$
$___$__$__$$___$______________________$__$$$__$
$_____$$_$$____$_______________$$$____$__$_$__$

## 7.- Encontrar el segundo número más grande en un array:
●	Escribe una función que tome un array de números y devuelva el segundo número más grande.
*/

/*
█▀█ ▄▀█ █▄░█ █▀▀ █░█ █▀█
█▀▀ █▀█ █░▀█ █▄▄ █▀█ █▄█
*/
let listDeNumeros2 = [10,20,30,40,50];

function buscandoaNemo2(valorRecibido){
    let maximo = Math.max(...valorRecibido);//busca el num mas grande del array
    let indice = valorRecibido.indexOf(maximo);// encontramos el indice del numero mas grande del array
    valorRecibido.splice(indice, 1);// elimina el numero mas grande del array con el indice obtenido anteriormente.
    return console.log(Math.max(...valorRecibido));// retorna el segundo numero mas grande del array
}
buscandoaNemo2(listDeNumeros2);

/*
█▀▀ █ ▄▀█ █▄░█ █░░ █░█ █▀▀ ▄▀█
█▄█ █ █▀█ █░▀█ █▄▄ █▄█ █▄▄ █▀█
*/ 
const listaOriginal3 = [1, 3, 2, 5, 6, 25,67,213123,788,45];

function verNumMasAlto(list){
    const encontrarIndice = list.length - 2;
  console.log(listaOriginal3[encontrarIndice])
}   

verNumMasAlto(listaOriginal3)
//todo malardo

/*
█▀▀ ▄▀█ █▀█ █░░ █▀█ █▀
█▄▄ █▀█ █▀▄ █▄▄ █▄█ ▄█
*/
//FUNCION QUE MUESTRA EL 2DO VALOR MAS ALTO DE UN ARRAY
const listaOriginalMasAlto = [1,3,4,6,7,88,3,22];

function segMasAlto(lista){
    const listaOr = listaOriginalMasAlto.sort((a, b) => b - a); //Ordena array de forma Descendente
    return console.log(listaOr[1]); // Muestra el 2do objeto del array
}

segMasAlto(listaOriginalMasAlto);

/*
## 8.- Convertir la primera letra de cada palabra en mayúscula:
●	Escribe una función que tome una cadena y devuelva la cadena con la primera letra de cada palabra en mayúscula.
*/

/*
█▀█ ▄▀█ █▄░█ █▀▀ █░█ █▀█
█▀▀ █▀█ █░▀█ █▄▄ █▀█ █▄█
*/

/*
Referencias:
    https://www.freecodecamp.org/espanol/news/tutorial-de-arraymap-de-javascript-como-iterar-a-atraves-de-elementos-en-un-arreglo-con-map/
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    https://www.w3schools.com/jsref/jsref_join.asp
    https://tinchicus.com/2022/07/27/javascript-array-join/
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

let cadena = "bartOlOmeo simPson";

function primeraLetraMayuscula(cadena){
    return console.log(cadena.split(' ')// Separamos el string en un array
    .map(palabra => palabra// iteramos sobre cada palabra 
    .charAt(0).toUpperCase()// convertimos la primera letra de cada palabra (posicion 0) en mayusculas (estamos trabajando la primera letra solamente)
    + palabra.slice(1).toLowerCase())// unimos el resto de la palabra a la mayuscula que acabo de convertir
    .join(' '));// se unen todas las demas palabras en un solo string
}

primeraLetraMayuscula(cadena);// resultado: Bartolomeo Simpson

/*
█▀▀ █ ▄▀█ █▄░█ █░░ █░█ █▀▀ ▄▀█
█▄█ █ █▀█ █░▀█ █▄▄ █▄█ █▄▄ █▀█
*/ 
const palabra = 'palabrita' 
function pasarMayuscula(string){
const convertirAMayuscula = string[0].toUpperCase()
console.log(convertirAMayuscula)
}

pasarMayuscula(palabra);


/*
█▀▀ ▄▀█ █▀█ █░░ █▀█ █▀
█▄▄ █▀█ █▀▄ █▄▄ █▄█ ▄█
*/
const palabra1 = "carLos vega";

function primeraMayuscula(string) {
    return string.split(' ').map(palabra => // separa palabras en array(.split), iteramos sobre cada palabra(.map)
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' '); 
        // funcion flecha QUE, toma la primera letra (.charAt) de la palabra y la deja en mayuscula(toUpperCase)
        // y el resto (.slice) de la palabra la deja en minuscula (toLowerCase)

}

let resultado = primeraMayuscula(palabra1);
console.log(resultado); 


/*
## 9.- Fusionar dos arrays sin duplicados:
●	Escribe una función que tome dos arrays y devuelva un nuevo array que contenga todos los elementos de ambos arrays, sin duplicados.
*/

/*
█▀█ ▄▀█ █▄░█ █▀▀ █░█ █▀█
█▀▀ █▀█ █░▀█ █▄▄ █▀█ █▄█
*/
let lista = [1,9,2,2,3,1,4,4,'22','22', "Francisco", "Francisco", "Francisco"];
let lista2 = [1,9,2,2,3,1,4,4,'22','22', "Francisco", "Francisco", "Francisco"];

function eliminarDuplicados2(lista,lista2){
    let array = [];
    let resultado = [];
    for(let i = 0; i<lista.length; i++){
        if(!array.includes(lista[i])){
            array.push(lista[i]);
        }
    }
    for(let i = 0; i<lista2.length; i++){
        if(!array.includes(lista2[i])){
            array.push(lista2[i]);
        }
    }
    for(let i = 0; i<array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i]);
        }
    }
    return console.log(resultado);
}
eliminarDuplicados2(lista,lista2);// resultado en consola [ 1, 9, 2, 3, 4, '22', 'Francisco' ]

/*
█▀▀ █ ▄▀█ █▄░█ █░░ █░█ █▀▀ ▄▀█
█▄█ █ █▀█ █░▀█ █▄▄ █▄█ █▄▄ █▀█
*/ 
const arreglo1 = [1,2,3,4,5,5,6];
const arreglo2 = [1,2,2,4,5,6,7];

function fucionar(arreglouno, arreglodos){
let fucionArreglos = arreglouno.concat(arreglodos);
console.log(fucionArreglos);

const dataArr = new Set(fucionArreglos);
let result = [...dataArr];
console.log(result); 

}

fucionar(arreglo1, arreglo2);

/*
█▀▀ ▄▀█ █▀█ █░░ █▀█ █▀
█▄▄ █▀█ █▀▄ █▄▄ █▄█ ▄█
*/
let listaUno = [1,1,2,2,3,3,4,4, '22', '23'];
let listaDos = [3,5,7,20,3,8,1,7, '23', '22'];

function concatenarArrays(listaOne, listaTwo){

    let listaConcatenada = listaOne.concat(listaTwo); // concatenamos ambas listas
    const dataArray = new Set(listaConcatenada); // eliminamos los valores repetidos
    let listaCorregida = [...dataArray]; // agregamos valores a nuevo array
    return console.log(listaCorregida); // retornamos array
    
}   
concatenarArrays(listaUno, listaDos);

/*
## 10.- Generar un array de números aleatorios:
●	Escribe una función que tome dos argumentos, un número n y un número max, y devuelva un array de n números aleatorios entre 0 y max.
**Desarrollado por **
*/


/*
█▀█ ▄▀█ █▄░█ █▀▀ █░█ █▀█
█▀▀ █▀█ █░▀█ █▄▄ █▀█ █▄█
*/

/*
Referencias:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    https://www.w3schools.com/js/js_random.asp
    https://es.stackoverflow.com/questions/560867/obtener-un-n%C3%BAmero-aleatorio-dentro-de-un-rango-con-javascript
*/
function numerosAleatorios(min, max){
    let array = [];
    for(let i = 0; i < min; i++){
        array.push(
            Math.floor(
                Math.random() * (max - min + 1)) + min);
    }
    return console.log(array);
}
numerosAleatorios(3,10);

/*
█▀▀ █ ▄▀█ █▄░█ █░░ █░█ █▀▀ ▄▀█
█▄█ █ █▀█ █░▀█ █▄▄ █▄█ █▄▄ █▀█
*/ 
function numeroAleatorio(numeroN, numeroMax) {
    let arreglito = [];
    for (let i = 0; i < numeroN; i++) { 
        let numeros = Math.floor(Math.random() * (numeroMax - numeroN + 1)) + numeroN;
        arreglito.push(numeros);
    }
    console.log(arreglito);
    return arreglito;
}

numeroAleatorio(20, 10);

/*
█▀▀ ▄▀█ █▀█ █░░ █▀█ █▀
█▄▄ █▀█ █▀▄ █▄▄ █▄█ ▄█
*/

let n = 10; // variable de cantidad de veces que se creara un valor aleatorio
let max = 100; // variable que indica el valor maximo a crear aleatoriamente

function generarNumerosAleatorios(n, max) {
    let numerosAleatorios = [];
    for (let i = 0; i < n; i++) { //crea bucle for, para que repita "N" veces al bucle
        let numeroAleatorio = Math.floor(Math.random() * (max + 1)); //crea aleatorio hasta el valor MAX
        numerosAleatorios.push(numeroAleatorio); // se agrega el valor al Array "numerosAleatorios"
    }
    return console.log(numerosAleatorios); //Retorna valor de Array
}

generarNumerosAleatorios(n, max);


███████╗██╗░░░░░  ███████╗██╗███╗░░██╗
██╔════╝██║░░░░░  ██╔════╝██║████╗░██║
█████╗░░██║░░░░░  █████╗░░██║██╔██╗██║
██╔══╝░░██║░░░░░  ██╔══╝░░██║██║╚████║
███████╗███████╗  ██║░░░░░██║██║░╚███║
╚══════╝╚══════╝  ╚═╝░░░░░╚═╝╚═╝░░╚══╝