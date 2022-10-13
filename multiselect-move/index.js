

const leftBoard=document.querySelector("#boardleft");
function reaction(event){
    console.log(event.target);
}
leftBoard.addEventListener("change",reaction)

function leftButtonClick(){
    console.log(leftBoard.data);
}
const buttonLeft=document.querySelector("#larr");
buttonLeft.addEventListener("click",leftButtonClick);
