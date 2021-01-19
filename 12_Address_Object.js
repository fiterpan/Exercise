const address = {
    street: 'Cijagra' ,
    city: 'Kab.Bandung',
    zipCode: 40971
};

showAddress(address);

function showAddress(myAddress){

    for(let key in myAddress)
    console.log(key + ': ' + myAddress[key]);
}
