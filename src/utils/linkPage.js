export const linkPage = (id, page) => {
    const link = document.querySelector(id);
    link.addEventListener("click", (e) => {
        e.preventDefault(); // <-- IMPORTANTE
        page();
    });
};
