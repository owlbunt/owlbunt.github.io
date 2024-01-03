// Password Show Hide
document.querySelector(".password .sh").addEventListener("click", function(){
  let passwordInput = document.querySelector(".password input");
  passwordInput.type = passwordInput.type == "password" ? "text" : "password";
});

// Disable Login Bottom
let userName = document.querySelector(".userName input");
let password = document.querySelector(".password input");
setInterval(function() {
  if(userName.value.length > 0 && password.value.length > 0){
  document.querySelector(".loginBtn").style.opacity = "1";
  document.querySelector(".loginBtn").disabled = false;
}
else{
  document.querySelector(".loginBtn").style.opacity = ".3";
  document.querySelector(".loginBtn").disabled = true;
}
}, 100);
