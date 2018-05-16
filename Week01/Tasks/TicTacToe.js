$(function(){
    var myGame = MagicSquares(3);
    myGame.draw()});


var isMake15 = true;


    function ToggleBoard(){
        if(isMake15)
        {
            ticTacArrange();
            isMake15 = false;
        }
        else
        {
            Make15Arrange();
            isMake15 = true;
        }
    }

    function ticTacArrange(){
        $("div#gameBoard table").append("<tr id='r2'><td id='row2'></td></tr>");
        $("div#gameBoard table").append("<tr id='r3'><td id='row3'></td></tr>");



        $("#6").insertBefore("#row3");
        $("#1").insertBefore("#6");
        $("#8").insertBefore("#1");
        
        $("#7").insertBefore("#row2");
        $("#5").insertBefore("#7");
        $("#3").insertBefore("#5");
        
        //$("#7").insertBefore("#6");
        $("#9").insertBefore("#2");
        $("#4").insertBefore("#9");

        $("#row3").remove();
        $("#row2").remove();



        $("#6").css("border", "0px");
        $("#8").css("border", "0px");
        $("#4").css("border", "0px");
        $("#2").css("border", "0px");
        
        $("#9").css("border-top", "0px");
        $("#3").css("border-left", "0px");
        $("#7").css("border-right", "0px");
        $("#1").css("border-bottom", "0px");
            

        $("td .number").addClass("ticTac");

        // $(".Player1").text("❌");
        // $(".Player2").text("⭕");

    }

    function Make15Arrange(){
        $("#8").insertBefore("#9");
        $("#7").insertBefore("#8");
        $("#6").insertBefore("#7");
        $("#5").insertBefore("#6");
        $("#4").insertBefore("#5");
        $("#3").insertBefore("#4");
        $("#2").insertBefore("#3");
        $("#1").insertBefore("#2");
        
        $("#r2").remove();
        $("#r3").remove();

        $("td").css("border", "");
        $("td .ticTac").removeClass("ticTac");
        //$("div.number").text();

    }