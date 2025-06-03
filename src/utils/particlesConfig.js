export const initParticles = () => {
    const isLightTheme = document.body.classList.contains('light');
    const particleColor = isLightTheme ? '#DAA520' : '#DAA520'; // Negro en claro, dorado en oscuro
    const lineColor = isLightTheme ? '#000000' : '#ffffff'; // --highlight en ambos

    particlesJS('particles-js', {
        particles: {
            number: {
                value: 160,
                density: { enable: true, value_area: 800 }
            },
            color: { value: particleColor },
            shape: { type: 'circle' },
            opacity: { value: 0.7, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: lineColor,
                opacity: 0,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out'
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });
};