let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

let turnO = true; //playerX, PlayerY

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((btn) => {
    btn.addEventListener("click", () =>{
        console.log("box click");
        if(turnO){
        btn.innerText = "O";
        turnO = false;
    }else{
        btn.innerText = "X";
        turnO = true;
    }
    btn.disabled = true;
    checkWinner();
    });
});

const disableBoxes = () => {
    for(let btn of boxes){
        btn.disabled = true;
    }
}

const enableBoxes = () => {
    for(let btn of boxes){
        btn.disabled = false;
        btn.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerHTML=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;
        if(pos0Val != "" && pos1Val != "" && pos2Val != ""){
            if(pos0Val === pos1Val && pos1Val === pos2Val){
                console.log("Winner");
                showWinner(pos0Val);
            }
        }
    }
};