function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function checkLogin() {
    var username = document.getElementsByTagName("input")[0].value;
    var password = document.getElementsByTagName("input")[1].value;
    if (username == "ali" && password == "zoubeidi") {
        return window.location.href = "main.html";
    }
    if (username == "jeremie" && password == "guerchon") {
       return window.location.href = "main.html";
    }
    if (username == "vincent" && password == "benesen") {
       return window.location.href = "main.html";
    }
    alert("ACCESS DENIED! Wrong Password and/or Username.")
}

