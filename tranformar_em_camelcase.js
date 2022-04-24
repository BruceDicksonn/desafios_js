function toCamelCase(string){
    const wordReturned = removeUnderlines(string);

    for(let i in wordReturned){
        const firstLetter = wordReturned[i][0].toUpperCase();
        const currentWord = wordReturned[i];
        let capitalized = '';
        if(i > 0){
            capitalized = firstLetter + currentWord.substr(1);
            wordReturned[i] = capitalized;
        }
    }

    return wordReturned.toString().split(',').join('');
}

function removeUnderlines(string){
    let str = '';
    if(string.includes('-')){
        str = string.split('-');
    } else if(string.includes('_')){
        str = string.split('_');
    } else {
        str = string;
    }

    return str;
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The-stealth-warrior'));
console.log(toCamelCase('the_stealth_warrior'));
console.log(toCamelCase('A-B-C'));


/* 

Complete o método/função para que ele converta palavras delimitadas por traço/sublinhado em caixa de camelo.



A primeira palavra na saída deve ser maiúscula apenas se a palavra original estiver em maiúscula (conhecida como Upper Camel Case, também conhecida como Pascal case).

Exemplos


"the-stealth-warrior"	se converte em "theStealthWarrior"


"The_Stealth_Warrior"	se converte em

"TheStealthWarrior"

*/