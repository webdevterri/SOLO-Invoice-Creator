const btnRow = document.querySelector('.button-row');
const btnWashCar = document.getElementById('btnWashCar');
const btnMowLawn = document.getElementById('btnMowLawn');
const btnPullWeeds = document.getElementById('btnPullWeeds');
const notesMessage = document.getElementById('notesText');
const btnSendInvoice = document.getElementById('btnSendInvoice');

let currentTotal = 0

btnRow.addEventListener("click", () => {
  notesMessage.innerHTML = `<p class="note-copy">We accept cash, credit card or PayPal.</p>`
})

btnWashCar.disabled = false;

btnWashCar.addEventListener("click", () => {
  // adds service under task
  document.getElementById('added-service').innerHTML = `
  <div class="service-added">
  <div class="service-right-col">
  <div class="service-name">Wash Car</div>
  <p class="remove-option">Remove</p>
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

btnMowLawn.addEventListener("click", () => {
  // function add $20 to #added-service

  currentTotal = currentTotal + 20;
  document.getElementById("calculated-total").textContent = `$${currentTotal}`
})

btnPullWeeds.addEventListener("click", () => {
  // function add $30 to #added-service

  currentTotal = currentTotal + 30;
  document.getElementById("calculated-total").textContent = `$${currentTotal}`
})

// Add notes
document.getElementById('notesText').innerHTML = `<p class="note-copy">We accept cash, credit card, or PayPal</p>`

btnSendInvoice.addEventListener("click", () => {
  console.log("This button doesn't actuall do anything!")
})