const btnWashCar = document.getElementById('btnWashCar');
const btnMowLawn = document.getElementById('btnMowLawn');
const btnPullWeeds = document.getElementById('btnPullWeeds');
const btnSendInvoice = document.getElementById('btnSendInvoice');

btnWashCar.addEventListener("click", {
  // function to add $10 to #added-service 
})

btnMowLawn.addEventListener("click", {
  // function add $20 to #added-service
})

btnPullWeeds.addEventListener("click", {
  // function add $30 to #added-service
})

// Add notes
document.getElementById('notesText').innerHTML = `<p class="note-copy">We accept cash, credit card, or PayPal</p>`

btnSendInvoice.addEventListener("click", {
  console.log("This button doesn't actuall do anything!")
})