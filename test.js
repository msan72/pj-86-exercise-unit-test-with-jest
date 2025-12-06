const { sum } = require('./app.js')

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9)

    expect(total).toBe(23)
})

test("1 euro should be 1.07 dollars", function () {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // This is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1 dollar should be 146.26 Yen", function () {
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(7.5);
    const expected = ((7.5 / 1.07) * 156.5).toFixed(2)
    expect(fromDollarToYen(7.5)).toBe(1096.96); 
})

test("1 yen should be 146.26 Yen", function () {
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound(21.5);
    const expected = ((21.5 / 0.87) * 156.5).toFixed(2)
    expect(fromYenToPound(21.5)).toBe(3867.53); 
})