const CHARS = {
    judge:      { name: 'JUDGE MOTOC',      side: 'left',  img: 'assets/images/game/char_judge.png' },
    prosecutor: { name: 'PROSECUTOR NIANG', side: 'right', img: 'assets/images/game/char_prosecutor.png' },
    defense:    { name: 'DEFENSE KAUFMAN',  side: 'left',  img: 'assets/images/game/char_defense.png' },
    witness:    { name: 'WITNESS (HRW)',    side: 'left',  img: 'assets/images/game/char_witness.png' },
    narrator:   { name: 'NARRATOR',        side: null,    img: null },
};

const SCRIPT = [
    { type: 'scene', bg: 'assets/images/game/bg_courtroom.png', scene: 'SCENE 1', sub: 'The Hague — ICC Pre-Trial Chamber I' },
    { type: 'dialogue', char: 'narrator', text: 'February 23, 2026. The International Criminal Court, The Hague. The atmosphere is heavy. Today marks the Confirmation of Charges hearing in the case of the Prosecutor v. Rodrigo Roa Duterte.' },
    { type: 'dialogue', char: 'judge', text: 'This Pre-Trial Chamber of the International Criminal Court is now in session. We are here for the Confirmation of Charges in the case of the Prosecutor v. Rodrigo Roa Duterte.' },
    { type: 'dialogue', char: 'judge', text: 'I must remind the gallery: the purpose of this hearing is to determine whether there are "substantial grounds to believe" that Mr. Duterte committed the crimes charged. We are not determining guilt today.' },
    { type: 'dialogue', char: 'prosecutor', text: 'The Prosecution is ready, Your Honor.' },
    { type: 'dialogue', char: 'defense', text: 'The Defense is present, Your Honor. Though under protest.' },
    { type: 'dialogue', char: 'judge', text: 'Noted. For the record — the suspect is currently detained at the ICC Detention Centre in Scheveningen following his arrest in Manila on March 11, 2025. He is monitoring proceedings via video link.' },
    { type: 'video', show: true },
    { type: 'dialogue', char: 'judge', text: 'Prosecutor Niang, you may read the charges.' },
    { type: 'dialogue', char: 'prosecutor', text: 'Your Honor! The Prosecution charges Rodrigo Duterte with Crimes Against Humanity — specifically, murder and attempted murder. These acts were committed between November 1, 2011, and March 16, 2019.' },
    { type: 'flash', word: 'OBJECTION!', style: 'objection', speaker: 'defense' },
    { type: 'dialogue', char: 'defense', text: 'This court is overstepping its bounds! The Republic of the Philippines withdrew from the Rome Statute. That withdrawal became final on March 17, 2019. You have ZERO jurisdiction here!' },
    { type: 'dialogue', char: 'judge', text: 'A bold claim, Mr. Kaufman. Prosecutor Niang — the Defense challenges our very right to hold this hearing. How do you respond to the question of jurisdiction?' },
    {
        type: 'choice',
        prompt: 'Select the correct legal argument to counter the Defense.',
        options: [
            { text: 'A: "The ICC has universal jurisdiction over any country in the world, regardless of treaties."', correct: false },
            { text: 'B: "Article 127 states withdrawal does not discharge obligations for crimes committed before the withdrawal took effect."', correct: true },
            { text: 'C: "The suspect was arrested on an international warrant, which legally overrides national sovereignty."', correct: false },
        ],
        wrongSpeaker: 'judge',
        wrongResponse: 'That is legally inaccurate, Prosecutor. The ICC is bound by the Rome Statute, not universal jurisdiction.',
        correctFlash: 'TAKE THAT!', correctStyle: 'takethat',
    },
    { type: 'dialogue', char: 'prosecutor', text: 'The Defense seems to be ignoring Article 127 of the Rome Statute. Yes, the Philippines withdrew in 2019 — but withdrawal does not absolve criminal liability for acts committed while they were still a member.' },
    { type: 'dialogue', char: 'prosecutor', text: 'Our charges span strictly from 2011 to March 16, 2019 — the exact period the Philippines was an active State Party!' },
    { type: 'dialogue', char: 'judge', text: 'The Prosecution is correct. The Appeals Chamber has repeatedly upheld this Chamber\'s jurisdiction on this very basis. The objection is overruled. Prosecutor, call your first witness.' },
    { type: 'video', show: false },
    { type: 'scene', bg: 'assets/images/game/bg_courtroom.png', scene: 'SCENE 2', sub: 'The Cross-Examination' },
    { type: 'dialogue', char: 'prosecutor', text: 'The Prosecution calls an independent investigator from Human Rights Watch to the stand.' },
    { type: 'dialogue', char: 'witness', text: 'I have spent years documenting the "War on Drugs." Official government figures cap the death toll at around 6,000. However, independent monitors and our investigations estimate the true toll to be between 12,000 and 30,000.' },
    { type: 'dialogue', char: 'prosecutor', text: 'Can you describe the nature of these killings?' },
    { type: 'dialogue', char: 'witness', text: 'They were not random. There was a clear, systematic modus operandi. Police or unidentified assailants would target alleged drug users — mostly from low-income, marginalized communities. We documented 49 specific incidents for this hearing.' },
    { type: 'flash', word: 'OBJECTION!', style: 'objection', speaker: 'defense' },
    { type: 'dialogue', char: 'defense', text: '"Systematic?" "Targeted?" These are inflammatory words! The police were conducting legitimate law enforcement! When officers are fired upon by drug syndicates, they have the right to self-defense!' },
    { type: 'dialogue', char: 'judge', text: 'Prosecutor — it is true a state has the right to enforce its domestic laws. How do you prove this was a Crime Against Humanity, and not simply violent resistance to law enforcement?' },
    {
        type: 'choice',
        prompt: 'Select the piece of evidence that disproves the "Self-Defense" narrative.',
        options: [
            { text: 'A: Present the autopsy reports showing victims were shot in the back and possessed no weapons.', correct: true },
            { text: 'B: Argue that drugs are not actually a serious problem in the Philippines.', correct: false },
            { text: 'C: Point out that some police officers were convicted in Philippine domestic courts.', correct: false },
        ],
        wrongSpeaker: 'judge',
        wrongResponse: 'That argument actually undermines our position, Prosecutor! Stay on point.',
        correctFlash: 'HOLD IT!', correctStyle: 'holdit',
    },
    { type: 'evidence', title: 'Forensics Summary', content: 'Forensic analysis and eyewitness testimony show victims were frequently unarmed. Autopsies reveal many were shot execution-style — wounds to the head and back. Evidence of planted weapons and drugs at crime scenes documented across 49 verified incidents.' },
    { type: 'dialogue', char: 'prosecutor', text: 'If these were merely cases of "self-defense," why does the physical evidence tell a completely different story? We have forensic evidence of execution-style wounds and planted evidence at the crime scenes.' },
    { type: 'dialogue', char: 'prosecutor', text: 'Under international law, a Crime Against Humanity requires a "widespread and systematic attack directed against any civilian population." This was state policy — not accidents.' },
    { type: 'dialogue', char: 'witness', text: 'That is correct. Furthermore, we have public broadcasts of the suspect explicitly inciting this violence against his own citizens.' },
    { type: 'scene', bg: 'assets/images/game/bg_courtroom.png', scene: 'SCENE 3', sub: "The Suspect's Voice" },
    { type: 'dialogue', char: 'defense', text: 'Public broadcasts? You mean political rhetoric! My client is famous for his colorful language. You cannot prosecute a man for hyperbole!' },
    { type: 'dialogue', char: 'judge', text: 'I would like to hear from the suspect regarding this "rhetoric." Mr. Duterte, you are joining us via video link from the Scheveningen Detention Centre. Do you have a statement?' },
    { type: 'video', show: true },
    { type: 'dialogue', char: 'narrator', text: '[DUTERTE VIA VIDEO]: "I do not recognize this court. I did what I had to do to protect my country from being destroyed by drugs. If I am responsible for the deaths of criminals — I take full responsibility. But I am not guilty of crimes against humanity. I am guilty of loving my country."' },
    { type: 'video', show: false },
    { type: 'dialogue', char: 'defense', text: 'You see? He was protecting his citizens. The police were given rules of engagement: use lethal force only when threatened.' },
    { type: 'dialogue', char: 'prosecutor', text: 'Is that so?' },
    {
        type: 'choice',
        prompt: 'Counter the defense\'s claim that Duterte only authorized legal rules of engagement.',
        options: [
            { text: 'A: Demand that Duterte be forced to fly to the court immediately.', correct: false },
            { text: 'B: Present video evidence of Duterte\'s 2016 speeches ordering the slaughter of suspects without trial.', correct: true },
            { text: 'C: Request a 60-day extension to find more witnesses.', correct: false },
        ],
        wrongSpeaker: 'judge',
        wrongResponse: 'Prosecutor, please stay on point. That does not address the current legal argument.',
        correctFlash: 'OBJECTION!', correctStyle: 'objection',
    },
    { type: 'evidence', title: 'Public Speeches — 2016', content: 'Recorded public statements by the suspect: "If I become president, I will order the military and the police to hunt down the drug lords... and kill them." Duterte offered bounties on suspects and promised pardons to officers who faced domestic charges for killings — creating a documented policy of state-sanctioned impunity.' },
    { type: 'dialogue', char: 'prosecutor', text: 'Let the record reflect the truth! In 2016, the suspect explicitly ordered the killing of drug suspects. He offered bounties. He promised pardons. This was a green light for impunity. The burden of proof has been overwhelmingly met!' },
    { type: 'scene', bg: 'assets/images/game/bg_courtroom.png', scene: 'SCENE 4', sub: 'The Verdict Awaits' },
    { type: 'dialogue', char: 'defense', text: 'Your Honor, the Prosecution has cherry-picked statements and relied on biased NGO reports. The Philippines is a sovereign nation that handled an internal crisis. Confirming these charges sets a dangerous precedent!' },
    { type: 'dialogue', char: 'prosecutor', text: 'No, Your Honor. Confirming these charges sets a precedent that no one — no matter their political power — is above international law. The families of the victims have waited nearly a decade. Truth is the antidote to impunity.' },
    { type: 'dialogue', char: 'judge', text: 'The Chamber has heard sufficient arguments from both sides. We have examined jurisdiction, the nature of the alleged crimes, and the suspect\'s public statements.' },
    { type: 'dialogue', char: 'judge', text: 'Under the Rome Statute, this Chamber now has 60 calendar days to deliberate. We will issue a written decision on whether to decline, request amendments, or confirm the charges.' },
    { type: 'dialogue', char: 'judge', text: 'Until then, the suspect\'s appeals for interim release have been rejected due to flight risk. He shall remain in custody at the ICC Detention Centre in The Hague. This hearing is adjourned.' },
    { type: 'end' },
];

// ══════════════ AUDIO MANAGER ══════════════
const Audio = (() => {
    const bgm = document.getElementById('bgm');
    const sfxCorrect = document.getElementById('sfx-correct');
    const sfxWrong = document.getElementById('sfx-wrong');
    const sfxClick = document.getElementById('sfx-click');
    const sfxObjection = document.getElementById('sfx-objection');
    const sfxTakethat = document.getElementById('sfx-takethat');

    let bgmOn = true, sfxOn = true;

    function playSfx(el) {
        if (!sfxOn || !el) return;
        el.currentTime = 0;
        el.play().catch(() => {});
    }

    // Procedural SFX using Web Audio API for objection/flash stab
    let ctx = null;
    function getCtx() {
        if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
        return ctx;
    }

    function playStab(type) {
        if (!sfxOn) return;
        if (type === 'takethat') {
            sfxTakethat.currentTime = 0;
            sfxTakethat.play().catch(() => {});
            return;
        }
        sfxObjection.currentTime = 0;
        sfxObjection.play().catch(() => {});
    }

    function startBgm() {
        if (!bgmOn || !bgm) return;
        bgm.volume = 0.35;
        bgm.play().catch(() => {});
    }

    function stopBgm() {
        if (!bgm) return;
        bgm.pause();
        bgm.currentTime = 0;
    }

    function toggleBgm(on) {
        bgmOn = on;
        on ? startBgm() : stopBgm();
    }

    function toggleSfx(on) { sfxOn = on; }

    function playTick() {
        if (!sfxOn) return;
        const ac = getCtx();
        const buf = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.008), ac.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.18;
        const src = ac.createBufferSource();
        src.buffer = buf;
        const g = ac.createGain();
        g.gain.setValueAtTime(0.14, ac.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.02);
        src.connect(g);
        g.connect(ac.destination);
        src.start();
        src.stop(ac.currentTime + 0.02);
    }

    function playGavel() {
        if (!sfxOn) return;
        const ac = getCtx();
        [[180, 0.6], [90, 1.1]].forEach(([freq, t]) => {
            const osc = ac.createOscillator();
            const g = ac.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, ac.currentTime + t);
            osc.frequency.exponentialRampToValueAtTime(freq * 0.4, ac.currentTime + t + 0.25);
            g.gain.setValueAtTime(0.45, ac.currentTime + t);
            g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + t + 0.4);
            osc.connect(g);
            g.connect(ac.destination);
            osc.start(ac.currentTime + t);
            osc.stop(ac.currentTime + t + 0.5);
        });
    }

    return {
        startBgm, stopBgm, toggleBgm, toggleSfx,
        correct: () => playSfx(sfxCorrect),
        wrong:   () => playSfx(sfxWrong),
        click:   () => playSfx(sfxClick),
        stab:    (type) => playStab(type),
        type:    () => playTick(),
        gavel:   () => playGavel(),
    };
})();

// ══════════════ MENU SYSTEM ══════════════
function initMenu() {
    const menuScreen = document.getElementById('menu-screen');
    const gameScreen = document.getElementById('game-screen');
    const overlay = document.createElement('div');
    overlay.className = 'menu-panel-overlay';
    document.body.appendChild(overlay);

    function openPanel(id) {
        Audio.click();
        document.getElementById(id).classList.add('menu-panel--open');
        overlay.classList.add('menu-panel-overlay--visible');
    }

    function closeAll() {
        document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('menu-panel--open'));
        overlay.classList.remove('menu-panel-overlay--visible');
    }

    overlay.addEventListener('click', closeAll);
    document.querySelectorAll('.menu-panel__close').forEach(btn => {
        btn.addEventListener('click', closeAll);
    });

    document.getElementById('btn-about').addEventListener('click', () => openPanel('panel-about'));
    document.getElementById('btn-tutorial').addEventListener('click', () => openPanel('panel-tutorial'));
    document.getElementById('btn-settings').addEventListener('click', () => openPanel('panel-settings'));

    document.getElementById('btn-play').addEventListener('click', () => {
        Audio.click();
        menuScreen.style.display = 'none';
        gameScreen.style.display = 'flex';
        Audio.startBgm();
        advance();
    });

    document.getElementById('btn-game-menu').addEventListener('click', () => {
        Audio.click();
        gameScreen.style.display = 'none';
        menuScreen.style.display = 'flex';
        Audio.stopBgm();
        resetGame();
    });

    document.getElementById('game-to-menu').addEventListener('click', () => {
        document.getElementById('game-end').classList.remove('game-end--visible');
        gameScreen.style.display = 'none';
        menuScreen.style.display = 'flex';
        Audio.stopBgm();
        resetGame();
    });

    document.getElementById('game-restart').addEventListener('click', () => {
        Audio.click();
        document.getElementById('game-end').classList.remove('game-end--visible', 'game-over');
        resetGame();
        Audio.startBgm();
        advance();
    });

    // Toggles
    function initToggle(id, onCb, offCb) {
        const btn = document.getElementById(id);
        btn.addEventListener('click', () => {
            const isOn = btn.dataset.on !== 'true';
            btn.dataset.on = isOn;
            isOn ? onCb() : offCb();
        });
    }
    initToggle('toggle-bgm', () => Audio.toggleBgm(true), () => Audio.toggleBgm(false));
    initToggle('toggle-sfx', () => Audio.toggleSfx(true), () => Audio.toggleSfx(false));
}

function resetGame() {
    state.index = 0;
    state.credibility = 5;
    state.typing = false;
    state.pendingChoice = false;
    state.showingEvidence = false;
    state.gameEnded = false;
    clearInterval(state.typeInterval);
    updateCredUI();
    els.text.textContent = '';
    els.advance.style.display = 'none';
    els.choicesOverlay.classList.remove('game-choices-overlay--visible');
    els.evidence.classList.remove('game-evidence--visible');
    els.sceneTitle.classList.remove('game-scene-title--visible');
    els.videoFrame.classList.remove('game-video-frame--visible');
    [els.charLeft, els.charRight].forEach(el => el.classList.add('game-char--hidden'));
    els.bg.style.backgroundImage = '';
    const dw = document.querySelector('.game-dialog-wrapper');
    if (dw) dw.style.display = '';
}

// ══════════════ GAME ENGINE ══════════════
const state = {
    index: 0, credibility: 5, maxCred: 5,
    typing: false, pendingChoice: false,
    showingEvidence: false, typeInterval: null,
    gameEnded: false,
};

const els = {
    bg: document.getElementById('game-bg'),
    charLeft: document.getElementById('char-left'),
    charRight: document.getElementById('char-right'),
    nameplate: document.getElementById('dialogue-nameplate'),
    nameplateText: document.getElementById('dialogue-name-text'),
    text: document.getElementById('dialogue-text'),
    advance: document.getElementById('dialogue-advance'),
    flash: document.getElementById('game-flash'),
    flashWord: document.getElementById('flash-word'),
    choicesOverlay: document.getElementById('game-choices-overlay'),
    choiceList: document.getElementById('choice-list'),
    evidence: document.getElementById('game-evidence'),
    evidenceTitle: document.getElementById('evidence-title'),
    evidenceContent: document.getElementById('evidence-content'),
    evidenceDismiss: document.getElementById('evidence-dismiss'),
    sceneTitle: document.getElementById('game-scene-title'),
    sceneTitleMain: document.getElementById('scene-title-main'),
    sceneTitleSub: document.getElementById('scene-title-sub'),
    credPips: document.querySelectorAll('.cred-pip'),
    videoFrame: document.getElementById('video-frame'),
    penalty: document.getElementById('game-penalty'),
    gameEnd: document.getElementById('game-end'),
    gameEndTitle: document.getElementById('game-end-title'),
};

function updateCredUI() {
    els.credPips.forEach((pip, i) => pip.classList.toggle('cred-pip--lost', i >= state.credibility));
}

function applyPenalty() {
    Audio.wrong();
    if (state.credibility > 0) state.credibility--;
    updateCredUI();
    els.penalty.textContent = '— CREDIBILITY LOST';
    els.penalty.classList.remove('game-penalty--show');
    void els.penalty.offsetWidth;
    els.penalty.classList.add('game-penalty--show');
    if (state.credibility === 0) { setTimeout(() => endGame(false), 1600); return true; }
    return false;
}

function setBackground(url) { els.bg.style.backgroundImage = `url('${url}')`; }

function setChars(charKey) {
    const char = CHARS[charKey] || null;
    [els.charLeft, els.charRight].forEach(el => {
        el.classList.add('game-char--dim');
        el.classList.remove('game-char--active', 'game-char--hidden');
        el.style.zIndex = '1';
    });
    if (!char || !char.img) {
        [els.charLeft, els.charRight].forEach(el => el.classList.add('game-char--hidden'));
        return;
    }
    const target = char.side === 'left' ? els.charLeft : els.charRight;
    const other  = char.side === 'left' ? els.charRight : els.charLeft;
    if (target.dataset.char !== charKey) { target.src = char.img; target.dataset.char = charKey; }
    target.classList.remove('game-char--dim', 'game-char--hidden');
    target.classList.add('game-char--active', 'game-char--speaking');
    target.style.zIndex = '4';
    other.classList.remove('game-char--hidden');
    other.style.zIndex = '1';
    target.addEventListener('animationend', () => target.classList.remove('game-char--speaking'), { once: true });
}


function typeText(text, onDone) {
    state.typing = true;
    els.advance.style.display = 'none';
    let i = 0;
    clearInterval(state.typeInterval);
    els.text.textContent = '';
    state.typeInterval = setInterval(() => {
        const ch = text[i++];
        els.text.textContent += ch;
        if (ch && ch !== ' ') Audio.type();
        if (i >= text.length) {
            clearInterval(state.typeInterval);
            state.typing = false;
            els.advance.style.display = 'flex';
            if (onDone) onDone();
        }
    }, 20);
}

function skipType(text) {
    clearInterval(state.typeInterval);
    state.typing = false;
    els.text.textContent = text;
    els.advance.style.display = 'flex';
}

function showFlash(word, style, cb) {
    const styleMap = { objection: 'objection', holdit: 'holdit', takethat: 'takethat' };
    Audio.stab(styleMap[style] || 'objection');
    els.flash.className = `game-flash flash--${style}`;
    els.flashWord.textContent = word;
    els.flash.classList.add('game-flash--visible');
    setTimeout(() => { els.flash.classList.remove('game-flash--visible'); if (cb) cb(); }, 950);
}

function showSceneTitle(scene, sub, cb) {
    els.sceneTitleMain.textContent = scene;
    els.sceneTitleSub.textContent = sub;
    els.sceneTitle.classList.add('game-scene-title--visible');
    setTimeout(() => { els.sceneTitle.classList.remove('game-scene-title--visible'); setTimeout(cb, 400); }, 2200);
}

function showEvidence(title, content) {
    state.showingEvidence = true;
    els.evidenceTitle.textContent = title;
    els.evidenceContent.textContent = content;
    els.evidence.classList.add('game-evidence--visible');
}

function hideEvidence() {
    state.showingEvidence = false;
    els.evidence.classList.remove('game-evidence--visible');
    setTimeout(advance, 200);
}

function setNameplate(char) {
    if (!char || char === 'narrator') { els.nameplate.style.display = 'none'; return; }
    els.nameplate.style.display = 'flex';
    const c = CHARS[char];
    els.nameplateText.textContent = c ? c.name : char.toUpperCase();
}

function showChoices(step) {
    state.pendingChoice = true;
    els.advance.style.display = 'none';
    els.choiceList.innerHTML = '';
    step.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => handleChoice(opt, step, btn));
        els.choiceList.appendChild(btn);
    });
    els.choicesOverlay.classList.add('game-choices-overlay--visible');
}

function handleChoice(opt, step, btn) {
    if (!state.pendingChoice) return;
    state.pendingChoice = false;
    els.choiceList.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
    if (opt.correct) {
        Audio.correct();
        btn.classList.add('correct');
        setTimeout(() => {
            els.choicesOverlay.classList.remove('game-choices-overlay--visible');
            showFlash(step.correctFlash, step.correctStyle, () => advance());
        }, 500);
    } else {
        btn.classList.add('wrong');
        const gameOver = applyPenalty();
        if (!gameOver) {
            setTimeout(() => {
                state.pendingChoice = true;
                els.choiceList.querySelectorAll('.choice-btn').forEach(b => { b.disabled = false; b.classList.remove('wrong', 'correct'); });
            }, 1000);
        } else {
            els.choicesOverlay.classList.remove('game-choices-overlay--visible');
        }
    }
}

function processStep(step) {
    switch (step.type) {
        case 'scene':
            setBackground(step.bg);
            setNameplate(null);
            els.text.textContent = '';
            els.advance.style.display = 'none';
            [els.charLeft, els.charRight].forEach(el => el.classList.add('game-char--hidden'));
            showSceneTitle(step.scene, step.sub, () => advance());
            break;
        case 'dialogue':
            setNameplate(step.char);
            setChars(step.char);
            typeText(step.text);
            break;
        case 'flash':
            setChars(step.speaker);
            showFlash(step.word, step.style, () => advance());
            break;
        case 'choice':
            showChoices(step);
            break;
        case 'evidence':
            showEvidence(step.title, step.content);
            break;
        case 'video':
            els.videoFrame.classList.toggle('game-video-frame--visible', step.show);
            advance();
            break;
        case 'end':
            setTimeout(() => endGame(true), 600);
            break;
    }
}

function advance() {
    if (state.gameEnded) return;
    if (state.typing) { const s = SCRIPT[state.index - 1]; if (s && s.text) skipType(s.text); return; }
    if (state.pendingChoice || state.showingEvidence) return;
    const step = SCRIPT[state.index];
    if (!step) return;
    state.index++;
    processStep(step);
}

function endGame(won) {
    state.gameEnded = true;
    Audio.stopBgm();

    const container = document.querySelector('.game-container');
    const flash = document.createElement('div');
    flash.style.cssText = 'position:absolute;inset:0;background:#fff;z-index:95;opacity:0;transition:opacity 0.25s ease;pointer-events:none;';
    container.appendChild(flash);

    Audio.gavel();
    requestAnimationFrame(() => { flash.style.opacity = '0.9'; });
    setTimeout(() => { flash.style.opacity = '0'; }, 350);
    setTimeout(() => { flash.remove(); }, 700);

    setTimeout(() => {
        const dialogueWrapper = document.querySelector('.game-dialog-wrapper');
        if (dialogueWrapper) dialogueWrapper.style.display = 'none';
        els.gameEnd.classList.remove('game-over');
        if (!won) {
            els.gameEnd.classList.add('game-over');
            document.getElementById('game-end-title').textContent = 'Hearing Suspended.';
            document.getElementById('game-end-sub').textContent = 'Your credibility was exhausted. The Prosecution\'s case collapsed under scrutiny. Duterte walks free — for now.';
        }
        els.gameEnd.classList.add('game-end--visible');
    }, 500);
}

// ══════════════ INIT ══════════════
document.addEventListener('DOMContentLoaded', () => {
    updateCredUI();
    initMenu();

    els.evidenceDismiss.addEventListener('click', hideEvidence);
    document.getElementById('game-dialogue').addEventListener('click', advance);

    document.addEventListener('keydown', e => {
        if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); advance(); }
        if (e.code === 'Escape' && state.showingEvidence) hideEvidence();
    });
});
