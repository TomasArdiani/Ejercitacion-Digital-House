var tarea = [{
    titulo :"Ver material",
    estado : "completo",
},
{
    titulo :"Hacer la practica",
    estado : "En progreso",
},
{
    titulo :"Ver clase ",
    estado : "pendiente",
}]
console.log(tarea.length);
function recorrer(tarea)
{
    //var i=tarea;
    for (var i=0;i<tarea.length;i++)
    {
        console.log(tarea[i].titulo);
        console.log(tarea[i].estado);
    }
}
recorrer(tarea);


// pasar obj literal a JSON
// Mostrar por consola el tipo de dato

let datosConvertidos = JSON.stringify(tarea);
console.log(datosConvertidos);

console.log(typeof(tarea));
console.log(typeof(datosConvertidos));

//Convertir de json a objeto

let reConvertido = JSON.parse(datosConvertidos);
console.log(typeof(reConvertido));

//Crear en la carpeta actual un archivo llamado tareas.json