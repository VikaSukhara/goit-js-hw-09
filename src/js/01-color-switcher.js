const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let regularChangeId = null;

startBtn.addEventListener("click", handlerStartChangeColor);
stopBtn.addEventListener("click", handlerStopChangeColor)


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }



function handlerStartChangeColor(event){
    startBtn.disabled = true; 
    regularChangeId = setInterval(changeBodyColor, 1000)
}


function changeBodyColor(){
    const chandedColor = getRandomHexColor();
    document.body.style.backgroundColor = chandedColor;

}
  
function handlerStopChangeColor(event){
    startBtn.disabled = false;
    stopBtn.disabled = true; 
    clearInterval(regularChangeId);
}

