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

console.log('Number of strings with N or n is', count);