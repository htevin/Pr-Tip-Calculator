const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

let numberOfPpl = +numberOfPeople.textContent;

const calculateBill = () => {
  let billAmount = +billTotalInput.value;

  tipValue = tipInput.value / 100;

  let ttl = tipValue * billAmount;

  let total = billAmount + ttl;

  totalWithPpl = total / numberOfPpl;

  perPersonTotal.innerText = `$${totalWithPpl.toFixed(2)}`;
};

const increasePeople = () => {
  numberOfPpl += 1;
  console.log(numberOfPpl);
  numberOfPeople.innerText = numberOfPpl;

  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPpl == 1) {
    return;
  }

  numberOfPpl -= 1;

  numberOfPeople.innerText = numberOfPpl;

  calculateBill();
};
