document.addEventListener("DOMContentLoaded", myFunc);

let hidden = true;

function myFunc() {

    const hamburger = document.getElementById('hamburgerButton');
    hamburger.onmouseover = function(event) {
        if (hidden){
            const menu = document.getElementById('navMenu');
            menu.classList.toggle('nav-menu--hidden');
            hidden = false;
        }
    };

    hamburger.onclick = function(event) {

            const menu = document.getElementById('navMenu');
            menu.classList.toggle('nav-menu--hidden');
            hidden = false;

    };

    hamburger.onmouseleave = function(event) {
        hidden = true;
    };

    hamburger.ontouchstart = function () {
            const menu = document.getElementById('navMenu');
            menu.classList.toggle('nav-menu--hidden');
            hidden = false;
    }

}