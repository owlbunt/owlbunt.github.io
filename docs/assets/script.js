// Mobile Menu
$(".menuIcon, .nav .close").click(function(){
    $(".nav").toggleClass("active");
    if($(".nav").hasClass("active")){
        $(".menuIcon").css("opacity", "0")
    }
    else{
        $(".menuIcon").css("opacity", "1")
    }
});

// Footer date
$(".date").html(new Date().getFullYear());