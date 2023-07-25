Algoritmo SumaNumerosPares
    Definir suma, num Como Entero
    
    suma <- 0
    num <- 1
    
    Mientras num <= 100 Hacer
        Si num % 2 = 0 Entonces
            suma <- suma + num
        Fin Si
        num <- num + 1
    Fin Mientras
    
    Escribir "La suma de los números pares del 1 al 100 es:", suma
    
FinAlgoritmo

