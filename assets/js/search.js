document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.getElementById("search-input");

  // ---- Get baseurl injected from base.html ----
  const baseurl = window.baseurl || ""; // "/alpha" on GitHub Pages

  // ---- Redirect on Enter ----
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `${baseurl}/search/?q=${encodeURIComponent(query)}`;
      }
    });
  }

  // ---- Search results page logic ----
  const resultsContainer = document.getElementById("search-results");
  if (resultsContainer) {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q") || "";

    if (query) {

      // Fetch search.json from correct path
      fetch(`${baseurl}/search.json`)
        .then((res) => res.json())
        .then((docs) => {
          const matches = docs.filter((doc) =>
            doc.title.toLowerCase().includes(query.toLowerCase())
          );

          if (matches.length === 0) {
            resultsContainer.innerHTML = `<p>Sin resultados para <strong>${query}</strong></p>`;
          } else {
            const list = document.createElement("ul");
            matches.forEach((doc) => {
              const li = document.createElement("li");

              // Prepend baseurl to each result link
              li.innerHTML = `<a href="${baseurl}${doc.url}"><em>${doc.title}</em></a>`;

              list.appendChild(li);
            });
            resultsContainer.innerHTML = "";
            resultsContainer.appendChild(list);
          }
        });
    } else {
      resultsContainer.innerHTML = `<p>Escribe algo en la barra de búsqueda.</p>`;
    }
  }
});
