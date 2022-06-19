document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").onsubmit = function (){
        document.querySelector("form .sucess").style.display = "none";
        let fname = document.querySelector("form #fname").value;
        let lname = document.querySelector("form #lname").value;
        let email = document.querySelector("form #email").value;
        if(fname == ""){
            display(".fname");
        }else{
            hide(".fname");
        }
        if(lname == ""){
            display(".lname");
        }else{
            hide(".lname");
        }
        if(email == ""){
            display(".email");
        } else if(email.length > 1){
            if(checkEmail(email) == false){
                document.querySelector("form .email").innerHTML = "Enter a valid email!";
                display(".email");
            }
        }else{
            hide(".email");
        }
        if(document.querySelector("form #password").value.length < 1){
            display(".password");
        } else if(document.querySelector("form #password").value.length < 8){
            document.querySelector("form .password").innerHTML = "Password not long enough - less than 8 characters!";
            display(".password");
        }else{
            hide(".password");
        }
        if(fname.length > 1 && lname.length > 1 && checkEmail(email) && document.querySelector("form #password").value.length >= 8 ){
            display(".sucess");
            reset();
            deadAm();
        }
        return false;
    };
});

function display(className){
    document.querySelector(`form ${className}`).style.display = "block";
}
function hide(className){
    document.querySelector(`form ${className}`).style.display = "none";
}
function reset(){
    document.querySelector("form #fname").value = "";
    document.querySelector("form #lname").value = "";
    document.querySelector("form #email").value = "";
    document.querySelector("form #password").value = "";
}
function deadAm(){
document.querySelectorAll("form .error").forEach((each) =>{
    each.style.display = "none";
});
}
function checkEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        return false;
    }
    return true;
}