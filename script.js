function tap(n) {
    document.getElementById("win").innerHTML += n;
}

function clr() {
    document.getElementById("win").innerHTML = ' ';
    document.getElementById("hist").innerHTML = ' ';
    document.getElementById("score").innerHTML = ' ';
}

function a() {
    var val = document.getElementById("win").innerHTML
    document.getElementById("hist").innerHTML = val + " + ";
    document.getElementById("win").innerHTML = ' ';
}

function s() {
    document.getElementById("his").innerHTML = document.getElementById("win").innerHTML + " - ";
    document.getElementById("win").innerHTML = ' ';
}

function d() {
    document.getElementById("his").innerHTML = val + " / ";
    document.getElementById("win").innerHTML = ' ';
}