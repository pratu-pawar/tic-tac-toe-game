console.log("welcome to Tic Tac Toe");
let turn = "x"
let gameover= false;

//function to change to turn 
const changeTurn = ()=>{ 
    return turn === "x"?"0": "x"
}

//function to check for a win 
const checkwin = ()=>{ 
    let boxtext = dacument.getElementsByClassName('boxtext')
    let wins = [ 
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 5, 6]

    ]
    wins.forEach(e =>{ 
        if((boxtext[e[0]].innerText === boxtext[e[0]].innerText)&& (boxtext[e[2]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText != "") ){ 
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won" 
        gameover = true;
        }
    })
}   

// game logic
let boxes = dacument.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{ 
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{ 
        if(boxtext.innerText === ''){ 
            boxtext.innerText = turn;
            turn = changeTurn();
            checkwin();
            if (!gameover){
            dacument.getElementsByClassName("info")[0].innerText = "turn for " + turn;
            }
        }
    })
})