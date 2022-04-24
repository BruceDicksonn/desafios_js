function divisors(integer){
    const isPrimeOrNot = primoOuNao(integer);
    if(isPrimeOrNot){
        return `${integer} is prime`;
    } else {
        return captureDivisors(integer);
    }
}

function captureDivisors(integer){
    let fullDivisors = [];
    let divisores = 2;
    for(let i = 0; i < integer; i++){
        if(integer % divisores === 0 && divisores < integer){
            fullDivisors.push(divisores);
        }
            divisores++;
    }
    return fullDivisors; 
}

function primoOuNao(number){
    const qtdDivisores = captureDivisors(number);
    if(qtdDivisores.length === 0){
        return true;
    } else {
        return false;
    }
}

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));
console.log(divisors(2));
console.log(divisors(3));
console.log(divisors(5));
console.log(divisors(7)+'\n\n');
console.log(divisors(10));
console.log(divisors(15));
console.log(divisors(120));
console.log(divisors(8));


/* 

Crie uma função chamada divisors/ Divisors que recebe um inteiro n > 1 e retorna um array com todos os divisores do inteiro (exceto 1 e o próprio número), do menor para o maior. 


Se o número for primo, retorne a string

 '(integer) is prime' ( nullem C#) (use Either String aem Haskell e Result<Vec<u32>, String>em Rust).



Exemplo:

divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"


*/