const movie = "DANGAL";
const arr = Array.from(movie);
console.log(arr)

function getVal(){
    const guess = document.getElementById("guess");
}

const enter = document.getElementById("enter");

var i=0,index=0;
enter.addEventListener("click",function(){
    const input = guess.value;
    console.log(input)
    for(i=0;i<arr.length;i++){
        if(input==arr[i]){
            const box = document.getElementById(i+1);
            box.innerHTML = input;
        }
        else{
            
        }
    }

})