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
const aboutToggle = document.querySelector("#aboutToggle");
const aboutPanel = document.querySelector("#aboutPanel");

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

aboutToggle?.addEventListener("click", () => {
  const isExpanded = aboutToggle.getAttribute("aria-expanded") === "true";

  aboutToggle.setAttribute("aria-expanded", String(!isExpanded));
  aboutPanel.hidden = isExpanded;
});
