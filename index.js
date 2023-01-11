#! /usr/bin/env node
import inquirer from 'inquirer';
// currencies exchange rates
const exchangeRates = {
    PKR: 1,
    USD: 0.0044,
    EUR: 0.0041,
    INR: 0.36 // 1 pkr = 0.36
};
// ask the user for the amount and currency they want to convert
inquirer
    .prompt([
    {
        type: 'input',
        name: 'amount',
        message: 'Enter the amount you want to convert:'
    },
    {
        type: 'list',
        name: 'currency',
        message: 'Enter the currency you want to convert to:',
        choices: ['USD', 'EUR', 'INR', 'PKR']
    }
])
    .then(answers => {
    const amount = parseFloat(answers.amount);
    if (isNaN(amount)) {
        console.log('Please enter a valid number.');
        return;
    }
    // result
    const result = amount * exchangeRates[answers.currency];
    console.log(`${amount} is worth ${result} in ${answers.currency}.`);
});
