let work = document.getElementById("work");
let workP = document.querySelector("#work p");
let fun = document.getElementById("fun");
let funP = document.querySelector("#fun p");
let arrayOfWorkCards = document.getElementsByClassName('work-card');
let arrayofFunCards = document.getElementsByClassName('fun-card');
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let header = document.querySelector("header");

header.style.transition = "1s";
work.style.transition = "1s";
workP.style.transition = "1s";
fun.style.transition = "1s";
funP.style.transition = "1s";

workClick = function(){
    work.style.width = "100%";
    fun.style.width = "0%";
    work.style.backgroundColor = "#D16014";
    header.style.backgroundColor = "#D16014";
    header.style.color = "#313715";
    work.style.zIndex = "1";
    fun.style.zIndex = "0";
    workP.style.top = "0px";
    workP.style.right = "1rem";
    workP.style.position = "absolute";
    workCardsShow();
    next.style.display = "block";
    work.removeEventListener("click", workClick);
    next.addEventListener("click", revertToStart);
}

funClick = function(){
    fun.style.width = "100%";
    work.style.width = "0%";
    fun.style.backgroundColor = "#313715";
    header.style.backgroundColor ="#313715"
    header.style.color = "#D16014"
    fun.style.zIndex = "1";
    work.style.zIndex = "0"
    funP.style.top = "0px";
    funP.style.left = "1rem";
    funP.style.position = "absolute";
    funCardsShow();
    previous.style.display = "block";
    fun.removeEventListener("click", funClick);
    previous.addEventListener("click", revertToStart);
}

revertToStart = function(){
    fun.style.width = null;
    work.style.width = null;
    work.style.backgroundColor = null;
    fun.style.backgroundColor = null;
    header.style.backgroundColor = null;
    header.style.color = null;
    fun.style.zIndex = null;
    work.style.zIndex = null
    workP.style.top = null;
    workP.style.right = null;
    workP.style.position = null;
    funP.style.top = null;
    funP.style.left = null;
    funP.style.position = null;
    previous.style.display = null;
    next.style.display= null;
    workCardsHide();
    funCardsHide();
}

nextClick = function(){
    revertToStart();
    addListners();
    next.removeEventListener("click", revertToStart);
}

previousClick = function(){
    revertToStart();
    addListners();
    previous.removeEventListener("click", revertToStart);
}

workCardsShow = function(){
    for (let i = 0; i < arrayOfWorkCards.length; i++){
        arrayOfWorkCards[i].style.display = "block";
        arrayOfWorkCards[i].style.filter = "brightness(0) saturate(100%) invert(14%) sepia(34%) saturate(739%) hue-rotate(30deg) brightness(94%) contrast(94%)";
    }
}

funCardsShow = function(){
    for (let i = 0; i < arrayofFunCards.length; i++){
        arrayofFunCards[i].style.display = "block";
        arrayofFunCards[i].style.filter = "brightness(0) saturate(100%) invert(32%) sepia(100%) saturate(788%) hue-rotate(353deg) brightness(97%) contrast(94%)";
    }
}

workCardsHide = function(){
    for (let i = 0; i < arrayOfWorkCards.length; i++){
        arrayOfWorkCards[i].style.display = null;
        arrayOfWorkCards[i].style.filter = null;
    }
}

funCardsHide = function(){
    for (let i = 0; i < arrayofFunCards.length; i++){
        arrayofFunCards[i].style.display = null;
        arrayofFunCards[i].style.filter = null;
    }
}

addListners = function(){
    work.addEventListener("click", workClick);
    fun.addEventListener("click", funClick);
}

addListners();