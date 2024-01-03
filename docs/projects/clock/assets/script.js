// Second, Minute & Hour Element 
let s = document.querySelector(".s");
let m = document.querySelector(".m");
let h = document.querySelector(".h");

// Get Current Date and Time
let currentDate = new Date();  
let hour = currentDate.getHours() % 12 ;
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();  
setInterval(function(){
  // Update Date and Time
  currentDate = new Date();
  hour = currentDate.getHours() % 12 ;
  hour = hour == 0 ? 12 : hour ;
  hour = hour < 10 ? '0' + hour : hour ;
  minute = currentDate.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  second = currentDate.getSeconds();
  // Set & Update Clock Hour and Minutes 
  if (m) {
    m.setAttribute('minute', minute);
  }
  if (h) {
    h.innerHTML = hour;
  }
}, 10);

// Second Rotation Animation 
let sStart = second * 6 ;
let sEnd = sStart + 360;
document.documentElement.style.setProperty('--sStart', sStart+'deg');
document.documentElement.style.setProperty('--sEnd', sEnd+'deg');

// Minute Rotation Animation 
let mStart = minute * 6 ;
let mEnd = mStart + 360;
document.documentElement.style.setProperty('--mStart', mStart+'deg');
document.documentElement.style.setProperty('--mEnd', mEnd+'deg');

// Make the indicator green if js active
let clockBody = document.querySelector(".clockBody");
if (clockBody) {
  clockBody.style.setProperty('--indicator', 'green');
}

// This Clock is created by [ R A H U L ]
// GitHub —  Github.com/owlbunt
// Insta —   Instagram.com/owlbunt
// Twitter — Twitter.com/owlbunt 