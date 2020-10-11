// JavaScript source code
window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 991) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed")
        } else {
            document.querySelector("header").classList.remove ("fixed")
        }
    }
}

// navbarlinks

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function (element) {
    element.addEventListener("click", function () {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("active");
        }
        this.classList.add("active")
        document.querySelector(".navbar").classList.toggle("show");
    })
});

//Function to check email

function validateMail() {   
    var minput = document.querySelector(".email-input");     
    var x = minput.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("The entered Email address is not valid");
    } else {
        alert("It is a valid email address");
    }
}

//Function to check phone number

function validatePhone(){
    var val = document.querySelector(".number-input");
    var x = val.value;
    if(x.length < 10){
        alert("Enter a valid number");
    }
}

//Functio to check age

function validateAge(){
    var val = document.querySelector(".age-input");
    var x = val.value;
    if(x < 150){
        alert("The enterd age is valid");
    } else {
        alert("The age is not valid ");
    }
}

//Function to check  name

function validateName(){
    var val = document.querySelector(".name-input");
    var x = val.value;
    if(x == " "){
        alert("Enter a valid name")
    }
}