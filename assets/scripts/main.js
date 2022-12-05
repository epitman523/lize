const menu = document.querySelector('.header__menu');
const btn = menu.querySelector('#header__btn--toggle');
btn.addEventListener('click', evt => {
	menu.classList.toggle('active');
})