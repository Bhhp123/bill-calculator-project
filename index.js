#! /usr/bin/env node
import inquirer from 'inquirer';
async function calculator() {
    console.log('\x1b[34m======================================================\x1b[0m');
    console.log('\t\x1b[34m\x1b[4m Bilawal Hussain\'s CALCULATOR PROJECT1 \x1b[0m');
    console.log('\x1b[36m======================================================\x1b[0m');
    const operations = ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Exit'];
    let num1 = 0;
    let num2 = 0;
    while (true) {
        const numbers = await inquirer.prompt([
            {
                type: 'number',
                name: 'num1',
                message: '\x1b[36mEnter the first number:\x1b[0m',
                default: num1,
            },
            {
                type: 'number',
                name: 'num2',
                message: '\x1b[33mEnter the second number:\x1b[0m',
                default: num2,
            },
            {
                type: 'list',
                name: 'operation',
                message: '\x1b[32mSelect the operation:\x1b[0m',
                choices: operations,
            },
        ]);
        if (numbers.num1 === 0 || numbers.num2 === 0) {
            console.log('\x1b[35mPlease enter valid numbers!\x1b[0m');
            continue;
        }
        if (numbers.operation === 'Exit') {
            console.log('\t\x1b[31mExiting...\x1b[0m');
            break;
        }
        let result;
        if (numbers.operation === 'Addition') {
            result = numbers.num1 + numbers.num2;
        }
        else if (numbers.operation === 'Subtraction') {
            result = numbers.num1 - numbers.num2;
        }
        else if (numbers.operation === 'Multiplication') {
            result = numbers.num1 * numbers.num2;
        }
        else if (numbers.operation === 'Division') {
            result = numbers.num1 / numbers.num2;
        }
        console.log(`\x1b[34mResult: ${numbers.num1} ${numbers.operation} ${numbers.num2} = ${result}\x1b[0m`);
        num1 = numbers.num1;
        num2 = numbers.num2;
    }
}
calculator();
