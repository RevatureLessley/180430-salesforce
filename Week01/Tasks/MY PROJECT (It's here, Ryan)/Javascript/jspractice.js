var decimalUsed = 0;
var newNumberFlag = 1;
var equationcompleteflag = 1;
var op1;
var op2;
var operand;

function inputOne() {
    if (newNumberFlag) {
        document.getElementById("numberfield").innerText = "";
    }


    document.getElementById("numberfield").innerText += "1";
    newNumberFlag = 0;

}

function inputTwo() {
    if (newNumberFlag) {
        document.getElementById("numberfield").innerText = "";
    }


    document.getElementById("numberfield").innerText += "2";
    newNumberFlag = 0;

}

function inputThree() {
    if (newNumberFlag) {
        document.getElementById("numberfield").innerText = "";
    }


    document.getElementById("numberfield").innerText += "3";
    newNumberFlag = 0;

}

function inputFour() {
    if (newNumberFlag) {
        document.getElementById("numberfield").innerText = "";
    }


    document.getElementById("numberfield").innerText += "4";
    newNumberFlag = 0;

}

function inputFive() {
    if (newNumberFlag) {
        document.getElementById("numberfield").innerText = "";
    }


    document.getElementById("numberfield").innerText += "5";
    newNumberFlag = 0;

}

function inputSix() {
    if (newNumberFlag) {
        document.getElementById("numberfield").innerText = "";
    }


    document.getElementById("numberfield").innerText += "6";
    newNumberFlag = 0;

}

function inputSeven() {
    if (newNumberFlag) {
        document.getElementById("numberfield").innerText = "";
    }


    document.getElementById("numberfield").innerText += "7";
    newNumberFlag = 0;

}

function inputEight() {
    if (newNumberFlag) {
        document.getElementById("numberfield").innerText = "";
    }


    document.getElementById("numberfield").innerText += "8";
    newNumberFlag = 0;

}

function inputNine() {
    if (newNumberFlag) {
        document.getElementById("numberfield").innerText = "";
    }


    document.getElementById("numberfield").innerText += "9";
    newNumberFlag = 0;

}

function inputZero() {
    if (!operatorFlag) {
        if (Number(document.getElementById("numberfield").innerText) > 0) {
            document.getElementById("numberfield").innerText += "0";
        }
    }
}

function negate() {
    document.getElementById("numberfield").innerText = Number(document.getElementById("numberfield").innerText) * -1;
}

function decimal() {
    if (!decimalUsed) {
        decimalUsed = 1;
        document.getElementById("numberfield").innerText += ".";
        newNumberFlag = 0;
    }
}

function clearNumField() {
    document.getElementById("numberfield").innerText = "0";
    newNumberFlag = 1;
    decimalUsed = 0;
}

function add() {

    op1 = Number(document.getElementById("numberfield").innerText);
    operand = "+";
    newNumberFlag = 1;
    decimalUsed = 0;
    equationcompleteflag = 0;
    document.getElementById("numberfield").innerText = "0";

}

function subtract() {

    op1 = Number(document.getElementById("numberfield").innerText);
    operand = "-";
    newNumberFlag = 1;
    decimalUsed = 0;
    equationcompleteflag = 0;
    document.getElementById("numberfield").innerText = "0";

}

function multiply() {

    op1 = Number(document.getElementById("numberfield").innerText);
    operand = "x";
    newNumberFlag = 1;
    decimalUsed = 0;
    equationcompleteflag = 0;
    document.getElementById("numberfield").innerText = "0";

}

function divide() {

    op1 = Number(document.getElementById("numberfield").innerText);
    operand = "/";
    newNumberFlag = 1;
    decimalUsed = 0;
    equationcompleteflag = 0;
    document.getElementById("numberfield").innerText = "0";

}

function sqrt() {
    op1 = Number(document.getElementById("numberfield").innerText);
    newNumberFlag = 1;
    decimalUsed = 0;
    document.getElementById("numberfield").innerText = Math.round(Math.sqrt(op1) * 100000000000) / 100000000000;
    op1 = document.getElementById("numberfield").innerText;
}

function eq() {

    if (!equationcompleteflag) {
        op2 = Number(document.getElementById("numberfield").innerText);
        if (operand == "/" && op2 == 0) {
            document.getElementById("numberfield").innerText = "DivBy0 Error";
        } else if (operand) {
            if (operand == "+") {
                document.getElementById("numberfield").innerText = op1 + op2;
                op1 = document.getElementById("numberfield").innerText;
                equationcompleteflag = 1;
            }
            if (operand == "-") {
                document.getElementById("numberfield").innerText = op1 - op2;
                op1 = document.getElementById("numberfield").innerText;
                equationcompleteflag = 1;
            }
            if (operand == "/") {
                document.getElementById("numberfield").innerText = Math.round(op1 / op2 * 1000000000) / 1000000000;
                op1 = document.getElementById("numberfield").innerText;
                equationcompleteflag = 1;
            }
            if (operand == "x") {
                document.getElementById("numberfield").innerText = op1 * op2;
                op1 = document.getElementById("numberfield").innerText;
                equationcompleteflag = 1;
            }
        }
    }
    newNumberFlag = 1;
}
