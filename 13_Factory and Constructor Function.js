// Factory function

console.log(createAddress('Sindangpalay', 'Kab.Bandung',40921));

function createAddress(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    };
}

// Constructor Function

function Alamat(street,city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

console.log(new Alamat('Cijagra','Kab.Bandung',40972));
