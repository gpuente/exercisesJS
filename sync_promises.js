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

var max = 10;
var cnt = 0;
var ciclos = 999999999;
var valInicial = 1;

console.log('Inicio programa');

completeText(valInicial, ciclos).then(function repetir(val) {
	if(++cnt < max){
		completeText(val, ciclos).then(repetir);
	}else{
		console.log('finalizó la ejecución de promesas');
	}
});

console.log('fin?');