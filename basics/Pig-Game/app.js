/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice, gameOn;

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; // 0 is first, 1 is second (match with the array)    
    gameOn = true;

    //to access css and html use document.
    //document.querySelector("#current-" + activePlayer).textContent = dice;

    //can also have html here by using innerHTML
    //document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

    //to read elements (getter)
    //var x = document.querySelector("#score-0").textContent;
    //console.log(x);

    document.querySelector(".dice").style.display = "none";

    //using getELementById for elements with an assigned id
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    document.getElementById("name-0").textContent = "PLAYER 1";
    document.getElementById("name-1").textContent = "PLAYER 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");   
    document.querySelector(".player-1-panel").classList.remove("active");
}
  
init();

//ROLL
document.querySelector(".btn-roll").addEventListener("click", function () {
    if(gameOn){
        dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "https://raw.githubusercontent.com/jonasschmedtmann/complete-javascript-course/master/4-DOM-pig-game/starter/dice-" + dice + ".png";

        if(dice !== 1) {
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            roundScore = 0;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;

            //switching player
            // document.querySelector(".player-0-panel").classList.remove("active");
            // document.querySelector(".player-1-panel").classList.add("active");

            //toggle
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");

            document.querySelector(".dice").style.display = "block";
            
        }
    }
});


//HOLD
document.querySelector(".btn-hold").addEventListener("click", function() {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    roundScore = 0;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;

    //WINNER

    if(scores[activePlayer] >= 100) {
        document.querySelector("#name-" + activePlayer).textContent = "WINNER";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        gameOn = false;
    } else {
        activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;

        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    }

    document.querySelector(".dice").style.display = "none";


});


document.querySelector(".btn-new").addEventListener("click", init);




