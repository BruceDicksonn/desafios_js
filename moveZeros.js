function moveZero(array){
    const arrayInOrder = [];
    const arrayWithValuesZero = [];

    function checkArray(index){
        if(index < array.length){

            if(array[index] !== 0){
                arrayInOrder.push(array[index]); 
            } else {
                arrayWithValuesZero.push(array[index]);
            }
                checkArray(index+1);
        }
    }
    checkArray(0);
    return arrayInOrder.concat(arrayWithValuesZero);
}

console.log(moveZero([false,1,0,1,2,0,1,3,"a"]));


/* 


Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"])

 // returns

	 [false,1,1,2,1,3,"a",0,0]


*/