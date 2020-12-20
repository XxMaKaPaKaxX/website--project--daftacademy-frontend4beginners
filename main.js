const menuButton = document.querySelector('.menu-icons');
const menu = document.querySelector('.page-navigation');

const showMenu = () => {
    menu.classList.toggle('active');
}

menuButton.addEventListener('click', showMenu);



/* ##########################
smooth scroll
######################### */

const navigationLinks = [...document.querySelectorAll('nav a')];
navigationLinks.forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    })
});




/* ##########################
VIDEO
######################### */


const video = document.querySelector('iframe');    


const setVideoSize = (video) => {    
    const heightProportion = window.innerWidth / window.innerHeight;
    const parent = video.parentElement;
    const parentWidth = parent.offsetWidth;

    video.width = parentWidth;
    if (window.innerWidth >= window.innerHeight) {        
        video.height = video.width / heightProportion;
    } else {
        video.height = video.width;
    }

    console.log('resize done')

    window.addEventListener('resize', () => {
        setVideoSize(video);
    })
}

setVideoSize(video);


