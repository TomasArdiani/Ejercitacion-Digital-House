const http = require('http');
// línea require, requiere al módulo http que viene incluido con Node.js 
//y lo hace accesible a través de la variable http.

const fs = require('fs');


//creo una variable del tipo constante donde almaceno las peliculas
const movies = [
	{
		original_title: "Joker",
		title: "Joker",
		vote_average: 8.6,
		overview: "Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro.",
		"release_date": "2019-10-04"
	},
	{
		original_title: "Maleficent: Mistress of Evil",
		title: "Maléfica: Maestra del Mal",
		vote_average: 7.2,
		overview: "Secuela de \"Maléfica\" que cuenta la vida de Maléfica y Aurora, así como las alianzas que formarán para sobrevivir a las amenazas del mágico mundo en el que habitan.",
		"release_date": "2019-10-18"
	},
	{
		original_title: "Terminator: Dark Fate",
		title: "Terminator: Destino Oscuro",
		vote_average: 6.8,
		overview: "Sarah Connor une todas sus fuerzas con una mujer cyborg para proteger a una joven de un extremadamente poderoso y nuevo Terminator.",
		"release_date": "2019-11-01"
	},
	{
		original_title: "The Lion King",
		title: "El rey león",
		vote_average: 7.1,
		overview: "Un remake del clásico animado de Disney de 1994 'El rey león' que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa, y heredero de todo el reino. Pero cuando su padre es brutalmente asesinado por su tío Scar, decidirá huir, dejando vía libre para que su tío tome el puesto de su padre como líder pelisonline.co de la manada. En su camino, Simba se encuentra con el suricato pelisonline.co Timón y el jabalí Pumba, que le enseñarán a vivir la vida sin preocupaciones. Pero el joven león se verá obligado a decidir entre su vida libre de problemas o su destino como rey .",
		"release_date": "2019-07-18"
	},
	{
		original_title: "葉問4",
		title: "Ip Man 4",
		vote_average: 5.4,
		overview: "Ip Man, el título de la cuarta película que seguirá contando la vida del mítico maestro de Bruce Lee, lanzó su primer tráiler, que se ha vuelto viral y ha sido reproducido miles de veces en YouTube. Para muchos seguidores del cine de artes marciales, Ip Man es un de las mejores sagas del género. La película volverá a ser protagonizada por Donnie Yen y estará dirigida por Wilson Yip.",
		"release_date": "2019-10-18"
	},
	{
		original_title: "Fast & Furious Presents: Hobbs & Shaw",
		title: "Fast & Furious: Hobbs & Shaw",
		vote_average: 6.5,
		overview: "Desde que Hobbs, agente del Servicio de Seguridad Diplomática de Estados Unidos, y el británico Shaw, proscrito sin ley, se enfrentaron por primera vez, solo han intercambiado bofetadas y malas palabras. Pero cuando las despiadadas acciones de Brixton, un anarquista cibergenéticamente mejorado, amenazan el futuro de la humanidad, ambos se unen para derrotarlo.",
		"release_date": "2019-08-01"
	},
	{
		original_title: "Spider-Man: Far from Home",
		title: "Spider-Man: Lejos de Casa",
		vote_average: 7.6,
		overview: "Peter Parker decide irse junto a Michelle Jones, Ned y el resto de sus amigos a pasar unas vacaciones a Europa después de los eventos ocurridos en Vengadores: EndGame. Sin embargo, el plan de Parker por dejar de lado sus superpoderes durante unas semanas se ven truncados cuándo es reclutado por Nick Fury para unirse a Mysterio (un humano que proviene de la Tierra 833, una dimensión del Multiverso, que tuvo su primera aparición en Doctor Strange) para luchar contra los Elementales (cuatro entes inmortales que vienen de la misma dimensión y que dominan los cuatro elementos de la Naturaleza, el fuego, el agua, el aire y la tierra) . En ese momento, Parker vuelve a ponerse el traje de Spider-Man para cumplir con  su labor.",
		"release_date": "2019-07-05"
	},
	{
		original_title: "Cars",
		title: "Cars",
		vote_average: 6.7,
		overview: "El aspirante a campeón de carreras Rayo McQueen está sobre la vía rápida al éxito, la fama y todo lo que él había soñado, hasta que por error toma un desvío inesperado en la polvorienta y solitaria Ruta 66. Su actitud arrogante se desvanece cuando llega a una pequeña comunidad olvidada que le enseña las cosas importantes de la vida que había olvidado.",
		"release_date": "2006-07-06"
	},
	{
		original_title: "Zombieland: Double Tap",
		title: "Zombieland: Mata y remata",
		vote_average: 7.5,
		overview: "En esta secuela y empleando el característico sentido del humor del que hizo gala \"Zombieland\", el grupo de protagonistas tendrá que viajar desde la Casa Blanca hasta el corazón de los Estados Unidos, sobreviviendo a nuevas clases de muertos vivientes que han evolucionado desde lo sucedido hace algunos años, así como a algunos supervivientes humanos rezagados. Pero, por encima de todo, tendrán que tratar de soportar los inconvenientes de convivir entre ellos.",
		"release_date": "2019-10-18"
	},
	{
		original_title: "The Angry Birds Movie 2",
		title: "Angry Birds 2: La película",
		vote_average: 6.5,
		overview: "Vuelven a la carga Red, el pájaro de color rojo con problemas de mal genio, y sus amigos Chuck, el pájaro amarillo hiperactivo, y Bomb, el pájaro negro muy volátil. En esta segunda parte, los pájaros protagonistas y los intrigantes cerdos de color verde llevarán su conflicto a un nuevo nivel. Y es que, aparecerá una nueva y malvada villana: Zeta, un pájaro que vive en una isla helada. Cuando Zeta lance una bola de hielo sobre la isla en la que se encuentran Red y compañía, nuestros protagonistas tendrán que hacer frente a esta nueva amenaza.",
		"release_date": "2019-08-23"
	},
	{
		original_title: "Toy Story 4",
		title: "Toy Story 4",
		vote_average: 7.6,
		overview: "Woody siempre ha tenido claro cuál es su labor en el mundo y cuál es su prioridad: cuidar a su dueño, ya sea Andy o Bonnie. Sin embargo, Woody descubrirá lo grande que puede ser el mundo para un juguete cuando Forky se convierta en su nuevo compañero de habitación. Los juguetes se embarcarán en una aventura de la que no se olvidarán jamás.",
		"release_date": "2019-06-21"
	},
	{
		original_title: "El Camino: A Breaking Bad Movie",
		title: "El Camino: Una película de Breaking Bad",
		vote_average: 7.1,
		overview: "Tiempo después de los eventos sucedidos tras el último episodio de la serie \"Breaking Bad\", el fugitivo Jesse Pinkman huye de sus perseguidores, de la ley y de su pasado.",
		"release_date": "2019-10-11"
	},
	{
		original_title: "Scary Stories to Tell in the Dark",
		title: "Historias de miedo para contar en la oscuridad",
		vote_average: 6.3,
		overview: "Mill Valley, Pennsylvania, noche de Halloween, 1968. Después de gastar una broma a un matón de la escuela, Sarah y sus amigos deciden colarse en una casa supuestamente embrujada que una vez perteneció a la poderosa familia Bellows, desatando fuerzas oscuras que no podrán controlar.",
		"release_date": "2019-08-09"
	},
	{
		original_title: "Aladdin",
		title: "Aladdín",
		vote_average: 7.1,
		overview: "Aladdin es un adorable pero desafortunado ladronzuelo enamorado de la hija del Sultán, la princesa Jasmine. Para intentar conquistarla, acepta el desafío de Jafar, que consiste en entrar a una cueva en mitad del desierto para dar con una lámpara mágica que le concederá todos sus deseos. Allí es donde Aladdín conocerá al Genio, dando inicio a una aventura como nunca antes había imaginado.",
		"release_date": "2019-05-24"
	},
	{
		original_title: "ワンピーススタンピード",
		title: "One Piece: Stampede",
		vote_average: 7.6,
		overview: "La película tiene lugar durante la Pirates Expo, \"hecha por piratas para piratas\", donde los piratas de todo el mundo, incluidos algunos de sus personajes más infames, se unen a la búsqueda de un gran tesoro para encontrar un tesoro perdido, esta vez el tesoro. Perteneció nada menos que a Gold Roger!",
		"release_date": "2019-11-15"
	},
	{
		original_title: "It Chapter Two",
		title: "It Capítulo 2",
		vote_average: 6.9,
		overview: "27 años después, los ex-miembros del Club de los Perdedores, que crecieron y se mudaron lejos de Derry, vuelven a unirse tras una devastadora llamada telefónica.",
		"release_date": "2019-09-06"
	},
	{
		original_title: "Rattlesnake",
		title: "Serpiente de cascabel",
		vote_average: 5.6,
		overview: "Una misteriosa desconocida ha salvado a su hija de una mordedura letal de serpiente. Ahora, tiene que devolverle el favor matando a un desconocido.",
		"release_date": "2019-10-25"
	},
	{
		original_title: "Eli",
		title: "Eli",
		vote_average: 6,
		overview: "Eli Miller es un niño que padece una enfermedad autoinmune. Como último recurso, se traslada con sus padres a una mansión libre de gérmenes para recibir tratamiento. Durante su estancia, le atormentan visiones terroríficas que otros consideran alucinaciones. Definitivamente, algo siniestro se esconde entre estas paredes.",
		"release_date": "2019-10-18"
	},
	{
		original_title: "John Wick",
		title: "John Wick",
		vote_average: 7.2,
		overview: "En Nueva York, John Wick, un asesino a sueldo retirado, vuelve otra vez a la acción para vengarse de los gángsters que le quitaron todo.",
		"release_date": "2014-10-22"
	},
	{
		original_title: "Gemini Man",
		title: "Géminis",
		vote_average: 5.8,
		overview: "Un asesino a sueldo, demasiado mayor, decide retirarse. Pero esto no le va a resultar tan fácil, pues tendrá que enfrentarse a un clon suyo, mucho más joven.",
		"release_date": "2019-10-11"
	}
];

const faqs = [
	{
		faq_title: "¿A partir de qué edad los niños deben pagar entrada?",
		faq_answer: "Los niños pagan entrada a partir de los 3 años.Menores de 3 años no abonan entrada mientras no ocupen una butaca adicional.Menores de 4 años tienen prohibido el ingreso a las salas 4 D y Platinum."
	},
	{
		faq_title: "¿Cuáles son las condiciones de compra de entradas?",
		faq_answer: "La compra de entradas de cine de DH MOVIES: a través de este sitio web y/o máquinas expendedoras de entradas (ATM), implica la aceptación por parte del cliente de todos y cada uno de los siguientes términos y condiciones."
	},
	{
		faq_title: "¿Cuáles son las condiciones de compra de entradas para las salas 4D?",
		faq_answer: "El ingreso a una sala 4D implica la aceptación de las siguientes normas de seguridad: El espectador ingresa bajo su propio riesgo. Cines Multiplex y LUMMA SRL no asumen responsabilidad por cualquier daño o lesión ocasionada por la participación en salas equipadas con 4D."
	},
	{
		faq_title: "Me equivoqué al comprar la entrada ¿Puedo cambiarla?",
		faq_answer: "¡Si, claro! Si te equivocaste en algún paso del proceso de compra online, el día, complejo o en la elección de la película, y necesitas pedir el cambio o la anulación de tus entradas, deberás realizar el reembolso en https: //digitalhouse.dhmovies.com.ar/refund completando los datos de tu compra (email, dni y código de retiro), y si las entradas aún no fueron impresas y se encuentran dentro del plazo de las 2 horas antes del inicio la función, el sistema te informará que las entradas son válidas para realizar el reembolso. Luego deberás volver a comprar para la función deseada."
	},
	{
		faq_title: "¿Cuáles son los medios de pagos disponibles?",
		faq_answer: "Los medios de pago online son tarjeta de débito y crédito.Podes consultar todos los medios de pago online disponibles desde la web de MercadoPago.En boletería podes también pagar en efectivo."
	}
];

const theaters = [
	{
		name: "DH Multiplex - Brisas del Volador",
		address: "Brisas del Volador Shopping – Panamericana Km 50 – Las Magnolias 754 Pilar",
		description: "El complejo Multiplex Palmas del Pilar cuenta con un amplio y cómodo estacionamiento sin cargo, seguridad privada, venta on line, terminales autoservicio y venta en boletería. Multiplex Palmas del Pilar es el complejo más moderno de la empresa.Está dotado de proyectores, pantallas y sonido de última generación.Una propuesta de 9 salas 2 D, 3 D, 3 D Xtremo, 4 D y Sala Premium Platinum diseñadas especialmente para un público exigente y amante del buen cine.",
		total_rooms: 5
	},
	{
		name: "DH Lavalle",
		address: "Lavalle 780 C.A.B.A",
		description: "Cines Multiplex lleva adelante la operación de este complejo que es el único que permanece en la peatonal Lavalle donde supieron funcionar, en las épocas de gloria, más de 28 salas de cine.",
		total_rooms: 3
	},
	{
		name: "DH Multiplex - Canning",
		address: "Formosa 653 Canning, Ezeiza (Shopping Las Toscas)",
		description: "Este complejo de 6 salas se complementa excelentemente bien con los locales comerciales y especialmente gastronómicos del Shopping Las Toscas, dentro del cual se encuentra funcionando, brindando al espectador la posibilidad de disfrutar de una salida completa dentro del mismo ámbito.",
		total_rooms: 6
	},
	{
		name: "DH Arte Multiplex",
		address: "Av. Cabildo 2829 C.A.B.A",
		description: "En Cine Arte Multiplex pueden disfrutarse todas las películas de los Oscars, los mejores ciclos de cine Francés , Ruso, Alemán, entre otros,  las buenas películas que en cartelera de los circuitos tradicionales  a veces no encuentran espacio  tienen su lugar   en  las salas de este complejo.",
		total_rooms: 2
	}
];


/**
 * Título​: ​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores  películas, 
 * incluso mucho mejor que Netflix, Cuevana y PopCorn​.  
 * b. Total de películas en cartelera​: ​(total de películas)  
 * c. Listados de películas  
 * i. Mostrar el listado de películas organizadas alfabéticamente por  título.  
 * d. Pié de página​: ​Recordá que podés visitar las secciones:  
 * i. En Cartelera  ii. Más Votadas 
 *  iii. Sucursales  iv. Contacto  v. Preguntas Frecuentes
 */
function cargarDetalleHome(){
    const titulo = '​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores  películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.\n';

    const totalPeli = '\nTotal de películas en cartelera​: ​(' + movies.length + ')';
    const listadoPeli = '\n\nListados de películas:'
    
    const pelis = movies.map(movie => movie.title);
    pelis.sort();
	let peliListas = ' \n';
    for (let unaPeli of pelis) {
        peliListas += unaPeli+' \n';
    }

    const piePagina =  `\nRecordá que podés visitar las secciones:\n\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;
	return titulo + totalPeli + listadoPeli + peliListas + piePagina;

	
 
}
function cargarDetalleCartelera (){
	const titulo = "En cartelera"
	const totalPeli = '\nTotal de películas en cartelera​: ​(' + movies.length + ')';
	const listadoPeli = '\n\nListados de películas:'
	tituloConResenas = "";

	const pelis = movies.map(movie => movie.title);

	
	movies.forEach(elemento => tituloConResenas += ("--"+elemento.title +" \n" + elemento.overview +" \n" + "\n"));


	return totalPeli + listadoPeli + pelis+ "\n" + "\n" + tituloConResenas
}

function cargarDetalleVotadas(){
	const titulo = "Más Votadas"
	const totalPeli = '\nTotal de películas en cartelera​: ​(' + movies.length + ')';
	
	const listadoPeli = '\n\nListados de películas:';
	

	let masValoradas = movies.filter(movie => movie.vote_average >= 7);
	console.log(masValoradas)
	let masValoradasNumero = masValoradas.map(movie=>movie.vote_average);
	console.log(masValoradasNumero)
	let sumaDeValores = masValoradasNumero.reduce((previo, actual) => actual += previo);
	console.log(sumaDeValores)
	let resultado = (sumaDeValores / masValoradas.length);
	let promedio = resultado.toFixed(2);


	const totalPeliConVotacion = '\nTotal de películas en cartelera​ con valoración de 7 puntos o mas: ​(' + masValoradas.length+ ')\n';

	const promedioVotacion = "El rating promedio de estas películas es: " + promedio;

	tituloConVotacionConResena = "";

	masValoradas.forEach(elemento => tituloConVotacionConResena += ("\n\n"+"-"+ elemento.title + "\nEl rating es : " + elemento.vote_average + "\n\n" + elemento.overview  + "\n"));

	return  titulo+ totalPeliConVotacion + promedioVotacion +"\n"+  tituloConVotacionConResena  // sumaDeValores me da [object Object].....
	

}

function cargarDetalleSucursales(){
	const titulo = "Nuestras salas\n";
	const totalSalas="El total de salas es: " + theaters.length;
	nombreConDireccionConDescripcion ="";
	theaters.forEach(elemento => nombreConDireccionConDescripcion += "\n" +"--" + elemento.name +"\n" +"La dirección es:  " + elemento.address + "\n" +  elemento.description + "\n");
	return titulo + totalSalas + nombreConDireccionConDescripcion;
}

function cargarDetalleContacto(){
	const titulo= "Contáctanos";
	const texto = "\n\n ¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. \n\n Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@digitalhouse.com o en las redes sociales.\n\n Envianos tu consulta,sugerencia o reclamo y será respondido a la brevedad posible.\n\n Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.";
	return titulo + texto;
}

function cargarDetallePreguntasFrecuentes(){
	const titulo = "Preguntas Frecuentes.";
	const totalPreguntas = "\nTotal de preguntas realizadas: " + faqs.length;
	preguntaRespuesta="";
	faqs.forEach(elemento => preguntaRespuesta += "\n--Pregunta: " + elemento.faq_title + "\n\nRespuesta : " +elemento.faq_answer +"\n\n\n");
	return titulo + totalPreguntas + preguntaRespuesta;
}

/** 
 *  Luego llamamos a una de las funciones que el módulo http ofrece: createServer. 
 *  El cual nos permitirá levantar/crear/inicializar un servidor que  se quedará escuchando
 *  en el puerto que le indiquemos (para este ejmplo le asignamos el puerto 3030), 
 *  Ahora bien una vez que hemos levantado el servidor necesitamos un mecanismo para atender cada
 *  petición HTTP que nos llegue, es decir: cuando por ejemplo por medio del navegador invocamos el recurso:
 *  http://localhost:3030/ (nuestra petición)  queremos que el servidor ejecute lo referido para la consigna relacionada a:
 *  "Home" -->  cargarDetalleHome(). Entonces para lograr esto utilizamos un callback en el metodo createServer definiendo dos
 *  parametros: El primero llamado por buenas prácticas 'request' el cual posee el recurso/la petición invocada,
 *  (tip: hace un console.log de (req) para aprender más). y el segundo parámetro es nuestra repuesta: 'response' que enviaremos
 *  al cliente. Ambos tanto req como res son objetos, que podemos usar e invocar sus métodos para manejar los detalles de la
 *  petición HTTP ocurrida y responder a la misma, en otras palabras enviar algo de vuelta al browser.
 *  Y eso es lo que nuestro código hace: cada vez que una petición es recibida, usa la función res.writeHead() para enviar un 
 *  estatus HTTP 200 y un content-type (parámetro que define que tipo de contenido es) en el encabezado de la respuesta HTTP.
*/
const server = http.createServer((req, res) => {
    //cada vez que solicito un recurso ejecuto el callback del createServer
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	
    // Route System: con el switch logramos que nuestra app pueda "rutear" las diferenes peticiones:
    // Es decir, por ejemplo cuando solicitemos el recurso '/' con el switch indicaremos que parte de nuestro
    // código atenderá/ejecutará dicha petición, es decir todo el codigo contenido entre [case '/':] hasta el [break;]
	switch (req.url) {
		// Home
		case '/':           
            
            let detalleHome = cargarDetalleHome();
            res.write('Home\n' + detalleHome); 
            //usamos la función write para enviar para enviar el texto requerido en el cuerpo de la respuesta al browser.
            res.end();  //Por último, llamamos res.end() para finalizar nuestra respuesta.
			break;
		// En cartelera
		case '/en-cartelera':
			let detalleCartelera = cargarDetalleCartelera();
			res.end('En cartelera\n' + detalleCartelera);
			break;
		case '/mas-votadas':
			let detalleVotadas = cargarDetalleVotadas();
			res.end(detalleVotadas);
			break;
		case '/sucursales':
			let detalleSucursales= cargarDetalleSucursales();
			res.end(detalleSucursales);
			break;
		case '/contacto':
			let detalleContacto = cargarDetalleContacto();
			res.end(detalleContacto);
			break;
		case '/preguntas-frecuentes':
			let detallePreguntasFrecuentes = cargarDetallePreguntasFrecuentes();
			res.end(detallePreguntasFrecuentes);
			break;
		default:
			res.end('404 not found')
	}
});


// También puedo configurar el puerto y el hostname en variables, para luego poder modificarlas más fácil.
// y hacer mi código más fácil de mantener y de entender.
const port = 3030;
const hostname = 'localhost';

//luego usando string template puedo mantener actualizado el mensaje a mostrar, por ejemplo:
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


//tip: con ctrl + c puedo bajar/detener el servidor!!