const searchInput = document.getElementsByClassName("field")[0];
const searchField = document.getElementsByClassName("search-field")[0];
let isInputFocused = false;

searchInput.addEventListener("focus", () => {
  isInputFocused = true;
  if (isInputFocused) {
    searchField.style.width = "50%";
  }
});

searchInput.addEventListener("blur", () => {
  isInputFocused = false;
  if (!isInputFocused) {
    searchField.style.width = "30%";
  }
});




