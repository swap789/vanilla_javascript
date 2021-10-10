var firstUserTurn = true;
var circleCounter = 0;
var crossCounter = 0;
document.getElementById('cross-icon').innerText = circleCounter;
document.getElementById('circle-icon').innerText = crossCounter;

function onBoxSelect(id) {
    var box = document.getElementById(id);
    var img = box.getElementsByTagName("img");
    if (img && img.length) {
      return;
    }
    firstUserTurn = !firstUserTurn;
    let circle = "images/black_circle.svg";
    let cross = "images/cross_ico.svg";
    var elem = document.createElement("img");
    if (firstUserTurn) {
        circleCounter++;
        document.getElementById('circle-icon').innerText = circleCounter;
        elem.setAttribute("src", circle);
    } else {
        crossCounter++;
        document.getElementById('cross-icon').innerText = crossCounter;
        elem.setAttribute("src", cross);

    }
    elem.setAttribute("height", "100");
    elem.setAttribute("width", "100");
    document.getElementById(id).appendChild(elem);
    document.getElementsByTagName;
}

function checkStatus() {
    
}

function restart() {

}