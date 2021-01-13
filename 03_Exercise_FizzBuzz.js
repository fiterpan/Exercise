function fizzBuzz(input){
    // Percobaan pertama -
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (typeof input != 'number')
        return 'NaN';

    if (input % 3 === 0) 
        return 'Fizz';

    if (input % 5 === 0) 
        return 'Buzz';
    
    else return "Not Fizz, Buzz or FizzBuzz";
}

const output = fizzBuzz(1);
console.log(output);
