let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}
const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}
module.exports = {fromEuroToDollar }

const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar * 156.5;
    
    return valueInYen;
}
module.exports = {fromDollarToYen}

const fromYenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen * 0.87;
    
    return valueInPound;
}
module.exports = {fromYenToPound}