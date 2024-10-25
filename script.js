// GSAP animations for initial load
gsap.to('.hero-title', { duration: 1, opacity: 1, y: 0, delay: 0.5 });
gsap.to('.hero-subtitle', { duration: 1, opacity: 1, y: 0, delay: 0.7 });
gsap.to('.hero-button', { duration: 1, opacity: 1, y: 0, delay: 0.9 });

// Mouse movement effect
const mouseEffect = document.querySelector('.mouse-movement-effect::before');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const effect = document.querySelector('.mouse-movement-effect::before');
    effect.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});