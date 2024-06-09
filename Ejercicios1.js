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
aaaaaaaa
/*
## 7.- Encontrar el segundo número más grande en un array:
●	Escribe una función que tome un array de números y devuelva el segundo número más grande.
*/