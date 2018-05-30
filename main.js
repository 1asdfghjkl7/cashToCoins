let piggyBank = {};
let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;

let moneyFunction = (dollarAmount) => {
    dollarAmount = Math.round(dollarAmount * 100)
    while ((dollarAmount % 25) >= 0 && dollarAmount >= 25) {
        dollarAmount -= 25
        quarters++
    }
    
    while ((dollarAmount % 10) >= 0 && dollarAmount >= 10) {
        dollarAmount -= 10
        dimes++
    }

    while ((dollarAmount % 5) >= 0 && dollarAmount >= 5) {
        dollarAmount -= 5
        nickels++
    }

    while (dollarAmount > 0) {
        dollarAmount -= 1
        pennies++
    }

    piggyBank["quarters"] = quarters;
    
    piggyBank["dimes"] = dimes;
    
    piggyBank["nickels"] = nickels;
    
    piggyBank["pennies"] = pennies;
    console.log(piggyBank);
    console.log(dollarAmount);
    
}




moneyFunction(1.16);
moneyFunction(74.69);
moneyFunction(1);
