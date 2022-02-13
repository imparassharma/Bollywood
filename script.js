/******************************MOVIE************************************************/
const movie = "DANGAL";
const arr = Array.from(movie);

/******************************INPUT************************************************/
function getVal(){
    const guess = document.getElementById("guess");
}

/*****************************MAIN SCRIPT************************************************/
const result = document.querySelector(".result");
const container = document.querySelector(".container");
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
            console.log(pos.parentElement);
            pos.parentElement.className = "box green"
        }

    }

    if(!arr.includes(input)){
        life--;
        lives[8-life].classList.add("wrong");
    }

    if(life==0){
       result.classList.add("active");
       container.classList.add("nopadding");
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
const play = document.getElementById("play");
const boxes = document.querySelectorAll(".box");
const main = document.querySelector(".main")
colors.forEach(function(color){
    color.addEventListener("click",function(e){
        const circle = e.currentTarget;
        const bg_color = circle.classList[1];
        console.log(circle)
        colors.forEach(function(c){
            c.classList.remove("current");
        })
        boxes.forEach(function(box){
            if(box.className!="box green"){
                box.className = "box "+bg_color;
                main.className = "main "+bg_color+"_theme";
                circle.classList.add("current");
            }

        })
    })
})

