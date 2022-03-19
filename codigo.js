function checkPswd() {
    var gud = "2022sid0s";
    var pass = document.getElementById('contra').value;
    if (gud == pass) {
        document.getElementById('resp').innerHTML = "<img src=\"Turtle.png\" width=\"100\">¡Feliz cumpleaños, puerco!<img src=\"Turtle.png\" width=\"100\"><br>K7G6G-0Y84V-X46L(erre)"
    }
    else {
        document.getElementById('resp').innerHTML = pass;
    }
}