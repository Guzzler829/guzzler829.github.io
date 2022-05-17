let darkModeSwitch = $("#darkModeSwitch");
let body = $("body");
let mainBody = $(".main-body");
let paragraph = $("#exampleParagraph");
let moreText = $(".moreText");
let cookie = document.cookie;
let toggle = -1;

let slideIn = $(".slideIn");
let socialMediaImages = $(".socialMediaImages");
let textContainer = $(".textContainer");
let coffeeContainer = $(".container");
let myJumbotron = $(".myJumbotron");

var md = new MobileDetect(window.navigator.userAgent);

if(cookie){
    toggle = cookie;
}

if(toggle == -1){
    body[0].classList.add("bootstrap-dark");
    darkModeSwitch.prop("checked", true);
}


if (md.is("iPhone") || md.os("AndroidOS")){
    textContainer.attr("class", "textContainer textContainerMobile");
    coffeeContainer.attr("class", "container containerMobile");
    socialMediaImages.attr("class", "socialMediaImages socialMediaImagesMobile")
    myJumbotron.attr("class", "jumbotron myJumbotron myJumbotronMobile")
}
else {
    mainBody.attr("class", "main-body col-8");
    textContainer.attr("class", "textContainerDesktop");
    coffeeContainer.attr("class", "container containerDesktop");
    myJumbotron.attr("class", "jumbotron myJumbotron myJumbotronDesktop")

}

function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
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