/*
    jQuery
        -lightweight jsavascript library that wraps around javascript itself.
        -"write less, do more"
        -Can used to simplify AJAX calls as well.
        -The library contains features for HTML/DOM manipulation,
            css manipulation, effects and animation, AJAX, and other utilities.\
        -jQuery cna be used, by either downlaoding files directly, or importing them
            via the Content Delivery Network (CDN)
        -jQuery accomplishes its abstraction via closures.
    -Basis jQuery syntax looks like this:
        $(selector).action;
        (Note: the $ character is a shortcut for: jQuery(selector).action;)
*/

//jQuery version of window.onload(){}
$(document).ready(function(){
    //Stuff i want to do...
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
    //change to red when mouseover, change to black when mouse out.
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

//In jQuery, you can to command chains. 
function genericFadeout(){
    $("*").fadeTo(2500,0).fadeTo(2500,1); //take 2.5 s to fade to 0 opaqueness
}

function generate(){
    var text1 = "<p>text1</p>"; //This is ONE way to do element creation
    var text2 = document.createElement("p"); //This is another
    text2.innerHTML="text2";
    var text3 = $("<p></p>").text("text3");

    $("#div1").append(text1,text2,text3);
    //append() puts at the end, inside of the effected tag.
    //prepend() puts at the beginning, inside of the effected tag.
    //after() puts directly after the effected tag. IE, makes them siblings
    //before() puts it directly behind the tag as siblings.

}

/*
    jQuery

//Methods for creating elements:
	
	HTML METHOD	 #1 - var text1 = "<p>stuff</p>"
	JS Method	 #2 - var text2 = document.createElement("p").append(document.createTextNode("stuff"));
    jQuery Method#3 - var text3 = $("<p></p>").text("stuff");
    
		Other functions you SHOULD know
		
		remove() removes selected element (As well as all children)
		empty() removes child elements
		addClass(name) <- obvious
		removeClass()
		
		Traversal methods:
		
		parent()
		parents() <-incoudes grandparents, g.g.parents etc
		parentsUntil(element) <- grab all parents until reaching one type: parameter
		children() <- only direct children
		find() <- return all children of a specific type (NOTE: find(*) grabs all children
		
		Sibling navigation
		next() 
		nextAll()
		nextUntil()
		prev()
		prevAll()
		prevUntil()
		
		first() <- first child
		last() <- last child
		eq()  return specific element with an index number
		not() opposite
		
		
		NOTE: the dollar sign is reserved for jQuery in our use. However, they are NOT
		the only library to use it. Angular also uses $ to do actions.
		If you have both libraries these will compete. You can toggle off the $
		restriction that jQuery has by the following:
		
		$.noConflict();
		//After this, all jQuerys must be written as:
        jQuery(element).etc
        


	SELECTOR OPTIONS:
	#ID
	.class
	this
	element
	p.classname <-all p tags of specific id
	p:first <- very first p tag
	ul li:first <- first list item of every ul
	[href] all elements with a href attribute
	p[color] all p's with a color attribute
	
	EVENTS
	mouse events:	click, dblclick, mouseenter, mouseleave
	keyboard:		keypress, keydown, keyup
	forms:			submit, change, focus, blur
	document/window:load, resize, scroll, unload
	
	shorthand for mouseenter/leave: hover(mouseenterfunction, mouseleavefunction)
	
	Animations
	fadeIn(speed, callback)
	fadeOut(speed, callback)
	fadeTo(speed, opacity, callback)
	slideDown(speed, callback)
	slideUp(speed, callback)
	slideToggle() <- reverse direction
	animate(commaSeparatedCSSChangeMethods, speed, callback)
		-css("Attribute")
		-css(prop, value)
		-css({prop1:value, prop2:value})
	
	Methods to grab contents:
	.text() <- returns the text content of an element
	.html() <- returns text including tags
	.val() <- returns the value of a field
	.attr("attribute name") <- obvious
	
	The above content methods, return the contents. (duh)
	In order to set contents, you pass in a parameter.
	


*/