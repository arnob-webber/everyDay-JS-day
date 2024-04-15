const CustomerHave = confirm("Food price starts at 1100?");
let Uhave = prompt("How much money do you have?");
let YourGfHave = 10;

// convert string inputs to numbers 
Uhave = parseFloat(Uhave); /*if u dont use this u'll get error*/

let totalHave = Uhave + YourGfHave;

if (totalHave >= 1000) {
  for (let money = 0; money < 5; money++) {
    console.log("Hurray! You got a free pizza.");
  }

  let Bill = prompt("enter bil");
  let totalBillWithdiscount = Bill * 0.5;
  function totalBill(Bill, totalBillWithdiscount) {
    return Bill + totalBillWithdiscount;
  }

  alert(totalBill(Bill, totalBillWithdiscount));
} else {
  alert("Both of you can't eat pizza, insufficient money.");
}
