 let boxes = document.querySelectorAll(".box");
let resetBtn = letdocument.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#mew-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//player O starts
let count = 0; // To Track Draw

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const ResetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
 box.addEventListener("click" , () => {
    console.log("box was clicked");
    if(turnO) { //playerO
        box.innerText = "O";
        turnO = false;
     } else { //playerX
        box.innerText = "X";
        turnO = true;
     }
     box.disabled = true;
     count++;

     let isWinner = checkWinner();

     if (count === 9 && !isWinner) {
        gameDraw();
     }
  }); 
});

const gameDraw = () => {
    msg.innerText = 'Game was a Draw.';
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
       boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        boxes.disabled = false;
        boxes.innerText = "";
    });
};
const showWinner = (Winner) => {
 msg.innerText = 'Congratulations, Winner is ${Winner}';
 msgContainer.classList.remove("hide");
 disableBoxes();
};

const checkWinner = () => {
   for(let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
   
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            return true;
        }
    }

}
 return false;
};
document.querySelector("#ResetGame");
newGameBtn.addEventListener("click" , ResetGame);
ResetGame.addEventListener("click" , ResetGame);
  

  