console.log("\n-> Arreglos de Números\n")
function hasPrime(numbers){
    //Retornar verdadero si hay algún numeros primos
    let len = numbers.length;
    for(let i = 0; i < len; i++){
        let check = isPrime(numbers[i]);
        if(check){
            console.log('Número Primo Encontrado: ', numbers[i]);
            return true;
        }
    }
    return false;
}
function isPrime(primeNumber){
    //Retornar verdadero si el numero es primo
    for( let i=2; i<=primeNumber-1; i++){
        if(primeNumber%i==0){
            return false;
        }
    }
    return true;
}

const numbersArray = [25, 10, 11];
console.log('Se ha encontrado algún número primo? ', hasPrime( numbersArray));


console.log("\n------------------\n")
console.log("\n-> Arreglos de String\n")
//Verificar si el string tiene N o n en sus letras

function hasN(stringCheck){
    //Retorna verdadero si encuentra N o n
    let stringLenght = stringCheck.length;
    for (let i = 0; i < stringLenght; i++){
        if (stringCheck[i]=='n' || stringCheck[i]=='N'){
            return true;
        }        
    }
    return false;
}

const stringArray = ['Natalia', 'Alexandra', 'Leo', 'Fernando', 'Andrea', 'Ronaldo'];
let stringLength = stringArray.length;
let count = 0;
for (let i = 0; i < stringLength; i++){
    if (hasN(stringArray[i])){
        count++;
    }
}

console.log('Arreglo Original: \n', stringArray)
console.log('Cantidad de nombres del arreglo con N o n en ellos: ', count);