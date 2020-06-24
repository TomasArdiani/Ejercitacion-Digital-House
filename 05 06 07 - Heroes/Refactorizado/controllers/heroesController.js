// Leyendo y parseando (en array) el contenido de heroes.json
const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

let heroesController = {
    heroes : function(req,res) {
        res.send(heroes)
    },
    detalle : function(req,res) {
        // Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
        let heroe = heroes.find(x => x.id == req.params.id);
            if (heroe){ // Si se encuentra al héroe se envía el nombre y su profesión
		        res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);

	        } else {//SiNO se encuentra se envía el mensaje de no encontrado
		        res.send("No se encontro a ese heroe")};
    },

    resena: function (req, res) {

        // Acá lo primero será encontrar al héroe que corresponda
        let heroe = heroes.find(h => h.id == req.params.id);
        if(!heroe) {// Si NO se encuentra al héroe se envía un mensaje
            res.send("No encontramos un héroe para mostrarte su biografía");
        }else { 	// Si se encuentra al héroe:
            if (req.params.ok!= undefined
                 && req.params.ok == 'ok'	){
                    res.send(`${heroe.nombre}: ${heroe.resenia}`);
                 }else {res.send(`${heroe.nombre}: "Lamento que no desees saber más de mi :("`);
                }
            }

},}

module.exports = heroesController;