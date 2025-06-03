export const Typewriter = ({ text, speed = 1000, pause = 3000 }) => {
    const id = `typewriter-${Math.random().toString(36).substr(2, 9)}`; // ID único
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
            let i = 0;
            let isTyping = true;

            const typeCycle = () => {
                if (isTyping) {
                    // Escribir
                    element.textContent = text.slice(0, i + 1);
                    i++;
                    if (i >= text.length) {
                        isTyping = false;
                        setTimeout(typeCycle, pause); // Pausa antes de borrar
                    } else {
                        setTimeout(typeCycle, speed);
                    }
                } else {
                    // Borrar
                    element.textContent = text.slice(0, i);
                    i--;
                    if (i < 0) {
                        isTyping = true;
                        setTimeout(typeCycle, pause / 2); // Pausa breve antes de reescribir
                    } else {
                        setTimeout(typeCycle, speed / 2); // Borrar más rápido
                    }
                }
            };
            typeCycle();
        }
    }, 500); // Retraso inicial para DOM
    return `<p id="${id}" class="typewriter"></p>`;
};