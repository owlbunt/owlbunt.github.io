// default Values
let display = document.querySelector(".top input"); // Display input and output
let numOprs = document.querySelectorAll(".numOpr"); // Select all buttons ( Numbers and operators only )
let btns = document.querySelectorAll(".button"); // Select all buttons ( Including ac , c , ... )
let operators = ["+", "-", "*", "/", "%"]; // All operstors
let result = null; // Default result
let lastOperator = null; // Store last operator ( Last Used )
let input = ""; // Store all the inputs ( for calculation )
let lastInput ; // Store the last Input before deleting;
let lastOperatorBackup; // Store Last Operators before deleting 

// add click animation all buttons
for(let j = 0; j < btns.length; j ++){
    let btn = btns[j];
    btn.addEventListener("click", function(){
        btn.classList.add("buttonAni");
        setTimeout(function(){
            btn.classList.remove("buttonAni");
          }, 150)
    });
}

// Add calculate() function to all numbers and operators 
for(let i = 0; i < numOprs.length ; i ++ ){
    let numOpr = numOprs[i];
    numOpr.addEventListener("click", calculate);
}
// Calculate Function
function calculate(){
    // Run the code if the current input is an operator
    if(operators.includes(this.value)){
        // Block Operator while there in no number in input ( except - minus )
        if(this.value == "-" || input.length > 0 ){
            // Block using multiple operator at same times 
            if(lastOperator == null && this.value !== "%" || lastOperator?.value == "%" || lastOperator?.value == "/" && this.value == "-" || lastOperator?.value == "*" && this.value == "-"){
                input += this.value;
                display.value += this.innerHTML;
                lastOperator = this;
            }
            // Percentage calcuate
            else if(this.value == "%"){
                display.value += this.innerHTML;
                let x = parseInt(input)/100;
                input = "";
                input += x;
                input += "*";
            }
            // Replace the last operator with the current operator
            else{
                if(input.length > 1){
                    input = input.slice(0, -1);
                    input += this.value;
                    display.value = display.value.slice(0, -1);
                    display.value += this.innerHTML;
                    lastOperator = this;
                }
            }
        }
        // Block Operator
        else{
            return;
        }
        lastOperatorBackup = lastOperator;
    } 

    // If current operator is number
    else{
        input += this.value;
        display.value += this.innerHTML
        lastOperator = null ;
    }

    // Changge font Size If needed
    changeFontSize();
}
// Display the result in [ disply input ]
document.querySelector(".equal").addEventListener("click", function(){
    result = eval(input).toFixed(2);
    if(result.slice(-3) == ".00"){
      display.value = result.slice(0, -3);
      input = result.slice(0, -3);
      console.log("working")
    }else{
      display.value = result;
      input = result;
    }
    changeFontSize();
});

// Clear last input
document.querySelector(".clear").addEventListener("click", function(){
  // Clear the last input 
  input = input.slice(0, -1);
  display.value = display.value.slice(0, -1);
  lastInput = input.slice(-1);
  
  // If we clear all the inputs then remove the last operator value 
  if(operators.includes(lastInput)){
    lastOperator = lastOperatorBackup;
  }else if(input.length == 0 || !operators.includes(lastInput)){
    lastOperator = null  ;
  }
  
 // Change font size if required
 changeFontSize();
});

// Clear all values from input 
document.querySelector(".ac").addEventListener("click", function(){
    input = "" ;
    display.value = "" ;
    lastOperator = null ;
    result = null ;
    changeFontSize();
});

// Function for changing font size of display [input]
function changeFontSize(){
    if(display.value.length <= 6){
        document.querySelector("input").style.fontSize = "5rem";
    }
    else if(display.value.length >= 7 && display.value.length  <= 9){
        document.querySelector("input").style.fontSize = "4rem";
    } 
    else if(display.value.length  >= 10 && display.value.length <= 12){
        document.querySelector("input").style.fontSize = "3rem";
    }
    else{
      document.querySelector("input").style.fontSize = "2.5rem";
    }
}

// Disable keyboard function
document.onkeydown = function (e) {
    return false;
}
// Dsiable Input clicking
display.disabled = "true";