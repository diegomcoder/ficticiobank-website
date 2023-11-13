const ACCOUNT_DB = [];

const BUTTONS = {
	'openAccount': document.querySelector(".open-account-btns")
}

BUTTONS.openAccount.addEventListener('click', function() {
	window.open('../new-account.html', '_blank');
})

alert('funciona')