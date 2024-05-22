function mostrarFormularioNotas(event) {
    //Previene el comportamiento predeterminado (enviar el formulario y recargar la página), oculta el formulario de ingreso y muestra el formulario de notas.
    event.preventDefault();
    document.getElementById('formulario-ingreso').style.display = 'none';
    document.getElementById('formulario-notas').style.display = 'block';
}

function calcularPromedio(event) {
    //cuando se envía el formulario de notas. Recoge las notas, calcula el promedio y lo muestra en un párrafo con el id resultado
    event.preventDefault();
    let notas = [];
    for (let i = 1; i <= 5; i++) {
        let nota = parseFloat(document.getElementById('nota' + i).value);
        if (!isNaN(nota)) {
            notas.push(nota);
        }
    }
    let suma = notas.reduce((a, b) => a + b, 0);
    let promedio = suma / notas.length;
    document.getElementById('resultado').innerText = 'El promedio del alumno es: ' + promedio.toFixed(2);
}