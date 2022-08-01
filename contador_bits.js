const countBits = (n) => {

    if(n < 0 || n === 0) {
        return '';
    }

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

        const resp = binarios.reduce((acur,curr) => {
            acur = curr === 1 ? acur+curr : acur+0;
            return acur;
        },0);

        return resp; 
}

console.log(countBits(30));

/* 


Write a function that takes an integer as input, and returns the number of bits
that are equal to one in the binary representation of that number. 

You can guarantee that input is non-negative.

Example: 

The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

