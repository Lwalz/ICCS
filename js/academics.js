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
  })
var c1 = $('#carousel1');
var c2 = $('#carousel2');
var c3 = $('#carousel3');

var c = [c1,c2,c3];

function runMe(i){
  i.carousel({interval:'2000'})
}
var count = 0
runMe(c1)

c1.on('slid.bs.carousel', function() {
  count=count+1
  if (count==3) {
    c1.carousel('pause')
    runMe(c2)
    count=0
  }

})
c2.on('slid.bs.carousel', function() {
  count=count+1
  if (count==3) {
    c2.carousel('pause')
    runMe(c3)
    count=0
  }
})
c3.on('slid.bs.carousel', function() {
  count=count+1
  if (count==3) {
    c3.carousel('pause')
    runMe(c1)
    count=0
  }
})


})
