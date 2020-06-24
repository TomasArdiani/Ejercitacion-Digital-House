const fs = require('fs');
const path = require ('path');

// Funciones privadas
function readHTML(filename){
  let archivoHTML = fs.readFileSync(path.join(__dirname,'/../views/' + filename + '.html'),'utf-8');
  return archivoHTML;
}


// Funciones de acceso público

let mainController = {
    index: function(req, res, next) {
      let archivoHTML = readHTML('index');
        res.send(archivoHTML);
      }

}

module.exports = mainController;