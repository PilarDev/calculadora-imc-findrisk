function imc(){
	$("#resultado").hide();
}

function limpiar(){
	$("#Peso").val("");
	$("#Altura").val("");
}

function calcular(){
	var peso=$("#Peso").val();
	var altura=$("#Altura").val();

	if (peso!="" && altura!=""){

		$("#resultado").show();
		
		var imc=peso/(altura/100*altura/100);

		var estado="";

		if (imc<18){
			estado="Peso Bajo";
		}
		else if(imc>=18 && imc<25){
			estado="Peso Normal";
		}
		else if(imc>=25 && imc<27){
			estado="Sobrepeso";
		}
		else if(imc>=27 && imc<30){
			estado="Obesidad grado 1";
		}
		else if(imc>=30 && imc<40){
			estado="Obesidad grado 2";
		}
		else {
			estado="Obesidad grado 3";	
		}

        result=imc.toFixed(2); console.log(result);
		$("#imc").html(result);
		$("#estado").html(estado);
	}
	else{
		$("#resultado").hide();
	}
}

function cancelar(){
	$("#resultado").hide();
	limpiar();
}
imc();