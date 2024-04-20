#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        name: "userGusessedNumber",
        type: "number",
        message: "Guess a Number from 1-10"
    }]);
console.log(answer.userGusessedNumber);
if (answer.userGusessedNumber === randomNumber) {
    console.log("you guessed right number");
}
else {
    console.log(`you guessed wrong number the number was ${randomNumber}`);
}
