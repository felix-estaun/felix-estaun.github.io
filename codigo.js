function checkPswd() {
    var gud = "2022sid0s";
    var pass = document.getElementById('contra').value;
    if (gud == pass) {
        document.getElementById('resp').innerHTML = 'AAAAAAAAAAAAAAa'
    }
    else {
        document.getElementById('resp').innerHTML = pass;
    }
}