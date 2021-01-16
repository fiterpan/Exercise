// const bintang = '*';
// console.log(bintang);

showStarts(10);

function showStarts(rows){
    let bintang = '';

    for(let i = 0; i < rows; i++){
        if(i <= rows) console.log(bintang += '*');
    }
}
