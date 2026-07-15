import Api from "./api.js";

const launchesGrid = document.querySelector("#launches-grid");

const featuredImage = document.querySelector("#featured-launch-image");
const featuredName = document.querySelector("#featured-launch-name");
const featuredCompany = document.querySelector("#featured-launch-company");
const featuredRocket = document.querySelector("#featured-launch-rocket");
const featuredDate = document.querySelector("#featured-launch-date");

const launchesCount = document.querySelector("#launches-count");
const launchesCountMobile = document.querySelector("#launches-count-mobile");

async function loadLaunches() {
    const launches = await Api.getLaunches();

    if (!launches || !launches.length) {
        launchesGrid.innerHTML = `
            <h3 class="text-center text-danger">
                Failed to load launches
            </h3>
        `;
        return;
    }

    const first = launches[0];

    // Featured Launch (لو العناصر موجودة)
    if (featuredImage) {
        featuredImage.src = first.image || "images/rocket.jpg";
    }

    if (featuredName) {
        featuredName.textContent = first.name;
    }

    if (featuredCompany) {
        featuredCompany.textContent =
            first.launch_service_provider?.name || "Unknown";
    }

    if (featuredRocket) {
        featuredRocket.textContent =
            first.rocket?.configuration?.name || "Unknown";
    }

    if (featuredDate) {
        featuredDate.textContent =
            new Date(first.net).toLocaleString();
    }

    if (launchesCount) {
        launchesCount.textContent = `${launches.length} Launches`;
    }

    if (launchesCountMobile) {
        launchesCountMobile.textContent = launches.length;
    }

    launchesGrid.innerHTML = launches
        .slice(0, 9)
        .map(
            (launch) => `
        <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-4">
            <h4 class="fw-bold mb-2">
                ${launch.name}
            </h4>

            <p class="mb-2">
                <strong>Company:</strong>
                ${launch.launch_service_provider?.name || "Unknown"}
            </p>

            <p class="mb-2">
                <strong>Rocket:</strong>
                ${launch.rocket?.configuration?.name || "Unknown"}
            </p>

            <p class="mb-0">
                <strong>Date:</strong>
                ${new Date(launch.net).toLocaleString()}
            </p>
        </div>
    `
        )
        .join("");
}

loadLaunches();