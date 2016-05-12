$(document).ready(function(){
	$('#applyButton').click(function(){
		form();
		$('applyButton').click(function(){
			self.toggle('slow');
		})
	})
});
function myFunction() {
    information = [firstname,lastname,school,email];
    prompt()
}
function form() {
	dialog = $('#fillOut');
	dialog.css('display','block','slow');
	dialog.css('color','gray');
	dialog.css('background-color','#3f3f3f');
	dialog.css('position','absolute');
	dialog.css('top','43%');
	dialog.css('left','43%');
	dialog.css('width','20em');


}