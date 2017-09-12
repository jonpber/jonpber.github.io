$(function(){
	$(this).scrollTop(0);
	function introType(){
		$(".introH1").typeIt({
	     breakLines: false,
	     speed: 100,
	     autoStart: true,
	     lifeLike: true,
	     loop: true
		}).tiType('Welcome to the awesome')
		.tiPause(500)
		.tiDelete(7)
		.tiPause(1000)
		.tiType('greatest')
		.tiPause(500)
		.tiDelete(8)
		.tiPause(1000)
		.tiType("Portfolio of Jon Berry")
		.tiPause(60000)
	}

	introType();

	$(".card").flip({
		trigger: 'hover',
		speed: 700
	});

	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 400;             // set to whatever you want it to be

		if(y_scroll_pos > scroll_pos_test) {
		//do stuff
			$(".projectsDiv").show("slide", {direction: "right"}, 600);
		}
	});

})