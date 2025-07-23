document.getElementById('openMenu').onclick = dropMenu

function dropMenu() {
    let dropMenu = document.getElementById('dropMenu')
    dropMenu.classList.toggle('openMenu')
}

let menu = document.getElementById('menu');
let offset = menu.offsetTop;

window.onscroll = function() {
    menu.style.opacity = '0';

    if (window.scrollY > offset-0) {
        menu.classList.add("sticky");
    } else if(window.scrollY < offset-10) {
        menu.classList.remove("sticky");
    }
}  