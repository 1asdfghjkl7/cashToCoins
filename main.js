let dollarAmount = 2.25
let piggyBank = {};


//make if statement running through each coin and updating dollarAmountRemaining until it = 0 then logging piggyBank. log piggyBank through each coin statement to make sure code is working.

let qRemain = dollarAmount % 0.25; //gets remainder of dollarAmount if divided with quarters
let dividedAmount = dollarAmount - qRemain; //gets dollarAmount and subtracts above value to return the amount successfully divided by 25
let quarters = dividedAmount / 0.25;           //gets amount above and divides it by 25 giving you the amount of quarters used
let dollarAmountRemaining = qRemain; //gets the remaining money to be converted

piggyBank["quarters"] = quarters;

let dRemain = dollarAmount % 0.10;
dividedAmount = dollarAmountRemaining - dRemain;
let dimes = dividedAmount / 0.10;
dollarAmountRemaining = dRemain;

piggyBank["dimes"] = dimes;


let nRemain = dollarAmount % 0.05;
dividedAmount = dollarAmountRemaining - nRemain;
let nickels = dividedAmount / 0.05;
dollarAmountRemaining = nRemain;

piggyBank["nickels"] = nickels;


let pRemain = dollarAmount % 0.01;
dividedAmount = dollarAmountRemaining - pRemain;
let pennies = dividedAmount / 0.01;
dollarAmountRemaining = pRemain;

piggyBank["pennies"] = pennies;

console.log(piggyBank);
