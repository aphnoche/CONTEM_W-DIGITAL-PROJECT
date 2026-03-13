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

const sfxPool = {};

function playAudio(name) {
    if (!sfxPool[name]) {
        sfxPool[name] = [];
        for (let i = 0; i < 3; i++) {
            const a = new Audio(`assets/audio/${name}.mp3`);
            a.volume = 0.3;
            sfxPool[name].push(a);
        }
    }
    const available = sfxPool[name].find((a) => a.paused || a.ended) || sfxPool[name][0];
    available.currentTime = 0;
    available.play().catch(() => { });
}

function getQueryParam(key) {
    return new URLSearchParams(window.location.search).get(key);
}

const bgm = new Audio('assets/audio/bgm.mp3');
bgm.loop = true;
bgm.volume = 0.15;

function initBgm() {
    const btn = document.getElementById('bgm-toggle');
    if (!btn) return;

    const stored = localStorage.getItem('bgm');
    if (stored === 'on') {
        const savedTime = parseFloat(localStorage.getItem('bgm-time') || '0');
        bgm.currentTime = savedTime;
        startBgm(btn);
    }

    setInterval(() => {
        if (!bgm.paused) {
            localStorage.setItem('bgm-time', String(bgm.currentTime));
        }
    }, 500);

    window.addEventListener('beforeunload', () => {
        if (!bgm.paused) {
            localStorage.setItem('bgm-time', String(bgm.currentTime));
        }
    });

    btn.addEventListener('click', () => {
        if (bgm.paused) {
            startBgm(btn);
            localStorage.setItem('bgm', 'on');
        } else {
            stopBgm(btn);
            localStorage.setItem('bgm', 'off');
        }
    });
}

function startBgm(btn) {
    bgm.play().catch(() => { });
    btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    btn.classList.add('bgm-toggle--on');
}

function stopBgm(btn) {
    bgm.pause();
    localStorage.setItem('bgm-time', String(bgm.currentTime));
    btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    btn.classList.remove('bgm-toggle--on');
}

document.addEventListener('DOMContentLoaded', () => {
    initBgm();
    initNavActive();
});

function initNavActive() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const search = window.location.search;

    const pageMap = {
        'index.html': { type: 'home' },
        'topic.html': { type: 'dropdown', label: 'Explore', itemHref: `topic.html${search}` },
        'read.html': { type: 'dropdown', label: 'Read', itemHref: `read.html${search}` },
        'game-ejk.html': { type: 'dropdown', label: 'Interact', itemHref: 'game-ejk.html' },
        'visualizer-gaza.html': { type: 'dropdown', label: 'Interact', itemHref: 'visualizer-gaza.html' },
        'game-ice.html': { type: 'dropdown', label: 'Interact', itemHref: 'game-ice.html' },
        'simulate.html': { type: 'dropdown', label: 'Interact', itemHref: 'simulate.html' },
        'about.html': { type: 'dropdown', label: 'More', itemHref: 'about.html' },
        'references.html': { type: 'dropdown', label: 'More', itemHref: 'references.html' },
    };

    const config = pageMap[path];
    if (!config) return;

    if (config.type === 'home') {
        const homeLink = document.querySelector('.nav__home');
        if (homeLink) homeLink.classList.add('nav__home--active');
        return;
    }

    const allDropdownBtns = document.querySelectorAll('.nav__dropdown-btn');
    let targetDropdown = null;

    allDropdownBtns.forEach((btn) => {
        const text = btn.textContent.trim();
        if (text.startsWith(config.label)) {
            btn.classList.add('nav__dropdown-btn--active');
            targetDropdown = btn.closest('.nav__dropdown');
        }
    });

    if (!targetDropdown) return;

    const items = targetDropdown.querySelectorAll('.nav__dropdown-item');
    items.forEach((item) => {
        const href = item.getAttribute('href') || '';
        if (href === config.itemHref || href.endsWith(config.itemHref)) {
            item.classList.add('nav__dropdown-item--active');
        }
    });

    const dropdownBtn = targetDropdown.querySelector('.nav__dropdown-btn');
    targetDropdown.addEventListener('click', () => {
        const isOpen = targetDropdown.classList.contains('nav__dropdown--open');
        if (isOpen) {
            dropdownBtn.classList.add('nav__dropdown-btn--active');
        } else {
            dropdownBtn.classList.remove('nav__dropdown-btn--active');
        }
    });
}
