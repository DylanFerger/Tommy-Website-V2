const button1 = document.getElementById('openMenu1');
const button2 = document.getElementById('openMenu2');

button1.addEventListener('click', dropMenu);
button2.addEventListener('click', dropMenu);

let menuButton = document.getElementById('openMenu')

function dropMenu() {
    let dropMenu = document.getElementById('dropMenu')
    dropMenu.classList.toggle('openMenu')
    console.log('hi')
}

let menu = document.getElementById('menu');
let offset = menu.offsetTop;

window.onscroll = function() {
    menu.style.opacity = '0';

    if (window.scrollY > offset-0) {
        menu.classList.add("sticky");
    } else if(window.scrollY < offset-10) {
        menu.classList.remove("sticky");
        menu.style.opacity = '1';
    }
}  