let leerJSONDeTareas = require('./tareas.js');

console.log('Listado de tareas:');

let tareas = leerJSONDeTareas("tareas.json"); // pasamos como argumento el archivo que vamos a leer

for (let i = 0;  i < tareas.length; i++) {
    console.log(i + '- ' + tareas[i].titulo + ' - ' + tareas[i].estado);
}
