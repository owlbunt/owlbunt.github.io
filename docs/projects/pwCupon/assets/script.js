// Load Posts In Home Page 
const totalPost = 9; // Change the number with your current post mumber
document.addEventListener("DOMContentLoaded", function(){function e(e){fetch(`posts/post${e}.html`).then(e=>e.text()).then(e=>{const t=document.getElementById("posts");t.innerHTML+=e;const o=t.querySelectorAll(".copyCode");o.forEach(function(e){e.addEventListener("click",function(){const t=this.previousElementSibling;t.select(),document.execCommand("copy"),this.innerText="Copied",setTimeout(function(){e.innerText="Copy"},1e3)})})}).catch(e=>console.error(`Error loading post ${e}:`,e))}for(let t=1;t<=totalPost;t++)e(t)});

// Post Search 
document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("searchInput"),e=document.getElementById("searchButton"),n=function(){const e=t.value.toLowerCase(),n=document.querySelectorAll("#posts article");n.forEach(function(t){const n=t.querySelector("h2").innerText.toLowerCase(),o=n.includes(e);o?t.style.display="block":t.style.display="none"})};e.addEventListener("click",n),t.addEventListener("keypress",function(e){if("Enter"===e.key)n()})});


