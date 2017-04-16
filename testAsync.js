function conCallback(texto ,callback){
	if(!texto) return callback(error = new Error('No se ha enviado el texto'));
	setTimeout(function () {
		texto = texto + ' modificado por callback';
		callback(null, texto);
	}, 2000);	
}

function conPromesa(texto){
	var promise = new Promise(function(resolve, reject) {
		setTimeout(function (){
			texto = texto + ' modificado por callback';
			resolve(texto);
		}, 2000);
	});
	return promise;
}

var text = 'Antes de callback -';

/*
conCallback(text, (err, texto) => {
	console.log(texto);
});
*/

conPromesa(text).then((texto) => {
	console.log(texto);
});


console.log('finalizó la ejecución');