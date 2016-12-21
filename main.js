function calcular()
{
	var smile = document.getElementById("smile").value;
	var noSmile = parseInt(document.getElementById("no_smile").value);

	var isSmile = true;
	var noSmile = false;

	var salida = document.getElementById("salida");

	if(smile== "2")
	{
		isSmile = false;
	}

	if(noSmile < 6)
	{
		noSmile = true;
	}

	if(issmile)
	{
		salida.innerHTML = "1";
	}else{
		if(noSmile)
		{
			salida.innerHTML = "0";
		}else{
			salida.innerHTML = "1";
		}
	}
}