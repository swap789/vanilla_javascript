var firstUserTurn = true;
var circleCounter = 0;
var crossCounter = 0;
document.getElementById('cross-icon').innerText = circleCounter;
document.getElementById('circle-icon').innerText = crossCounter;
const CROSS_ICON = "cross-icon";
const CIRCLE_ICON = "circle-icon";
const CIRCLE_IMG = "images/black_circle.svg";
const CROSS_IMG = "images/cross_ico.svg";
var isCrossSucceed = false;
var isCircleSucceed = false;

function onBoxSelect(id) {
    let box = document.getElementById(id);
    let img = box.getElementsByTagName("img");
    if (img && img.length) {
        return;
    }
    firstUserTurn = !firstUserTurn;
    var elem = document.createElement("img");
    if (firstUserTurn) {
        circleCounter++;
        document.getElementById('circle-icon').innerText = circleCounter;
        elem.setAttribute("src", CIRCLE_IMG);
        elem.setAttribute("alt", CIRCLE_ICON);
    } else {
        crossCounter++;
        document.getElementById('cross-icon').innerText = crossCounter;
        elem.setAttribute("src", CROSS_IMG);
        elem.setAttribute("alt", CROSS_ICON);
    }
    elem.setAttribute("height", "100");
    elem.setAttribute("width", "100");
    document.getElementById(id).appendChild(elem);
    document.getElementsByTagName;
    checkStatus(id)
    if (isCrossSucceed) {
        document.getElementById('result').innerText = "Player one is won"
    }
    if (isCircleSucceed) {
        document.getElementById('result').innerText = "Player two is won"
    }
}

function checkStatus(id) {
    isCrossSucceed = checkFirstRow(CROSS_ICON)
    isCircleSucceed = checkFirstRow(CIRCLE_ICON)
    isCrossSucceed = checkSecondRow(CROSS_ICON)
    isCircleSucceed = checkSecondRow(CIRCLE_ICON)
    isCrossSucceed = checkThirdRow(CROSS_ICON)
    isCircleSucceed = checkThirdRow(CIRCLE_ICON)
}

function checkFirstRow(icon) {
    if (getAltValue('one') === icon) {
        if (getAltValue('one') === icon && getAltValue('two') === icon && getAltValue('three') === icon) {
            return true;
        }
        if (getAltValue('one') === icon && getAltValue('four') === icon && getAltValue('seven') === icon) {
            return true;
        }
        if (getAltValue('one') === icon && getAltValue('five') === icon && getAltValue('nine') === icon) {
            return true;
        }
    }
    if (getAltValue('two') === icon) {
        if (getAltValue('one') === icon && getAltValue('two') === icon && getAltValue('three') === icon) {
            return true;
        }
        if (getAltValue('two') === icon && getAltValue('five') === icon && getAltValue('eight') === icon) {
            return true;
        }
    }
    if (getAltValue('three') === icon) {
        if (getAltValue('one') === icon && getAltValue('two') === icon && getAltValue('three') === icon) {
            return true;
        }
        if (getAltValue('three') === icon && getAltValue('six') === icon && getAltValue('nine') === icon) {
            return true;
        }
        if (getAltValue('three') === icon && getAltValue('five') === icon && getAltValue('seven') === icon) {
            return true;
        }
    }
}

function checkSecondRow(icon) {
    if (getAltValue('four') === icon) {
        if (getAltValue('four') === icon && getAltValue('one') === icon && getAltValue('seven') === icon) {
            return true;
        }
        if (getAltValue('four') === icon && getAltValue('five') === icon && getAltValue('six') === icon) {
            return true;
        }
    }
    if (getAltValue('five') === icon) {
        if (getAltValue('five') === icon && getAltValue('four') === icon && getAltValue('six') === icon) {
            return true;
        }
        if (getAltValue('three') === icon && getAltValue('five') === icon && getAltValue('seven') === icon) {
            return true;
        }
        if (getAltValue('one') === icon && getAltValue('five') === icon && getAltValue('nine') === icon) {
            return true;
        }
    }
    if (getAltValue('six') === icon) {
        if (getAltValue('three') === icon && getAltValue('six') === icon && getAltValue('nine') === icon) {
            return true;
        }
        if (getAltValue('four') === icon && getAltValue('five') === icon && getAltValue('six') === icon) {
            return true;
        }
    }
}

function checkThirdRow(icon) {
    if (getAltValue('seven') === icon) {
        if (getAltValue('one') === icon && getAltValue('five') === icon && getAltValue('seven') === icon) {
            return true;
        }
        if (getAltValue('seven') === icon && getAltValue('eight') === icon && getAltValue('nine') === icon) {
            return true;
        }
        if (getAltValue('seven') === icon && getAltValue('five') === icon && getAltValue('three') === icon) {
            return true;
        }
    }
    if (getAltValue('eight') === icon) {
        if (getAltValue('seven') === icon && getAltValue('eight') === icon && getAltValue('nine') === icon) {
            return true;
        }
        if (getAltValue('two') === icon && getAltValue('five') === icon && getAltValue('eight') === icon) {
            return true;
        }
    }
    if (getAltValue('nine') === icon) {
        if (getAltValue('one') === icon && getAltValue('five') === icon && getAltValue('nine') === icon) {
            return true;
        }
        if (getAltValue('seven') === icon && getAltValue('eight') === icon && getAltValue('nine') === icon) {
            return true;
        }
        if (getAltValue('three') === icon && getAltValue('six') === icon && getAltValue('nine') === icon) {
            return true;
        }
    }
}

function getAltValue(id) {
    let ele = document.getElementById(id);
    let obj = ele.getElementsByTagName('img');
    if (obj && obj.length) {
        return obj[0]['alt'];
    }
    return "";
}

function restart() {

}