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
function perimetroCirculo(){}
function areACirculo(){}

// ----------------------------------------

// FUNCIONES DEL TRIÁNGULO ISÓSCELES
// 
// function perimetroTrianguloIso(){}
// function areaTrianguloIso(){}


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
    const inputSideA = document.getElementById("inputLadoA");
    const sideA = parseInt(inputSideA.value);
    const inputSideB =  document.getElementById("inputLadoB");
    const sideB = parseInt(inputSideB.value);
    const inputBas = document.getElementById("inputBase");
    const b = parseInt(inputBas.value);
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


// ----------------------------------------