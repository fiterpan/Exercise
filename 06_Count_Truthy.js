const myArrays = [0,1,2,3];
// console.log(myArray[0]);
// console.log(myArray.length - 1);
console.log(countTruthy(myArrays));

// const input = false;
// if(input) console.log('Betul');


function countTruthy(myArray){
    let answer = 0;

    for(let value of myArray)
        if(value) answer++;
    return answer;
}
