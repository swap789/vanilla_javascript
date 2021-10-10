var firstUserTurn = true;
var circleCounter = 0;
var crossCounter = 0;
document.getElementById('cross-icon').innerText = circleCounter;
document.getElementById('circle-icon').innerText = crossCounter;
const CROSS_ICON = "cross-icon";
const CIRCLE_ICON = "circle-icon";
const CIRCLE_IMG = "images/black_circle.svg";
const CROSS_IMG = "images/cross_ico.svg";

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
}

function checkStatus(id) {
    checkFirstRow(CROSS_ICON)
    checkFirstRow(CIRCLE_ICON)
    checkSecondRow(CROSS_ICON)
    checkSecondRow(CIRCLE_ICON)
    checkThirdRow(CROSS_ICON)
    checkThirdRow(CIRCLE_ICON)
}

function checkFirstRow(icon) {
    if (getAltValue('one') === icon) {
        if (getAltValue('one') === icon && getAltValue('two') === icon && getAltValue('three') === icon) {
            return alert('succeed');
        }
        if (getAltValue('one') === icon && getAltValue('four') === icon && getAltValue('seven') === icon) {
            return alert('succeed');
        }
        if (getAltValue('one') === icon && getAltValue('five') === icon && getAltValue('nine') === icon) {
            return alert('succeed');
        }
    }
    if (getAltValue('two') === icon) {
        if (getAltValue('one') === icon && getAltValue('two') === icon && getAltValue('three') === icon) {
            return alert('succeed');
        }
        if (getAltValue('two') === icon && getAltValue('five') === icon && getAltValue('eight') === icon) {
            return alert('succeed');
        }
    }
    if (getAltValue('three') === icon) {
        if (getAltValue('one') === icon && getAltValue('two') === icon && getAltValue('three') === icon) {
            return alert('succeed');
        }
        if (getAltValue('three') === icon && getAltValue('six') === icon && getAltValue('nine') === icon) {
            return alert('succeed');
        }
        if (getAltValue('three') === icon && getAltValue('five') === icon && getAltValue('seven') === icon) {
            return alert('succeed');
        }
    }
}

function checkSecondRow(icon) {
    if (getAltValue('four') === icon) {
        if (getAltValue('four') === icon && getAltValue('one') === icon && getAltValue('seven') === icon) {
            return alert('succeed');
        }
        if (getAltValue('four') === icon && getAltValue('five') === icon && getAltValue('six') === icon) {
            return alert('succeed');
        }
    }
    if (getAltValue('five') === icon) {
        if (getAltValue('five') === icon && getAltValue('four') === icon && getAltValue('six') === icon) {
            return alert('succeed');
        }
        if (getAltValue('three') === icon && getAltValue('five') === icon && getAltValue('seven') === icon) {
            return alert('succeed');
        }
        if (getAltValue('one') === icon && getAltValue('five') === icon && getAltValue('nine') === icon) {
            return alert('succeed');
        }
    }
    if (getAltValue('six') === icon) {
        if (getAltValue('three') === icon && getAltValue('six') === icon && getAltValue('nine') === icon) {
            return alert('succeed');
        }
        if (getAltValue('four') === icon && getAltValue('five') === icon && getAltValue('six') === icon) {
            return alert('succeed');
        }
    }
}

function checkThirdRow(icon) {
    if (getAltValue('seven') === icon) {
        if (getAltValue('one') === icon && getAltValue('five') === icon && getAltValue('seven') === icon) {
            return alert('succeed');
        }
        if (getAltValue('seven') === icon && getAltValue('eight') === icon && getAltValue('nine') === icon) {
            return alert('succeed');
        }
        if (getAltValue('seven') === icon && getAltValue('five') === icon && getAltValue('three') === icon) {
            return alert('succeed');
        }
    }
    if (getAltValue('eight') === icon) {
        if (getAltValue('seven') === icon && getAltValue('eight') === icon && getAltValue('nine') === icon) {
            return alert('succeed');
        }
        if (getAltValue('two') === icon && getAltValue('five') === icon && getAltValue('eight') === icon) {
            return alert('succeed');
        }
    }
    if (getAltValue('nine') === icon) {
        if (getAltValue('one') === icon && getAltValue('five') === icon && getAltValue('nine') === icon) {
            return alert('succeed');
        }
        if (getAltValue('seven') === icon && getAltValue('eight') === icon && getAltValue('nine') === icon) {
            return alert('succeed');
        }
        if (getAltValue('three') === icon && getAltValue('six') === icon && getAltValue('nine') === icon) {
            return alert('succeed');
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
    console.log(obj[0]['alt'])
}

function restart() {

}