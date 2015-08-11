data = 0;
$("body").append('<div id="arrow" onclick="moveup()">   </div>');

function moveup(){
	$("html, body").animate({
	scrollTop: 0
}, 400);
}

function getLink(){
	currentUrl = window.location.href;
	modifiedUrl = currentUrl.split('html');

	return modifiedUrl[0] + "json" + modifiedUrl[1];
}


	currentUrl = getLink();

	console.log(currentUrl);
	$.ajax({
		type: 'GET',
		dataType: "json",
		url: '3.json',
		success: function(data){
				$.each(data.threads ,function(){
						console.log("teste");
			});
		}
	});
