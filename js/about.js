$(document).ready(function(){
	$('#main').click(function(){
		$('#more').toggle('slow')
	})

	$('#readMoreButton').click(function(){
		$('#readMoreButton').css('display','none');
		$('#readMore').css('display','inline-block')
	})

	$('#one').click(function(){
		$('#oneTxt').toggle('slow');
	})

	$('#two').click(function(){
		$('#twoTxt').toggle('slow');
	})

	$('#three').click(function(){
		$('#threeTxt').toggle('slow');
	})

	$('#four').click(function(){
		$('#fourTxt').toggle('slow');
	})

	$('#five').click(function(){
		$('#fiveTxt').toggle('slow');
	})

	$('#six').click(function(){
		$('#sixTxt').toggle('slow');
	})

})
