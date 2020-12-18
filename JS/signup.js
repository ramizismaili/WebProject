var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function register(){
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var contry = document.getElementById("country").value;
    var phone = document.getElementById("phone").value;

    if (fullName == "" || username == "" || password == "" || email == "") {
        alert("Please don't let any field blank");
    }else if(!email.match(mailformat)){
        alert("Email incorrect !");
    }else{
        window.location = "../index.html";
    }
}