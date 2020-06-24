// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// conectando con main.js
let rutaMain = require ("./routes/main.js")
app.use('/', rutaMain);

// conecto con heroes.js
let rutaHeroes = require ("./routes/heroes.js")
app.use("/heroes", rutaHeroes);




// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado


// Ruta Créditos
let rutaCreditos = require ("./routes/creditos.js")
app.use("/creditos", rutaCreditos);
 




// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
