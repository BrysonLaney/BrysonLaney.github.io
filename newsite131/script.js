document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("suggestion-form");
  const container = document.getElementById("suggestions-container");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("game-name").value.trim();
      const link = document.getElementById("game-link").value.trim();
      const review = document.getElementById("game-review").value.trim();

      if (name && link) {
        const suggestion = { name, link, review };
        let suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];
        suggestions.push(suggestion);
        localStorage.setItem("suggestions", JSON.stringify(suggestions));
        alert("Suggestion submitted!");
        form.reset();
      }
    });
  }

  if (container) {
    const suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];
    suggestions.forEach((s) => {
      const card = document.createElement("div");
      card.className = "suggestion-card";
      card.innerHTML = `
        <h3>${s.name}</h3>
        <p><a href="${s.link}" target="_blank">${s.link}</a></p>
        <p>${s.review || ""}</p>
      `;
      container.appendChild(card);
    });
  }
});
