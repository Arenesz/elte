import { wordOptions } from "./words.js";

const textBox=document.querySelector("#input");
const listOnUi=document.querySelector("#popup");


function listFresh(value){
    let result=wordOptions.filter(function (word) {return word.includes(value);});
    renderHtmlList(result);    
}

function renderHtmlList(result){
    let stringSnake=result.map(blockMaker).join("\n");
    
    listOnUi.innerHTML=stringSnake;
}

function blockMaker(word){
    return ` <div class="word-option">${word}</div>`;
}

renderHtmlList(wordOptions);


function reaction(event){
    
    textBox.value=event.target.innerHTML;
}

textBox.addEventListener("input",function() {listFresh(textBox.value)});


listOnUi.addEventListener("click",reaction);









