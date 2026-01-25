// document.addEventListener('DOMContentLoaded', () => {
//     const navbar_toggle = document.querySelector('.navbar_toggle');
//     const header_menu = document.querySelector('.header_menu');

//     navbar_toggle.addEventListener('click', () => {
//         navbar_toggle.classList.toggle('active');
//         header_menu.classList.toggle('active');
//     });
// });
//




document.addEventListener('DOMContentLoaded', () => {
    const navbar_toggle = document.querySelector('.navbar_toggle');
    const header_menu = document.querySelector('.header_menu');

    navbar_toggle.addEventListener('click', () => {
        navbar_toggle.classList.toggle('active');
        header_menu.classList.toggle('active');
    });
});
// 
/* ===== Flower Search System ===== */
    const searchInput = document.querySelector('.search_input');
    const flowerCards = document.querySelectorAll('.flower_card');

    searchInput.addEventListener('keyup', () => {
        const searchValue = searchInput.value.toLowerCase();

        flowerCards.forEach(card => {
            const flowerName = card.querySelector('h3').innerText.toLowerCase();

            if (flowerName.includes(searchValue)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        

        });
    });