function anagrams(word, words) {
    const wordsReturned = isAnagram(word,words);
    return wordsReturned;
}

const isAnagram = (word,listWord) => {
    const validated = [];
    
    const checkWord = (index) => {

        if(index < listWord.length){

            let copyWord = word.toLowerCase().split(' ').join('').split('');
            let currentWordOfList = listWord[index].toLowerCase().split(' ').join('').split('');
            let isValid = false;

            for(let i in currentWordOfList){

                if(copyWord.includes(currentWordOfList[i])){
                    isValid = true;
                    delete copyWord[copyWord.indexOf(currentWordOfList[i])];
                } else {
                    isValid = false;
                    break;
                }
            }

            if (isValid) validated.push(listWord[index]);
            checkWord(index+1);
            
        } 
        
    }
    checkWord(0);
    return validated;
}

console.log(anagrams('abba', ['aabb','abcd','bbaa','dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
console.log(anagrams('laser', ['123', 'lazy',  'lacer', 'LaSer','l a s e r']));


/* 


O que é um anagrama? Bem, duas palavras são anagramas uma da outra se ambas contiverem as mesmas letras. Por exemplo:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Escreva uma função que encontre todos os anagramas de uma palavra de uma lista. 

Você receberá duas entradas de uma palavra e uma matriz com palavras. 

Você deve retornar um array de todos os anagramas ou um array vazio se não houver nenhum. Por exemplo:



anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) 

=> ['aabb', 'bbaa']



anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) 

=> ['carer', 'racer']


anagrams('laser', ['lazing', 'lazy',  'lacer']) 

=> []


Nota para Go
For Go: A fatia de string vazia é esperada quando não há anagramas encontrados.





*/

