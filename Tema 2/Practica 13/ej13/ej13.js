let numberArr = randomNumGenerator();
let cells = randomNumGenerator();
let gamePos = 0;

window.addEventListener("load", () =>{
    cellsFiller(numberArr, cells);

    let table = document.getElementById("game");
    table.addEventListener("click", game);
})

function game(evt){
    if (evt.target.id == cells[gamePos]){
        evt.target.style.backgroundColor = 'yellow';
        evt.target.firstChild.style.visibility = 'visible';
        gamePos++;
    }
}
function randomNumGenerator(){
    let randomNumArr = [];
    let i = 0;

    while (i < 8){
        let num = Math.floor((Math.random() * 15) + 1);
        if (!randomNumArr.includes(num)){
            randomNumArr[i] = num;
            i++;
        }
    }

    return randomNumArr.sort(function(a, b) {
        return a - b;
    });
}

function cellsFiller(numbers, cells){
    let numItr = 0;
    cells.forEach(cell => {
        let cellID = "s" + cell;
        document.getElementById(cellID).innerHTML = numbers[numItr++];
    })
}