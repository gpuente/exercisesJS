function completeText(value, ciclos){
	var promise = new Promise(function (resolve, reject) {
		var texto = 'imprimiendo Nro: ';
		setTimeout(function() {
			for(var i = 0; i <= ciclos; i++){
				if(i == ciclos){
					console.log(texto + value);
					value = value + 5;
					resolve(value);
				}	
			}
		}, 0);
	});
	return promise;
}

async function repetir(value, ciclos){
	for(var i = 0; i < 10; i++){
		value = await completeText(value, ciclos);
	}
}


var ciclos = 999999999;
var valInicial = 1;

console.log('Inicio programa');

repetir(valInicial, ciclos);

console.log('fin?');