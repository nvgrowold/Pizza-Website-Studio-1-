function loginAccess(){
    /*set default value for user name and password*/
    var userDefault = "user";
    var passWord = "P@ssw0rd123";

    /**taking out value from HTML, put here assigning to variables, connecting html and js file */
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    /*only fulfill two conditions could log in successful to store page*/
    if  (user == userDefault && pass == passWord) {
        alert("Login succeed, please click ok!");
        //window.location = "index.html";

    }
    /*else will pop an alert and stay in log in page*/
    else{
        alert("Wrong user name or password not correct!");
      //  window.location="login.html";
    }   
}