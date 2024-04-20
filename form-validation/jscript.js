var nameError=document.getElementById("name-error");
var numberError=document.getElementById("number-error");
var emailError=document.getElementById("email-error");
var messageError=document.getElementById("message-error");
var submitError=document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/)){
        nameError.innerHTML = "Write Full name";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validatePhone(){
    var phone=document.getElementById("phone").value;

    if(phone.length == 0)
    {
        numberError.innerHTML= "Phone no is required";
        return false;
    }

    if(phone.length !== 10)
    {
        numberError.innerHTML = " Phone no should be 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        numberError.innerHTML= "Only digits";
        return false;

    }
    numberError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email=document.getElementById("email").value;

    if(email.length == 0)
    {
        emailError.innerHTML= "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z._\-0-9]+[@][A-Za-z]+\.[a-z]{2,4}$/))
    {
        emailError.innerHTML= "Email Invalid";
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage(){
    var message=document.getElementById("message").value;
    var required_length=30;
    var left=required_length- message.length;

    if(left > 0)
    {
        messageError.innerHTML= left + 'more characters required';
        return false;
    }

    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML="Please Fix the Error";
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}