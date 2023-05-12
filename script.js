const btnMobile = document.querySelector('#botao-menu-mobile');
const menu = document.querySelector('#showMenu');


btnMobile.addEventListener('click', (e) =>{
    if(menu.style.display == 'none'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
});