
import Api from "./api.js";

const image = document.querySelector("#apod-image");
const title = document.querySelector("#apod-title");
const explanation = document.querySelector("#apod-explanation");
const date = document.querySelector("#apod-date");
const dateDetail = document.querySelector("#apod-date-detail");
const dateInfo = document.querySelector("#apod-date-info");
const mediaType = document.querySelector("#apod-media-type");
const copyright = document.querySelector("#apod-copyright");

async function loadToday() {

    const data = await Api.getToday();

    if (!data) return;

    image.src = data.url;
    image.alt = data.title;

    title.textContent = data.title;

    explanation.textContent = data.explanation;

    date.textContent = `Astronomy Picture of the Day - ${data.date}`;

    dateDetail.innerHTML =
        `<i class="far fa-calendar mr-2"></i>${data.date}`;

    dateInfo.textContent = data.date;

    mediaType.textContent = data.media_type;

    copyright.textContent =
        data.copyright || "NASA";

}

loadToday();