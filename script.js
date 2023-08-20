/******************************MOVIE************************************************/
const movie = "BLOODY DADDY";
const arr = Array.from(movie);

/******************************INPUT************************************************/
function getVal(){
    const guess = document.getElementById("guess");
}

/*****************************MAIN SCRIPT************************************************/
const result = document.querySelector(".result-section");
const container = document.querySelector(".container");
const topsection = document.querySelector(".top-section");
const midsection = document.querySelector(".mid-section");
const bottomsection = document.querySelector(".bottom-section");
const lives = document.getElementById("lives").children;
const enter = document.getElementById("enter");
const playsection = document.getElementById("play")

for(let i=0;i<arr.length;i++){
    var newClass = document.createElement('div');
    newClass.className = "box";
    const newChild = document.createElement('h1');
    newChild.setAttribute('id',i+1);
    newClass.appendChild(newChild);
    playsection.appendChild(newClass);
    
    if(arr[i]==' '){
        newClass.classList.add("blank");
    }

    if(arr[i] == 'A' || arr[i] == 'E' || arr[i] == 'I' || arr[i] == 'O' || arr[i] == 'U'){
        newClass.className = "box default";
        newClass.innerHTML = "<h1>"+arr[i]+"</h1>";
    }
}
const index=[];
let count=0,life=9,i=0;
usedStr = "";
function enterKeyPressed(event){
    if(event.keyCode==13)
    {
        console.log("enter is pressed");
    const input = guess.value.toUpperCase();
    guess.value = "";
    const isInArray = arr.includes(input);
    const used = document.getElementById("used");
    for(i=0;i<arr.length;i++){
        if(arr[i]==input){
            const pos = document.getElementById((i+1));
            pos.innerHTML = input;
            pos.parentElement.className = "box green";
        }

    }

    input.value = ""

    if(!arr.includes(input)){
        life--;
        lives[8-life].classList.add("wrong");
        usedStr += input+", ";
        console.log(usedStr);
        used.innerHTML = usedStr;

    }

    if(life==0){
       result.classList.add("active");
       container.classList.add("nopadding");
       midsection.classList.add("hidden");
       bottomsection.classList.add("hidden");
       topsection.classList.add("hidden");
    }
/************************************GAME LOST************************************************/
    var correct =0;
    for(let i=0;i<arr.length;i++){
        const childrens = playsection.children[i];
        if(childrens.className=="box green" || childrens.className=="box default" || childrens.className=="box blank"){
            correct+=1;
        }
    }

    if(correct==arr.length){
        for(let i=0;i<arr.length;i++)
        {
            setTimeout(function(){
                if(playsection.children[i].className!="box blank"){
                    playsection.children[i].className = "box green";
                    playsection.children[i].classList.add("animate");
                }
            },i*256)
        }
    }
    }
    
}

/**********************ANSWER REVEAL************** */
const retry = document.getElementById("retry");
const reveal = document.getElementById("reveal");
const countdown = document.querySelector(".countdown");

reveal.addEventListener("click",function(){
    reveal.innerHTML = movie;
    reveal.style.backgroundColor="#11171aec"
    reveal.style.color="white";
    retry.classList.add("hidden");
    countdown.classList.add("active");
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
        colors.forEach(function(c){
            c.classList.remove("current");
        })
        boxes.forEach(function(box){
            if(box.className!="box green" && box.className!="box blank"){
                main.className = "main "+bg_color+"_theme";

                circle.classList.add("current");
            }

        })
    })
})


