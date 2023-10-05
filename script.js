const btn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-btn');
const modalMain = document.querySelector('.modal-main');
const overPlay = document.querySelector('.overplay');
btn.addEventListener( 'click', () => {
    modalMain.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
    modalMain.style.display = 'none';
});
document.addEventListener('keydown' , (a) => {
    if(a.key == 'Escape'){
        modalMain.style.display = 'none';
    }
});