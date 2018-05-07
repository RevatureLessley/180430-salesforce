/*
	jQuery
		-lightweight javascript library that wraps around javascript itself.
		-"write less, do more:
		-can be used to simplify AJAX calls as well
		-The library contains features for HTML/DOM manipulation, CSS
			manipulation, effects and animation, AJAX, and other utilities.
		-jQuery can be used by either downloading the files directly or
			imirting them via the CDN
		-jQuery accimplishes its abstraction via closures.
	-Basic jQuery syntax looks like this:
		$(selector).action;
		(Note: the $ character is a shortcut for jQuery(selector).action;)
*/
//jQuery version of window.onload(){}
$(document).ready(function(){
	//stuff I want to do
});

//a shorter version of this is:
$(function(){
	
});

function hideit(){
	$("#div1").hide(2500);
}

function showit(){
	$("#div1").show(2500);
}

$(function(){
	// change to red when mouseover, change to red when mouseout
	$("#hover").hover(changeToRed, changeToBlack);
	$("#fading").click(genericFadeout);
	$("#generate").click(generate);
});

function changeToRed(){
	$(this).css("color", "#FF0000");
}

function changeToBlack(){
	$(this).css("color", "#000000");
}

//In jQuery, you can do command chains.
function genericFadeout(){
	$("*").fadeTo(2500,0).fadeTo(2500,1); // take 2.5 s to face to 0 opacity.
}

function generate() {
	var text = "<p>text1</p>;" //This is ONE way to do element creation
	var text2 = document.createElement("p");
	text2.innerHTML="text2"; //This is another
	var text3 = $("<p></p>").text("text3");
	$("#div1").append(text1,text2,text3);
	//append() puts it at the end, inside of the affected tag.
	//prepend() puts it at the beginning, inside of the affected tag.
	//after() puts it directly after the affected tag, i.e. makes them siblings.
	//before() puts it directly before the affected tag as siblings.
}