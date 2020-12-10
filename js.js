// First we add selectors to select my 3 buttons and link them to variables
const result = document.querySelector(".result");
const toss = document.querySelector(".btn");
const redo = document.querySelector(".btn-2");


//Event Listeners
toss.addEventListener("click", tosscoin);

// added event listener to toss so that we can click , = what happens after we click === function 

// redo.addEventListener("click", resetresult);


//Functions

function tosscoin(){
    const coinValue = Math.floor(Math.random() * 2 + 1);
    if( coinValue === 1){
        console.log("Heads");}
        else{
            console.log("tails");
        }



// function resetresult(){

// }

