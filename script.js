function toggleHam(x) {
    x.classList.toggle("change");

    let Mymenu = document.getElementById("mymenu");
    if (Mymenu.className === "menu") {
        Mymenu.className += " menu-active";
    } else {
        Mymenu.className = "menu";
    }
 }

    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function() {scrollFunction()};
        
    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "4px 10px";
        document.getElementById("logo").style.fontSize = "25px";
      } else {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "35px";
      }
    }
