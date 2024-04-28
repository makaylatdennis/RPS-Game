
var player1 


document.getElementById("play").addEventListener("click", function(event){
// the event listener is used to grab the user input from the form and run it through the game, game will work if entry is as follows below.
    var entry = document.getElementById("playerInput").value
    
   console.log(entry)
    player1 = entry
    if(
       entry == 'rock'||
        entry == 'paper' ||
        entry == 'scissors'
){
    
computerOption();
   

    }
});



function computerOption(){
    const inputs = ['rock', 'paper', 'scissors']; 
    // index of possible random choices

    const randomInputs= Math.floor(Math.random ()*inputs.length);
    // in this portion of the function body, Math.floor is used to make sure we're generating a whole number, Math.random generates a random number to select a random index, inputs.length serves to tell us the length of our array we're moving through
   
    const player2 = inputs [randomInputs];

    alert(`Player 2: ${player2}`);
    chooseWinner(player1, player2)
   // this portion of the function displays the computers choice and also selects a winner 
    console.log('Player 2:', player2);
   
    // the return keyword is used to return the value of inputs[randomInputs], in this context randomInputs is used to to tell us what index to return from inputs array
}

function chooseWinner ( player1, player2 ){
    console.log(player1)
   if (player1 === "rock"){
    
    if (player2 === 'rock'){
        alert ("It's a tie");

    }
    
     if (player2 === 'paper' ){
        alert ("Computer wins!");

     }

     if (player2 === 'scissors'){
        alert ("You Win!");

     } 
   }
   
   if (player1 === 'paper'){
    

    if( player2 === 'rock'){
        alert ("You win!");
    }
    
     if (player2 === 'paper') {
        alert ("It's a tie!");

     }

     if( player2 === 'scissors' ){
        alert ("Computer Wins!");

     }
   }

   if (player1 === "scissors") {
  

    if (player2 === 'scissors'){
        alert ("It's a tie");

    }
    
     if (player2 ==='rock') {
        alert ("Computer wins!");

     }

     if (player2 === 'paper' ){
        alert ("You Win!");

     }
   }
// the choose winner function is used to compare the input of the user to that of the computer in order to return a game result.
// each if statement is the possible outcome of the match.
}


