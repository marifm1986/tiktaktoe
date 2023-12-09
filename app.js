let boxes = document.querySelectorAll(".box")
let btnReset = document.querySelector(".btn_reset")
let player = document.querySelector(".player")

let turn0 = false;

const winPatters = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            player.innerText = "Go Player 1";
            turn0 = false
        } else {
            box.innerText = "X";
            player.innerText = "Go Player 2";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for (let pat of winPatters) {
        let post1Val = boxes[pat[0]]?.innerText;
        let post2Val = boxes[pat[1]]?.innerText;
        let post3Val = boxes[pat[2]]?.innerText;

        if(post1Val != "" && post2Val != "" && post3Val != ""){
            if(post1Val === post2Val  && post2Val === post3Val){
                boxes[pat[0]].classList.add("done")
                boxes[pat[1]].classList.add("done")
                boxes[pat[2]].classList.add("done")
            }
        }
    }
}





btnReset.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = ""
        box.disabled = false
        box.classList.remove("done")
    })
})





