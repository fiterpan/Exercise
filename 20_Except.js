const numbers = [1,2,3,4,5,2,3,1,2,]

const output = except(numbers, [1]);
console.log(output);

function except(myArray, excluded){
    const answer = [];
        for(let element of myArray)
            if(!excluded.includes(element))
            answer.push(element);
        return answer;

    // for(let i of myArray){
    //     for(let j of excluded){
    //         if(i !== j)
    //             answer.push(i);
    //         return answer;
    //     }
    // }


    // for(let i of myArray)
    //     if(i != excluded)
    //         return answer.push(i);
}
