/*
    jQuery
        -lightweight javascript library that wraps around javascript itself.
        -"write less, do more"
        -Can be used to simplify AJAX calls as well.
        -The library contains features for HTML/DOM manipulation,
            css manipulation, effects and animation, AJAX, and other utilities.
        -jQuery can be used, by either downloading files directly, or importing them
            via the Content Delivery Network (CDN)
        -jQuery accomplishes its abstraction via CLOSURES.
    -Basic jQuery syntax looks like this:
        $(selector).action;
        (Note: the $ character is a shortcut for: jQuery(selector).action;)
*/

//jQuery version of window.onload(){}
$(document).ready(function(){
    //Stuff i want to do...

});

//a shorter version of this:
$(function(){

});

function hideit(){
    $("#div1").hide(2500);
}

function showit(){
    $("#div1").show(2500);
}


//Executes once page loads....cuz ()
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

//In jQuery, you can do command chains.
function genericFadeout(){
    $("*").fadeTo(2500, 0).fadeTo(2500,1); //Take 2.5 s to fade to 0 opaqueness
}


function generate(){
    var text1 = "<p>text1</p>"; //this is One way to do element creation
    var text2 = document.createElement("p"); //this is another
    text2.innerHTML = "text2";
    var text3 = $("<p></p>").text("text3");
    
    $("#div1").append(text1, text2, text3);
    //append puts at the end, inside of the effected tag.
    //prepend puts at the beginning, inside of the effected tag.
    //after() puts directly after the effected tag. IE, makes them siblings
    //before() puts it directly behnd the tag as siblings.

    
}