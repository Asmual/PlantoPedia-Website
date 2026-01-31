// document.addEventListener("DOMContentLoaded", () => {

//   const images = document.querySelectorAll(".flower_card img");
//   const previewBox = document.querySelector(".image-preview");
//   const previewImg = previewBox?.querySelector("img");

//   // Safety check
//   if (!images.length || !previewBox || !previewImg) return;

//   images.forEach(image => {
//     image.addEventListener("click", () => {
//       previewImg.src = image.src;
//       previewBox.classList.add("active");
//       previewBox.setAttribute("aria-hidden", "false");
//     });
//   });

//   // click anywhere to close
//   previewBox.addEventListener("click", () => {
//     previewBox.classList.remove("active");
//     previewBox.setAttribute("aria-hidden", "true");
//     previewImg.src = "";
//   });

//   // ESC key support (pro touch 🔥)
//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       previewBox.classList.remove("active");
//       previewBox.setAttribute("aria-hidden", "true");
//       previewImg.src = "";
//     }
//   });

// });




// 
document.addEventListener("DOMContentLoaded", () => {

  const images = Array.from(document.querySelectorAll(".flower_card img"));
  const preview = document.querySelector(".image-preview");
  const previewImg = preview?.querySelector("img");
  const caption = preview?.querySelector(".preview-caption");
  const nextBtn = preview?.querySelector(".next");
  const prevBtn = preview?.querySelector(".prev");

  let currentIndex = 0;
  let startX = 0;

  if (!images.length || !preview) return;

  function showImage(index) {
    currentIndex = index;
    previewImg.src = images[index].src;

    // h3 caption only
    const title = images[index]
      .closest(".flower_card")
      ?.querySelector("h3")?.innerText || "";

    caption.innerText = title;

    preview.classList.add("active");
    preview.setAttribute("aria-hidden", "false");
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => showImage(index));
  });

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  nextBtn.addEventListener("click", e => {
    e.stopPropagation();
    nextImage();
  });

  prevBtn.addEventListener("click", e => {
    e.stopPropagation();
    prevImage();
  });

  // Close on background click
  preview.addEventListener("click", () => {
    preview.classList.remove("active");
    preview.setAttribute("aria-hidden", "true");
  });

  // ESC key
  document.addEventListener("keydown", e => {
    if (!preview.classList.contains("active")) return;
    if (e.key === "Escape") preview.click();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });

  // 📱 Mobile swipe
  preview.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  preview.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage();
    }
  });

});
