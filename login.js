function showLogin(){
    document.getElementById("signupBox").style.display="none";
    document.getElementById("loginBox").style.display="block";
}
function showSignup(){
    document.getElementById("loginBox").style.display="none";
    document.getElementById("signupBox").style.display="block";
}
function signup(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let pwd=document.getElementById("pwd").value;
    let cpwd=document.getElementById("cpwd").value;
    let msg=document.getElementById("signupMsg");
    if(name === "" || email === "" || pwd === "" || cpwd === "" ){
        msg.innerHTML="Please fill all  fields required!";
        msg.style.color="red";
        return;
    }
    if (pwd!==cpwd){
        msg.innerHTML="Password do not match!";
        msg.style.color="red";
        return;
    }
    msg.innerHTML="Signup Successful!";
    msg.style.color="green";
    document.getElementById("name").value=" ";
    document.getElementById("email").value=" ";
    document.getElementById("pwd").value=" ";
    document.getElementById("cpwd").value=" ";
}


function login(){
    let email=document.getElementById("loginEmail").value;
    let pwd=document.getElementById("loginPwd").value;
    let msg=document.getElementById("loginMsg");
    if(email === "" || pwd === ""){
        msg.style.color="red";
        msg.innerHTML="Please fill the fields!";
        return;
    }
    msg.innerHTML="Login Successful!";
    msg.style.color="green";
    document.getElementById("loginEmail").value="";
    document.getElementById("loginPwd").value="";
}