document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initHeroDoodles();
    initTopicCards();
    initMap();
    initPuzzle();
    initInjustices();
    initAdvocacy();
    initDotNav();
    revealOnScroll();
});

function initDotNav() {
    const items = document.querySelectorAll('.dot-nav__item');
    const sectionIds = Array.from(items).map((item) => item.dataset.section);
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                items.forEach((item) => item.classList.remove('dot-nav__item--active'));
                const active = document.querySelector(`.dot-nav__item[data-section="${entry.target.id}"]`);
                if (active) active.classList.add('dot-nav__item--active');
            }
        });
    }, { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' });

    sections.forEach((section) => observer.observe(section));
}

function initNav() {
    const nav = document.getElementById('nav');
    const burger = document.getElementById('nav-burger');
    const links = nav.querySelector('.nav__links');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav--scrolled', window.scrollY > 40);
    }, { passive: true });

    burger.addEventListener('click', () => {
        burger.classList.toggle('nav__burger--open');
        links.classList.toggle('nav__links--open');
    });

    links.querySelectorAll('.nav__link').forEach((link) => {
        link.addEventListener('click', () => {
            burger.classList.remove('nav__burger--open');
            links.classList.remove('nav__links--open');
        });
    });
}

function initHeroDoodles() {
    const container = document.getElementById('hero-doodles');
    const icons = ['✊', '🕊️', '⚖️', '🌍', '📜', '🤝', '🛡️', '❤️', '🏛️', '🔍'];
    const count = window.innerWidth < 768 ? 8 : 14;

    for (let i = 0; i < count; i++) {
        const d = document.createElement('span');
        d.classList.add('hero__doodle');
        d.textContent = icons[i % icons.length];
        d.style.left = Math.random() * 90 + 5 + '%';
        d.style.top = Math.random() * 80 + 10 + '%';
        d.style.animationDelay = (Math.random() * 8) + 's';
        d.style.animationDuration = (10 + Math.random() * 8) + 's';
        d.style.fontSize = (1.2 + Math.random() * 1.5) + 'rem';
        container.appendChild(d);
    }
}

function initTopicCards() {
    const grid = document.getElementById('topics-grid');
    const iconMap = { ejk: 'fa-skull-crossbones', gaza: 'fa-bomb', ice: 'fa-handcuffs' };

    Object.values(TOPICS).forEach((topic) => {
        const card = document.createElement('article');
        card.classList.add('topic-card', 'reveal');
        card.innerHTML = `
      <div class="topic-card__icon" style="background:${topic.color}">
        <i class="fa-solid ${iconMap[topic.id]}"></i>
      </div>
      <h3 class="topic-card__title" style="color:${topic.color}">${topic.fullTitle}</h3>
      <p class="topic-card__period">${topic.subtitle} · ${topic.period}</p>
      <div class="topic-card__stat">
        <span class="topic-card__stat-value" style="color:${topic.color}">${topic.stat}</span>
        <span class="topic-card__stat-label">${topic.statLabel}</span>
      </div>
      <p class="topic-card__summary">${topic.summary}</p>
      <span class="topic-card__cta" style="color:${topic.color}">Explore <i class="fa-solid fa-arrow-right"></i></span>`;

        card.addEventListener('click', () => {
            playAudio('click');
            window.location.href = `topic.html?t=${topic.id}`;
        });

        grid.appendChild(card);
    });
}

function initInjustices() {
    const grid = document.getElementById('injustices-grid');

    const cards = [
        {
            id: 'ejk',
            title: 'Extrajudicial Killings',
            subtitle: 'Philippines · 2016–2022',
            color: TOPICS.ejk.color,
            icon: 'fa-skull-crossbones',
            image: 'https://placehold.co/600x340/2c2825/faf5ee?text=EJK+Philippines',
            body: 'Under President Duterte\'s "War on Drugs," tens of thousands of Filipinos were killed without due process. Victims were overwhelmingly from impoverished communities. Police planted evidence, fabricated narratives of self-defense, and operated under government-sanctioned immunity. Families were left without answers or justice.',
            hasGame: true
        },
        {
            id: 'gaza',
            title: 'The Gaza Crisis',
            subtitle: 'Palestine · 2023–Present',
            color: TOPICS.gaza.color,
            icon: 'fa-bomb',
            image: 'https://placehold.co/600x340/2c2825/faf5ee?text=Gaza+Crisis',
            body: 'Over 69,000 Palestinians have been killed, including 19,000 children. Israeli forces destroyed 81% of Gaza\'s buildings, all 36 hospitals, and imposed an 11-week total blockade. Hundreds died of starvation. International courts have pursued charges of war crimes, crimes against humanity, and genocide.'
        },
        {
            id: 'ice',
            title: 'ICE Mass Detention',
            subtitle: 'United States · 2025–Present',
            color: TOPICS.ice.color,
            icon: 'fa-handcuffs',
            image: 'https://placehold.co/600x340/2c2825/faf5ee?text=ICE+Detention',
            body: 'ICE detention levels reached a record 68,289 individuals — 73.6% with no criminal record. Deaths in custody tripled. The $45 billion budget flows to private prison corporations through no-bid contracts. The 287(g) program has turned local police into immigration agents across a third of the country, tearing apart families and communities.'
        }
    ];

    cards.forEach((data) => {
        const card = document.createElement('article');
        card.classList.add('injustice-card', 'reveal');

        let actions = `<a href="topic.html?t=${data.id}" class="injustice-card__btn injustice-card__btn--explore" style="background:${data.color}"><i class="fa-solid fa-diagram-project"></i> Mind Map</a>`;

        if (data.hasGame) {
            actions += `<a href="game.html" class="injustice-card__btn injustice-card__btn--game"><i class="fa-solid fa-gamepad"></i> Play the Game</a>`;
        }

        card.innerHTML = `
      <div class="injustice-card__image">
        <img src="${data.image}" alt="${data.title}" loading="lazy">
        <span class="injustice-card__tag" style="background:${data.color}"><i class="fa-solid ${data.icon}"></i> ${data.subtitle}</span>
      </div>
      <div class="injustice-card__content">
        <h3 class="injustice-card__title" style="color:${data.color}">${data.title}</h3>
        <p class="injustice-card__body">${data.body}</p>
        <div class="injustice-card__actions">${actions}</div>
      </div>`;

        grid.appendChild(card);
    });
}

function initAdvocacy() {
    const quote = document.getElementById('advocacy-quote');
    quote.textContent = ADVOCACY_TEXT;
    quote.closest('.advocacy').classList.add('reveal');
}
