document.addEventListener('DOMContentLoaded', () => {
    const navbar_toggle = document.querySelector('.navbar_toggle');
    const header_menu = document.querySelector('.header_menu');

    navbar_toggle.addEventListener('click', () => {
        navbar_toggle.classList.toggle('active');
        header_menu.classList.toggle('active');
    });
});