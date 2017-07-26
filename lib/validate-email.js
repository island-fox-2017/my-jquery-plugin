(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		return regex.test(this.val());
	}
})(jQuery)
