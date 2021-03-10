/* show hidden password */
function show_hide_password(target){
	var input = document.getElementById('userPassword-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

function show_hide_password_contact(target){
	var input = document.getElementById('userPassword-contactInput');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
/* /show hidden password */

/* burger menu Jquery */
$(document).ready(function() {
	$('.header__burgerBtn').click(function(event) {
		$(".header__burgerBtn, .header__nav, .navigation").toggleClass("active")
	});
});
$(document).ready(function() {
	$('.nav-link').click(function(event) {
		$(".header__burgerBtn, .header__nav, .navigation").removeClass("active")
	});
});
/* /burger menu Jquery */