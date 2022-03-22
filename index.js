const btnRow = document.querySelector('.button-row');
const btnWashCar = document.getElementById('btnWashCar');
const btnMowLawn = document.getElementById('btnMowLawn');
const btnPullWeeds = document.getElementById('btnPullWeeds');
const notesMessage = document.getElementById('notesText');
const btnSendInvoice = document.getElementById('btnSendInvoice');

let currentTotal = 0

// ADDING NOTE MESSAGE
btnRow.addEventListener("click", () => {
  notesMessage.innerHTML = `<p class="note-copy">We accept cash, credit card or PayPal.</p>`
})

// SERVICE BUTTONS

// WASHING CAR ----------------------------

btnWashCar.addEventListener("click", () => {
  // adds service under task
  document.getElementById('added-service').innerHTML += `
  <div class="service-added" id="wash-car-service">
    <div class="service-right-col">
      <div class="service-name">Wash Car</div>
      <p class="remove-option" id="remove-wash" onClick="removeFuncWash()">Remove</p>
    </div>
    <div class="service-cost"><span class="dollar-sign">$</span>10</div>
  </div>
  `
  // adds to current total
  currentTotal = currentTotal + 10;
  document.getElementById("calculated-total").textContent = `$${currentTotal}`
  // Disables the button from being clicked again
  btnWashCar.disabled = true;

})

function removeFuncWash() {
  const removeWashTask = document.getElementById('wash-car-service');
    removeWashTask.outerHTML = "";
    currentTotal = currentTotal - 10;
    document.getElementById("calculated-total").textContent = `$${currentTotal}`
    btnWashCar.disabled = false;
}

// LAWN MOWING ----------------------------
btnMowLawn.addEventListener("click", () => {
  // adds service under task
  document.getElementById('added-service').innerHTML += `
  <div class="service-added" id="mow-lawn-service">
  <div class="service-right-col">
  <div class="service-name">Mow Lawn</div>
  <p class="remove-option" onClick="removeFuncMow()">Remove</p>
  </div>
  <div class="service-cost"><span class="dollar-sign">$</span>20</div>
  </div>
  `
  // adds to current total
  currentTotal = currentTotal + 20;
  document.getElementById("calculated-total").textContent = `$${currentTotal}`
  // Disables the button from being clicked again
  btnMowLawn.disabled = true;
})

function removeFuncMow() {
  const removeMowTask = document.getElementById('mow-lawn-service');
  removeMowTask.outerHTML = "";
    currentTotal = currentTotal - 20;
    document.getElementById("calculated-total").textContent = `$${currentTotal}`
    btnMowLawn.disabled = false;
}

// PULLING WEEDS -------------------------
btnPullWeeds.addEventListener("click", () => {
  // adds service under task
  document.getElementById('added-service').innerHTML += `
  <div class="service-added" id='mow-lawn-service'>
  <div class="service-right-col">
  <div class="service-name">Pull Weeds</div>
  <p class="remove-option" onClick="removeFuncPull()">Remove</p>
  </div>
  <div class="service-cost"><span class="dollar-sign">$</span>30</div>
  </div>
  `
  // adds to current total
  currentTotal = currentTotal + 30;
  document.getElementById("calculated-total").textContent = `$${currentTotal}`
  // Disables the button from being clicked again
  btnPullWeeds.disabled = true;
})

function removeFuncPull() {
  const removePullTask = document.getElementById('mow-lawn-service');
  removePullTask.outerHTML = "";
    currentTotal = currentTotal - 30;
    document.getElementById("calculated-total").textContent = `$${currentTotal}`
    btnPullWeeds.disabled = false;
}


// Add notes
document.getElementById('notesText').innerHTML = `<p class="note-copy">We accept cash, credit card, or PayPal</p>`

btnSendInvoice.addEventListener("click", () => {
  console.log("This button doesn't actuall do anything!")
})



// TODO: add functionality to REMOVE text
// TODO: make more DRY by putting add to current total inside a function (input the service's price when running the function) -- test with one button first!