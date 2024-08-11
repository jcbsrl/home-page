let work = document.getElementById("work");
let workP = document.querySelector("#work p");
let fun = document.getElementById("fun");
let funP = document.querySelector("#fun p");
let arrayOfWorkCards = document.getElementsByClassName('work-card');
let arrayofFunCards = document.getElementsByClassName('fun-card');


work.style.transition = "1.5s";
workP.style.transition = "1.5s";
fun.style.transition = "1.5s";
funP.style.transition = "1.5s";

workClick = function() {
    work.style.width = "100%";
    fun.style.width = "0%";
    work.style.backgroundColor = "#D16014";
    work.style.zIndex = "1";
    fun.style.zIndex = "0";
    workP.style.top = "0px";
    workP.style.right = "1rem";
    workP.style.position = "absolute";
    workCards();
}

funClick = function() {
    fun.style.width = "100%";
    work.style.width = "0%";
    fun.style.backgroundColor = "#313715";
    fun.style.zIndex = "1";
    work.style.zIndex = "0"
    funP.style.top = "0px";
    funP.style.left = "1rem";
    funP.style.position = "absolute";
    funCards();
}

workCards = function(){
    for (let i = 0; i < arrayOfWorkCards.length; i++){
        arrayOfWorkCards[i].style.display = "block";
        arrayOfWorkCards[i].style.filter = "brightness(0) saturate(100%) invert(14%) sepia(34%) saturate(739%) hue-rotate(30deg) brightness(94%) contrast(94%)";
    }
}

funCards = function(){
    for (let i = 0; i < arrayofFunCards.length; i++){
        arrayofFunCards[i].style.display = "block";
        arrayofFunCards[i].style.filter = "brightness(0) saturate(100%) invert(32%) sepia(100%) saturate(788%) hue-rotate(353deg) brightness(97%) contrast(94%)";
    }
}

work.addEventListener("click", workClick);
fun.addEventListener("click", funClick);