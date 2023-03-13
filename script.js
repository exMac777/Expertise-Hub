const searchInput = document.getElementsByClassName("field")[0];
const searchField = document.getElementsByClassName("search-field")[0];
let isInputFocused = false;

function setWidth() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth >= 768) {
    searchField.style.width = isInputFocused ? "60%" : "40%";
  } else {
    searchField.style.width = "90%";
  }
}

setWidth(); // Call initially to set the width based on the viewport size

window.addEventListener("resize", setWidth); // Call on window resize to update the width

searchInput.addEventListener("focus", () => {
  isInputFocused = true;
  setWidth(); // Call to update the width
});

searchInput.addEventListener("blur", () => {
  isInputFocused = false;
  setWidth(); // Call to update the width
});

const nameInput = document.getElementById("search");
  nameInput.setCustomValidity("Please type what to search");

  nameInput.addEventListener("input", function () {
    nameInput.setCustomValidity("");
  });