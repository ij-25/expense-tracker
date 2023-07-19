const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("money-plus");
const expenseElement = document.getElementById("money-minus");
const historyList = document.getElementById("history-list");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("add");

let balance = 0;
let income = 0;
let expense = 0;

function updateBalance() {
  balance = income - expense;
  balanceElement.innerText = `₹ ${balance.toFixed(2)}`;
  incomeElement.innerText = `+ ₹ ${income.toFixed(2)}`;
  expenseElement.innerText = `- ₹ ${expense.toFixed(2)}`;
}

function updateIncomeAndExpense(amount) {
  if (amount >= 0) {
    income += amount;
  } else {
    expense -= amount;
  }

  updateBalance();
}

function addTransaction(text, amount) {
  const listItem = document.createElement("li");
  listItem.className =
    amount < 0
      ? "flex text-xl bg-slate-200 justify-items-end pt-2 minus"
      : "flex text-xl bg-slate-200 justify-items-end pt-2 plus";

  listItem.innerHTML = `
    ${text} <span> ₹ ${amount.toFixed(
    2
  )} </span><button class="delete-btn">X</button>
  `;

  historyList.appendChild(listItem);

  updateIncomeAndExpense(amount);
}

function handleSubmit(e) {
  e.preventDefault();

  const text = textInput.value.trim();
  let amount = parseFloat(amountInput.value);

  if (text.includes("+")) {
    const parts = text.split("+");
    if (parts.length === 2) {
      const description = parts[0].trim();
      const positiveAmount = parseFloat(parts[1].trim());
      if (!isNaN(positiveAmount)) {
        amount = positiveAmount;
        textInput.value = description;
      }
    }
  }

  if (text === "" || isNaN(amount) || amount === 0) {
    alert("Please enter valid text and amount.");
    return;
  }

  addTransaction(text, amount);

  textInput.value = "";
  amountInput.value = "";
}

addBtn.addEventListener("click", handleSubmit);