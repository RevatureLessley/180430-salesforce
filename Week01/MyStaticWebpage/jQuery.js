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

fucntion hideit(){
    $("#div1").hide();
}

fucntion showit(){
    $("#div1").show();
}