const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
});

test('checks to see if employee object information is correct input type', () => {
    const employee = new Employee("David", 16727, "davelpz15@gmail.com");

    expect(employee.name).toEqual(expect.any(string));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(string));
})