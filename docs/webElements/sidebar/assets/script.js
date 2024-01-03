// Sidebar Menu
let menuIcon = document.querySelector(".menuIcon");
let sidebar = document.querySelector(".sidebar");
menuIcon.addEventListener("click", function(){
    sidebar.classList.toggle("active");
});
document.body.addEventListener("click", function(event){
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

// Drop down menu
let dropDown = document.querySelector(".dropDown");
dropDown.addEventListener("click", function (){
  dropDown.classList.toggle("active");
});