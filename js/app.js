// ----------------------------------------
// FUNCIONES DEL CUADRADO

// cálculo perímetro cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

// cálculo área cuadrado
function areaCuadrado(lado){
    return lado * lado;
}

// ----------------------------------------

// FUNCIONES DEL RECTÁNGULO
// cálculo perímetro rectángulo


// ----------------------------------------

// FUNCIONES DEL TRIÁNGULO EQUILATERO (NORMAL)

// cálculo del Perímetro
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

// cálculo área Triángulo
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// ----------------------------------------

// FUNCIONES DEL CÍRCULO
// 
const PI = Math.PI;

// Cálculo del Diámetro del círculo
function diametroCirculo(radio){
    const diametro = perimetroCirculo(radio);
    return diametro * PI;
}

// Área del Circulo
function areaCirculo(radio){
    return (radio * radio) * PI;
}

// ----------------------------------------

// FUNCIONES DEL TRIÁNGULO ISÓSCELES

// Calculando altura de triángulo isósceles

// function alturaTrianguloIso(ladoA, ladoB, base){
//     if (ladoA === ladoB && ladoA != base){
//         // mensaje de confirmacion de Triangulo Isósceles
//         console.log("Este es un Triangulo Isósceles");

//         const altura = Math.sqrt((ladoA * ladoA) - (base * base) / 4);
//         return altura;
//     } else{
//         console.log("Los lados de un triangulo tienen que medir lo mismo");
//     }
// }








// ----------------------------------------



// ----------------------------------------
// INTERACCION CON HTML
// ----------------------------------------

// ---> CUADRADO

// ÁREA CUADRADO
function calcularAreaCuadrado(){
    // Recibe y almacena valor de <input> de HTML
    const input = document.getElementById("InputCuadrado");
    const value = parseInt(input.value);
    // Prueba para saber el tipo de valor que estoy recibiendo
    // console.log(typeof value);

    // Definición u operacion de área
    const area = areaCuadrado(value);

    // Resultado de la operación
    const resultArea = document.getElementById("aResult");
    // output
    resultArea.innerHTML = area.toFixed(2) + " cm";
}

// PERÍMETRO CUADRADO
function calcularPerimetroCuadrado(){
    // Recibe y almacena valor de <input> de HTML
    const input = document.getElementById("InputCuadrado");
    const value = parseInt(input.value);

    // Definición del perímetro
    const perimetro =  perimetroCuadrado(value);

    // Almacena valores <input> de HTML
    // Pintar valores en HTML
    const resultPeri = document.getElementById("pResult");
    // output
    resultPeri.innerHTML = perimetro.toFixed(2) + " cm"
}



// ----------------------------------------

// ---> RECTANGULO

// ÁREA CUADRADO

// PERÍMETRO CUADRADO





// ----------------------------------------

// ---> TRIÁNGULO EQUILATERO

// ÁREA TRIÁNGULO
function calcularAreaTriangulo(){
    // Recibe y almacena datos
    const inputBas = document.getElementById("inputBase");
    const b = parseInt(inputBas.value);
    const inputHeight = document.getElementById("inputAltura");
    const h = parseInt(inputHeight.value);

    // Procesar las datos recibidos y almacenados
    const areaT = areaTriangulo(b, h);

    // Regresar y mostrar resultado en HTML
    const resultAreaT = document.getElementById("arResult");
    resultAreaT.innerHTML = areaT.toFixed(2) + "cm";
}


// PERÍMETRO TRIÁNGULO
function calcularPerimetroTriangulo(){
    // Lado 1
    const inputSideA = document.getElementById("inputLadoA");
    const sideA = parseInt(inputSideA.value);
    // lado 2
    const inputSideB =  document.getElementById("inputLadoB");
    const sideB = parseInt(inputSideB.value);
    // Base
    const inputBas = document.getElementById("inputBase");
    const b = parseInt(inputBas.value);
    // Altura
    const inputHeight = document.getElementById("inputAltura");
    const h = parseInt(inputHeight.value);
    
    // Definición Perímetro
    const perimetroT = perimetroTriangulo(sideA, sideB, b);

    // Regresar resultado a HTML
    const resultPeriTri = document.getElementById("peResult");
    resultPeriTri.innerHTML = perimetroT.toFixed(2) + " cm";
}



// ----------------------------------------
// ---> CÍRCULO

// PERÍMETRO CÍRCULO



// ÁREA CÍRCULO



// ----------------------------------------
// ---> TRIÁNGULO ISÓSCELES

// PERÍMETRO TRIÁNGULO ISÓSCELES
// ÁREA TRIÁNGULO ISÓSCELES

// function calcularAlturaTriangulo(){
//     // Lado1
//     const side1 = document.getElementById("inpLad1");
//     const lad1 = parseFloat(side1.value);
//     // lado2
//     const side2 = document.getElementById("inpLad2");
//     const lad2 = parseFloat(side2.value);
//     // Base
//     const ladBase = document.getElementById("inpBase");
//     const baseLad = parseFloat(ladBase.value);
//     // Altura
// }







// ----------------------------------------