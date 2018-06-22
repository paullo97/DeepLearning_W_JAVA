$(document).ready(function() {
	$("#text-search").keydown(function(e) {
		if(e.which == 32) {
			var text = $(this).val();
			console.log(text);
		}
	});
})