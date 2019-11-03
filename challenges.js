/*
GAME RULES:

- The game has 2 players, playing in rounds.
- In each turn, a player rolls a dice as many as he wishes.  Each result get added to his ROUND score.
- BUT, if the player rolls a 1, all his ROUND score gets lost.  After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score.  After that, it's the next player's turn.
- The first player to reach 100 points on GLOBAL score wins the game.
*/

var scores, roundScore, activePlayer, gamePlaying, prevDice, winningScore;

init();
/*
scores = [0, 0];
roundScore = 0;
activePlayer = 0;




//document.querySelector('#current-' + activePlayer).textContent = dice;   //setter
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + "</em>"

//var x = document.querySelector('#score-0').textContent;  //getter
//console.log(x);

document.querySelector('.dice').style.display = 'none';

/*function btn() {
    //Do something here.
}
//document.querySelector('.btn-roll').addEventListener('click', btn);  //callback function

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
*/

document.querySelector('.btn-roll').addEventListener('click', function() {  //lamda function
    
    if(gamePlaying) {
    // 1. Random number;
        
        
    var dice1 = Math.floor(Math.random()*6) + 1;
    var dice2 = Math.floor(Math.random()*6) + 1;
        
        
        
    
    // 2. display the result.  If it's 1 then go to 3
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
    if(dice1 !== 1 && dice2 !== 1) {
        //Add Score
        roundScore += dice1 + dice2;
        document.getElementById('current-'+activePlayer).textContent = roundScore;
        
        /*if(dice === 6 && prevDice === 6) {
            scores[activePlayer] = 0;
            document.getElementById('current-'+activePlayer).textContent = 0;
            document.getElementById('score-'+activePlayer).textContent = 0;
            
            nextPlayer();
            
        }
        
        prevDice = dice;
        */
        
        
        
        
    } else {
        //Next Player
        
        nextPlayer();
        
        /*
        activePlayer = activePlayer === 0 ? 1 : 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
       // document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        diceDOM.style.display = 'none';
        */
    }
    
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gamePlaying) {
    // 1. add current score to global score
    
        scores[activePlayer] += roundScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        
    // 2. update the UI
        
    
        /*
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        */
        var input = document.querySelector('.winning-score').value;
        
        if(input) {
            var winningScore = input;
        } else {
            winningScore = 100;
        }
        
    
    // 3. check if the player won the game
    
        if(scores[activePlayer] >= winningScore) {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
            
            
            //document.querySelector('#name-'+activePlayer).style.color = 'blue';
            //document.querySelector('#name-'+activePlayer).style.fontWeight = '300';
            //document.querySelector('.dice').style.display = 'none';
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    
        activePlayer = activePlayer === 0 ? 1 : 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
       // document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
}

/*document.querySelector('btn-new').addEventListener('click', function() {
    
    init();
    
    /*
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('score-0').textContent = '0';
    document.querySelector('score-1').textContent = '0';
    
});*/

document.querySelector('.btn-new').addEventListener('click', init);



function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    prevDice = 0;
    


    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    
  
  

    
}

















