function obtenerIndice(valor, array){
    for(let i=0; i< array.lenght; i++){
        if(array[i] ===valor){
            return i;
        }
    }
    return -1
}
console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]))
console.log(obtenerIndice(5, [5, 7, 12, 34, 54, 2, 12]))