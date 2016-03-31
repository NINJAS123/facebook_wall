$(document).ready(function()
{
	$('#message').focus();

	$("#post-btn").click(function(){
		$("#msg").html("<p>" + $("#message").val() + "</p>")
		var naruto = $("#temp").clone();
		naruto.css("display", "block")
		naruto.prependTo("#wall");
	});
	// YOUR CODE GOES HERE
});


