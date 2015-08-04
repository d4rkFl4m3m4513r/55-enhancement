$("body").append('<div id="arrow" onclick="moveup()">   </div>');

function moveup(){
$("html, body").animate({
scrollTop: 0
}, 400);
