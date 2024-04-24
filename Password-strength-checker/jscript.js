var msg_last = document.getElementById("msg_last");
var passwordInput = document.getElementById("password");

function checkStrength() {
    var password = passwordInput.value;
    if (password.length == 0) {
        
        msg_last.style.display = 'none';
        passwordInput.style.borderColor = ""; 
        return; 
    }

    msg_last.style.display = 'block';
    if (password.length < 4) {
        msg_last.innerHTML = "Password is Weak";
        passwordInput.style.borderColor = "#ff5925";
        msg_last.style.color = "#ff5925";
    } else if (password.length >= 4 && password.length < 8) {
        msg_last.innerHTML = "Password is Medium";
        passwordInput.style.borderColor = "yellow";
        msg_last.style.color = "yellow";
    } else {
        msg_last.innerHTML = "Password is Strong";
        passwordInput.style.borderColor = "green";
        msg_last.style.color = "green";
    }
}
