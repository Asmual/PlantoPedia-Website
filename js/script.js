
/* Toggle Active and close */
document.addEventListener('DOMContentLoaded', () => {
    const navbar_toggle = document.querySelector('.navbar_toggle');
    const navbar = document.querySelector('.navbar');

    navbar_toggle.addEventListener('click', () => {
        navbar_toggle.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});


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



/* ===== Welcome Popup Dialog with Sound ===== */
/* ===== Welcome Popup Dialog (One Time Only) ===== */
const popupOverlay = document.getElementById("popupOverlay");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popupMessage = document.getElementById("popupMessage");
const popupTitle = popupOverlay ? popupOverlay.querySelector("h2") : null;
const popupButtons = popupOverlay ? popupOverlay.querySelector(".popup_buttons") : null;
const popupSound = document.getElementById("popupSound");

if (popupOverlay && yesBtn && noBtn && popupMessage && popupSound) {

  // Check if popup already shown
  const hasSeenPopup = localStorage.getItem("hasSeenPopup");

  if (!hasSeenPopup) {
    setTimeout(() => {
      popupOverlay.style.display = "flex";
    }, 2000);
  }

  yesBtn.addEventListener("click", () => {
    popupTitle.style.display = "none";
    popupButtons.style.display = "none";
    popupMessage.innerText = "Great! Welcome back, my friend 😊";
    popupMessage.style.display = "block";
    popupSound.play();

    setTimeout(() => {
      popupOverlay.style.display = "none";
      popupMessage.style.display = "none";
      popupTitle.style.display = "block";
      popupButtons.style.display = "flex";
      localStorage.setItem("hasSeenPopup", "true"); // Save state
    }, 2000);
  });

  noBtn.addEventListener("click", () => {
    popupTitle.style.display = "none";
    popupButtons.style.display = "none";
    popupMessage.innerText = "Nice to meet you! Welcome to PlantoPedia 🌱";
    popupMessage.style.display = "block";
    popupSound.play();

    setTimeout(() => {
      popupOverlay.style.display = "none";
      popupMessage.style.display = "none";
      popupTitle.style.display = "block";
      popupButtons.style.display = "flex";
      localStorage.setItem("hasSeenPopup", "true"); // Save state
    }, 2000);
  });
}
// /*  */
 
document.querySelectorAll('.arrow_btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation(); 

        const container = this.closest('.submenu_container');
        const submenu = container.querySelector('.submanu_bar');

        submenu.classList.toggle('open');
        container.classList.toggle('active');
    });
});
 
// ==================================

document.querySelectorAll(".readMore_button").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    window.location.href = `fish-details.html?id=${id}`;
  });
});


/* Read More Button JS  */
 
const buttons = document.querySelectorAll(".readMore_button");
const modal = document.getElementById("flowerModal");
const overlay = document.getElementById("modalOverlay");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    document.getElementById("modalTitle").innerText =
      button.dataset.title;

    document.getElementById("modalImage").src =
      button.dataset.img;

    document.getElementById("modalDesc").innerHTML =
      button.dataset.desc;

    modal.style.display = "block";
    overlay.style.display = "block";
  });
});

document.querySelector(".closeBtn").addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal(){
  modal.style.display = "none";
  overlay.style.display = "none";
}
 
