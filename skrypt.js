window.addEventListener("load", () => {
  const toggleOverlay = document.getElementById("toggleOverlay");
  const legend = document.getElementById("legend");
  const mapContainer = document.querySelector(".map-container");

  // Dodaj strefy pod planetami
  document.querySelectorAll(".planet-box").forEach(box => {
    const control = box.dataset.control;

    const zone = document.createElement("div");
    zone.classList.add("influence-zone", control);

    const rect = box.getBoundingClientRect();
    const containerRect = mapContainer.getBoundingClientRect();

  const top = rect.top + rect.height/2 - containerRect.top - 60;
const left = rect.left + rect.width/2 - containerRect.left - 60;


    zone.style.top = `${top}px`;
    zone.style.left = `${left}px`;

    mapContainer.appendChild(zone);
  });

    document.querySelectorAll(".planet-box-small").forEach(box => {
    const control = box.dataset.control;

    const zone = document.createElement("div");
    zone.classList.add("influence-zone", control);

    const rect = box.getBoundingClientRect();
    const containerRect = mapContainer.getBoundingClientRect();

  const top = rect.top + rect.height/2 - containerRect.top - 60;
const left = rect.left + rect.width/2 - containerRect.left - 60;


    zone.style.top = `${top}px`;
    zone.style.left = `${left}px`;

    mapContainer.appendChild(zone);
  });
  // Checkbox – pokaż/ukryj strefy
  toggleOverlay.addEventListener("change", () => {
    const show = toggleOverlay.checked;
    legend.style.display = show ? "block" : "none";

    document.querySelectorAll(".influence-zone").forEach(zone => {
      zone.style.display = show ? "block" : "none";
    });
  });

  // Domyślnie ukryte
  document.querySelectorAll(".influence-zone").forEach(zone => zone.style.display = "none");
});
