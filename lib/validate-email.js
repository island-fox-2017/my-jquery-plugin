(function ($) {
	$.fn.emailValidator = function () {
		return /^.+@.+\.(com|id|tech|io|xyz|gov)$/g.test(this.val())
	}
})(jQuery)
