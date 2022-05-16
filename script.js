let darkModeSwitch = $("#darkModeSwitch");
let body = $("body");
let mainBody = $("#main-body");
let paragraph = $("#exampleParagraph");
let moreText = $(".moreText");
let cookie = document.cookie;
let toggle = -1;

let slideIn = $(".slideIn");
let socialMediaImages = $(".socialMediaImages");


if(cookie){
    toggle = cookie;
}

if(toggle == -1){
    body[0].classList.add("bootstrap-dark");
    mainBody[0].classList.add("main-body-dark");
    darkModeSwitch.prop("checked", true);
} else {
    mainBody[0].classList.add("main-body-light");
}



function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}


if (detectMob) {
    mainBody.attr("class", "col-8");
} else {
    mainBody.attr("class", "col-12");
}

//on scroll down, animate revealItems
window.addEventListener("scroll", () => {
    revealElement(slideIn, 150); 
    revealElement(moreText, 150); 
    revealElementsDelayCycle(socialMediaImages, 100, 250); 
});

function revealElement(element, elementVisible) {
    let windowHeight = window.innerHeight;
    for (let i = 0; i < element.length; i++) {
        let elementTop = element[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element[i].classList.add("active");
        } else {
        element[i].classList.remove("active");
        }
    }
}

const revealElementsDelayCycle = async (element, elementVisible, delay) => {
    let windowHeight = window.innerHeight;
    for (let i = 0; i < element.length; i++) {
        let elementTop = element[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            await sleep(delay);
            element[i].classList.add("active");
        } else {
        element[i].classList.remove("active");
        }
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


function darkModeToggle(){
    body[0].classList.toggle("bootstrap-dark");
    toggle *= -1;
    document.cookie = toggle;
    switch(toggle){
        case -1:
            mainBody[0].classList.add("main-body-dark");
            mainBody[0].classList.remove("main-body-light");
            break;
        case 1:
            mainBody[0].classList.add("main-body-light");
            mainBody[0].classList.remove("main-body-dark");
    }
}