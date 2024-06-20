const downloadBtn = document.getElementById("download-btn");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const colorList = ["#F26B9C", "#F266C1", "#55CCD9", "#8C4C46", "#261515"];
const welcomePort = document.querySelector(".welcome-port");
const aboutTitle = document.querySelector(".about-title");
const parentElement = document.querySelector(".parent-element");
const aboutSection = document.createElement("div");

document.addEventListener("DOMContentLoaded", (event) => {
  downloadBtn.innerText = downloadBtn.innerText
    .split("")
    .map((letter) => {
      return alphabet[Math.floor(Math.random() * 26)];
    })
    .join("");

  // Reverting to correct text
  // Animation to revert to original text
  let iterations = 0;
  const interval = setInterval(() => {
    downloadBtn.innerText = downloadBtn.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return downloadBtn.dataset.value[index];
        }
        return alphabet[Math.floor(Math.random() * alphabet.length)];
      })
      .join("");

    if (iterations >= downloadBtn.dataset.value.length) {
      clearInterval(interval);
      downloadBtn.classList.add("download-cv");
    }

    iterations += 0.5;
  }, 50);
  const addGlitchEffect = () => {
    downloadBtn.classList.add("glitch-effect");
    setTimeout(() => {
      downloadBtn.classList.remove("glitch-effect");
    }, 1000); // Duration of the glitch effect
  };

  const triggerGlitchEffectRandomly = () => {
    const randomDelay = Math.random() * 3000 + 2000; // Random delay between 2 to 7 seconds
    setTimeout(() => {
      addGlitchEffect();
      triggerGlitchEffectRandomly();
    }, randomDelay);
  };

  triggerGlitchEffectRandomly();
});

parentElement.addEventListener("click", function (e) {
  if (e.target.classList.contains("about-btn-studies")) {
    document.createElement("div");
    aboutSection.classList.add("about-sections");
    if (aboutSection) {
      aboutSection.remove();
    }
    aboutSection.innerHTML = `
      <div class="mensaje-incompleto">
        <h2>Studies</h2>
        <p> por favor completa la sección </p>
      </div>`; // Mensaje al tratar de mandar form incompleto

    aboutTitle.insertAdjacentElement("afterend", aboutSection);
  }
  if (e.target.classList.contains("about-btn-languages")) {
    document.createElement("div");
    aboutSection.classList.add("about-sections");
    if (aboutSection) {
      aboutSection.remove();
    }
    aboutSection.innerHTML = `
      <div class="mensaje-incompleto">
        <h2>Languages</h2>
        <p> por favor completa la sección </p>
      </div>`; // Mensaje al tratar de mandar form incompleto

    aboutTitle.insertAdjacentElement("afterend", aboutSection);
  }
  if (e.target.classList.contains("about-btn-goals")) {
    document.createElement("div");
    aboutSection.classList.add("about-sections");
    if (aboutSection) {
      aboutSection.remove();
    }
    aboutSection.innerHTML = `
      <div class="mensaje-incompleto">
        <h2>Goals</h2>
        <p> por favor completa la sección </p>
      </div>`; // Mensaje al tratar de mandar form incompleto

    aboutTitle.insertAdjacentElement("afterend", aboutSection);
  }
  if (e.target.classList.contains("about-btn-why")) {
    document.createElement("div");
    aboutSection.classList.add("about-sections");
    if (aboutSection) {
      aboutSection.remove();
    }
    aboutSection.innerHTML = `
      <div class="mensaje-incompleto">
        <h2>Why</h2>
        <p> por favor completa la sección </p>
      </div>`; // Mensaje al tratar de mandar form incompleto

    aboutTitle.insertAdjacentElement("afterend", aboutSection);
  }

  if (e.target.classList.contains("about-btn-connect")) {
    window.open("https://www.linkedin.com/in/barrera-carlos-e/", "_blank");
  }
});
