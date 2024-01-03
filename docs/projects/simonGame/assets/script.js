// Game Pattern
let gamePattern = [];
// User Clicked Pattern 
let userClickedPattern = [];
// Button Colors
let buttonColors = ["red", "blue", "yellow", "green"];
// Radom Chosen Color
let randomChosenColor ;
// Score
let score = 0;
// Start The Game
$(".start").on("click", function(){
    $(".start").css("display", "none");
    $(".clr").css("pointer-events", "auto")
    nextSequence();
})

// Generate random color
function nextSequence(){
    // Generate a random number from 0 to 3
    let randomNumber = Math.floor(Math.random()*4);
    // Choose a color from the existing colors according to the number
    randomChosenColor = buttonColors[randomNumber];
    // Save the color to ( gamePattern ) variable
    gamePattern.push(randomChosenColor);
    // Add some delay effect
    if(gamePattern.length == 0){
        setTimeout(function(){
            $("." + randomChosenColor).fadeOut(100).fadeIn(300);
            let audio = new Audio("assets/sounds/" + randomChosenColor +".mp3");
            audio.play();
          },300)
    }
    else{
        setTimeout(function(){
            $("." + randomChosenColor).fadeOut(100).fadeIn(300);
            let audio = new Audio("assets/sounds/" + randomChosenColor +".mp3");
            audio.play();
          },600)
    }
}

// User input 
$(".clr").on("click", function(){
    // Record user's clicked pattern
    userClickedPattern.push(buttonColors[$(this).index()-1]);

    for(let i = userClickedPattern.length - 1; i < userClickedPattern.length ; i ++){
        if(gamePattern[i] == userClickedPattern[i]){
            // Provide visual and audio feedback for correct selection
            $("." + buttonColors[$(this).index()-1]).fadeOut(100).fadeIn(300);
            let audio = new Audio("assets/sounds/"+ buttonColors[$(this).index()-1] +".mp3");
            audio.play();

            if(gamePattern.length == userClickedPattern.length){
                // Increase score and reset user pattern for next round
                score ++ ;
                $(".score span").html(score);
                userClickedPattern = [];
                nextSequence();
            }
        }
        else{
            // Handle incorrect selection
            $(".clr").fadeIn(100).css("background", "#990000");
            userClickedPattern = ["gameOver"];
            gamePattern = [];
            let audio = new Audio("assets/sounds/wrong.mp3");
            audio.play();
        }
    }
});