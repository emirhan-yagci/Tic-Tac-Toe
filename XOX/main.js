const container = document.querySelector(".container");
const turnWho = document.querySelector(".turn-who");
const warning = document.querySelector(".warnings");
const startBtn = document.querySelector(".start-game");
const playAgain = document.querySelector(".game-over");
const winner = document.querySelector(".winner");
var turn = 0;
var started = false;
var x1, x2, x3;
var y1, y2, y3;
var z1, z2, z3;
startBtn.addEventListener("click", () => {
    var bolum = 0;
    turnWho.innerHTML = `Turn of X`;
    if (started === false) {
        started = true;

        //karelere tıklayınca x-o yerleştirme işlemleri
        for (item of container.children) {

            item.addEventListener("click", (e) => {
                if (bolum >= 0) {
                    if (turn == 0) {


                        if (e.target.innerHTML == "") {
                            turnWho.innerHTML = `Turn of O`;
                            e.target.innerHTML = "X"
                            turn++;
                            bolum++;
                        }
                    } else {

                        if (e.target.innerHTML == "") {
                            turnWho.innerHTML = `Turn of X`;
                            e.target.innerHTML = "O";
                            turn--;
                            bolum++;
                        }
                    }

                    x1 = container.children[0].innerHTML;
                    x2 = container.children[1].innerHTML;
                    x3 = container.children[2].innerHTML;
                    y1 = container.children[3].innerHTML;
                    y2 = container.children[4].innerHTML;
                    y3 = container.children[5].innerHTML;
                    z1 = container.children[6].innerHTML;
                    z2 = container.children[7].innerHTML;
                    z3 = container.children[8].innerHTML;
                    console.log(bolum);
                    if (x1 == "X" && x2 == "X" && x3 == "X" || x1 == "O" && x2 == "O" && x3 == "O") {
                        bolum = -1;
                        turn = 0;
                        playAgain.style.display = "block";
                        if (bolum % 2 != 0) {
                            winner.innerHTML = "1. Oyuncu Kazandı!"
                        } else {
                            winner.innerHTML = "2. Oyuncu Kazandı!"
                        }
                    } else if (y1 == "X" && y2 == "X" && y3 == "X" || y1 == "O" && y2 == "O" && y3 == "O") {
                        bolum = -1;
                        turn = 0;
                        playAgain.style.display = "block";
                        if (bolum % 2 != 0) {
                            winner.innerHTML = "1. Oyuncu Kazandı!"
                        } else {
                            winner.innerHTML = "2. Oyuncu Kazandı!"
                        }
                    } else if (z1 == "X" && z2 == "X" && z3 == "X" || z1 == "O" && z2 == "O" && z3 == "O") {
                        bolum = -1;
                        turn = 0;
                        playAgain.style.display = "block";
                        if (bolum % 2 != 0) {
                            winner.innerHTML = "1. Oyuncu Kazandı!"
                        } else {
                            winner.innerHTML = "2. Oyuncu Kazandı!"
                        }
                    } else if (x1 == "X" && y1 == "X" && z1 == "X" || x1 == "O" && y1 == "O" && z1 == "O") {
                        bolum = -1;
                        turn = 0;
                        playAgain.style.display = "block";
                        if (bolum % 2 != 0) {
                            winner.innerHTML = "1. Oyuncu  Kazandı!"
                        } else {
                            winner.innerHTML = "2. Oyuncu Kazandı!"
                        }
                    } else if (x2 == "X" && y2 == "X" && z2 == "X" || x2 == "O" && y2 == "O" && z2 == "O") {
                        bolum = -1;
                        turn = 0;
                        playAgain.style.display = "block";
                        if (bolum % 2 != 0) {
                            winner.innerHTML = "1. Oyuncu Kazandı!"
                        } else {
                            winner.innerHTML = "2. Oyuncu Kazandı!"
                        }
                    } else if (x3 == "X" && y3 == "X" && z3 == "X" || x3 == "O" && y3 == "O" && z3 == "O") {
                        bolum = -1;
                        turn = 0;
                        playAgain.style.display = "block";
                        if (bolum % 2 != 0) {
                            winner.innerHTML = "1. Oyuncu Kazandı!"
                        } else {
                            winner.innerHTML = "2. Oyuncu Kazandı!"
                        }
                    } else if (x1 == "X" && y2 == "X" && z3 == "X" || x1 == "O" && y2 == "O" && z3 == "O") {
                        bolum = -1;
                        turn = 0;
                        playAgain.style.display = "block";
                        if (bolum % 2 != 0) {
                            winner.innerHTML = "1. Oyuncu Kazandı!"
                        } else {
                            winner.innerHTML = "2. Oyuncu Kazandı!"
                        }
                    } else if (x3 == "X" && y2 == "X" && z1 == "X" || x3 == "O" && y2 == "O" && z1 == "O") {
                        bolum = -1;
                        turn = 0;
                        playAgain.style.display = "block";
                        if (bolum % 2 != 0) {
                            winner.innerHTML = "1. Oyuncu Kazandı!"
                        } else {
                            winner.innerHTML = "2. Oyuncu Kazandı!"
                        }
                    } else if (bolum == 9) {
                        turn = 0;
                        bolum = -1;
                        playAgain.style.display = "block";
                        winner.innerHTML = "Berabere";
                    }
                }






            })
        }



    }

});
playAgain.addEventListener("click", () => {
    console.log(started);
    bolum = 0;
    console.log(bolum);
    started = false;
    console.log(started);
    playAgain.style.display = "none";
    winner.innerHTML = "";
    for (item of container.children) {
        item.innerHTML = "";
    }


})