document.addEventListener('DOMContentLoaded', () => {
    const isSmallScreen = window.matchMedia('(max-width: 740px)').matches;
    if (!isSmallScreen) return;

    const body = document.body;
    if (!body) return;

    body.classList.add('unified-lockout-active');

    const lockout = document.createElement('div');
    lockout.className = 'unified-lockout';
    lockout.innerHTML = `
        <div class="unified-lockout__panel">
            <div class="unified-lockout__header">
                <div class="unified-lockout__icon"><i class="fa-solid fa-desktop"></i></div>
                <h2 class="unified-lockout__title">Desktop or Tablet Required</h2>
            </div>
            <p class="unified-lockout__copy">This experience is designed for larger screens. Please open this game or simulator on a desktop or tablet browser.</p>
            <ul class="unified-lockout__devices">
                <li class="unified-lockout__badge"><i class="fa-brands fa-windows"></i> Windows</li>
                <li class="unified-lockout__badge"><i class="fa-brands fa-apple"></i> macOS</li>
                <li class="unified-lockout__badge"><i class="fa-brands fa-linux"></i> Linux</li>
                <li class="unified-lockout__badge"><i class="fa-brands fa-android"></i> Android Tablet</li>
                <li class="unified-lockout__badge"><i class="fa-brands fa-apple"></i> iPad</li>
            </ul>
            <div class="unified-lockout__actions">
                <a class="unified-lockout__btn" href="index.html"><i class="fa-solid fa-arrow-left"></i> Back to Home</a>
                <a class="unified-lockout__btn unified-lockout__btn--ghost" href="read.html"><i class="fa-solid fa-book-open"></i> Read Articles</a>
            </div>
        </div>
    `;

    body.appendChild(lockout);
});
