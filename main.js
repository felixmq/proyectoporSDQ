

function triangulo() {
    const perimeterT = document.getElementById('perimerT').value;
    const baseT = document.getElementById('baseT').value;
    const alturaT = document.getElementById('alturaT').value;
    const resultado = document.getElementById('resultado');

    const result1 = perimeterT * 3;
    const result2 = (baseT * alturaT) / 2;

    resultado.textContent = ` El Perimetro es ${result1} y El area es ${result2}`;
}


function cuadrado() {
    const cuadradoP = document.getElementById('cuadradoP').value;
    const cuadradoA = document.getElementById('cuadradoA').value;
    const resultado1 = document.getElementById('resultado1');

    const result1 = cuadradoP * 4;
    const result2 = cuadradoA * cuadradoA;

    resultado1.textContent = ` El Perimetro es ${result1} y El area es ${result2}`;
}


function rectangulo() {
    const rectanguloP = document.getElementById('rectanguloP').value;
    const rentanguloA = document.getElementById('rectanguloA').value;
    const resultado4 = document.getElementById('resultado4');

    const result1 = (rectanguloP * 4);
    const result2 = rectanguloP * rentanguloA;

    resultado4.textContent = ` El Perimetro es ${result1} y El area es ${result2}`;
}


function circulo() {
    const CirculoP = document.getElementById('CirculoP').value;
    const CirculoA = document.getElementById('circuloA').value;
    const resultado2 = document.getElementById('resultado2');

    const result1 = CirculoP * 3.14;
    const result2 = 3.14 * CirculoA;
    const result3 = result2 * result2;

    resultado2.textContent = ` El Perimetro es ${result1} y El area es ${result3}`;
}