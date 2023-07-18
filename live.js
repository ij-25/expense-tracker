const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const addbtn = document.getElementById("add");
let Tr = [];
addbtn.addEventListener("click" , addTr )
function addTr () {
Tr.push({
  amount,text
})
console.log( "hi" , Tr);
}
const dummyTransactions = [
  { id: 1, text: "flower", amount: -30 },
  { id: 2, text: "Chai", amount: -10 },
  { id: 3, text: "Toast", amount: -15 },
  { id: 4, text: "Brownie", amount: -45 },
];
let transactions = dummyTransactions;
function addTransactionDOM(transaction){
    console.log(transaction);
    const sign = transaction[0].amount < 0 ?" - " : "+";
    const item = document.createElement("li");
    item.classList.add(
        transaction[0].amount < 0 ? "minus" : "plus"
    )
    item.innerHTML = `
    ${transaction[0].text}<span>${sign}${Math.abs(transaction[0].amount)}</span>
    <button class= "delete-btn" onclick= "" >`;
    list.appendChild(item);
}
addTransactionDOM(transactions);