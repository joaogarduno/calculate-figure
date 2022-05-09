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

// FUNCIONES DEL TRIÁNGULO

// cálculo del Perímetro
function perimetroTrianguloectangulo(lado1, lado2, base){
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
function areCirculo(){}

// ----------------------------------------

// FUNCIONES DEL TRIÁNGULO ISÓSCELES
// 
function perimetroCirculo(){}
function areCirculo(){}


// ----------------------------------------



// ----------------------------------------
// INTERACCION CON HTML
// ----------------------------------------

// ---> CUADRADO

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



// ----------------------------------------

// ---> RECTANGULO

// PERÍMETRO CUADRADO
// ÁREA CUADRADO



// ----------------------------------------

// ---> TRIÁNGULO EQUILATERO

// PERÍMETRO TRIÁNGULO
// ÁREA TRIÁNGULO



// ----------------------------------------
// ---> CÍRCULO

// PERÍMETRO CÍRCULO
// ÁREA CÍRCULO



// ----------------------------------------
// ---> TRIÁNGULO ISÓSCELES

// PERÍMETRO TRIÁNGULO ISÓSCELES
// ÁREA TRIÁNGULO ISÓSCELES


// ----------------------------------------