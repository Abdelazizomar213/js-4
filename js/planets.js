import Api from "./api.js";

const cards = document.querySelectorAll(".planet-card");

const image = document.querySelector("#planet-detail-image");
const name = document.querySelector("#planet-detail-name");
const description = document.querySelector("#planet-detail-description");

const distance = document.querySelector("#planet-distance");
const radius = document.querySelector("#planet-radius");
const mass = document.querySelector("#planet-mass");
const density = document.querySelector("#planet-density");
const orbital = document.querySelector("#planet-orbital-period");
const rotation = document.querySelector("#planet-rotation");
const moons = document.querySelector("#planet-moons");
const gravity = document.querySelector("#planet-gravity");

const discoverer = document.querySelector("#planet-discoverer");
const discoveryDate = document.querySelector("#planet-discovery-date");
const bodyType = document.querySelector("#planet-body-type");
const volume = document.querySelector("#planet-volume");

const perihelion = document.querySelector("#planet-perihelion");
const aphelion = document.querySelector("#planet-aphelion");
const eccentricity = document.querySelector("#planet-eccentricity");
const inclination = document.querySelector("#planet-inclination");
const axialTilt = document.querySelector("#planet-axial-tilt");
const temp = document.querySelector("#planet-temp");
const escape = document.querySelector("#planet-escape");

async function loadPlanet(id) {

    const planet = await Api.getPlanet(id);

    if (!planet) return;

    name.textContent = planet.englishName;

    description.textContent =
        `${planet.englishName} is one of the planets in our Solar System.`;

    image.src = `./images.jpg/${id}.png`;
    distance.textContent =
        planet.semimajorAxis
            ? `${planet.semimajorAxis.toLocaleString()} km`
            : "Unknown";

    radius.textContent =
        planet.meanRadius
            ? `${planet.meanRadius.toLocaleString()} km`
            : "Unknown";

    mass.textContent =
        planet.mass
            ? `${planet.mass.massValue} ×10^${planet.mass.massExponent} kg`
            : "Unknown";

    density.textContent =
        planet.density
            ? `${planet.density} g/cm³`
            : "Unknown";

    orbital.textContent =
        planet.sideralOrbit
            ? `${planet.sideralOrbit} days`
            : "Unknown";

    rotation.textContent =
        planet.sideralRotation
            ? `${planet.sideralRotation} hours`
            : "Unknown";

    moons.textContent =
        planet.moons
            ? planet.moons.length
            : 0;

    gravity.textContent =
        planet.gravity
            ? `${planet.gravity} m/s²`
            : "Unknown";

    discoverer.textContent =
        planet.discoveredBy || "Unknown";

    discoveryDate.textContent =
        planet.discoveryDate || "Unknown";

    bodyType.textContent =
        planet.bodyType || "Planet";

    volume.textContent =
        planet.vol
            ? `${planet.vol.volValue} ×10^${planet.vol.volExponent} km³`
            : "Unknown";

    perihelion.textContent =
        planet.perihelion
            ? `${planet.perihelion.toLocaleString()} km`
            : "Unknown";

    aphelion.textContent =
        planet.aphelion
            ? `${planet.aphelion.toLocaleString()} km`
            : "Unknown";

    eccentricity.textContent =
        planet.eccentricity ?? "Unknown";

    inclination.textContent =
        planet.inclination
            ? `${planet.inclination}°`
            : "Unknown";

    axialTilt.textContent =
        planet.axialTilt
            ? `${planet.axialTilt}°`
            : "Unknown";

    temp.textContent = "N/A";

    escape.textContent =
        planet.escape
            ? `${planet.escape} m/s`
            : "Unknown";
}

cards.forEach(card => {

    card.addEventListener("click", () => {

        loadPlanet(card.dataset.planetId);

    });

});

loadPlanet("earth");