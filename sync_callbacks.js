function completeText(value, ciclos, callback){
	var texto = 'imprimiendo Nro: ';
	setTimeout(function() {
		for(var i = 0; i <= ciclos; i++){
			if(i == ciclos){
				console.log(texto + value);
				value = value + 5;
				callback(null, value);
			}	
		}
	}, 0);
}

var max = 10;
var cnt = 0;
var valInicial = 1;
var ciclos = 999999999;


console.log('Inicia programa');

completeText(valInicial, ciclos, function callback(err, val) {
	if(++cnt < max){
		completeText(val, ciclos, callback);
	}else{
		console.log('finalizó la ejecución de completeText');
	}
});

console.log('fin?');