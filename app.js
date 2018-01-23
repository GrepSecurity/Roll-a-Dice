var scores, roundscore, activeplayer, dice, gameplaying;
init();

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;

document.querySelector('.btn-roll').addEventListener('click', function(){
    
if(gameplaying)
    {
    
// we need a random number
var dice=Math.floor(Math.random()*6)+1;

// display the result
var diceDOM = document.querySelector('.dice'); 
diceDOM.style.display='block';
diceDOM.src = 'dice-'+dice+'.png';
        
    
// update the round score only if the rolled number was not 1
    
    if(dice!==1 )
        {
            roundscore +=dice;
            document.querySelector('#current-'+activeplayer).textContent=roundscore;
        }
    else{
      nextPlayer();
        
       
    }
         }
});

 document.querySelector('.btn-hold').addEventListener('click',function(){
           if(gameplaying)
               {
                   
             
     //Add current score to global score
     scores[activeplayer]+=roundscore;
     
     //update the UI 
     document.querySelector('#score-'+activeplayer).textContent= scores[activeplayer];
     
     //check if player won the game
     if(scores[activeplayer]>=100)
         {
             document.querySelector('#name-'+activeplayer).textContent = 'WINNER...!'
             document.querySelector('.dice').style.display='none';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
             gameplaying=false;
         }
     else{
          nextPlayer();
     }
       }
    
        });

function nextPlayer()
{
     activeplayer ===0?activeplayer=1:activeplayer=0;
        roundscore = 0;
        document.getElementById('current-0').textContent=0;
        document.getElementById('current-1').textContent=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click', function(){
   init();
    
});

function init()
{
scores = [0,0];
roundscore = 0;
activeplayer = 0;
gameplaying = true;
    
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.querySelector('#name-0').textContent = 'Player1';
document.querySelector('#name-1').textContent = 'Player2';

}
