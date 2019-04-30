import axios from "axios";

export const configPromise = axios
    .get("/config.json")
    .then(response => {
        const config = response.data;

        if (!config || !config.apiBaseUrl || typeof config.apiBaseUrl !== "string") {
            throw new Error("Unsupported response.data format.");
        }

        return {
            apiBaseUrl: config.apiBaseUrl as string,
        };
    })
    .catch(e => {
        console.warn("Get /config.json failed, fallback to defaults.", e);
        return {
            // apiBaseUrl: "https://bank-core.herokuapp.com",
            apiBaseUrl: "http://localhost:5000",
        };
    });
