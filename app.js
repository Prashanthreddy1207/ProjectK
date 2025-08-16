// Function to load external HTML into an element
function loadHTML(elementId, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load " + file);
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error(error));
}

// Load Header and Main
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "header.html");
  loadHTML("main", "main.html");
});
