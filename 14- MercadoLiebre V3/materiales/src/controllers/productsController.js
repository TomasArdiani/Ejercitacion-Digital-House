const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const formatPrice = (price, discount) => toThousand(Math.round(price * (1 - (discount / 100))));

// Lee el archivo Json
function readJSONfile() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
};

//Guarda el json de productos
/*function saveJSONfile(productos) {
	fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '));
};*/
const saveProducts = (array => fs.writeFileSync(productsFilePath, JSON.stringify(array)));


//Buscar producto por id
function searchById(id) {
	let archivoJson = readJSONfile();
	let producto = null;
	archivoJson.forEach((prod, i) => {
		if (prod["id"] == id) {
			producto = prod;
		}
	});
	return producto; // si no lo encuentra devuelve null

}

const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render('products', { productosAMostrar: products, toThousand, formatPrice })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let category = req.params.category; // creo q no es necesario
		let pdtoID = req.params.id;
		const productFind = products.find(pdto => pdto.id == pdtoID && pdto.category == req.params.category);
		if (productFind) {
			res.render("detail", { productFind, toThousand, formatPrice });
		} else {
			res.render('error');
		}

	},

	// Create - Form to create
	create: (req, res) => {

		res.render('product-create-form');
	},

	// Create -  Method to store
	store: (req, res) => {
		let lastId = 0;
		products.forEach(producto => {
			if (producto.id > lastId) {
				lastId = producto.id;
			}
		});
		const namesCreate = {
			id: lastId + 1,
			name: req.body.name,
			price: parseFloat(req.body.price),
			discount: parseFloat(req.body.discount),
			category: req.body.category,
			description: req.body.description
			
		}
		products.push(namesCreate);
		saveProducts(products);
		let mensaje = 'El producto se agregó correctamente.';
		res.render("product-create-form", { mensaje })
		//res.send("Agregado!")
	},

	// Update - Form to edit
	edit: (req, res) => {
		const productToEdit = products.find(item => item.id == req.params.id);
		
		res.render("product-edit-form", {productToEdit});
		
	},
	// Update - Method to update
	update: (req, res) => {
		let productEdited = null;
		products.forEach(product => {
			if (product.id == req.params.id) {
				product.name = req.body.name;
				product.price = parseFloat(req.body.price);
				product.discount = parseFloat(req.body.discount);
				product.category = req.body.category;
				product.description = req.body.description;
				productEdited = product;
			}
		});
		saveProducts(products);
		res.send("Editado!");
	},
	// Delete - Delete one product from DB
	destroy: (req, res) => {
			const productsNew = products.filter(product => product.id != req.params.id);
saveProducts(productsNew);
res.send("Eliminado!");
		}
	};
module.exports = controller;