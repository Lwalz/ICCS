$(document).ready(function() {

	$(window).resize(function(){
       if ($(window).width() <= 750) {  
		    $('#about').mouseenter(function() {
			$('#about > a').css('color', '#82c0c0'),
			$('#about').css('background-color', 'white');
			});

			$('#academics').mouseenter(function() {
				$('#academics > a').css('color', '#82c0c0'),
				$('#academics').css('background-color', 'white');
			});

			$('#sites').mouseenter(function() {
				$('#sites > a').css('color', '#82c0c0'),
				$('#sites').css('background-color', 'white');
			});

			$('#costs').mouseenter(function() {
				$('#costs > a').css('color', '#82c0c0'),
				$('#costs').css('background-color', 'white');
			});

			$('#about').mouseleave(function() {
				$('#about > a').css('color', 'white'),
				$('#about').css('background-color', '#82c0c0');
			});

			$('#academics').mouseleave(function() {
				$('#academics > a').css('color', 'white'),
				$('#academics').css('background-color', '#82c0c0');
			});

			$('#sites').mouseleave(function() {
				$('#sites > a').css('color', 'white'),
				$('#sites').css('background-color', '#82c0c0');
			});

			$('#costs').mouseleave(function() {
				$('#costs > a').css('color', 'white'),
				$('#costs').css('background-color', '#82c0c0');
			});
       }     
	});
});