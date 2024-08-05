let item,res2,res3;
item=document.querySelector("#bio h1");
 async function time(){
let res= await setTimeout(display,1500);
function display() {
    item.style.display="block";
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
function boxReveal() {
    var reveal = document.querySelectorAll(".box");
    for(var i=0; i<reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var windowWidth= window.innerWidth;
      var elementTop = reveal[i].getBoundingClientRect().top;
      if (elementTop < windowHeight) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
}

window.addEventListener('scroll', boxReveal);
// To check the scroll position on page load
boxReveal();
const text = document.querySelector(".text");
const textLoad = () => {
    setTimeout(() => {
        //text.style.marginLeft="-1.8vw";
        text.textContent = "Front-End Developer";
    }, 2000);
    setTimeout(() => {
        text.textContent = "ML Enthusiast";
        //text.style.marginLeft="-5.2vw";
    }, 6000);
    setTimeout(() => {
        text.textContent = "Data Analyst";
        //text.style.marginLeft="-6vw";
    }, 10000); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 12000);
function phonedisplay(){
   let contain= document.querySelector(".contain");
   let prj_title= document.querySelector("#prj_title");
   contain.style.display="flex";
   prj_title.style.display="block";
}