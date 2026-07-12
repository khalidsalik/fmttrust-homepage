const applications = [
  {
    name: "FMT Donor Portal",
    description: "Member donations, statements, and records.",
    url: "https://donorportal.fmttrust.com/",
    logo: "assets/fmt-logo.png",
    alt: "FMT Donor Portal logo"
  },
  {
    name: "Seettu Kulukkal App",
    description: "Automated monthly draw picker for community chit funds",
    url: "https://seettu-kulukkal.fmttrust.com/",
    logo: "assets/seettu-kulukkal.svg",
    alt: "Seettu Kulukkal logo"
  },
  {
    name: "Vaaris Urimai",
    description: "Islamic inheritance share calculator.",
    url: "https://vaaris-urimai.fmttrust.com/",
    logo: "assets/vaaris-urimai.svg",
    alt: "Vaaris Urimai logo"
  }
];

const applicationGrid = document.querySelector("#applicationGrid");
const brandLogoStage = document.querySelector("#brandLogoStage");

applicationGrid.innerHTML = applications
  .map(
    (app) => `
      <a class="app-card" href="${app.url}" aria-label="Open ${app.name}">
        <span class="logo-frame">
          <img src="${app.logo}" alt="${app.alt}" width="76" height="76">
        </span>
        <span class="app-copy">
          <strong>${app.name}</strong>
          <small>${app.description}</small>
        </span>
      </a>
    `
  )
  .join("");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (brandLogoStage && !reduceMotion.matches) {
  brandLogoStage.addEventListener("pointermove", (event) => {
    const bounds = brandLogoStage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    brandLogoStage.style.setProperty("--logo-tilt-x", `${(-y * 18).toFixed(2)}deg`);
    brandLogoStage.style.setProperty("--logo-tilt-y", `${(x * 18).toFixed(2)}deg`);
  });

  brandLogoStage.addEventListener("pointerleave", () => {
    brandLogoStage.style.setProperty("--logo-tilt-x", "0deg");
    brandLogoStage.style.setProperty("--logo-tilt-y", "0deg");
  });
}
