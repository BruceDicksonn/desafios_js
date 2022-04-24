const array = [];

const gerarNumeroAleatorio = () => (Number.parseInt(1 + (Math.random()) * (501-1)));

const buscaBinaria = (array, valor) => {
    const tam = array.length;
    if(valor <= array[tam/2]){
        for(let i = 0; i < (tam/2);i++){
            if(array[i] === valor){
                return `Valor encontrado: p:${i}`;
            } else {
                continue;
            }
        }
    } else {
        for(let i = (tam/2); i < array.length; i++){
            if(array[i] === valor){
                return `Valor encontrado: p:${i}`;
            } else {
                continue;
            }
        }
    }
}

for(let i = 0; i < 30; i++){
    array[i] = i;
}

console.log(array);
console.log(`\n\n${buscaBinaria(array,8)}`);
console.log(`\n\n${buscaBinaria(array,24)}`);





