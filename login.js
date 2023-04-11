function validate(){
    var password = document.getElementById("password").value;

    if(password == 1234){
        window.open("admin.html");
    }
    else{
        alert("كلمة السر خاطئة");
    }
}