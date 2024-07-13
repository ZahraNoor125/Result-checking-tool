#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        name: "username",
        type: "input",
        message: "Enter your Name",
    },
    { name: "userFatherName", type: "input", message: "Enter your Father Name" },
    { name: "Roll no ",
        type: "number",
        message: "Enter your Roll no" },
]);
console.log(chalk.red.bold(Math.floor(Math.random() * 48 + 52), "%"));
