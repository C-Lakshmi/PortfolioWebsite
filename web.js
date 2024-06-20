let item,res2;
item=document.querySelector("#bio h1");
async function time(){
let res= await setTimeout(display,1000);
function display() {
    item.style.display="block";
}
if(res){
res2= await setTimeout(display2,3000);
function display2() {
    document.querySelector("#bio h2").textContent="Passionate about Finance and Statistics!";
}
}
if(res2){
    setTimeout(display3,6000);
    function display3() {
        document.querySelector("#bio h2").textContent="Web Developer and ML Enthusiast";
    }
}
}
time();
function validateForm(){
    const name= document.getElementById("name").value;
    const nameError=document.getElementById("nameError");
    const email= document.getElementById("email").value;
    const emailError=document.getElementById("emailError");
    const message= document.getElementById("message").value;
    const msgError=document.getElementById("msgError");
    //Initializing textContent in error columns to be ""
    nameError.textContent="";
    emailError.textContent="";
    msgError.textContent="";
    let isValid=true;

Array.from(name).forEach(function(a){
        if(Number(a.match(/\d/g)))  {
            isValid=false;
        nameError.textContent="Please enter name properly (numbers not allowed).";
    }});
if(name==="") {
        isValid=false;
        nameError.textContent="Please enter name. It is a required field.";
}
if(email===""||!email.includes('@')){
    isValid=false;
    emailError.textContent="Please enter email properly.";
}
if(message===""||message.length < 4){
    isValid=false;
    msgError.textContent="Please enter a message with atleast 4 characters.";
    
}

return isValid;
}
