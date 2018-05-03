/*
    jQuery
        A lightweight javascript library that wraps around javascript itself
        write less do more
        Can be used to simplify AJAX calls as well
        The library contains features for HTML/DOM manip
            css manipulation, effects and animation, AJAX, and other utilities.
        jQuery can be used, by either downloading files directly, or importing them
            via the CDN
        jQuery accomplishes its abstraction via closures
    Basic jQuery syntax:
        $(selector).action;
        (Note: the $ character is a shortcut for jQuery(selector).action;)    

*/

//jQuery version of window.onload(){}
$(document).ready(function(){
    //stuff I want to do

});

//a shorter version of this is 
$(function(){

});

function hideit(){
    $("#div1").hide(2500);
}

function showit(){
    $("#div1").show(2500);
}

$(function(){
    $("#hover").hover(changeToRed,changeToBlack);
    $("#fading").click(genericFadeout);
    $("#generate").click(generate);
})

function changeToRed(){
    $(this).css("color", "#FF0000");
}

function changeToBlack(){
    $(this).css("color", "#000000");
}

//in jQuesry you can do command chains
function genericFadeout(){
    $("*").fadeTo(2500,0).fadeTo(2500,1);//take 2.5 seconds to fade to 0 opaqueness
    
}

function generate(){
    var text1 = "<p>text1</p>";//this is one way to do element creation
    var text2 = document.createElement("p");//this is another
    text2.innerHTML = "text2";
    var text3 = $("<p></p>").text("text3");

    $("#div1").append(text1,text2,text3);
    //append puts at the end inside of the affected tag
    // prepend puts at the beginning of the affected tag
    // after puts it directly after the affected tag i.e. makes them siblings
    // before puts it directly behind the tag as siblings

}
