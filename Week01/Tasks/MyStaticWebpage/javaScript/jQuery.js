/*
jQuery
light weight javascript library that wraps around javascript itself.
write less do more
can use to simplify AJAX calls as well
the library contains features for HTML/DOM manipulation
    css manipulations, effects and animation, AJAX, and other utilities
jQuery can be used , by either downloading files directly or importing them
    via the content De
*/

$(document).ready(function(){

});

$(function(){

});

function hideit(){
    $("#div1").hide();
}

function showit(){
    $("#div1").show();
}

$(function(){
    $("#h").hover(changeToRed,changeToBlack);
});

function changeToRed(){
    $(this).css("color","#FF0000");
}
function changeToBlack(){
    $(this).css("color","#000000");
}