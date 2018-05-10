//this game is isomorphic to tic-tac-toe
function MagicSquares(sideLength){
    
    var movesMade = {};
    var players = [[],[],[]];
    var turnNumber = 1;
    var maxNumber = sideLength * sideLength;
    var magicConstant = (sideLength * (sideLength * sideLength + 1)) / 2;

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
        if(turnNumber > maxNumber)
        {
            return {"DRAW": player};
        }
        
        for(var i = 0; i < players[player].length; i++)
        {
            for (var j = i+1; j<players[player].length;j++)
                {
                		let winningNumber = magicConstant - players[player][i] - players[player][j];
                		console.log("WinState: "+players[player][i]+" "+players[player][j]+" "+winningNumber);
                    if(players[player].includes(winningNumber)){
                        return {"WIN": player};
                    }
                }
        }


        return {"ONGOING": player};
    };

    function makeMove(number, player = whoseTurn(turnNumber)){
        if(!validMove(number,player)){
            return {"INVALID": player};
        }
        else{
              players[player].push(number);
              movesMade[number] = player;
              turnNumber++;
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
        }
    };


		//public interface
    return {
        playNumber: makeMove,
        display: logState,
        turn: turnNumber,
        playing: whoseTurn,
        numbersChosen: movesMade,
        draw: drawBoard
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

$( document ).ready(function(){
    var myGame = MagicSquares(3);
    myGame.draw()});