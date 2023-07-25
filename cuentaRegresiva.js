function cuentaRegresiva(inicial){
    let numeros = [];
    for(let i = 0; i <= inicial; i++){
        numeros.push(i)
    }
    return numeros.reverse()
}

console.log(cuentaRegresiva(3))