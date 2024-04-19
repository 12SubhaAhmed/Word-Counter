#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\tWelcome to my Word Counter\n"));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: (chalk.yellowBright("Enter your sentence to count the word:"))
    }
]);
let words = answers.sentence.trim().split(" ");
//Print the Array of words to the console
console.log(words);
//Print the word count of yhe sentence to the console.
console.log(chalk.green(`\nYour sentence word count is: ${words.length}`));
