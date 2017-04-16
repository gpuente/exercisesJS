//Defino una función que retorna una promnesa.
//dentro de la promesa, se ejecuta un timeOut para que el ciclo for no sea bloqueante
//y así no generar un cuello de botella
function imprimir(texto, ciclos){
	var promise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			for (var i = 0; i <= ciclos; i++) {
				if(i == ciclos){
					console.log('modificando texto...');
					resolve(texto = 'Nuevo texto')
				}
			}
		}, 0);
		
	});
	return promise;
}

var text = 'Texto viejo';
console.log('Inicia ejecución programa');
imprimir(text, 999999999).then(function (res) {
	console.log(res);
});
console.log('fin?');