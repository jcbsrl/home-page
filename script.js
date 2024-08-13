let work = document.getElementById("work");
let workP = document.querySelector("#work p");
let fun = document.getElementById("fun");
let funP = document.querySelector("#fun p");
let arrayOfWorkCards = document.getElementsByClassName('work-card');
let arrayOfFunCards = document.getElementsByClassName('fun-card');
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let header = document.querySelector("header");
let workIcon1 = document.getElementById("work-icon1");
let workIcon2 = document.getElementById("work-icon2");
let workIcon3 = document.getElementById("work-icon3");
let workText1 = document.getElementById("work-text1");
let workText2 = document.getElementById("work-text2");
let workText3 = document.getElementById("work-text3");
let funIcon1 = document.getElementById("fun-icon1");
let funIcon2 = document.getElementById("fun-icon2");
let funIcon3 = document.getElementById("fun-icon3");
let funText1 = document.getElementById("fun-text1");
let funText2 = document.getElementById("fun-text2");
let funText3 = document.getElementById("fun-text3");

header.style.transition = "1s";
work.style.transition = "1s";
workP.style.transition = "1s";
fun.style.transition = "1s";
funP.style.transition = "1s";
workText1.style.transition = "0.5s"
workText2.style.transition = "0.5s"
workText3.style.transition = "0.5s"
funText1.style.transition = "0.5s"
funText2.style.transition = "0.5s"
funText3.style.transition = "0.5s"

hideCardsFromStart = function(){
    for (let i = 0; i < arrayOfWorkCards.length; i++){
        arrayOfWorkCards[i].style.display = "none";}
    for (let i = 0; i < arrayOfFunCards.length; i++){
        arrayOfFunCards[i].style.display = "none"
    }
} 

hideCardsFromStart();

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
        arrayOfWorkCards[i].style.transition = "0.5s";
        arrayOfWorkCards[i].style.opacity = "1";
        arrayOfWorkCards[i].style.display = "block";
    }
}

funCardsShow = function(){
    for (let i = 0; i < arrayOfFunCards.length; i++){
        arrayOfFunCards[i].style.transition = "0.5s";
        arrayOfFunCards[i].style.opacity = "1";
        arrayOfFunCards[i].style.display = "block";
        
    }
}

workCardsHide = function(){
    for (let i = 0; i < arrayOfWorkCards.length; i++){
        arrayOfWorkCards[i].style.transition = "0.5s";
        arrayOfWorkCards[i].style.opacity = "0";
        setTimeout(() => {arrayOfWorkCards[i].style.display = "none"},0.0001 * 1000);
    }
}

funCardsHide = function(){
    for (let i = 0; i < arrayOfFunCards.length; i++){
        arrayOfFunCards[i].style.transition = "0.5s"
        arrayOfFunCards[i].style.opacity = "0";
        setTimeout(() => {arrayOfFunCards[i].style.display = "none"}, 0.0001 * 1000);

    }
}

addListners = function(){
    workP.addEventListener("click", workClick);
    funP.addEventListener("click", funClick);
}

addListners();

showHiddenText = function(target){
    target.style.opacity = '1';  
}

hideShownText = function(target){
    target.style.opacity = '0';
}

workIcon1.addEventListener("mouseenter", function(){
    showHiddenText(workText1);
});

workIcon1.addEventListener("mouseleave", function(){
    hideShownText(workText1);
});

workIcon2.addEventListener("mouseenter", function(){
    showHiddenText(workText2);
});

workIcon2.addEventListener("mouseleave", function(){
    hideShownText(workText2);
});

workIcon3.addEventListener("mouseenter", function(){
    showHiddenText(workText3);
});

workIcon3.addEventListener("mouseleave", function(){
    hideShownText(workText3);
});

funIcon1.addEventListener("mouseenter", function(){
    showHiddenText(funText1);
});

funIcon1.addEventListener("mouseleave", function(){
    hideShownText(funText1);
});

funIcon2.addEventListener("mouseenter", function(){
    showHiddenText(funText2);
});

funIcon2.addEventListener("mouseleave", function(){
    hideShownText(funText2);
});

funIcon3.addEventListener("mouseleave", function(){
    hideShownText(funText3);
});

funIcon3.addEventListener("mouseenter", function(){
    showHiddenText(funText3);
});
