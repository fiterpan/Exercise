const marks = [80,80,50];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    const average = calculateAverage(marks);

    if(average < 50) return 'F';
    if(average < 60) return 'E';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}

function calculateAverage(markValue){
    let sum = 0;
    for(let mark of markValue) sum += mark;
    return sum / markValue.length;
    // return average;
}
