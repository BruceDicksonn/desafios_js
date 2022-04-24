class Roman {
    constructor(integer){
        this.integer_number = integer;
        this.roman_number = '';
        this.roman_numerals = {
            I:1,
            IV:4,
            V:5,
            IX:9,
            X:10,
            XIX:19,
            XX:20,
            XL:40,
            L:50,
            XC:90,
            C:100,
            CD:400,
            D:500,
            CM:900,
            M:1000,
        }
    }

    toRoman(integer){

        const roman_numerals_values = Object.values(this.roman_numerals);
        const roman_numerals_keys = Object.keys(this.roman_numerals);
        const integerNumber = decomponseNumber(integer);

        for(let i in roman_numerals_values){
            for(let n in integerNumber){
                if(roman_numerals_values[i] === integerNumber[n]){
                    integerNumber[n] = roman_numerals_keys[i];
                }
            }
        }
        this.roman_number = integerNumber.toString().split(',').join('');
        return this.roman_number
    }

    fromRoman(roman_numeral){

        const roman_numerals_values = Object.values(this.roman_numerals);
        const roman_numerals_keys = Object.keys(this.roman_numerals); 
        const integerNumber = [];

        function transform(index){
            let found = false;
            if(index < roman_numeral.length){
                for(let i in roman_numerals_keys){

                    if(roman_numeral.slice(index,(index+2)) === roman_numerals_keys[i]){
                        
                        found = true;
                        integerNumber.push(roman_numerals_values[i]);
                        break;

                    } else {
                        continue
                    }
                }

                if(found){
                   transform(index+2); 
                } else {
                    for(let i in roman_numerals_keys){

                        if(roman_numeral[index] === roman_numerals_keys[i]){

                            integerNumber.push(roman_numerals_values[i]);
                            break;
                        }
                    }
                    transform(index+1); 
                }
            }
        }

        transform(0);

        return integerNumber.reduce((acur,curr)=> acur+curr);
    }
}

function decomponseNumber(integer) {
    const separatedNumbers = [];
    while(integer >= 0){
        if(integer >= 1000){
            separatedNumbers.push(1000);
            integer -= 1000;
        } else if(integer >= 900) {
            separatedNumbers.push(900);
            integer -= 900;
        } else if(integer >= 500){
            separatedNumbers.push(500);
            integer -= 500;
        } else if(integer >= 400){
            separatedNumbers.push(400);
            integer -= 400;
        } else if(integer >= 100){
            separatedNumbers.push(100);
            integer -= 100;
        } else if(integer >= 90){
            separatedNumbers.push(90);
            integer -= 90;
        } else if(integer >= 50){
            separatedNumbers.push(50);
            integer -= 50;
        } else if(integer >= 40){
            separatedNumbers.push(40);
            integer -= 40;
        } else if(integer >= 20){
            separatedNumbers.push(20);
            integer -= 20;
        } else if(integer >= 10){
            separatedNumbers.push(10);
            integer -= 10;
        } else if(integer === 9){
            separatedNumbers.push(9);
            integer -= 9;
        } else if(integer >= 5){
            separatedNumbers.push(5);
            integer -= 5;
        } else if(integer === 4){
            separatedNumbers.push(4);
            integer -= 4;
        } else if(integer >= 1){
            separatedNumbers.push(1);
            integer -= 1;
        } else {
            break;
        }
    }
    
    return separatedNumbers;

}    

const RomanNumerals = new Roman();

console.log(RomanNumerals.toRoman(159));
console.log(RomanNumerals.toRoman(1666));
console.log(RomanNumerals.toRoman(1990));
console.log(RomanNumerals.toRoman(2008));
console.log(RomanNumerals.toRoman(2144));
console.log(RomanNumerals.toRoman(1488));


console.log(RomanNumerals.fromRoman('MC'));
console.log(RomanNumerals.fromRoman('I'));
console.log(RomanNumerals.fromRoman('IV'));
console.log(RomanNumerals.fromRoman('V'));
console.log(RomanNumerals.fromRoman('MCMXC'));

/* 



Crie uma classe RomanNumerals que possa converter um numeral romano de e para um valor inteiro.

Ele deve seguir a API demonstrada nos exemplos abaixo. 

Vários valores de numeração romana serão testados para cada método auxiliar.

Os algarismos romanos modernos são escritos expressando cada dígito separadamente, começando com o dígito mais à esquerda e pulando qualquer dígito com valor zero.

Em algarismos romanos 1990 é renderizado: 

1000=M, 900=CM, 90=XC; 

resultando em MCMXC. 

2008 é escrito como 

2000=MM, 8=VIII; ou MMVIII.

1666 usa cada símbolo romano em ordem decrescente: MDCLXVI.

Faixa de entrada:1 <= n < 4000

Neste kata 4 deve ser representado como IV, NÃO como IIII(os "quatro do relojoeiro").

Exemplos

RomanNumerals.toRoman(1000); // should return 'M'

RomanNumerals.fromRoman('M'); // should return 1000


Ajuda


Símbolo	Valor

I	1
IV	4
V	5
X	10
L	50
C	100
D	500
M	1000










*/