// const ACCOUNT_DB = [];

// const BUTTONS = {
// 	'openAccount': document.querySelector(".open-account-btn")
// }

// BUTTONS.openAccount.addEventListener('click', function() {
// 	window.open('../new-account.html', '_blank');
// })

// alert('funciona')

const myNumberInput = document.getElementById("withdrawValue");

myNumberInput.addEventListener("change", () => {
  myNumberInput.value = parseFloat(myNumberInput.value).toFixed(2);
});