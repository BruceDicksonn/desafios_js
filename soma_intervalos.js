function sumIntervals(intervals) {
    const checkedIntervals = pickIntervals(intervals);
    return checkedIntervals.reduce((acur,curr)=>acur+curr);
}

function pickIntervals(intervals){
    const returned = [];
    let lastIntervalChecked = 0;


    function checkIntervals(index){
        const currentArray = intervals[index];
        const currentInterval = [];
        let interval = 0;
        let isEqual = false;

        if(index < intervals.length){
            for(let i in intervals[index]){
                    currentInterval.unshift(intervals[index][i]);
            }
            for(let i in currentInterval){
                interval = currentInterval[i] > interval ? (currentInterval[i] - interval): (interval - currentInterval[i])
            }

            if(returned.length === 0){
                returned.push(interval);
                lastIntervalChecked = interval;

            } else {

                let isTheSameAsOriginalArray = false;

                for(let i in intervals[index-1]){
                    if(currentArray[i] === intervals[index-1][i]){
                        isTheSameAsOriginalArray = true;
                    } else {
                        isTheSameAsOriginalArray = false;
                    }
                }

                if(!isTheSameAsOriginalArray){

                for(let i = index; i <= index;i++){
                    let currentValues = intervals[i];
                    for(let x in currentValues){
                        if(currentValues[x] === lastIntervalChecked){
                            isEqual = true;
                        }
                    }
                        lastIntervalChecked = interval
                }
                
                if(isEqual){
                    returned.push(1);
                } else {
                    returned.push(interval);
                }      
                }

            }
                checkIntervals(index+1);
        }
    }
    checkIntervals(0);
    return returned;
}

console.log(sumIntervals([[1,5],[1,5]]));
console.log(sumIntervals([[1,4],[7,10],[3,5]]));

console.log(sumIntervals([[1,2],[6,10],[11,15]]));
console.log(sumIntervals([[-20,20]]));