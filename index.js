let counts = document.querySelectorAll(".count");
let scoreOnes = document.querySelectorAll(".one");
let scoreTwos = document.querySelectorAll(".two");
let scoreThrees = document.querySelectorAll(".three"); // fixed lowercase

// Start with 0 for HOME and GUEST
let scores = [0, 0];

// Add +1
scoreOnes.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    scores[index] += 1;
    counts[index].innerHTML = scores[index];
  });
});

// Add +2
scoreTwos.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    scores[index] += 2;
    counts[index].innerHTML = scores[index];
  });
});

// Add +3
scoreThrees.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    scores[index] += 3;
    counts[index].innerHTML = scores[index];
  });
});
