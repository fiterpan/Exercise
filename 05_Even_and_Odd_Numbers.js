// Exercise- Even and Odd Numbers

showNumbers(10);

function showNumbers(limit){
    for(let i = 0; i <= limit; i++){
        // console.log(i);

        // Percobaan pertama -
        // if (i % 2 === 0) console.log(i, 'EVEN');
        // else console.log(i, 'ODD');

        const message = (i % 2 === 0) ? 'EVEN' : 'OOD';
        console.log(i, message);
    }
}
