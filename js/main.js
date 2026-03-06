document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initHeroDoodles();
    initTopicCards();
    initMap();
    initPuzzle();
    initAdvocacy();
    initReferences();
    revealOnScroll();
});

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

function initAdvocacy() {
    const quote = document.getElementById('advocacy-quote');
    quote.textContent = ADVOCACY_TEXT;
    quote.closest('.advocacy').classList.add('reveal');
}

function initReferences() {
    const grid = document.getElementById('references-grid');
    const topicNames = { ejk: 'EJK — Philippines', gaza: 'Gaza & Middle East', ice: 'ICE — United States' };

    Object.entries(REFERENCES).forEach(([key, refs]) => {
        const group = document.createElement('div');
        group.classList.add('references__group', 'reveal');

        const title = document.createElement('h3');
        title.classList.add('references__group-title');
        title.style.color = TOPICS[key]?.color || 'inherit';
        title.textContent = topicNames[key] || key;
        group.appendChild(title);

        const list = document.createElement('ol');
        list.classList.add('references__list');

        refs.forEach((ref) => {
            const li = document.createElement('li');
            li.classList.add('references__item');
            li.innerHTML = `${ref.text} <a href="${ref.url}" target="_blank" rel="noopener">${ref.url}</a>`;
            list.appendChild(li);
        });

        group.appendChild(list);
        grid.appendChild(group);
    });
}
