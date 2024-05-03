function toggleHam(x) {
    x.classList.toggle("change");

    let Mymenu = document.getElementById("mymenu");
    if (Mymenu.className === "menu") {
        Mymenu.className += " menu-active";
    } else {
        Mymenu.className = "menu";
    }
 }

 $(window).scroll(function(){
    if($(window).scrollTop()){
        $("nav").addClass("black");
    }
    else{
        $("nav").removeClass("black");
    }
   })
