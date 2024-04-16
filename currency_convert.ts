import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue("****Currency converter"));

const currency : any ={
    USD : 1,
    PKR : 277.55,
    INR : 83.30,
    EUR : 0.92,
    NZD : 1.66,
    NPR : 133.08,
    MAD : 10.06,
    EGP : 47.33,
    IRR : 42075.00,
    AFN : 71.23,
    IQO : 1308.17,

}
let userslect = await inquirer.prompt(
    [{
        name    : "From",
        message :"SELECT YOUR CURRENCY WHICH YOU WANT TO CONVERT",
        type    : "list",
        choices : ["USD", "PKR", "INR", "EUR", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN", "IQO"],

    },
    {
        name:"to",
        message : "SELECT YOUR CURRENCY WHICH YOU WANT TO CONVERT",
        type : "list",
        choices : ["USD", "PKR", "INR", "EUR", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN", "IQO"],

    },
    {
        name:"amount",
        message:"how much amount you want to convert",
        type : "number",

    }
]
);
let fromlist = currency[userslect.From];
let tolist = currency[userslect.to];
let amount = userslect.amount;

let baseamount = amount / fromlist;

let convertamount = baseamount * tolist;
let result = Math.round(convertamount)

console.log(chalk.bgMagenta(result));
