(function ($) {
	$.fn.emailValidator = function () {
		var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		return regEmail.test(this.val())
	}
})(jQuery)
