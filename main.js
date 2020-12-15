const menuButton = document.querySelector('.menu-icons');
const menu = document.querySelector('.page-navigation');

const showMenu = () => {
    menu.classList.toggle('active');
}

menuButton.addEventListener('click', showMenu)