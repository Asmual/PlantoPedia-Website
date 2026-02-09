
// ===============================
// READ MORE BUTTON
// ===============================
document.querySelectorAll(".readMore_button").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    window.location.href = `fish-details.html?id=${id}`;
  });
});

// ===============================
// FISH DATA
// ===============================
const fishData = {

  "red-tail-platinum-dumbo-ear": {
    title: "🐟 Red Tail Platinum Dumbo Ear Guppy",
    intro: "Large dumbo fins with platinum body and bright red tail.",
    content: `
      <h2>Care Level</h2>
      <p>Easy – suitable for beginners</p>
      <h2>Tank Size</h2>
      <p>Minimum 20 liters</p>
      <h2>Temperature</h2>
      <p>22–28°C </p>
      <h2>Diet</h2>
      <p>Flakes, pellets, live food</p>
    `
  },

  "tuxedo-koi-guppy": {
    title: "🐟 Tuxedo Koi Guppy Care Tips",
    intro:
      "Tuxedo Koi Guppies are a colorful and eye-catching strain of guppy (Poecilia reticulata), known for their striking red-orange tails and contrasting black tuxedo body pattern. They are hardy, active, and easy to breed — ideal for beginners and experienced aquarists alike.",

    content: `
      <h2>✅ Tank Requirements</h2>
      <ul>
        <li><b>Tank Size:</b> Minimum 20 liters (5 gallons) for a trio</li>
        <li><b>Group Size:</b> 1 male to 2+ females or all males</li>
        <li><b>Substrate:</b> Fine gravel or sand with live plants</li>
        <li><b>Filtration:</b> Gentle filtration; avoid strong currents</li>
      </ul>

      <h2>🌡️ Water Parameters</h2>
      <ul>
        <li><b>Temperature:</b> 22-28°C (72-82°F)</li>
        <li><b>pH:</b> 6.8-7.8</li>
        <li><b>Hardness:</b> 10-25 dGH</li>
      </ul>

      <h2>🍽️ Diet</h2>
      <ul>
        <li>High-quality flakes or micro-pellets</li>
        <li>Live/frozen foods: brine shrimp, daphnia, bloodworms</li>
        <li>Vegetable matter: spirulina, blanched spinach</li>
      </ul>

      <h2>🧼 Tank Maintenance</h2>
      <ul>
        <li>Weekly 20-30% water changes</li>
        <li>Monthly filter cleaning</li>
        <li>Remove uneaten food</li>
      </ul>

      <h2>🤝 Tank Mates</h2>
      <ul>
        <li>Mollies, platies, tetras, Corydoras, shrimp</li>
        <li>Avoid tiger barbs and aggressive fish</li>
      </ul>

      <h2>🍀 Color Enhancement</h2>
      <ul>
        <li>Moderate to bright lighting</li>
        <li>Color-enhancing flakes</li>
        <li>Spirulina & live foods</li>
      </ul>
    `
  },

  "dumbo-mosaic-guppy": {
    title: "🐟 Dumbo Mosaic Guppy",
    intro: "Famous for its large ear-like fins and mosaic tail pattern.",
    content: `
      <h2>Care Level</h2><p>Easy</p>
      <h2>Tank Size</h2><p>20+ liters</p>
      <h2>Temperature</h2><p>23–28°C</p>
      <h2>Diet</h2><p>Omnivore</p>
    `
  },

  "full-gold-guppy": {
    title: "🐟 Full Gold Guppy",
    intro: "Golden shiny body with smooth swimming style.",
    content: `
      <h2>Care Level</h2><p>Easy</p>
      <h2>Tank Size</h2><p>20 liters</p>
      <h2>Temperature</h2><p>22–28°C</p>
    `
  },

  "24k-gold-guppy": {
    title: "🐟 24k Gold Guppy",
    intro: "Premium strain with metallic gold coloration.",
    content: `
      <h2>Care Level</h2><p>Easy</p>
      <h2>Tank Size</h2><p>25 liters</p>
      <h2>Temperature</h2><p>23–28°C</p>
    `
  },

  "red-dragon-guppy": {
    title: "🐟 Red Dragon Guppy",
    intro: "Dragon scale look with bold red coloration.",
    content: `
      <h2>Care Level</h2><p>Medium</p>
      <h2>Tank Size</h2><p>25 liters</p>
    `
  },

  "green-dragon-guppy": {
    title: "🐟 Green Dragon Guppy",
    intro: "Rare green metallic dragon scale guppy.",
    content: `
      <h2>Care Level</h2><p>Medium</p>
      <h2>Tank Size</h2><p>25 liters</p>
    `
  },

  "albino-red-moscow-guppy": {
    title: "🐟 Albino Red Moscow Guppy",
    intro: "Albino strain with deep red color.",
    content: `<p>Peaceful, easy care, great for community tanks.</p>`
  },

  "albino-blue-topaz-guppy": {
    title: "🐟 Albino Blue Topaz Guppy",
    intro: "Blue topaz shine with albino base.",
    content: `<p>Very attractive and calm fish.</p>`
  },

  "black-moscow-guppy": {
    title: "🐟 Black Moscow Guppy",
    intro: "Solid black color with velvet finish.",
    content: `<p>Hardy and beginner friendly.</p>`
  },

  "green-moscow-guppy": {
    title: "🐟 Green Moscow Guppy",
    intro: "Metallic green Moscow strain.",
    content: `<p>Rare and premium variety.</p>`
  },

  "blue-head-samurai-guppy": {
    title: "🐟 Blue Head Samurai Guppy",
    intro: "Samurai armor pattern with blue head.",
    content: `<p>Medium care level.</p>`
  },

  "gold-lace-snakeskin-guppy": {
    title: "🐟 Gold Lace Snakeskin Guppy",
    intro: "Snakeskin body with lace tail.",
    content: `<p>Beautiful pattern and easy care.</p>`
  },

  "black-metal-guppy": {
    title: "🐟 Black Metal Guppy",
    intro: "Dark metallic tone with strong fins.",
    content: `<p>Very hardy fish.</p>`
  },

  "blue-grass-guppy": {
    title: "🐟 Blue Grass Guppy",
    intro: "Grass tail pattern in blue shades.",
    content: `<p>Beginner friendly.</p>`
  },

  "albino-red-koi-guppy": {
    title: "🐟 Albino Red Koi Guppy",
    intro: "Koi-style red patches on albino body.",
    content: `<p>Highly popular aquarium fish.</p>`
  }

};

// ===============================
// DETAILS PAGE LOAD
// ===============================
const fishTitle = document.getElementById("fishTitle");

if (fishTitle) {
  const params = new URLSearchParams(window.location.search);
  const fishId = params.get("id");
  const fish = fishData[fishId];

  if (fish) {
    fishTitle.innerHTML = fish.title;
    document.getElementById("fishIntro").innerText = fish.intro;
    document.getElementById("fishContent").innerHTML = fish.content;
  } else {
    document.querySelector(".details-container").innerHTML =
      "<h2>Fish not found</h2>";
  }
}
