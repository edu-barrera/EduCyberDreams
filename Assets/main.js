const downloadBtn = document.getElementById("download-btn");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const colorList = ["#F26B9C", "#F266C1", "#55CCD9", "#8C4C46", "#261515"];
const welcomePort = document.querySelector(".welcome-port");
const aboutTitle = document.querySelector(".about-title");
const parentElement = document.querySelector(".parent-element");
const s = document.createElement("div");

document.addEventListener("DOMContentLoaded", (event) => {
  // Randomize the text of the download button initially
  downloadBtn.innerText = downloadBtn.innerText
    .split("")
    .map((letter) => {
      return alphabet[Math.floor(Math.random() * 26)];
    })
    .join("");

  // Reverting to correct text with glitch effect
  let iterations = 0;
  const interval = setInterval(() => {
    downloadBtn.innerText = downloadBtn.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return downloadBtn.dataset.value[index]; // Revert to original letter
        }
        return alphabet[Math.floor(Math.random() * alphabet.length)]; // Random letter
      })
      .join("");

    if (iterations >= downloadBtn.dataset.value.length) {
      clearInterval(interval);
      downloadBtn.classList.add("download-cv"); // Finally add class for styling
    }

    iterations += 0.5;
  }, 50);

  // Function to add glitch effect to the button
  const addGlitchEffect = () => {
    downloadBtn.classList.add("glitch-effect");
    setTimeout(() => {
      downloadBtn.classList.remove("glitch-effect");
    }, 1000); // Duration of the glitch effect
  };

  // Trigger the glitch effect randomly
  const triggerGlitchEffectRandomly = () => {
    const randomDelay = Math.random() * 3000 + 2000; // Random delay between 2 to 7 seconds
    setTimeout(() => {
      addGlitchEffect();
      triggerGlitchEffectRandomly();
    }, randomDelay);
  };

  triggerGlitchEffectRandomly(); // Start random glitch effects
});

// Add event listener for clicks on the parent element
parentElement.addEventListener("click", function (e) {
  // Helper function to update the about section with provided HTML
  const updateAboutSection = (htmlContent) => {
    document.createElement("div");
    aboutSection.classList.add("about-sections");
    if (aboutSection) {
      aboutSection.remove();
    }
    aboutSection.innerHTML = htmlContent;
    aboutTitle.insertAdjacentElement("afterend", aboutSection);
  };

  // Update about section based on clicked button
  if (e.target.classList.contains("about-btn-studies")) {
    updateAboutSection(`
      <div class="mensaje-about studies">
        <h2>Web systems development at Universidad de Guadalajara</h2>
        <h3>Expected to graduate mid 2025</h3>
        <img class="about-studies-img" src="Assets/img/studies.png" />
      </div>
    `);
  } else if (e.target.classList.contains("about-btn-personal")) {
    updateAboutSection(`
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
      </div>
    `);
  } else if (e.target.classList.contains("about-btn-goals")) {
    updateAboutSection(`
      <div class="mensaje-about goals">
        <h2>Goals for last half of 2024</h2>
        <ul>
          <li>Mastering React, creating an updated portfolio using React.</li>
          <li>Finish Generation bootcamp and Mel reposteria project.</li>
          <li><strong>Working with YOU.</strong></li>
        </ul>
        <img class="about-studies-img" src="Assets/img/goals.png" />
      </div>
    `);
  } else if (e.target.classList.contains("about-btn-why")) {
    updateAboutSection(`
      <div class="mensaje-incompleto">
        <h2>Why</h2>
        <p> por favor completa la sección </p>
      </div>
    `);
  } else if (e.target.classList.contains("about-btn-connect")) {
    window.open("https://www.linkedin.com/in/barrera-carlos-e/", "_blank"); // Open LinkedIn profile
  }
});

// Smooth scrolling
const navHome = document.querySelector(".nav-home");
const navAbout = document.querySelector(".nav-about");
const navProjects = document.querySelector(".nav-projects");
const navContact = document.querySelector(".nav-contact");

const welcomeSection = document.querySelector(".welcome-section");
const skillsSection = document.querySelector(".skills-section");
const ProjectSection = document.querySelector(".project-outline");
const contactTitle = document.querySelector(".contact-section");

navHome.addEventListener("click", () =>
  welcomeSection.scrollIntoView({ behavior: "smooth" })
);
navAbout.addEventListener("click", () =>
  skillsSection.scrollIntoView({ behavior: "smooth" })
);
navProjects.addEventListener("click", () =>
  ProjectSection.scrollIntoView({ behavior: "smooth" })
);
navContact.addEventListener("click", () =>
  contactTitle.scrollIntoView({ behavior: "smooth" })
);
