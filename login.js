function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function checkLogin() {
    var username = document.getElementsByTagName("input")[0].value;
    var password = document.getElementsByTagName("input")[1].value;
    if (username == "ali" && password == "zoubeidi") {
        return window.location.href = "https://www.google.com/";
    }
    if (username == "jeremie" && password == "guerchon") {
       return window.location.href = "https://www.google.com/";
    }
    if (username == "vincent" && password == "benesen") {
       return window.location.href = "https://www.google.com/";
    }
    alert("ACCESS DENIED! Wrong Password or Username.")
}

