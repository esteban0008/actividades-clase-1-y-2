Algoritmo Mayornumero
	
	Escribir "¿Cual es la cantidad de numeros que va a ingresar?"
	leer n
	dimension e[n]

	
	Para i=1 Hasta n Con Paso 1 Hacer
		leer e[i]
	fin para
	
	numM = 0
	
    Para i = 1 Hasta n Hacer
        Si e[i] > numM Entonces
            numM = e[i]
        FinSi
    FinPara
	
    Escribir "El número mayor es:", numM
	
fin algoritmo