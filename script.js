const searchInput = document.getElementsByClassName("field")[0];
const searchField = document.getElementsByClassName("search-field")[0];

searchInput.addEventListener("focus", () => {
  searchField.style.width = "50%"; /* set container width to a larger value */
});

searchInput.addEventListener("blur", () => {
  searchField.style.width = "30%"; /* set container width back to the original value */
});
