// main.js

import recipes from './recipes.mjs';

const main = document.querySelector("main");
const form = document.querySelector("form");
const searchInput = document.querySelector("#search");

// Render all recipes on load
renderRecipes(recipes);

// Event listener for the search form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );

  renderRecipes(filtered);
});

function renderRecipes(recipeList) {
  main.innerHTML = "";

  recipeList.forEach(recipe => {
    const card = document.createElement("section");
    card.className = "recipe-card";

    const img = document.createElement("img");
    img.src = recipe.image;
    img.alt = recipe.name;

    const content = document.createElement("div");
    content.className = "recipe-content";

    // Tags
    const tagContainer = document.createElement("div");
    tagContainer.className = "tags";
    recipe.tags.forEach(tag => {
      const tagSpan = document.createElement("span");
      tagSpan.textContent = tag;
      tagContainer.appendChild(tagSpan);
    });

    // Title
    const title = document.createElement("div");
    title.className = "recipe-title";
    title.textContent = recipe.name;

    // Rating
    const rating = document.createElement("span");
    rating.className = "rating";
    rating.setAttribute("role", "img");
    rating.setAttribute("aria-label", `Rating: ${recipe.rating} out of 5 stars`);

    const fullStars = Math.floor(recipe.rating);
    const halfStar = recipe.rating - fullStars >= 0.5;

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      if (i <= fullStars) {
        star.className = "icon-star";
        star.textContent = "⭐";
      } else if (i === fullStars + 1 && halfStar) {
        star.className = "icon-star-half";
        star.textContent = "⯨"; // Optional: use a half-star symbol or SVG
      } else {
        star.className = "icon-star-empty";
        star.textContent = "☆";
      }
      star.setAttribute("aria-hidden", "true");
      rating.appendChild(star);
    }

    // Description
    const desc = document.createElement("p");
    desc.className = "recipe-description";
    desc.textContent = recipe.description;

    // Append content
    content.appendChild(tagContainer);
    content.appendChild(title);
    content.appendChild(rating);
    content.appendChild(desc);

    card.appendChild(img);
    card.appendChild(content);
    main.appendChild(card);
  });
}
