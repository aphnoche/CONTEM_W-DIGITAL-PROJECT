(() => {
    const ROWS = 14, COLS = 18, MINES = 36;

    const SPEAKER_GENDER = {
        'WHISTLEBLOWER': 'male',
        'GUARD LOG': 'male',
        'INTERNAL REPORT': 'male',
        'INTERNAL MEMO': 'male',
        'WHISTLEBLOWER — FINAL TRANSMISSION': 'male',
        'DETAINEE TESTIMONY': 'female',
        'INTERCEPTED EMAIL': 'female',
    };

    const DIALOGUES = [
        { act: 'ACT I — THE BASELINE', speaker: 'WHISTLEBLOWER', text: 'If you are reading this, I got the drive out safely. I am a guard at San Otero. The public needs to know what happened here last month. Please, keep decrypting.' },
        { act: 'ACT I — THE BASELINE', speaker: 'DETAINEE TESTIMONY', text: 'They call this room the hielera. The icebox. There are fifty of us in a room built for fifteen. We sleep on concrete and the fluorescent lights never turn off.' },
        { act: 'ACT I — THE BASELINE', speaker: 'WHISTLEBLOWER', text: 'ICE is running active scans on this part of the server. I can bypass a firewall and show you exactly where one of their trackers is hidden. Do you want me to mark it?', isWhistleblower: true },
        { act: 'ACT I — THE BASELINE', speaker: 'DETAINEE TESTIMONY', text: 'The water tastes like bleach, and the food is rotting. But the worst part is the waiting. I have not seen a judge in two years. They want us to give up.' },
        { act: 'ACT I — THE BASELINE', speaker: 'GUARD LOG', text: 'A man in my block, Mateo, started coughing violently. He asked for a doctor. The guards told him to drink tap water and sit down.' },
        { act: 'ACT II — THE BREAKING POINT', speaker: 'DETAINEE TESTIMONY', text: 'Mateo collapsed this morning. He was burning with fever. They finally took him away, but they would not tell his brother where he went. We are terrified it is spreading.' },
        { act: 'ACT II — THE BREAKING POINT', speaker: 'WHISTLEBLOWER', text: 'You found a backdoor in the facility internal comms. I can ping the network to find where the ICE cybersecurity bots are hiding. Reveal a tracker location?', isWhistleblower: true },
        { act: 'ACT II — THE BREAKING POINT', speaker: 'DETAINEE TESTIMONY', text: 'We cannot let them ignore us anymore. Our block has decided to stop eating. We are sitting in the common area with our arms linked until they give us medical care.' },
        { act: 'ACT II — THE BREAKING POINT', speaker: 'INTERNAL REPORT', text: 'Detainees in Block C have initiated a hunger strike. They are demanding transparency regarding Detainee 894-Mateo. Requesting permission to break up the protest.' },
        { act: 'ACT II — THE BREAKING POINT', speaker: 'DETAINEE TESTIMONY', text: 'We have been starving for three days. Today, the guards came in wearing riot gear. They did not even ask us to disperse before they raised their weapons.' },
        { act: 'ACT III — THE RETALIATION', speaker: 'DETAINEE TESTIMONY', text: 'They sprayed pepper spray directly into the ventilation system. People were screaming, clawing at their own eyes. We could not breathe.' },
        { act: 'ACT III — THE RETALIATION', speaker: 'WHISTLEBLOWER', text: 'I managed to isolate a fragment of the facility security grid. It shows exactly which nodes are heavily monitored right now. Reveal a tracker location?', isWhistleblower: true },
        { act: 'ACT III — THE RETALIATION', speaker: 'DETAINEE TESTIMONY', text: 'They zip-tied our hands and dragged us out into the yard in the freezing rain. Anyone who spoke was hit.' },
        { act: 'ACT III — THE RETALIATION', speaker: 'INTERNAL MEMO', text: 'The incident in Block C is to be officially recorded as a violent riot. Any staff contradicting this narrative will face immediate termination.' },
        { act: 'ACT III — THE RETALIATION', speaker: 'DETAINEE TESTIMONY', text: 'In the middle of the night, they took the strike organizers away. Transferred to different facilities across the country so we could not organize again.' },
        { act: 'ACT IV — THE TRUTH', speaker: 'DETAINEE TESTIMONY', text: 'I was put in solitary confinement. The hole. A windowless box. They told me I would stay here until I signed a voluntary deportation order.' },
        { act: 'ACT IV — THE TRUTH', speaker: 'INTERCEPTED EMAIL', text: 'This document proves administration knew Mateo was highly contagious days before he collapsed. This is the smoking gun. Need help avoiding a tracker to get the rest?', isWhistleblower: true },
        { act: 'ACT IV — THE TRUTH', speaker: 'GUARD LOG', text: 'Mateo\'s brother received a call today. Mateo died in a hospital hundreds of miles away. He was shackled to the bed when his heart stopped.' },
        { act: 'ACT IV — THE TRUTH', speaker: 'DETAINEE TESTIMONY', text: 'They treat us like we are not human. Like we are animals in a cage. But we have voices. We just need someone on the outside to hear them.' },
        { act: 'ACT IV — THE TRUTH', speaker: 'WHISTLEBLOWER — FINAL TRANSMISSION', text: 'You have almost everything you need for the expose. Do not trigger a firewall now. The world needs to see this. Let me reveal one last tracker for you.', isWhistleblower: true },
    ];

    let board = [], revealed = [], flagged = [], mineSet = new Set();
    let gameOver = false, firstClick = true;
    let totalSafe = 0, revealedSafe = 0, flagCount = 0;
    let dialogueIndex = 0, milestoneInterval = 0;
    let timerInterval = null, elapsedSeconds = 0;
    let pendingWhistleblowerResolve = null;
    let spyglassActive = false;
    const SPY_RADIUS = 90;

    const $ = id => document.getElementById(id);

    // ═══ AUDIO SYSTEM ═══
    let audioCtx = null;
    let sfxEnabled = true;
    let bgmVolume = 0.35;

    function getAudioCtx() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
    }

    function playSFX(id, vol = 1) {
        if (!sfxEnabled) return;
        const el = $(id);
        if (!el) return;
        try {
            el.currentTime = 0;
            el.volume = vol;
            el.play().catch(() => {});
        } catch (_) {}
    }

    function startBGM() {
        const bgm = $('bgm');
        if (!bgm) return;
        bgm.volume = bgmVolume;
        bgm.play().catch(() => {});
    }

    function stopBGM() {
        const bgm = $('bgm');
        if (bgm) { bgm.pause(); bgm.currentTime = 0; }
    }

    // ═══ PROCEDURAL STATIC NOISE (Web Audio API) ═══
    function playStaticBurst(durationSec = 0.4, freq = 900, vol = 0.12) {
        const ctx = getAudioCtx();
        const bufSize = Math.floor(ctx.sampleRate * durationSec);
        const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1);

        const src = ctx.createBufferSource();
        src.buffer = buf;

        const lpf = ctx.createBiquadFilter();
        lpf.type = 'bandpass';
        lpf.frequency.value = freq;
        lpf.Q.value = 0.8;

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + durationSec);

        src.connect(lpf);
        lpf.connect(gain);
        gain.connect(ctx.destination);
        src.start();
    }

    // ═══ MUFFLED SPEECH SYSTEM (Web Speech API) ═══
    let voicesMale = [], voicesFemale = [], voicesLoaded = false;
    let activeSpeech = null;

    function loadVoices() {
        const all = window.speechSynthesis.getVoices();
        voicesMale = all.filter(v => /male|man|david|mark|daniel|alex|fred|jorge|diego/i.test(v.name));
        voicesFemale = all.filter(v => /female|woman|samantha|victoria|karen|moira|fiona|alice|laura|amelie/i.test(v.name));
        if (voicesMale.length === 0) voicesMale = all.filter(v => v.lang.startsWith('en'));
        if (voicesFemale.length === 0) voicesFemale = all.filter(v => v.lang.startsWith('en'));
        voicesLoaded = true;
    }

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    function speakMuffled(text, gender = 'male') {
        stopSpeech();
        if (!window.speechSynthesis) return;

        const utter = new SpeechSynthesisUtterance(text);
        utter.volume = 0.9;

        if (gender === 'male') {
            utter.pitch = 0.72;
            utter.rate = 0.82;
            if (voicesMale.length) utter.voice = voicesMale[0];
        } else {
            utter.pitch = 1.05;
            utter.rate = 0.88;
            if (voicesFemale.length) utter.voice = voicesFemale[0];
        }

        utter.onstart = () => {
            startRadioStatic();
        };
        utter.onend = utter.onerror = () => {
            stopRadioStatic();
        };

        activeSpeech = utter;
        window.speechSynthesis.speak(utter);
    }

    function stopSpeech() {
        window.speechSynthesis.cancel();
        stopRadioStatic();
        activeSpeech = null;
    }

    // Radio static oscillator that runs while speech plays
    let staticNode = null, staticGain = null;
    function startRadioStatic() {
        const ctx = getAudioCtx();
        const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1);

        staticNode = ctx.createBufferSource();
        staticNode.buffer = buf;
        staticNode.loop = true;

        const lpf = ctx.createBiquadFilter();
        lpf.type = 'lowpass';
        lpf.frequency.value = 1200;

        staticGain = ctx.createGain();
        staticGain.gain.value = 0.06;

        staticNode.connect(lpf);
        lpf.connect(staticGain);
        staticGain.connect(ctx.destination);
        staticNode.start();
    }

    function stopRadioStatic() {
        try { if (staticNode) { staticNode.stop(); staticNode.disconnect(); } } catch (_) {}
        staticNode = null;
        staticGain = null;
    }

    // ═══ GAME STATE ═══
    function init() {
        setupMenuListeners();
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                closeAllPanels();
                closeNarrative();
                closeWhistleblower();
            }
        });
    }

    function onMouseMove(e) {
        const boardWrap = document.querySelector('.ice-board-wrap');
        const onBoard = boardWrap && boardWrap.contains(e.target);
        const ch = $('ice-crosshair');

        if (spyglassActive) {
            ch.style.display = 'none';
            $('ice-game').classList.remove('ice-game--crosshair');
            const cursor = $('spyglass-cursor');
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            updateSpyMines(e.clientX, e.clientY);
            return;
        }

        if (onBoard) {
            ch.style.display = 'block';
            ch.style.left = e.clientX + 'px';
            ch.style.top = e.clientY + 'px';
            $('ice-game').classList.add('ice-game--crosshair');
        } else {
            ch.style.display = 'none';
            $('ice-game').classList.remove('ice-game--crosshair');
        }
    }

    function onMouseDown(e) {
        if (!$('ice-board').contains(e.target)) return;
        $('ice-crosshair').classList.add('ice-crosshair--click');
    }

    function onMouseUp() {
        $('ice-crosshair').classList.remove('ice-crosshair--click');
    }

    function toggleSpyglass() {
        const btn = $('btn-spyglass');
        if (btn.classList.contains('ice-hud__spy-btn--locked')) return;
        spyglassActive = !spyglassActive;
        const cursor = $('spyglass-cursor');
        const gameEl = $('ice-game');
        btn.classList.toggle('ice-hud__spy-btn--active', spyglassActive);
        cursor.style.display = spyglassActive ? 'block' : 'none';
        gameEl.classList.toggle('ice-game--spy', spyglassActive);
        if (!spyglassActive) clearSpyMines();
    }

    function updateSpyMines(mx, my) {
        clearSpyMines();
        if (mineSet.size === 0) return;
        mineSet.forEach(pos => {
            const r = Math.floor(pos / COLS), c = pos % COLS;
            if (revealed[r][c] || flagged[r][c]) return;
            const el = getCellEl(r, c);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dist = Math.hypot(cx - mx, cy - my);
            if (dist <= SPY_RADIUS) el.classList.add('ice-cell--spy-mine');
        });
    }

    function clearSpyMines() {
        document.querySelectorAll('.ice-cell--spy-mine')
            .forEach(el => el.classList.remove('ice-cell--spy-mine'));
    }

    function setupMenuListeners() {
        $('btn-play').addEventListener('click', startGame);
        $('btn-how').addEventListener('click', () => openPanel('panel-how'));
        $('btn-about-menu').addEventListener('click', () => openPanel('panel-about-menu'));
        $('btn-game-menu').addEventListener('click', goToMenu);
        $('btn-restart').addEventListener('click', () => { hideEndscreen(); startGame(); });
        $('btn-end-menu').addEventListener('click', () => { hideEndscreen(); goToMenu(); });
        $('btn-narrative-continue').addEventListener('click', closeNarrative);
        $('btn-wb-yes').addEventListener('click', () => resolveWhistleblower(true));
        $('btn-wb-no').addEventListener('click', () => resolveWhistleblower(false));
        $('btn-spyglass').addEventListener('click', toggleSpyglass);

        document.querySelectorAll('.ice-panel__close').forEach(btn => {
            btn.addEventListener('click', () => closePanel(btn.dataset.close));
        });
    }

    function openPanel(id) { document.getElementById(id).classList.add('ice-panel--open'); }
    function closePanel(id) { document.getElementById(id).classList.remove('ice-panel--open'); }
    function closeAllPanels() {
        document.querySelectorAll('.ice-panel').forEach(p => p.classList.remove('ice-panel--open'));
    }

    function goToMenu() {
        stopTimer();
        stopBGM();
        stopSpeech();
        spyglassActive = false;
        $('btn-spyglass').classList.remove('ice-hud__spy-btn--active');
        $('spyglass-cursor').style.display = 'none';
        $('ice-crosshair').style.display = 'none';
        $('ice-game').classList.remove('ice-game--spy', 'ice-game--crosshair');
        clearSpyMines();
        $('ice-game').style.display = 'none';
        $('ice-menu').style.display = '';
    }

    function startGame() {
        $('ice-menu').style.display = 'none';
        $('ice-game').style.display = 'flex';
        resetGame();
        startBGM();
    }

    function resetGame() {
        stopTimer();
        stopSpeech();
        spyglassActive = false;
        $('btn-spyglass').classList.remove('ice-hud__spy-btn--active');
        $('spyglass-cursor').style.display = 'none';
        $('ice-crosshair').style.display = 'none';
        $('ice-game').classList.remove('ice-game--spy', 'ice-game--crosshair');
        clearSpyMines();
        gameOver = false;
        firstClick = true;
        revealedSafe = 0;
        flagCount = 0;
        dialogueIndex = 0;
        elapsedSeconds = 0;
        pendingWhistleblowerResolve = null;

        const spyBtn = $('btn-spyglass');
        spyBtn.classList.add('ice-hud__spy-btn--locked');
        spyBtn.setAttribute('data-tooltip', 'Spyglass unavailable — decrypt your first file to calibrate the sensor.');

        board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
        revealed = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        flagged = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        mineSet = new Set();

        totalSafe = ROWS * COLS - MINES;
        milestoneInterval = Math.floor(totalSafe / 20);

        $('hud-mines').textContent = MINES;
        $('hud-flags').textContent = 0;
        $('hud-timer').textContent = '00:00';
        $('progress-pct').textContent = '0%';
        $('progress-fill').style.width = '0%';

        renderMilestones();
        renderBoard();
        hideEndscreen();
        closeNarrative();
        closeWhistleblower();
    }

    function renderMilestones() {
        const container = $('progress-milestones');
        container.innerHTML = '';
        for (let i = 1; i < 20; i++) {
            const tick = document.createElement('div');
            tick.className = 'ice-milestone-tick';
            tick.style.left = (i / 20 * 100) + '%';
            container.appendChild(tick);
        }
    }

    function placeMines(safeRow, safeCol) {
        const forbidden = new Set();
        for (let dr = -1; dr <= 1; dr++)
            for (let dc = -1; dc <= 1; dc++) {
                const r = safeRow + dr, c = safeCol + dc;
                if (r >= 0 && r < ROWS && c >= 0 && c < COLS)
                    forbidden.add(r * COLS + c);
            }
        while (mineSet.size < MINES) {
            const pos = Math.floor(Math.random() * ROWS * COLS);
            if (!forbidden.has(pos)) mineSet.add(pos);
        }
        for (let r = 0; r < ROWS; r++)
            for (let c = 0; c < COLS; c++)
                if (mineSet.has(r * COLS + c)) board[r][c] = -1;
        for (let r = 0; r < ROWS; r++)
            for (let c = 0; c < COLS; c++)
                if (board[r][c] !== -1) board[r][c] = countAdjacentMines(r, c);
    }

    function countAdjacentMines(r, c) {
        let count = 0;
        for (let dr = -1; dr <= 1; dr++)
            for (let dc = -1; dc <= 1; dc++) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && mineSet.has(nr * COLS + nc))
                    count++;
            }
        return count;
    }

    function renderBoard() {
        const boardEl = $('ice-board');
        boardEl.style.gridTemplateColumns = `repeat(${COLS}, 36px)`;
        boardEl.innerHTML = '';
        for (let r = 0; r < ROWS; r++)
            for (let c = 0; c < COLS; c++) {
                const cell = document.createElement('div');
                cell.className = 'ice-cell';
                cell.dataset.r = r;
                cell.dataset.c = c;
                cell.addEventListener('click', onCellClick);
                cell.addEventListener('contextmenu', e => e.preventDefault());
                attachLongPress(cell);
                boardEl.appendChild(cell);
            }
    }

    function getCellEl(r, c) {
        return $('ice-board').querySelector(`[data-r="${r}"][data-c="${c}"]`);
    }

    function onCellClick(e) {
        if (gameOver) return;
        const r = +e.currentTarget.dataset.r;
        const c = +e.currentTarget.dataset.c;
        if (revealed[r][c] || flagged[r][c]) return;

        getAudioCtx();

        if (firstClick) {
            firstClick = false;
            placeMines(r, c);
            const spyBtn = $('btn-spyglass');
            spyBtn.classList.remove('ice-hud__spy-btn--locked');
            spyBtn.removeAttribute('data-tooltip');
            startTimer();
        }

        if (mineSet.has(r * COLS + c)) {
            playSFX('sfx-mine', 0.9);
            triggerGameOver(r, c);
        } else {
            playSFX('sfx-reveal', 0.5);
            revealCell(r, c);
            checkWin();
        }
    }

    let longPressTimer = null;

    function attachLongPress(cell) {
        cell.addEventListener('pointerdown', e => {
            if (e.button === 2) return;
            longPressTimer = setTimeout(() => {
                longPressTimer = null;
                toggleFlag(cell);
            }, 500);
        });
        cell.addEventListener('pointerup', () => {
            clearTimeout(longPressTimer);
            longPressTimer = null;
        });
        cell.addEventListener('pointerleave', () => {
            clearTimeout(longPressTimer);
            longPressTimer = null;
        });
        cell.addEventListener('contextmenu', e => {
            e.preventDefault();
            toggleFlag(cell);
        });
    }

    function toggleFlag(cell) {
        if (gameOver) return;
        const r = +cell.dataset.r;
        const c = +cell.dataset.c;
        if (revealed[r][c]) return;
        getAudioCtx();

        flagged[r][c] = !flagged[r][c];
        flagCount += flagged[r][c] ? 1 : -1;
        $('hud-flags').textContent = flagCount;
        playSFX('sfx-flag', 0.7);
        updateCellDisplay(r, c);
    }

    function revealCell(r, c) {
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
        if (revealed[r][c] || flagged[r][c]) return;

        revealed[r][c] = true;
        revealedSafe++;
        updateCellDisplay(r, c);
        checkMilestone();

        if (board[r][c] === 0) {
            for (let dr = -1; dr <= 1; dr++)
                for (let dc = -1; dc <= 1; dc++)
                    if (dr !== 0 || dc !== 0)
                        revealCell(r + dr, c + dc);
        }
    }

    function updateCellDisplay(r, c) {
        const cell = getCellEl(r, c);
        if (!cell) return;
        cell.className = 'ice-cell';
        cell.textContent = '';

        if (flagged[r][c]) {
            cell.classList.add('ice-cell--flagged');
            cell.innerHTML = '<i class="fa-solid fa-lock" style="font-size:0.7rem"></i>';
        } else if (revealed[r][c]) {
            cell.classList.add('ice-cell--revealed', 'ice-cell--reveal-anim');
            const val = board[r][c];
            if (val > 0) {
                cell.textContent = val;
                cell.classList.add(`ice-num-${val}`);
            }
        }
    }

    function checkMilestone() {
        const pct = revealedSafe / totalSafe;
        $('progress-fill').style.width = (pct * 100) + '%';
        $('progress-pct').textContent = Math.round(pct * 100) + '%';

        const milestone = Math.floor(revealedSafe / milestoneInterval);
        if (milestone > dialogueIndex && dialogueIndex < DIALOGUES.length) {
            const dlg = DIALOGUES[dialogueIndex];
            dialogueIndex++;

            if (dlg.isWhistleblower) {
                showWhistleblower(dlg.text);
            } else {
                showNarrative(dlg);
            }
        }
    }

    function showNarrative(dlg) {
        const numStr = `FILE ${String(dialogueIndex).padStart(2, '0')} OF 20`;
        $('narrative-act').textContent = dlg.act;
        $('narrative-label').textContent = 'DECRYPTED AUDIO LOG';
        $('narrative-body').innerHTML = `<span class="narrative-number">${numStr}</span><span class="narrative-speaker">${dlg.speaker}</span>${dlg.text}`;
        $('ice-narrative').classList.add('ice-narrative--open');

        playSFX('sfx-narrative', 0.8);
        playStaticBurst(0.35, 1100, 0.1);

        const gender = SPEAKER_GENDER[dlg.speaker] || 'male';
        setTimeout(() => speakMuffled(dlg.text, gender), 300);
    }

    function closeNarrative() {
        $('ice-narrative').classList.remove('ice-narrative--open');
        stopSpeech();
    }

    function showWhistleblower(msg) {
        $('wb-msg').textContent = msg;
        $('ice-whistleblower').classList.add('ice-whistleblower--open');

        playSFX('sfx-whistleblower', 0.85);
        playStaticBurst(0.6, 700, 0.14);

        setTimeout(() => speakMuffled(msg, 'male'), 400);
    }

    function closeWhistleblower() {
        $('ice-whistleblower').classList.remove('ice-whistleblower--open');
        stopSpeech();
    }

    function resolveWhistleblower(accepted) {
        closeWhistleblower();
        if (accepted) {
            const unrevealed = [];
            for (const pos of mineSet) {
                const r = Math.floor(pos / COLS), c = pos % COLS;
                if (!flagged[r][c]) unrevealed.push({ r, c });
            }
            if (unrevealed.length > 0) {
                const { r, c } = unrevealed[Math.floor(Math.random() * unrevealed.length)];
                flagged[r][c] = true;
                flagCount++;
                $('hud-flags').textContent = flagCount;
                playSFX('sfx-flag', 0.9);
                updateCellDisplay(r, c);
                const el = getCellEl(r, c);
                if (el) {
                    el.style.boxShadow = '0 0 14px rgba(255,184,0,0.6)';
                    setTimeout(() => { el.style.boxShadow = ''; }, 2000);
                }
            }
        }
        const dlg = DIALOGUES[dialogueIndex - 1];
        if (dlg) showNarrative(dlg);
    }

    function triggerGameOver(hitR, hitC) {
        gameOver = true;
        stopTimer();
        stopSpeech();

        playStaticBurst(1.2, 300, 0.25);

        const hitEl = getCellEl(hitR, hitC);
        if (hitEl) {
            hitEl.classList.add('ice-cell--mine-hit', 'ice-cell--revealed');
            hitEl.innerHTML = '<i class="fa-solid fa-bug" style="color:var(--ice-danger)"></i>';
        }

        setTimeout(() => {
            mineSet.forEach(pos => {
                const r = Math.floor(pos / COLS), c = pos % COLS;
                if (!flagged[r][c] && !(r === hitR && c === hitC)) {
                    const el = getCellEl(r, c);
                    if (el) {
                        el.classList.add('ice-cell--mine-reveal', 'ice-cell--revealed');
                        el.innerHTML = '<i class="fa-solid fa-bug" style="font-size:0.7rem"></i>';
                    }
                }
            });
        }, 400);

        setTimeout(() => showEndscreen(false), 1400);
    }

    function checkWin() {
        if (revealedSafe >= totalSafe) {
            gameOver = true;
            stopTimer();
            playSFX('sfx-win', 0.9);
            setTimeout(() => showEndscreen(true), 700);
        }
    }

    function showEndscreen(win) {
        closeNarrative();
        stopSpeech();
        const icon = $('endscreen-icon');
        const title = $('endscreen-title');
        const sub = $('endscreen-sub');
        const epilogue = $('endscreen-epilogue');

        if (win) {
            icon.className = 'ice-endscreen__icon ice-endscreen__icon--win';
            icon.innerHTML = '<i class="fa-solid fa-download"></i>';
            title.style.color = 'var(--ice-success)';
            title.textContent = 'DOWNLOAD COMPLETE';
            sub.textContent = 'You have successfully decrypted all San Otero files. The exposé is ready to publish.';
            epilogue.innerHTML = `Your investigation prompts an immediate Congressional hearing. Within six months, the fictional San Otero facility is shuttered and subjected to a federal audit.<br><br><strong>In reality:</strong> ICE detention reached a record 68,289 individuals in 2025. NGOs including the ACLU and Human Rights Watch continue to document deaths, inadequate medical care, and suppression of protests inside real detention facilities.`;
        } else {
            icon.className = 'ice-endscreen__icon ice-endscreen__icon--loss';
            icon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
            title.style.color = 'var(--ice-danger)';
            title.textContent = 'CONNECTION SEVERED';
            sub.textContent = 'ICE Cyber-Security has detected your intrusion. The drive has been remotely wiped. The truth remains buried.';
            epilogue.innerHTML = `The whistleblower's contact goes dark. The files are lost.<br><br><strong>In reality:</strong> ICE detention reached a record 68,289 individuals in 2025 — 73.6% with no criminal record. Some testimonies never reach the public.`;
        }

        $('ice-endscreen').classList.add('ice-endscreen--open');
    }

    function hideEndscreen() {
        $('ice-endscreen').classList.remove('ice-endscreen--open');
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            elapsedSeconds++;
            const m = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
            const s = String(elapsedSeconds % 60).padStart(2, '0');
            $('hud-timer').textContent = `${m}:${s}`;
        }, 1000);
    }

    function stopTimer() { clearInterval(timerInterval); }

    init();
})();
