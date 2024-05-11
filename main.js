#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    usa: 1,
    Euro: 0.928325,
    britishPound: 0.79819,
    indianRupee: 83.561646,
    IndianRupee: 83.561646,
    australian: 1.514319,
    canadianDollar: 1.367402,
    singaporeDollar: 1.35438,
    swissFranc: 0.906436,
    malaysianRinggit: 4.738883,
    japaneseYen: 155.884068,
    chineseYuanRenminb: 7.226115,
    pkr: 289
};
let Tans = await inquirer.prompt([{
        name: "from",
        type: "list",
        choices: ["prk", "usa", "britishPound", "indianRupee", "IndianRupee", "australian"],
        message: "Enter currency name ",
    },
    {
        name: "to",
        type: "list",
        choices: ["pkr", "usa", "britishPound", "indianRupee", "IndianRupee", "australian"],
        message: "Enter currency name",
    },
    {
        name: "amount",
        type: "number",
        message: "Enter  converted amount ",
    }
]);
let fromcurrency = currency[Tans.from];
let tocurrency = currency[Tans.to];
let amount = Tans.amount;
let baseamount = fromcurrency / amount;
let converted = tocurrency * baseamount;
console.log(converted);
