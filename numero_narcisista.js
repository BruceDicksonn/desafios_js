function narcissistic(value) {
    const returned = separateNumbers(value);
    return isNarcissistic(returned);
}

function separateNumbers(value){
    const values = value.toString().split('');
    for(let i in values){
        values[i] = parseInt(values[i]);
    }
    return values;
}

function isNarcissistic(array=[]){
    const valueOfArray = parseInt(array.toString().split(',').join(''));
    const amountDigits = array.length;
    const sumOfPowers = array.reduce((acur,curr)=> {
        acur += curr ** amountDigits;
        return acur;
    },0); 
    return sumOfPowers === valueOfArray ? true : false;
}


console.log(narcissistic(7));  
console.log(narcissistic(153));  
console.log(narcissistic(1652)); 


/* 

Um número narcisista é um número positivo que é a soma de seus próprios dígitos, cada um elevado à potência do número de dígitos em uma determinada base.


Neste Kata, vamos nos restringir ao decimal (base 10).


Por exemplo, tome 153 (3 dígitos), que é narcisista:


1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153


e 1652 (4 dígitos), que não é:


1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938


O desafio:

Seu código deve retornar true ou false dependendo se o número fornecido é um número narcisista na base 10. 

Isso pode ser True ou False em seu idioma, por exemplo, PHP.

A verificação de erros para strings de texto ou outras entradas inválidas não é necessária, apenas inteiros positivos diferentes de zero válidos serão passados ​​para a função.

*/