/*
    jQuery
        -lightweight javascript library that wraps around javascript itself.
        -"write less, do more"
        -Can be used to simply AJAX calls as well.
        -The library contains features for HTML/DOM manipulation, css manipulation,
            effects and animation, AJAX, and other utilities.
        -jQuery can be used by either downloading files directly or importing them via
            the Content Delivery Network (CDN)
        -jQuery accomplishes its abstraction via closures.
        -Basic jQuery syntax looks like this:
            $(selector).action;
            Note: the $ character is a shortcut for jQuery(selector).action;
*/

//jQuery version of window.onload()
$(document).ready(function(){
    //Stuff I want to do...
})

//a shorter version of this is:
$(function(){

});

function hideit(){
    $("#div1").hide(1000);
}

function showit(){
    $("#div1").show(1800);
}

$(function(){
    //Change to red when mouseover, change to black when hover lost.
    $("#hover").hover(changeToRed, changeToBlack);
    $("#fading").click(genericFadeOut);
    $("#generate").click(generate)
})

function changeToRed(){
    $(this).css("color", "#ff0000");
}

function changeToBlack(){
    $(this).css("color", "#000000");
}

//In jQuery, you can do command chains.
function genericFadeOut(){
    $("*").fadeTo(2500, 0).fadeTo(2500,1); //take 2.5 seconds to fade to 0 opacity.
}

function generate(){
    var text = "<p>text1</p>" //This is ONE way to do element creation
    var text2 = document.createElement("p"); //This is another
    text2.innerHTML = "text2";

    var text3 = $("<p></p>").text("text3"); //jQuery way
    $("#div1").append(text, text2, text3);
    //append() puts at hte end, inside of the affected tag.
    //prepend() puts at the beginning, inside of the effected tag.
    //after() puts directly after the affected tag as siblings.
    //before() puts directly behind the affected tag as siblings.
}