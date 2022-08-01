function generateHashtag (str='') {

    if(str.length === 0){

        return false;

    } else {

        const noSpaces = str.trim().split(' ');

        let capitalizeds = noSpaces.filter(word => word != '');
        capitalizeds = capitalizeds.map(word => word[0].toUpperCase().concat(word.slice(1))).join('');

        const word = capitalizeds !== "" ? '#'.concat(capitalizeds[0].toUpperCase()).concat(capitalizeds.substring(1)):false;

        return word.length > 140 ? false: word;
    }

}


console.log(generateHashtag("hello there thanks for trying my Kata"));
console.log(generateHashtag("   hello   World"));
console.log(generateHashtag(""));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("a".repeat(139)));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("a".repeat(140)));


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