$(document).ready(function()	{
	console.log("We're ready, let's jqery dis");

	$('#addHome').removeClass('btn-danger').addClass('btn-success');

	$('h1').addClass('text-center');

	var $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>');

	$newLink.appendTo('body');

	$('#zillowLink').attr("target", "_blank");
	//to remove use removeAttr()
	console.log($("zillowLink").attr("href"));

	$('#addHome').click(function(event)	{
		console.log(event);
		console.log(this);
	});
	$('#homes tbody').on('click', 'tr', removeHome);

	// function removeHome(){
		$(this).fadeOut(1000, function(){
			$(this).remove();
	});
});

//var $cells = $('#homes thread tr').children();
//cells.eq(0).css('color', 'blue');
// cells.eq(4).css('color', 'green');

