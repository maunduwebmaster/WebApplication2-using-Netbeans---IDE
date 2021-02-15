function validation(){
  
var Email= Document.getElementById('Email');
var password= Document.getElementById('password');
var myform= Document.getElementById('myform');
var error_message= Document.getElementById("error_message");

error_message.style.padding="10px";

if(email.indexOf("@")== -1 && email.length<10){
    text="enter valid email";
    error_message.innerHTML="text"; 
    return false;
}
if(password.length>15){
    text="enter valid password";
    error_message.innerHTML="text"; 
    return false;
}
alert("form submitted successful")
return true;    
}



