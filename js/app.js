var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    document.write(estudiantes);
}

function agregarEstudiante(estudiante) {
   // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    for (var i = 0; i < estudiante.length; i++) {
        var nombreEstudiante = prompt("Ingresa el nombre del estudiante");
        var puntosTecnicos = prompt("Cantidad de Puntos Técnicos");
        var puntosHSE = prompt("Cantidad de Puntos HSE");
        var estudiante = {
          nombre: nombre,
          topTecnico: puntosTecnicos,
          topHse: puntosHse;
          };
        };
        return agregarEstudiante; // TO DO: Retornar el estudiante recientemente creado
}
  console.log(estudiantes.push(estudiante));
  // Hint: El estudiante debe ser agregado a la lista de estudiantes


function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>"; // las propiedades del objeto estudiante
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.topTecnico + "</p>"; // las propiedades del objeto estudiante
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.topHSE + "</p>"; // las propiedades del objeto estudiante
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    for (var i = 0; i < estudiantes.lenght; i++) {
    return estudiantes;
}

function buscar(nombre, estudiantes) {
// TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
 for (var i=0; i <= estudiantes; i++) {
   return estudiante.nombre; // Retornar el objeto del estudiante buscado
   // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
   var estudiantes = obtenerListaEstudiantes();
   var nombreEstudiante = prompt("¿Qué nombre desea buscar?");
   var estudianteBuscado = buscar(nombreEstudiante, estudiantes);
   resultado.innerHTML = mostrarLista(estudianteBuscado);
 }
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var arregloTopTecnico = estudiantes.filter(topTecnico);// obtener un nuevo arreglo. Aplicar un filter para que sólo devuelva top topTecnico
    return arregloTopTecnico.sort.reverse // Ordenar el array e invertirlo para que sea de mayor a menor
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var arregloTopHse = estudiantes.filter(topHSE);// obtener un nuevo arreglo. Aplicar un filter para que sólo devuelva topHSE
    return arregloTopHse.sort.reverse // Ordenar el array e invertirlo para que sea de mayor a menor
}
}
