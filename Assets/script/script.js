const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
	if (e.target.checked) {


		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark'); //add this
	}
	else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light'); //add this


	}
}
toggleSwitch.addEventListener('change', switchTheme, false);
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);

	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
	}
}
console.log(currentTheme)


// event show card email

const btn_email = document.querySelector(".btn-mail button");
btn_email.addEventListener("click", function () {
	document.querySelector(".form-help .card").classList.toggle("show-card");
});
const close_btn_email = document.querySelector(".form-help .close");
close_btn_email.addEventListener("click", function () {
	document.querySelector(".form-help .card").classList.remove("show-card");
})
