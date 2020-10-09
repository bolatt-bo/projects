let scores,roundScore,activePlayer;
let winningScore = 20;
init()
function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    winningScore= 20;
    document.querySelector('#score-0').textContent='0';
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('#current-1').textContent='0';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.dice2').style.display='none';
    document.querySelector('#name-0').textContent="Player 1"
    document.querySelector('#name-1').textContent="Player 2"
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.add('active')
    document.querySelector('.btn-roll').disabled=false;
    document.querySelector('.btn-hold').disabled=false
    document.querySelector('input').value = 20;
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    // get random number
    var dice= Math.floor(Math.random()*6)+1;
    var dice2 = Math.floor(Math.random()*6)+1;
    // get dice img dom
    var diceDOM=document.querySelector('.dice')
    var diceDOM2 =document.querySelector('.dice2')

    // change img according to number 
    diceDOM.src="dice-"+dice+".png";
    diceDOM.style.display="block";
    diceDOM2.src="dice-"+dice2+".png";
    diceDOM2.style.display="block"

    // // if not  equal to 1 
    // // add to current score and display it 
    // if(dice !== 1){
    //     roundScore += dice;
    //     document.querySelector('#current-'+activePlayer).textContent=roundScore;
    // }else{
    //     nextPlayer()
    // }

    // if both dices are not equal to 6
    if(dice !== 6 && dice2 !== 6){
        roundScore = roundScore + dice + dice2;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else{
        nextPlayer();
    }
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer=1: activePlayer=0
    //console.log(activePlayer)
    roundScore=0
    // hide the dice 
    document.querySelector('.dice').style.display='none';
    document.querySelector('.dice2').style.display='none';

    // reset current scores 
    document.querySelector('#current-0').textContent='0'
    document.querySelector('#current-1').textContent='0'
    // alternate active class 
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
}

document.querySelector('.btn-hold').addEventListener('click',function(){
    // add current score to score array 
    scores[activePlayer] += roundScore;
    //console.log(scores[activePlayer])
    // display score
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer] >= winningScore){
        // display WINNNER text 
        document.querySelector('#name-'+activePlayer).textContent="WINNER !";
        // remove active class to remove red circle 
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
        // add winner class to add 
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
        //hide the dice 
        document.querySelector('.dice').style.display="none"
        document.querySelector('.dice2').style.display="none"

        //disable buttons 
        document.querySelector('.btn-roll').disabled=true;
        document.querySelector('.btn-hold').disabled=true
    }else{
        nextPlayer()
    }
})

document.querySelector('.btn-new').addEventListener('click',init)

/* input */ 
let inputDOM = document.querySelector('input')

inputDOM.addEventListener('change',function(){
    winningScore = inputDOM.value;
    console.log(winningScore)
})


let dicePictures = [

"https://i.postimg.cc/HkVfyD60/back.jpg ",
"https://i.postimg.cc/bN67rN9N/dice-1.png",
"https://i.postimg.cc/G3jw0jBD/dice-2.png",
"https://i.postimg.cc/Yqqctmgs/dice-3.png",
"https://i.postimg.cc/rsjvS86j/dice-4.png",
"https://i.postimg.cc/NFB39KnL/dice-5.png",
"https://i.postimg.cc/mDYxgY80/dice-6.png",

]