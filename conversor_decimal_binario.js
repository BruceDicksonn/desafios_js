const countBits = (n) => {
    let binarios = [];
    let divisor = n;
    const transform = (divisor) => {
        if(divisor > 1){
            binarios.push(Number.parseInt((divisor % 2)));
            transform(Number.parseInt(divisor/2));
        } else {
            binarios.push(Number.parseInt(divisor));
        }
    }
        transform(divisor);
        const resp = binarios.reverse().toString().split(',');
        return resp.join(''); 
}

console.log(countBits(43));
console.log(countBits(9));
console.log(countBits(10));
console.log(countBits(4));
console.log(countBits(11));

