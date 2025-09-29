
// Part 2: Functions & Scope

// Global variable
let animationCount = 0;

// Function with parameters & return value
function calculateScale(times) {
  return 1 + times * 0.1; // increase size by 10% each trigger
}

// Local scope demo
function triggerAnimation(boxElement) {
  let localCount = ++animationCount; // local variable
  let scaleValue = calculateScale(localCount);

  boxElement.style.transform = `scale(${scaleValue})`;
  console.log(`Box scaled to: ${scaleValue}`);
}


// Part 3: Combine CSS + JS

const animateBtn = document.getElementById("animateBtn");
const box = document.querySelector(".box");

animateBtn.addEventListener("click", () => {
  triggerAnimation(box);
});

// Popup logic
const popupBtn = document.getElementById("popupBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

popupBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});