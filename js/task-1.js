const categoryNum = document.querySelectorAll("#categories .item");
console.log(`Number of categories ${categoryNum.length}`);

categoryNum.forEach((category) => {
  const title = category.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  const elements = category.querySelectorAll(".text");
  console.log(`Elements: ${elements.length}`);
});
