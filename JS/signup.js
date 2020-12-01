function register(){
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var contry = document.getElementById("country").value;
    var phone = document.getElementById("phone").value;

    if (fullName != "" && username != "" && password != "" && email != "") {
        window.location = "../index.html"
        
    }else{
        alert("Please put all info requared !")
    }
}