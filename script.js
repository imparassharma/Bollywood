/******************************MOVIE************************************************/
const movie = "DANGAL";
const arr = Array.from(movie);

/******************************INPUT************************************************/
function getVal(){
    const guess = document.getElementById("guess");
}

/*****************************MAIN SCRIPT************************************************/
const result = document.querySelector(".result");
const topsection = document.querySelector(".top-section");
const midsection = document.querySelector(".mid-section");
const bottomsection = document.querySelector(".bottom-section");
const lives = document.getElementById("lives").children;
const enter = document.getElementById("enter");

const index=[];
let count=0,life=9,i=0;

enter.addEventListener("click",function(){
    const input = guess.value;
    console.log(input);

    const isInArray = arr.includes(input);
    for(i=0;i<arr.length;i++){
        if(arr[i]==input){
            const pos = document.getElementById((i+1));
            pos.innerHTML = input;
            pos.parentElement.style.backgroundColor = "#17B978";
        }

    }

    if(!arr.includes(input)){
        life--;
        lives[8-life].classList.add("wrong");
    }

    if(life==0){
       result.classList.add("active");
       midsection.classList.add("hidden");
       bottomsection.classList.add("hidden");
       topsection.classList.add("hidden");
    }

    

})

/************************************GAME LOST************************************************/

const retry = document.getElementById("retry");
const reveal = document.getElementById("reveal");

retry.addEventListener("click",function(){

})

/*************************************GAME WON************************************************/





/******************************COLOR SCHEME********************************************/
const colors = document.querySelectorAll(".circle");
const box = document.querySelector(".box");

colors.forEach(function(color){
    color.addEventListener("click",function(e){
        console.log(e.currentTarget.style.backgroundColor);
        const circle = e.currentTarget.className;
        console.log(circle)
        var current_color = circle.backgroundColor;
        console.log(current_color)
        colors.forEach(function(c){
            c.classList.remove("current");
        })
        circle.classList.add("current");
        box.classList.add("")
    })
})

