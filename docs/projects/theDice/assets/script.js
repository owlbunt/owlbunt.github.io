// Store all the Dice Images in an array
let diceImages = [
    "assets/images/dice1.png", 
    "assets/images/dice2.png", 
    "assets/images/dice3.png", 
    "assets/images/dice4.png", 
    "assets/images/dice5.png", 
    "assets/images/dice6.png"
];
  
// Player Start  Points
let playerOnePoints = 0 ;
let playerTwoPoints = 0 ;

// Main Dice Image
let diceOne = document.querySelector(".diceOne img");
let diceTwo = document.querySelector(".diceTwo img");

// Dice monitor 
let diceRolling = false ;

function dice(){

    // Checking The Dice Function Is Already running or not
    if(diceRolling == true){
    return;
   }
    diceRolling = true ;
 
    // Generate a random number from 1 to 6
    let playerOne = Math.floor(Math.random()*6 + 1 );
    let playerTwo = Math.floor(Math.random()*6 + 1 );

    // Dice Animations
    let frameCount = 0 ;
    let diceAnimation = setInterval(animation, 100);
    function animation(){
      frameCount ++ ;
      diceOne.src = diceImages[frameCount % 6];
      diceTwo.src = diceImages[frameCount % 6];

      // Stop dice animation and show result
      if(frameCount == 10){
        // Stop Animation
        clearInterval(diceAnimation);
        
        // change the dice image acording to the random number
        diceOne.src = diceImages[playerOne -1];
        diceTwo.src = diceImages[playerTwo -1];

        // Change the color and add score
        if (playerOne > playerTwo) {
          document.querySelector(".sectionOne").style.background = '#00800060'; // green
          document.querySelector(".sectionTwo").style.background = '#FF000060'; // red
          playerOnePoints ++ ;
          document.querySelector(".playerOnePoints").innerHTML = " " + playerOnePoints;     
        } 
      
        else if (playerTwo > playerOne) {
          document.querySelector(".sectionTwo").style.background = '#00800060'; // green
          document.querySelector(".sectionOne").style.background = '#FF000060'; // red
          playerTwoPoints = playerTwoPoints + 1 ;
          document.querySelector(".playerTwoPoints").innerHTML = " " + playerTwoPoints;
        } 
      
        else{
          document.querySelector(".sectionOne").style.background = '#FF000060'; //red
          document.querySelector(".sectionTwo").style.background = '#FF000060'; //red
        } 

        diceRolling = false ;
      }
    }       
}
