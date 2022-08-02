const bInput = document.querySelector(".billInput");
const startButton = document.querySelector(".stButton");
const slider = document.querySelector(".slider");
const years = document.getElementById("year_settings");
const options = document.getElementsByTagName("option");
const output = document.querySelector(".val");
const savings = document.querySelector(".savings");
const yearly = document.querySelector(".yearly");

output.innerHTML = bInput.value; //this starts the value at zero

// let formatting_options = {
//   style: "currency",
//   currency: "USD",
//   minimumFractionDigits: 3,
// };
bInput.value = '';

function intial() {
  if (!bInput.value) {
    output.innerHTML = " Please enter your monthly bill.";
    savings.innerHTML = " Please enter your monthly bill.";
    yearly.innerHTML = " Please enter your monthly bill.";
  } else {
    let percentIncrease = bInput.value * 0.015;
    let total = parseInt(bInput.value) + parseInt(percentIncrease);
    output.innerHTML = `$${Math.round(total)}`;
    let percentDecrease = bInput.value * 0.25;
    let decreaseTotal = parseInt(bInput.value) - parseInt(percentDecrease);
    let initSavings = bInput.value - decreaseTotal;
    savings.innerHTML = `$${Math.round(decreaseTotal)}`;
    yearly.innerHTML = ` $${Math.round(initSavings)}`;
  };
}

slider.onchange = function () {
	if (!bInput.value) {
	output.innerHTML = " Please enter your monthly bill.";
    savings.innerHTML = " Please enter your monthly bill.";
    yearly.innerHTML = " Please enter your monthly bill.";
	} else {
  // console.log(this.value);
  let percentTotal = bInput.value * 0.015 * this.value;
  let total = parseInt(percentTotal) + parseInt(bInput.value);
  let percentSavings = parseInt(total) * 0.25;
  let savingsBill = parseInt(total) - parseInt(percentSavings);
  let yearSavingsCalc = percentSavings * 12;
  let yearSavingsTotal = yearSavingsCalc * this.value;
  // console.log("Per Month: ", percentSavings);
  // console.log(savingsBill);
  // console.log("Per Year: ", yearSavings);
  output.innerHTML = `  $${Math.round(total)}`;
  savings.innerHTML = `  $${Math.round(percentSavings)} with a bill of $${Math.round(savingsBill)}`;
  yearly.innerHTML = ` At year ${Math.round(this.value)} you've saved $${Math.round(yearSavingsTotal)}`;
  // savings.innerHTML = `$${Math.round(discountTotal * 100) / 100}`;
	}
};

startButton.onclick = function () {
  intial();
};
