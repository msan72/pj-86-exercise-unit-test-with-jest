const sum = (a, b) => {
    return a + b;
};

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
};

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = Number(((valueInDollar / 1.07) * 156.5).toFixed(2));
    return valueInYen;
};

const fromYenToPound = function (valueInYen) {
    let valueInPound = Number(((valueInYen / 0.87) * 156.5).toFixed(2));
    return valueInPound;
};

console.log(
    sum(6, 19),
    fromEuroToDollar(12.5),
    fromDollarToYen(16),
    fromYenToPound(14.5),
);

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };