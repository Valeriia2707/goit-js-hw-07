const inputText = document.querySelector("input#name-input");
const spanText = document.querySelector("span#name-output");
inputText.addEventListener("input", () => {
  const trimmedValue = inputText.value.trim();
  spanText.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
