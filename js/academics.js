$(document).ready(function(){
	
	$('#c').click(function(){
		$('#coursebar').toggle('slow');
	});
	
	$('#s').click(function(){
		$('#wsabar').toggle('slow');
	});

	$('#academics').css('background-color','white');
	$('#academics').css('color','blue !important');
	
  // Bind the swipeHandler callback function to the swipe event on div.box
  $('#main').click(function(){
	  $('#more').toggle('slow');
	  });
	   
	   $('#columnSite1')(function(){
		   $('#carousel1').carousel('pause');
	   });
	   
	   $('#columnSite1').hover()(function(){
		   $('#carousel1').carousel('cycle');
	   });
});