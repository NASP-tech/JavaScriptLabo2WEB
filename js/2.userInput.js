// User Input Example

// By Id

//Variable
let username;

//Function
document.getElementById("userbtn").onclick = function(){
    username = document.getElementById("usertxt").value;
    console.log(username);
    document.getElementById("userlbl").innerHTML = "Hello " + username;
}