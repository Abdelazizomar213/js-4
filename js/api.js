import CONFIG from "./config.js";

export default class Api {

    // ==========================
    // NASA APOD
    // ==========================

    static async getToday(date = "") {

        try {

            let url =
                `${CONFIG.NASA_URL}?api_key=${CONFIG.NASA_KEY}`;

            if (date) {
                url += `&date=${date}`;
            }

            const response = await fetch(url);

            if (!response.ok)
                throw new Error("NASA API Error");

            return await response.json();

        }

        catch (error) {

            console.log(error);

            return null;

        }

    }

    // ==========================
    // Upcoming Launches
    // ==========================

    static async getLaunches() {

        try {

            const response =
                await fetch(CONFIG.LAUNCHES_URL);

            if (!response.ok)
                throw new Error("Launch API Error");

            const data =
                await response.json();

            return data.results;

        }

        catch (error) {

            console.log(error);

            return [];

        }

    }

    // ==========================
    // All Planets
    // ==========================

    static async getPlanets() {

        try {

            const response =
                await fetch(CONFIG.PLANETS_URL);

            if (!response.ok)
                throw new Error("Planet API Error");

            const data =
                await response.json();

            return data.bodies.filter(
                body => body.isPlanet
            );

        }

        catch (error) {

            console.log(error);

            return [];

        }

    }

    // ==========================
    // Single Planet
    // ==========================

    static async getPlanet(id) {

        try {

            const response =
                await fetch(`${CONFIG.PLANETS_URL}${id}`);

            if (!response.ok)
                throw new Error("Planet API Error");

            return await response.json();

        }

        catch (error) {

            console.log(error);

            return null;

        }

    }

}