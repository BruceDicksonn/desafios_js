function spinWord(string){
    let wordReturned = retiraVirgulaDaFrase(string);
    wordReturned = inverterLetras(wordReturned);
    return wordReturned.join(' ');
}

function retiraVirgulaDaFrase(string){
    let newWord = '';
    let temVirgula = false;
    for(let letter of string){
        if(letter === ','){
            temVirgula = true;
            newWord = string.split(',').join('');
        } else {
            continue;
        }
    }
       if(temVirgula){
          return newWord;
       } else {
           newWord = string;
           return newWord;
       }
}

function inverterLetras(string){
    let arrayWithWords = string.split(' ');
    let wordReturned = [];


    function percorrePalavra(index){

        let newWord = '';
        let currentWord = arrayWithWords[index];

        if(currentWord.length >= 5){
            for(let i = (currentWord.length - 1); i >= 0; i--){
                newWord += currentWord[i];
            }
        } else {
            for(let i = 0; i < currentWord.length; i++){
                newWord += currentWord[i];
            }            
        }

            wordReturned.push(newWord);
        
        if((index+1) < arrayWithWords.length){
            percorrePalavra(index+1);
        }      
    }

    percorrePalavra(0);

    return wordReturned;

}

console.log(spinWord('This is a test'));
console.log(spinWord('Hey fellow warriors'));
console.log(spinWord('This is another test'));
console.log(spinWord('EveryBody hates Chris'));


/* 

Escreva uma função que receba uma string de uma ou mais palavras e retorne a mesma string, mas com todas as palavras de cinco ou mais letras invertidas 

(assim como o nome deste Kata). 


As strings passadas consistirão apenas em letras e espaços.

Os espaços serão incluídos somente quando mais de uma palavra estiver presente.


Examples: 

spinWords( "Hey fellow warriors" ) => returns 
"Hey wollef sroirraw" 

spinWords( "This is a test") => returns 
"This is a test" 

spinWords( "This is another test" )=> returns
 "This is rehtona test"

*/