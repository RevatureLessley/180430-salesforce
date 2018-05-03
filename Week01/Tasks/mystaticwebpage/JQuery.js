/*
    jQuery
        lightweight javascript library that wraps around javascript itself. (this means you don't have the javascript ugliness!)
        "write less, do more"
        can be used to simplify AJAX calls as well
        the library contains features for HTML DOM manipulation, css manipulation, effects and animation, AJAX, and other utilities
        jQuery can be used by:
            downloading the files directly
            importing via the Content Delivery Network (CDN)
        jQuery accomplishes its abstraction via closures
        basic jQuery syntax looks like this:
            $(selector).action;
            Note: "$" is a shortcut for "jQuery"
*/

//jQuery versino of window.onload(){}
$(document).ready(function(){
    //stuff I want to do
});

//shorter version of the above:
$(function(){

});

function hideIt(){
    $("#div1").hide(1500);
};

function showIt(){
    $("#div1").show(1500);
}

$(function(){
    //change to red on mouse over, change to black on mouse off
    $("#hover").hover(changeToRed, changeToBlack);
    
    //adding an event listener
    $("#fading").click(genericFadeout);

    $("#generate").click(generate);
})

function changeToRed(){
    //"this" refers to whatever calls the function. .css accesses the style of "this".
    $(this).css("color", "#FF0000");
}

function changeToBlack(){
    $(this).css("color", "#000000");
}

//command chains - you can call methods on methods on methods on methods...
function genericFadeout(){
    //after 2500 milliseconds (2.5 seconds), become translucent/transparent
    //remember, the * wildcard will apply to everything
    $("*").fadeTo(2500, 0).fadeTo(2500,1); 
}

function generate(){
    var text1 = "<p>text1</p>"; //this is one way to create elements

    //this is another way to create elements
    var text2 = document.createElement("p"); //create the tags <p></p>
    text2.innerHTML="text2"; //and then add text in between them

    //this is how you can do it in jQuery
    var text3 = $("<p></p>").text("text3");

    //append places things inside the tag, at the end
    $("div1").append(text1, text2, text3);

    //prepend() puts things at the beginning, inside the tags
    //after() puts things AFTER the tag, in its sibling
    //before() puts things BEHIND the tags, in its sibling
}