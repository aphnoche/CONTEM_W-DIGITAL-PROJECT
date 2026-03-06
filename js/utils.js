function revealOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function playAudio(name) {
    const audio = new Audio(`assets/audio/${name}.mp3`);
    audio.volume = 0.3;
    audio.play().catch(() => { });
}

function getQueryParam(key) {
    return new URLSearchParams(window.location.search).get(key);
}
