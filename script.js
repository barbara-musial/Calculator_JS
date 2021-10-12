function tap(n) {
    document.getElementById("win").innerHTML += n;
}

function clr() {
    document.getElementById("win").innerHTML = ' ';
    document.getElementById("hist").innerHTML = ' ';
    document.getElementById("score").innerHTML = ' ';
}

function operation(sym) {
    var val = document.getElementById("win").innerHTML;
    document.getElementById("hist").innerHTML = val + sym;
    document.getElementById("win").innerHTML = '';
}