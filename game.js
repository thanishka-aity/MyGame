let btns = document.querySelectorAll("#btn");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () =>{
    turnO = true;
    enablebtns();
    msgcontainer.classList.add("hide");
}

const disablebtns = () => {
    for(let btn of btns){
        btn.disabled = true;
    }
};

const enablebtns = () => {
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
};

btns.forEach((btn) =>{
    btn.addEventListener("click", () =>{
    //    console.log("box is clicked!");
       // btn.innerText = "abcd";
       if(turnO){
        btn.innerText = "O";
        turnO = false;
       }
       else{
        btn.innerText = "X";
        turnO = true;
       }
       btn.disabled = true;
       checkwinner();
    });
});

const showwinner = (winner) =>{
    msg.innerText =`Winner ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtns();
}
const checkwinner = () =>{
    for(let pattern of winpatterns){
       
        let pos1val = btns[pattern[0]].innerText ;
        let pos2val = btns[pattern[1]].innerText ;
        let pos3val = btns[pattern[2]].innerText ;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
             //   console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);