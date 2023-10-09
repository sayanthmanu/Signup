const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpass = document.getElementById("confirmpass");
const form=document.getElementById("form");
const gender1=document.getElementById("gender1");
const gender2=document.getElementById("gender2");
const gender3=document.getElementById("gender3");
const interest=document.getElementById("interest");
const language=document.getElementById("language");


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();

});
function setError(element,message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  
}
function setSuccess(element){
    const inputControl = element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');
    errorDisplay.innerText="";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
function setErrorinterest(element,message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorinterest');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  
}
function setSuccessinterest(element){
    const inputControl = element.parentElement;
    const errorDisplay= inputControl.querySelector('.errorinterest');
    errorDisplay.innerText="";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
function isselected(){
    if(gender1.checked==true || gender2.checked==true|| gender3.checked==true){
      document.getElementById("gendererror").innerHTML="";
    }else {
        document.getElementById("gendererror").innerHTML="Please select gender!";
    }
}
function ischecked(){
    isselected();
    if(document.getElementById("tnc").checked==false){
        alert("Can't proceed without agreeing to terms and conditions!");
    }
}

function validateInputs(){
    const firstnamevalue = firstname.value.trim();
    const lastnamevalue=lastname.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();
    const confirmpassvalue=confirmpass.value.trim();
    const interestvalue=interest.value.trim();
    const languagevalue=language.value.trim();
    if(firstname.value===""){
        setError(firstname,"First name cannot be empty!");
    }else{
        setSuccess(firstname);
}
if(lastname.value===""){
    setError(lastname,"Last name cannot be empty!");
}else{
    setSuccess(lastname);
}
if(email.value===""){
    setError(email,"Not a valid email address!");
}


else{
    setSuccess(email);
}
if(password.value.length < 8)
{

    setError(password,"Password should be atleast 8 character long!");
}
else{
    setSuccess(password);
}
if(confirmpass.value!=password.value){
    setError(confirmpass,"Passwords does not match!");
}else if(confirmpass.value===""){
    setError(confirmpass,"Password should be atleast 8 character long!");
}
else{
    setSuccess(confirmpass);
}
if(interest.value===""){
    setErrorinterest(interest,"Please fill in your interests!");
}else{
    setSuccessinterest(interest);
}
if(language.value==""){
    setError(language,"Please select preferred language!");
}else{
    setSuccess(language);
}
}

