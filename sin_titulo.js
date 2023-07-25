function mayornumero() {
	var i, n, numm;
	prompt("�Cual es la cantidad de numeros que va a ingresar?",'<BR/>');
	n = Number(prompt());
	var e = new Array(n);
	for (i=1;i<=n;i++) {
		e[i-1] = prompt();
	}
	numm = 0;
	for (i=1;i<=n;i++) {
		if (e[i-1]>numm) {
			numm = e[i-1];
		}
	}
	document.write("El n�mero mayor es:",numm,'<BR/>');
}

