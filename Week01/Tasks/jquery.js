/*
    jquery 
    -lightweight javascript library that wraps around javascript itself
    -writeless do more
    -can use to simplifi ajax call as well 
    -the library contains features for HTML/dom manipulation
    -jquery accomplishes its abstraction via closure

    -basic jquery syntax looks like this:
    -$(selector).action
    -$ is short for:jquery(selector.action)

*/ 



function hideit(){
    $("#div1").hide();
}

function showit(){
    $("#div1").show();
}

$(function(){
    $("#hover").hover(chagetored,changetoblack);
})

function changetored(){
    $(this).css("color" , "#ff0000");
}

function changetoblack(){
    $(this).css("colow", "#000000");
}


function generate(){
    var text = "<p> text </p>";
    var text2 = document.createElement("p");
    text2.innerHTML = "text2";
    var text3 = $("<p></p>").text("text3");
}