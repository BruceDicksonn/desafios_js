const alphabet = [
    'a','b','c',
    'd','e','f',
    'g','h','i',
    'j','k','l',
    'm','n','o',
    'p','q','r',
    's','t','u','v',
    'w','x','y','z'
];

function alphabetPosition(text){
     const newText = noSpaceBetweenLetters(text);
     const returned = [];
     function checkLetters(index){
        if(index < newText.length){
            for(let letter in alphabet){        
                if(newText[index].toLowerCase() === alphabet[letter]){
                    returned.push(alphabet.indexOf(alphabet[letter])+1);
                } else {
                    continue;
                }
            }
             checkLetters(index+1);
        }
     }
        checkLetters(0);
        return returned.toString().split(',').join(' ');
}

function noSpaceBetweenLetters(text){
    return text.split('');
}

console.log(alphabetPosition("Batman") + '\n');
console.log(alphabetPosition("The sunset sets at twelve o' clock") + '\n');

/* 

Neste kata, você deve, dada uma string, substituir cada letra por sua posição no alfabeto.

Se alguma coisa no texto não for uma carta, ignore-a e não a devolva.

"a" = 1, "b" = 2, etc

Exemplo

alphabetPosition("The sunset sets at twelve o' clock.")

Deve retornar 

"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(como uma string)


*/