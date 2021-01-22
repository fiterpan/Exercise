const numbers = [1,2,3,4,5];

console.log(searching(numbers,1));

function searching(myArray, searchElement){

    for(let element of myArray)
        if(element === searchElement)
            return true;
        return false;    
    
    // for(let key of myArray){
    //     for(let i = 0; i < myArray.length; i++);
    //         if(myArray[key] === searchElement)
    //             return console.log(true);
    // }

}
