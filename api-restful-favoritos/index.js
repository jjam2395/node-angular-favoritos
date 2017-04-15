'use strict'

var mongoose = require ('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678;

mongoose.connect('mongodb://localhost:27017/paginasfav',(err, res) => {

	if (err){
		throw err;
	}else{
		console.log('Conexion a mongodb correcta')
		app.listen(port,function(){
			console.log(`Api Rest Favoritos funcionando en http://localhost:${port}`);
		});
	}

	

});



