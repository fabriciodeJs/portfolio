/**************** Menu-Mobile ***********************/
const btnMobile = document.querySelector('#botao-menu-mobile');
const menu = document.querySelector('#showMenu');


btnMobile.addEventListener('click', (e) =>{
    if(menu.style.display == 'none'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
});

/**************** Animação body [data-anime] ***********************/

const anime = document.querySelectorAll('[data-anime]');

const animeScroll = () => {
    const topoDaPagina = window.pageYOffset + window.innerHeight * 0.65;
    

    anime.forEach(Element => {
        if(topoDaPagina > Element.offsetTop) {
            Element.classList.add('animar');
        } else {
            Element.classList.remove('animar');
        }
    })
}

animeScroll()

window.addEventListener('scroll', () => {
    animeScroll()
})