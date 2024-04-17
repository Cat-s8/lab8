function checkName() {
    let first = document.getElementById("name_input").value;
    let regex = /^[a-zA-Z\d]{2,15}$/;

    if (regex.test(first)) { 
        document.getElementById("name_input").style.color = "green";
        return true;
    }
    else {
        document.getElementById("name_input").style.color = "red";
        return false;
    }
}

function checkPasswd() {
    let passw = document.getElementById("password").value;
    let regex = /^[a-zA-Z\d]{8,30}$/;

    if (regex.test(passw)) {
        document.getElementById("password").style.backgroundColor = "green";;
        return true;
    }
    else {
        document.getElementById("password").style.backgroundColor = "red";
        return false;
    }
}

function checkCode() {
    let code = document.getElementById("code_input").value

    if (code != null) {
        document.getElementById("code_input").style.backgroundColor = "green";;
        return true;
    }
    else {
        document.getElementById("code_input").style.backgroundColor = "red";
        return false;
    }
}