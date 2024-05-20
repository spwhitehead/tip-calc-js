let bill_amount = prompt("Enter the bill amount: ");
let tip_rate = prompt("Enter the tip percentage: ");

let bill_amount_float = parseFloat(bill_amount);
let tip_rate_float = parseFloat(tip_rate);

let tip = (bill_amount_float * tip_rate_float / 100);

let total = bill_amount_float + tip;

let message = "The bill total was: $" + bill_amount_float.toFixed(2) + "\n" + "The tip amount is: $" + tip.toFixed(2) + "\n" + "The total amount is: $" + total.toFixed(2);

alert(message);