data = 0;
$("body").append('<div id="arrow" onclick="moveup()">   </div>');

function moveup(){
	$("html, body").animate({
	scrollTop: 0
}, 400);
}

function getLink(){
	currentUrl = window.location.href;
	if(currentUrl.search('html')){	
		modifiedUrl = currentUrl.split('html');
	
		return modifiedUrl[0] + "json" + modifiedUrl[1];
	}
	else{
		//check vichan api
		return '3.json';
		//check vichan api
	}
}


	currentUrl = getLink();

	console.log(currentUrl);
	$.ajax({
		type: 'GET',
		dataType: "json",
		url: 'currentUrl',
		success: function(data){
				$.each(data.threads ,function(){
				//apend new posts		
				$('FORM[NAME="postcontrols"]').append(' aaaaa <br>');
			});
		}
	});
