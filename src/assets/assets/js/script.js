// Implementation of onscroll browser object model function for social icon
//Get the button back to top button
let mybutton = document.getElementById("fixedShareDiv");

let mybutton2 = document.getElementById("back-to-top");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    // console.log("Scrolled")
    scrollFunction();
    scrollFunction2();
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 1350) {
        mybutton.style.display = "none";
    }
    else {
        mybutton.style.display = "block";
    }
}

function scrollFunction2() {
    if (document.documentElement.scrollTop < 250) {
        mybutton2.style.display = "none";
    }
    else {
        mybutton2.style.display = "block";
    }
}


// Code for setting cookies
// const setCookie = (cName, cValue, expDays) => {
//     let date = new Date();
//     date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + date.toUTCString();
//     creating cookies at homepage using path if we have to set co
//     document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
//     For multiple path cookies
//     document.cookie = cName + "=" + cValue + ";" + expires + "; path=/, path=/about, path=/blogs, path=/career,";
// }

// getCookie = (cName) => {
//     const name = cName + "=";
//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArr = cDecoded.split("; ");
//     let value;
//     cArr.forEach(val => {
//         if (val.indexOf(name) === 0) {
//             value = val.substring(name.length)
//         };
//     })

//     return value;
// }


// created an query selector onclick button for accept the cookies
// document.querySelector("#cookies-btn").addEventListener("click", () => {
//     document.querySelector("#cookies").style.display = "none";
//     setCookie("cookie", true, 30);
// })

// Button created to close the pop up of cookies
document.querySelector("#closeCookie").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
})

// If number of cookies are zero in the browser it will display the pop up
// cookieMessage = () => {
//     if (!getCookie("cookie")) {

//         document.querySelector("#cookies").style.display = "block";
//     }
//     else {
//         document.querySelector("#cookies").style.display = "none";
//     }
// }

// window.addEventListener("load", cookieMessage);


admissionForm = () => {
    document.querySelector("#admissionModal").style.display = "block";
}

// Button created to close the pop up of admission Form
document.querySelector("#closeAdmission").addEventListener("click", () => {
    document.querySelector("#admissionModal").style.display = "none";
})


window.addEventListener("load", admissionForm);

// Js for dark mode
// let icon=document.getElementById("icon-dark");
// icon.onclick=function(){
//     document.body.classList.toggle("dark-theme");
// }



// Creating a function of google language translate API
function loadGoogleTranslate() {

    // page language defines the default language
    new google.translate.TranslateElement({ pageLanguage: 'en' }, "google_translate_element");
    // new google.translate.TranslateElement("google_element2");
}


// Creating a variable of Auto Typing Effect Using Build In Function of CDN in index page
let typed = new Typed(".auto-type", {
    strings: ["Websites", "Applications", "Software"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


// craeting a function to toggle dark mode and light mode
// creating a funtion to change class in tag
function changeClass(name1, name2) {
    body.classList.remove(name1);
    body.classList.add(name2);
    // btn.src="icons/"+name2+".svg";
}









