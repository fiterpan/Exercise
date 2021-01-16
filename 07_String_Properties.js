const movie = {
    title: 'John Wick',
    releaseYear:2014,
    rating: 7.4,
    director: 'Chad Stahelski'
};

    
    showProperties(movie);

function showProperties(inputProp) {
    for(let key in inputProp)
    // console.log(key);
        if( typeof inputProp[key] === 'string') console.log(key, inputProp[key]);
}
