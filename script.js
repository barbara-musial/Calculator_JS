var first
var second

function tap(n) {
    let sc = document.getElementById("score").innerHTML;
    if (sc.includes(' ')) {
        document.getElementById("win").innerHTML += n;
    }
    else {
        document.getElementById("score").innerHTML = ' ';
        document.getElementById("hist").innerHTML = ' ';
        document.getElementById("win").innerHTML += n;
    }
}

function clr() {
    document.getElementById("win").innerHTML = ' ';
    document.getElementById("hist").innerHTML = ' ';
    document.getElementById("score").innerHTML = ' ';
}

function operation(sym) {
    first = Number(document.getElementById("win").innerHTML);
    document.getElementById("hist").innerHTML = first + sym;
    document.getElementById("win").innerHTML = '';
}

function result() {
    second = Number(document.getElementById("win").innerHTML);
    let tabl = document.getElementById("hist").innerHTML;
    if (tabl.includes('+')) {
            document.getElementById("score").innerHTML = first + second;
            document.getElementById("hist").innerHTML = first + ' + ' + second + ' = ';
    }
    if (tabl.includes('-')) {
        document.getElementById("score").innerHTML = first - second;
        document.getElementById("hist").innerHTML = first + ' - ' + second + ' = ';
    }
    if (tabl.includes('*')) {
        document.getElementById("score").innerHTML = first * second;
        document.getElementById("hist").innerHTML = first + ' * ' + second + ' = ';
    }
    if (tabl.includes('/')) {
        document.getElementById("score").innerHTML = first / second;
        document.getElementById("hist").innerHTML = first + ' / ' + second + ' = ';
    }
    document.getElementById("win").innerHTML = '';
}