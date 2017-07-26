(function ($) {
	$.fn.emailValidator = function () {
		var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if(this.val().match(regex)){
			return true
		}
		else {
			return false
		}
		// your code here
	}
})(jQuery)
