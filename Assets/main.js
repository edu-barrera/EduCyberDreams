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
        <div class="mensaje-about studies">
          <h2>Web systems development at Universidad de Guadalajara</h2>
          <h3>Expected to graduate mid 2025</h3>
          <img class="about-studies-img" src="Assets/img/studies.png" />
        </div>`;
    aboutTitle.insertAdjacentElement("afterend", aboutSection);
  }
  if (e.target.classList.contains("about-btn-personal")) {
    document.createElement("div");
    aboutSection.classList.add("about-sections");
    if (aboutSection) {
      aboutSection.remove();
    }
    aboutSection.innerHTML = `
           <div class="mensaje-about me">
          <h2>A little more about me</h2>
          <div class="movies">
            <div>
              <h3 class="hobbies">My favorite game is League of Legends 😎</h3>
              <img class="about-me-img" src="Assets/img/league.png" />
            </div>
            <div>
              <h3 class="hobbies">Recent movies I've watched and loved ♥️</h3>
              <img class="about-me-img" src="Assets/img/movies.png" />
            </div>
          </div>
        </div>`;

    aboutTitle.insertAdjacentElement("afterend", aboutSection);
  }
  if (e.target.classList.contains("about-btn-goals")) {
    document.createElement("div");
    aboutSection.classList.add("about-sections");
    if (aboutSection) {
      aboutSection.remove();
    }
    aboutSection.innerHTML = `
       <div class="mensaje-about goals">
          <h2>Goals for last half of 2024</h2>
          <ul>
            <li>Mastering React, creating an updated portfolio using React.</li>
            <li>Finish Generation bootcamp and Mel reposteria project.</li>
            <li><strong>Working with YOU.</strong></li>
          </ul>
          <img class="about-studies-img" src="Assets/img/goals.png" />
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
