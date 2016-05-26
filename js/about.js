$(document).ready(function() {
  $('#main').click(function(){
		$('#more').toggle('slow')
})

	$('#readMoreButton').click(function() {
  $('#readMoreButton').css('display','none');
		$('#readMore').css('display','inline-block')
})

	$('#one').click(function() {
  $('#oneTxt').toggle('slow');
		$(this).siblings().toggle();
})

	$('#two').click(function() {
  $('#twoTxt').toggle('slow');
		$(this).siblings().toggle();
})

	$('#three').click(function() {
  $('#threeTxt').toggle('slow');
		$(this).siblings().toggle();
})

	$('#four').click(function() {
  $('#fourTxt').toggle('slow');
		$(this).siblings().toggle();
})

	$('#five').click(function() {
  $('#fiveTxt').toggle('slow');
		$(this).siblings().toggle();
})

	$('#six').click(function() {
  $('#sixTxt').toggle('slow');
		$(this).siblings().toggle();
})
	  $('[data-toggle="popover"]').popover()
})
