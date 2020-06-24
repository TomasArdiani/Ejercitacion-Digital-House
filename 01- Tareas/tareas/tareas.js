// Módulo nativo que permite trabajar con archivos del filesystem
const fs = require('fs');

let leer = function(archivoJSON) {
   let jsonFile = fs.readFileSync(archivoJSON, 'utf-8'); // leemos el archivo json
   return JSON.parse(jsonFile); //lo convertimos a objeto literal
}

module.exports = leer; // exportamos el módulo
