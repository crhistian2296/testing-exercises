// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(currency){
    return  currency * (oneEuroIs.JPY / oneEuroIs.USD);
}

function fromEuroToDollar(currency){
    return  currency * oneEuroIs.USD;
}

function fromYenToPound(currency){
    return  currency * (oneEuroIs.GBP / oneEuroIs.JPY);
}

console.log(fromDollarToYen(5.5));
console.log(fromYenToPound(10000));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};