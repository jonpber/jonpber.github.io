$(function(){
	$("#giphy").on("mouseover", function(){
		$(this).attr("src", "assets/images/giphy.gif");
	})

	$("#giphy").on("mouseout", function(){
		$(this).attr("src", "assets/images/giphy.png");
	})
});