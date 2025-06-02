import { translations } from "./data/i18n";

export let currentLang = "en";

export const setLang = (lang) => {
    currentLang = lang;
};

export const t = (path) => {
    const keys = path.split(".");
    return keys.reduce((obj, key) => obj?.[key], translations[currentLang]) || "";
};
