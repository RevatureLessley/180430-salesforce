/*
    jQuery
        -lightweight javascript librayr that wraps around javascript itself.
        -write less, do more
        -Can be used to simplify AJAX calls as well
        -The library contains features for HTML/DOM manipu8lation,
            css manipulation, effects and animation, AJAX, and other utilities.
        -jQuery can be used by either downloading files directly or importing them
        via the Content Delivery Network (CDN)
        -jQuery accomplishes its abstraction via closures.
        -Basic jQuery syntax
            $(selector).action;
            <note: the $ character is a shorcut for jQuery(selector).action;)
*/

// jQuery version of window.onload(){};
$(document).ready(function(){
    // Code...
});

// shorter version
$(function(){
    // Code...
});

function hideIt(){
    $("#div1").hide();
}

function showIt(){
    $("#div1").show(2500);
}

$(function(){
    $("#hover").hover(changeToRed, changeToBlack);
    $("#fading").click(genericFadeout);
    $("#generate").click(generate);
});

function changeToRed(){
    $(this).css("color", "#FF0000");
}

function changeToBlack(){
    $(this).css("color", "#000");
}

function genericFadeout(){
    $("*").fadeTo(2500,0).fadeTo(500, 1);
}

function generate(){
    var text = "<p>text1</p>";
    var text2 = document.createElement("p");
    text2.innerHTML = "text2";
    var text3 = $("<p></p>").text("text3");
    $("#div1").append(text, text2, text3);
}