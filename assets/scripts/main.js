const menu = document.querySelector('.header__menu');
const btn = menu.querySelector('#header__btn--toggle');
const body = document.querySelector('#body');
btn.addEventListener('click', evt => {
	menu.classList.toggle('active');
	body.classList.toggle('noScroll');
})