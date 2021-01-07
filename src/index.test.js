const index = require('./index');

test('Evaluate funtion output', () => {
    expect(index()).toBe("I'm the main function!");
});
