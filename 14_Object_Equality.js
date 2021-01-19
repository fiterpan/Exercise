let address1 = new Address('a','b','c'); 
let address2 = new Address('a','b','c');

// Contructor Function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1,address2){
    for(let key1 in address1){
        for(let key2 in address2){
        if(address1[key1] === address2[key2]) 
            return (address1[key1] === address2[key2]);
        }
    }
}

function areSame(address1, address2){
    return address1 === address2;
}

console.log(areEqual(address2,address2));
console.log(areSame(address1,address2));
