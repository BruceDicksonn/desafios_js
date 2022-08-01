function duplicateEncode(word){
    let letters = word.split('');
    let newWord = [];
    
    function letterForLetter(index){
        let countRepeats = 0;
        if(index < word.length){
            for(let i in letters){
                if(letters[i].toLowerCase() == word[index].toLowerCase()){
                    countRepeats += 1;   
                }
            }
                if(countRepeats > 1){
                    newWord.push(')');
                } else {
                    newWord.push('(');
                }

            letterForLetter(index+1);
        }
    }

    letterForLetter(0);

    return newWord.toString().split(',').join('');
    
}


console.log(duplicateEncode('din') + '\n');
console.log(duplicateEncode('recede') + '\n');
console.log(duplicateEncode('Success') + '\n');
console.log(duplicateEncode('should ignore case') + '\n');
console.log(duplicateEncode(')JTTTT(TTTTTzm') + '\n');


/* 


The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 


*/
