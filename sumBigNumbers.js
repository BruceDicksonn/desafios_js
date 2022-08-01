function add(a, b) {

    Array.from(a).map(letter => typeof(parseInt(letter)) === "number" ? letter:'');
    Array.from(b).map(letter => typeof(parseInt(letter)) === "number" ? letter:'');
    const r = (BigInt(a) + BigInt(b)).toString();    
    
    return r;
}


console.log(add('1','1'));
console.log(add('123','456'));
console.log(add("888", "222"));
console.log(add("1372", "69"));
console.log(add("12", "456"));
console.log(add("101", "100"));
console.log(add('63829983432984289347293874', '90938498237058927340892374089'));

/* 

Precisamos somar grandes números e precisamos de sua ajuda.

Escreva uma função que retorne a soma de dois números. Os números de entrada são strings e 
a função deve retornar uma string.

Exemplo

add("123", "321"); -> "444"
add("11", "99"); -> "110"

Notas

Os números de entrada são grandes.
A entrada é uma string de apenas dígitos
Os números são positivos

91002328220491911630239667963

*/