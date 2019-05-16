var openMenu = document.getElementById("menu-open");
var closeMenu = document.getElementById("menu-close");

var popMenu = document.getElementById("menu");

var navBtns = document.querySelectorAll('a[href^="#"]');

/* NAVIGATION */

/* click event */
for(var i = 0; i < navBtns.length; i++){
    navBtns[i].addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
}


/* END OF NAVIGATION */

/* POPUP MENU */
/* click event in document */
document.addEventListener('click', function(e){
    var x = e.target;
    /* add active class when #menu-open is clicked --- Open Menu */
    if(x.id == "menu-open" || x.closest("span")){
    
        popMenu.classList.add("active");
     /* remove active class when #menu-close is clicked --- Close Menu*/
    } else if (x.id == "menu-close" || x.closest("span")){
    
        popMenu.classList.remove("active");
     /* do nothing if clicked inside the #menu div */
    }else if(x.closest("#menu")){
    
        return;
     /* remove active class when clicked anywhere except #menu-open --- Close Menu */
    } else {
    
        popMenu.classList.remove("active");
        
    }
});
/* END OF POPUP MENU */
