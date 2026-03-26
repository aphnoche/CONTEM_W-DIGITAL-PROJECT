// simulate.js - Logic for the Reality Simulator

const SIMULATION_DATA = {
    ejk: {
        title: "Philippine Drug War (EJK)",
        canonDescription: "State-sanctioned violence prioritized over due process, resulting in tens of thousands of deaths and a culture of impunity.",
        decoyDescription: "A rights-respecting approach that addressed drug dependency through rehabilitation rather than violence, saving thousands of lives.",
        blocks: [
            { id: "ejk-c1", type: "canon", text: "2016 Election: Platform prioritizing a violent 'War on Drugs'" },
            { id: "ejk-d1", type: "decoy", text: "2016 Election: Platform prioritizing public health & rehabilitation" },
            { id: "ejk-c2", type: "canon", text: "Oplan Tokhang: Door-to-door police operations lacking warrants" },
            { id: "ejk-d2", type: "decoy", text: "Establishment of Truth and Reconciliation Community Centers" },
            { id: "ejk-c3", type: "canon", text: "State forces granted de facto immunity; vigilante killings surge" },
            { id: "ejk-d3", type: "decoy", text: "Strict enforcement of due process and police body-camera mandates" },
            { id: "ejk-c4", type: "canon", text: "Evidence planted (e.g. Kian Delos Santos); targeting the impoverished" },
            { id: "ejk-d4", type: "decoy", text: "Dismantling of high-level cartel supply chains safely" },
            { id: "ejk-c5", type: "canon", text: "ICC investigations launched amidst tens of thousands dead" },
            { id: "ejk-d5", type: "decoy", text: "International commendation for a bloodless, health-focused resolution" }
        ],
        phases: ["The Catalyst", "Policy Enactment", "The Execution", "The Attrition", "The Global Response"]
    },
    ice: {
        title: "ICE Mass Detention",
        canonDescription: "Treating immigration as a criminal offense led to mass family separation, inhumane detention conditions, and severe economic contraction.",
        decoyDescription: "Updating the immigration system and utilizing community-based alternatives stabilized the workforce and protected families.",
        blocks: [
            { id: "ice-c1", type: "canon", text: "Authorization of $45 Billion budget for homeland detention expansion" },
            { id: "ice-d1", type: "decoy", text: "Reallocation of funds to immigration courts and processing centers" },
            { id: "ice-c2", type: "canon", text: "Expansion of the 287(g) program: Deputizing local police as ICE agents" },
            { id: "ice-d2", type: "decoy", text: "Implementation of rapid legal asylum application centers" },
            { id: "ice-c3", type: "canon", text: "Mass workplace and community raids targeting non-violent residents" },
            { id: "ice-d3", type: "decoy", text: "Targeted operations exclusively limited to violent criminal offenders" },
            { id: "ice-c4", type: "canon", text: "Issuance of no-bid contracts to private prison corporations" },
            { id: "ice-d4", type: "decoy", text: "Transition to community-based Alternatives to Detention (ATD)" },
            { id: "ice-c5", type: "canon", text: "Record 68,000+ detained; severe economic contraction & labor shortages" },
            { id: "ice-d5", type: "decoy", text: "Stabilized agricultural workforce and protected municipal tax revenues" }
        ],
        phases: ["The Mandate", "The Policy Mechanism", "The Execution", "The Profiteering", "The Fallout"]
    },
    gaza: {
        title: "The Gaza Crisis",
        canonDescription: "Disproportionate military retaliation caused catastrophic civilian suffering, total infrastructure destruction, and global diplomatic polarization.",
        decoyDescription: "Strategic de-escalation mediated by surrounding nations prioritized hostage release and preserved millions of civilian lives.",
        blocks: [
            { id: "gaza-c1", type: "canon", text: "October 7 Militant Attacks and Mass Hostage Taking" },
            { id: "gaza-d1", type: "decoy", text: "Successful ratification of a binding UN Two-State Security Resolution" },
            { id: "gaza-c2", type: "canon", text: "Implementation of an 11-week total blockade (no food/fuel/medicine)" },
            { id: "gaza-d2", type: "decoy", text: "Targeted hostage-rescue operations with established civilian safe corridors" },
            { id: "gaza-c3", type: "canon", text: "Systematic destruction of 81% of civilian infrastructure and all hospitals" },
            { id: "gaza-d3", type: "decoy", text: "Strategic de-escalation mediated by surrounding Arab nations" },
            { id: "gaza-c4", type: "canon", text: "Forced displacement of 1.2M+ civilians and engineered starvation" },
            { id: "gaza-d4", type: "decoy", text: "Massive influx of UN-secured medical and humanitarian aid" },
            { id: "gaza-c5", type: "canon", text: "69,000+ casualties; ICJ genocide rulings; global diplomatic polarization" },
            { id: "gaza-d5", type: "decoy", text: "Hostage release agreements and reconstructed permanent peace framework" }
        ],
        phases: ["The Catalyst", "The Immediate Response", "The Military Execution", "The Humanitarian Crisis", "The Global Fallout"]
    }
};

let currentLevelId = 'ejk';
let draggedBlock = null;
let completedLevels = new Set();

document.addEventListener('DOMContentLoaded', () => {
    initLevelSelectors();
    loadLevel(currentLevelId);
    document.getElementById('sim-clear-btn').addEventListener('click', clearTimeline);
    document.getElementById('sim-solve-btn').addEventListener('click', autoSolve);

    // Tutorial Launchpad Dismissal
    const tutorialStartBtn = document.getElementById('sim-tutorial-start');
    if (tutorialStartBtn) {
        tutorialStartBtn.addEventListener('click', () => {
            document.getElementById('sim-tutorial').classList.remove('is-active');
            if (window.playAudio) playAudio('click');
        });
    }
});

function initLevelSelectors() {
    const buttons = document.querySelectorAll('.sim-level-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadLevel(btn.dataset.level);
        });
    });
}

function loadLevel(levelId) {
    currentLevelId = levelId;
    const data = SIMULATION_DATA[levelId];

    // 1. Clear UI
    const drawer = document.getElementById('sim-drawer');
    const timeline = document.getElementById('sim-timeline');
    const runBtn = document.getElementById('sim-run-btn');
    drawer.innerHTML = '';
    timeline.innerHTML = '';
    runBtn.disabled = true;
    runBtn.onclick = evaluateTimeline;

    // 2. Assign target phases and spawn blocks in drawer categorized by Phase
    data.blocks.forEach((block, index) => {
        block.targetPhase = Math.floor(index / 2); // Two blocks per phase
    });

    for (let i = 0; i < 5; i++) {
        const catTitle = document.createElement('div');
        catTitle.className = 'sim-category-title';
        catTitle.innerText = `Phase ${i + 1} Variables`;
        drawer.appendChild(catTitle);

        const catBlocks = document.createElement('div');
        catBlocks.className = 'sim-category-blocks';
        catBlocks.dataset.phase = i;
        drawer.appendChild(catBlocks);

        const phaseBlocks = data.blocks.filter(b => b.targetPhase === i).sort(() => Math.random() - 0.5);
        phaseBlocks.forEach(blockData => {
            catBlocks.appendChild(createBlock(blockData));
        });
    }

    // 3. Create Timeline Slots (5 phases)
    data.phases.forEach((phaseName, index) => {
        timeline.appendChild(createTimelineSlot(phaseName, index));
    });

    // Append default empty Output Block
    const output = document.createElement('div');
    output.id = 'sim-output-block';
    output.className = 'sim-output show default';
    output.innerHTML = `
        <div class="sim-output__icon"><i class="fa-solid fa-lock"></i></div>
        <h3 style="color: var(--sim-text-muted);">Awaiting Reality</h3>
        <p>Complete the timeline and Simulate Reality to see the consequences.</p>
    `;
    timeline.appendChild(output);

    // 4. Setup Drawer as a return dropzone
    drawer.addEventListener('dragover', e => e.preventDefault());
    drawer.addEventListener('drop', e => {
        e.preventDefault();
        if (draggedBlock) {
            const phase = draggedBlock.dataset.phase;
            const targetContainer = drawer.querySelector(`.sim-category-blocks[data-phase="${phase}"]`);
            if (targetContainer) {
                targetContainer.appendChild(draggedBlock);
            } else {
                drawer.appendChild(draggedBlock);
            }
            if (draggedBlock.slotParent) {
                draggedBlock.slotParent.classList.remove('has-block');
                draggedBlock.slotParent = null;
            }
            checkCompletion();
        }
    });
}

function createBlock(data) {
    const block = document.createElement('div');
    block.className = 'sim-block reveal-scale';
    block.draggable = true;
    block.dataset.id = data.id;
    block.dataset.type = data.type;
    block.dataset.phase = data.targetPhase;

    const badge = document.createElement('div');
    badge.className = 'sim-block__badge';
    badge.innerText = `Phase ${data.targetPhase + 1} Variable`;

    const text = document.createElement('div');
    text.className = 'sim-block__text';
    text.innerText = data.text;

    block.appendChild(badge);
    block.appendChild(text);

    // Add slight random delay for nice entrance
    block.style.animationDelay = `${Math.random() * 0.3}s`;

    block.addEventListener('dragstart', () => {
        draggedBlock = block;
        setTimeout(() => block.classList.add('is-dragging'), 0);
    });

    block.addEventListener('dragend', () => {
        block.classList.remove('is-dragging');
        draggedBlock = null;
    });

    return block;
}

function createTimelineSlot(phaseName, index) {
    const container = document.createElement('div');
    container.className = 'sim-slot-container reveal-up';
    container.style.animationDelay = `${index * 0.1}s`;

    const marker = document.createElement('div');
    marker.className = 'sim-slot__marker';
    marker.innerText = index + 1;

    const content = document.createElement('div');
    content.className = 'sim-slot__content';

    const label = document.createElement('span');
    label.className = 'sim-slot__label';
    label.innerText = `Phase ${index + 1}: ${phaseName}`;

    const slot = document.createElement('div');
    slot.className = 'sim-slot';
    slot.dataset.index = index;
    slot.innerHTML = '<p>Drop block here</p>';

    // Dropzone logic
    slot.addEventListener('dragover', e => {
        e.preventDefault();
        if (!slot.querySelector('.sim-block')) {
            slot.classList.add('drag-over');
        }
    });

    slot.addEventListener('dragleave', () => slot.classList.remove('drag-over'));

    slot.addEventListener('drop', e => {
        e.preventDefault();
        slot.classList.remove('drag-over');

        // Only allow drop if slot is empty
        if (draggedBlock && !slot.querySelector('.sim-block')) {
            // Constrain block to its specific phase slot
            if (parseInt(draggedBlock.dataset.phase) !== parseInt(slot.dataset.index)) {
                draggedBlock.classList.add('shake');
                setTimeout(() => draggedBlock.classList.remove('shake'), 400);
                return; // Reject drop
            }

            // Remove from previous slot parent if it had one
            if (draggedBlock.slotParent) {
                draggedBlock.slotParent.classList.remove('has-block');
            }
            slot.appendChild(draggedBlock);
            slot.classList.add('has-block');
            draggedBlock.slotParent = slot;
            if (window.playAudio) playAudio('click');
            checkCompletion();
        }
    });

    content.appendChild(label);
    content.appendChild(slot);
    container.appendChild(marker);
    container.appendChild(content);

    return container;
}

function checkCompletion() {
    const slots = document.querySelectorAll('.sim-slot');
    const isFull = Array.from(slots).every(slot => slot.querySelector('.sim-block'));
    const runBtn = document.getElementById('sim-run-btn');
    runBtn.disabled = !isFull;
}

async function evaluateTimeline() {
    const slots = document.querySelectorAll('.sim-slot');
    const runBtn = document.getElementById('sim-run-btn');
    runBtn.disabled = true; // Lock button during animation

    let canonCount = 0;
    let decoyCount = 0;

    // Chronologically highlight blocks
    for (let i = 0; i < slots.length; i++) {
        const slot = slots[i];
        const block = slot.querySelector('.sim-block');
        const marker = slot.parentElement.parentElement.querySelector('.sim-slot__marker');

        if (block) {
            if (block.dataset.type === 'canon') canonCount++;
            if (block.dataset.type === 'decoy') decoyCount++;

            // Apply highlight glow
            block.classList.add('highlight');
            if (marker) marker.classList.add('highlight');
            if (window.playAudio) playAudio('click');

            // Wait for 600ms before evaluating next block
            await new Promise(resolve => setTimeout(resolve, 600));
        }
    }

    // Determine Result
    let resultTitle, resultBody, statusClass;
    if (canonCount === 5) {
        resultTitle = 'Historical Reality Constructed';
        resultBody = SIMULATION_DATA[currentLevelId].canonDescription;
        statusClass = 'error';
        markLevelComplete();
    } else if (decoyCount === 5) {
        resultTitle = 'Alternative Reality Constructed';
        resultBody = SIMULATION_DATA[currentLevelId].decoyDescription;
        statusClass = 'success';
        markLevelComplete();
    } else {
        resultTitle = 'Inconsistent Timeline';
        resultBody = 'You mixed factual history with alternative possibilities. The timeline is unstable. Try building a completely factual reality, or a completely alternative one.';
        statusClass = 'mixed';
    }

    showInlineResult(resultTitle, resultBody, statusClass);
}

function markLevelComplete() {
    completedLevels.add(currentLevelId);
    document.getElementById('sim-score').innerText = `${completedLevels.size} / 3`;
    const activeBtn = document.querySelector(`.sim-level-btn[data-level="${currentLevelId}"]`);
    if (activeBtn && !activeBtn.innerHTML.includes('fa-check')) {
        activeBtn.innerHTML += ' <i class="fa-solid fa-check" style="color:var(--sim-success); margin-left:8px;"></i>';
    }
}

function showInlineResult(title, body, statusClass) {
    const timeline = document.getElementById('sim-timeline');
    const output = document.getElementById('sim-output-block');

    if (!output) return;

    output.className = `sim-output show ${statusClass}`;

    let iconHTML = '';
    if (statusClass === 'success') iconHTML = '<i class="fa-solid fa-dove"></i>';
    else if (statusClass === 'error') iconHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
    else iconHTML = '<i class="fa-solid fa-clock-rotate-left"></i>';

    let btnHTML = '';
    if (statusClass === 'success' || statusClass === 'error') {
        btnHTML = `<button class="sim-btn sim-btn--primary" onclick="loadNextLevel()"><i class="fa-solid fa-forward"></i> Next Scenario</button>`;
    } else {
        btnHTML = `<button class="sim-btn sim-btn--outline" onclick="loadLevel('${currentLevelId}')"><i class="fa-solid fa-rotate-right"></i> Try Again</button>`;
    }

    output.innerHTML = `
        <div class="sim-output__icon">${iconHTML}</div>
        <h3>${title}</h3>
        <p>${body}</p>
        <div class="sim-output__actions">
            ${btnHTML}
        </div>
    `;

    // Auto-scroll timeline to reveal output
    setTimeout(() => {
        timeline.scrollTo({ top: timeline.scrollHeight, behavior: 'smooth' });
    }, 200);
}

function loadNextLevel() {
    const levels = ['ejk', 'ice', 'gaza'];
    const currentIndex = levels.indexOf(currentLevelId);
    const nextId = levels[(currentIndex + 1) % levels.length];
    document.querySelector(`.sim-level-btn[data-level="${nextId}"]`).click();
}

function clearTimeline() {
    const slots = document.querySelectorAll('.sim-slot');
    const drawer = document.getElementById('sim-drawer');
    slots.forEach(slot => {
        const block = slot.querySelector('.sim-block');
        if (block) {
            slot.classList.remove('has-block');
            block.slotParent = null;
            const targetContainer = drawer.querySelector(`.sim-category-blocks[data-phase="${block.dataset.phase}"]`);
            if (targetContainer) targetContainer.appendChild(block);
        }
    });
    checkCompletion();

    const output = document.getElementById('sim-output-block');
    if (output) {
        output.className = 'sim-output show default';
        output.innerHTML = `
            <div class="sim-output__icon"><i class="fa-solid fa-lock"></i></div>
            <h3 style="color: var(--sim-text-muted);">Awaiting Reality</h3>
            <p>Complete the timeline and Simulate Reality to see the consequences.</p>
        `;
    }
}

function autoSolve() {
    clearTimeline();
    const slots = document.querySelectorAll('.sim-slot');
    const drawer = document.getElementById('sim-drawer');

    setTimeout(() => {
        slots.forEach((slot, index) => {
            const targetContainer = drawer.querySelector(`.sim-category-blocks[data-phase="${index}"]`);
            if (targetContainer) {
                const canonBlock = targetContainer.querySelector('.sim-block[data-type="canon"]');
                if (canonBlock) {
                    slot.appendChild(canonBlock);
                    slot.classList.add('has-block');
                    canonBlock.slotParent = slot;
                }
            }
        });
        checkCompletion();
        if (window.playAudio) playAudio('click');
        setTimeout(() => document.getElementById('sim-run-btn').click(), 300);
    }, 200);
}
