var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function send(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var textarea = document.getElementById("textarea").value;

    if (name == "" || surname == "" || email == "" || textarea == "") {
        alert("Please don't let any field blank");
    }else if(!email.match(mailformat)){
        alert("Email incorrect !");
    }else{
        window.location = "../index.html";
    }
}