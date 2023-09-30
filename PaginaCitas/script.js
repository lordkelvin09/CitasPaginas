const menU = document.querySelector(".menu-toggle");
menU.addEventListener('click', animateBars);

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
let menu = document.getElementById('menu');
let menu2 = document.querySelector('.menu2')
let servicios = document.querySelector('.submenu-btn')
servicios.addEventListener('click', function(){
    menu.classList.toggle('menuClass');
})
function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    menu.classList.toggle('show');
}

let subMenuBtn = document.querySelectorAll('.submenu-btn');
for(let i = 0; i < subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener('click', function(){
        if(window.innerWidth < 1024) {
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains('desplegar')) {
                subMenu.classList.remove('desplegar');
                subMenu.removeAttribute('style');
            } else{
                subMenu.classList.add('desplegar');
                subMenu.style.height = height + 'px';
            }
            
        }
    })
}

