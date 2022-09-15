function hasPrime(numbers){
    //Retornar verdadero si hay algún numeros primos
    let len = numbers.length;
    for(let i = 0; i < len; i++){
        let check = isPrime(numbers[i]);
        if(check){
            console.log('Found prime', numbers[i]);
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
console.log(hasPrime(numbersArray));