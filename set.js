function myFunction(a,b){
    
    for(let value of b){
        a.add(value);
    }

    return a;
}

console.log(myFunction(new Set('123'),new Set('234')));
console.log(myFunction(new Set([1,2,3]),new Set([3,4,5])));
console.log(
    myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))
);

/* 

Escreva uma função que receba dois Set()(a,b) como parametros,
unir os dois em um novo Set() e retornar o item criado.

ex:

console.log(myFunction(new Set('123'),new Set('234')));

deve retornar:

Set(4) {'1','2','3','4'}

*/