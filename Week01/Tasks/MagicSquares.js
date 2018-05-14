//this game is isomorphic to tic-tac-toe
function MagicSquares(sideLength){
    
    var movesMade = {};
    var players = [[],[],[]];
    var turnNumber = 1;
    var maxNumber = sideLength * sideLength;
    var magicConstant = (sideLength * (sideLength * sideLength + 1)) / 2;
    var gameOver = false;

    function validMove(number, player){
            if(movesMade[number]){
                return false;
            }
            else{
                return true;
            }
    };

    //determining a "WIN" is essentially a variation of the subset sum problem
    //therefore an O(N^2) time and O(N) space complexity solution is absolutely
    //acceptable
    function stateSurrounding(number, player){

        logState();

        if(turnNumber > maxNumber)
        {
            $("#gameBoard").append("<span style='color: grey; font-size: 72px;'>DRAW</span>");
            return {"DRAW": player};
        }
        
        for(var i = 0; i < players[player].length; i++)
        {
            for (var j = i+1; j<players[player].length;j++)
                {
                		let winningNumber = magicConstant - players[player][i] - players[player][j];
                        console.log("WinState: "+players[player][i]+" "+players[player][j]+" "+winningNumber);
                        console.log("Includes?:" + players[player].includes(winningNumber.toString()));
                        console.log(players[player]);
                    if(players[player].includes(winningNumber.toString()) && players[player][i]!=winningNumber && players[player][j] != winningNumber ){
                        $("#gameBoard").append("<span style='color: green; font-size: 72px;'>Player "+player+" WINS</span>");
                        gameOver = true;
                        return {"WIN": player};
                    }
                }
        }

        //$("#gameBoard").append("<h1>ONGOING</h1>");
        return {"ONGOING": player};
    };

    function makeMove(number, player = whoseTurn(turnNumber)){

        if (gameOver)
            return;

        if(this.id)
        {
            number = this.id;
        }

        console.log("Move made: "+ this.id); 
        console.log("Player: "+ player);

        if(!validMove(number,player)){
            return {"INVALID": player};
        }
        else{
              players[player].push(number);
              movesMade[number] = player;
              turnNumber++;
              $("#"+number).addClass("Player"+player);
        }
            return stateSurrounding(number,player);
    };

    function whoseTurn(){
        return ((turnNumber+1)%2)+1;
        };
    
    function logState(){
			//console.log("Constant: " + magicConstant);
      console.log("----TURN " +turnNumber+"-----");
        console.log("Moves made: " + JSON.stringify(movesMade));
      console.log("By P1: " + players[1]);
      console.log("By P2: " + players[2]);
    };

    function drawBoard(){
        console.log("kms");
        $("div#gameBoard").empty();

        $("div#gameBoard").append(document.createElement("table"));
        $("div#gameBoard table").append(document.createElement("tr"));
        
        for (var i = 1 ; i <= 9 ; i++)
        {
            console.log("on"+ $("div#gameBoard table tr"));
            $("div#gameBoard table tr").append("<td id="+i+">"+i+"</td>");
            document.getElementById(i).addEventListener("click", makeMove);
        }

        
    };

		//public interface
    return {
        playNumber: makeMove,
        display: logState,
        turn: turnNumber,
        playing: whoseTurn,
        numbersChosen: movesMade,
        draw: drawBoard,
        ticTac: ticTacArrange
    };
};

function testMagicSquares(){
var myGame = MagicSquares(3);
console.log(myGame);
myGame.display();
console.log(myGame.playNumber(1));
myGame.display();
console.log(myGame.playNumber(2));
myGame.display();
console.log(myGame.playNumber(3));
myGame.display();
console.log(myGame.playNumber(4));
myGame.display();
console.log(myGame.playNumber(5));
myGame.display();
console.log(myGame.playNumber(6));
myGame.display();
console.log(myGame.playNumber(7));
myGame.display();
console.log(myGame.playNumber(8));
myGame.display();
console.log(myGame.playNumber(9));
//myGame.display();
};

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
    }



