// Generar 10 números aleatorios
let numeros = [];
const botonGenerador = document.getElementById('botongenerador');
const resultadoDiv = document.getElementById('result');

botonGenerador.addEventListener('click', () => {
  numeros = [];
  resultadoDiv.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const numero = Math.floor(Math.random() * 100);
    numeros.push(numero);
    resultadoDiv.innerHTML += numero + ' ';
  }
});

// Suma de los números
const botonSuma = document.getElementById('sumaNum');
const resultadoSuma = document.getElementById('resultadosuma');

botonSuma.addEventListener('click', () => {
  const suma = numeros.reduce((a, b) => a + b, 0);
  resultadoSuma.innerHTML = `La suma de los números es: ${suma}`;
});

// Promedio de los números
const botonPromedio = document.getElementById('promedio');
const resultadoPromedio = document.getElementById('promedionum');

botonPromedio.addEventListener('click', () => {
  const suma = numeros.reduce((a, b) => a + b, 0);
  const promedio = suma / numeros.length;
  resultadoPromedio.innerHTML = `El promedio de los números es: ${promedio}`;
});

// Número máximo y número mínimo
const botonMaxMin = document.getElementById('nummaxmin');
const resultadoMaxMin = document.getElementById('minmax');

botonMaxMin.addEventListener('click', () => {
  const maximo = Math.max(...numeros);
  const minimo = Math.min(...numeros);
  resultadoMaxMin.innerHTML = `El número máximo es: ${maximo} y el número mínimo es: ${minimo}`;
});

// Eliminar el primer y último número
const botonEliminar = document.getElementById('eliminar');
const resultadoEliminar = document.getElementById('eliminarnum');

botonEliminar.addEventListener('click', () => {
  const nuevoArray = numeros.slice(1, numeros.length - 1);
  resultadoEliminar.innerHTML = `Los números restantes después de eliminar el primero y el último son: ${nuevoArray.join(', ')}`;
});

// Agregar un nuevo elemento
const botonAgregar = document.getElementById('agregar');
const resultadoAgregar = document.getElementById('numagregado');

botonAgregar.addEventListener('click', () => {
  const nuevoNumero = Math.floor(Math.random() * 100);
  numeros.push(nuevoNumero);
  resultadoAgregar.innerHTML = `Se agregó el número ${nuevoNumero} al arreglo. El nuevo arreglo es: ${numeros.join(', ')}`;
});

// Ordenar los números de menor a mayor
const botonOrdenar = document.getElementById('maymin');
const resultadoOrdenar = document.getElementById('maymin2');

botonOrdenar.addEventListener('click', () => {
  const numerosOrdenados = numeros.slice().sort((a, b) => a - b);
  resultadoOrdenar.innerHTML = `Los números ordenados de menor a mayor son: ${numerosOrdenados.join(', ')}`;
});

// Invertir los números
const botonInvertir = document.getElementById('invertir');
const resultadoInvertir = document.getElementById('invert');

botonInvertir.addEventListener('click', () => {
  const numerosInvertidos = numeros.slice().reverse();
  resultadoInvertir.innerHTML = `Los números invertidos son: ${numerosInvertidos.join(', ')}`;
});

