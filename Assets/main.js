const downloadBtn = document.getElementById("download-btn");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const colorList = ["#F26B9C", "#F266C1", "#55CCD9", "#8C4C46", "#261515"];

document.addEventListener("DOMContentLoaded", (event) => {
  downloadBtn.innerText = downloadBtn.innerText
    .split("")
    .map((letter) => {
      return alphabet[Math.floor(Math.random() * 26)];
    })
    .join("");
});

downloadBtn.onmouseover = (event) => {
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return alphabet[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= event.target.dataset.value.lenght)
      clearInterval(interval);
    iterations += 1 / 2;
  }, 50);
};
