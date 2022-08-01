function generateHashtag (str='') {

    if(str.length === 0){
        return false;
    } else {
        const noSpaces = str.split(' ').join('');
        const word = '#'.concat(noSpaces[0].toUpperCase())
                        .concat(noSpaces.substring(1));

        return word.length > 140 ? false: word;
    }

}


console.log(generateHashtag("hello there thanks for trying my Kata"));
console.log(generateHashtag("   hello   World"));


/* Instruções
Resultado
A equipe de marketing está gastando muito tempo digitando hashtags.
Vamos ajudá-los com nosso próprio Gerador de Hashtags!

Aqui está o acordo:

Deve começar com uma hashtag ( #).
Todas as palavras devem ter a primeira letra maiúscula.
Se o resultado final for maior que 140 caracteres ele deve retornar false.
Se a entrada ou o resultado for uma string vazia, ela deve retornar false.

Exemplos
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */