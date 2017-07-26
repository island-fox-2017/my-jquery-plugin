(function ($) {
	$.fn.emailValidator = function () {

		let validation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
		let email = this.val();
		return validation.test(email);
	
	}
})(jQuery)
