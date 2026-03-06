function initPuzzle() {
    const track = document.getElementById('puzzle-track');
    const bank = document.getElementById('puzzle-bank');
    const result = document.getElementById('puzzle-result');
    const resultText = result.querySelector('.puzzle__result-text');
    let placedCount = 0;
    let draggedPiece = null;

    PUZZLE_STEPS.forEach((step) => {
        const slot = document.createElement('div');
        slot.classList.add('puzzle__slot');
        slot.dataset.id = step.id;
        slot.innerHTML = `<span class="puzzle__slot-number">${step.id}</span><span>Step ${step.id}</span>`;
        track.appendChild(slot);

        slot.addEventListener('dragover', (e) => {
            e.preventDefault();
            slot.classList.add('puzzle__slot--hover');
        });

        slot.addEventListener('dragleave', () => {
            slot.classList.remove('puzzle__slot--hover');
        });

        slot.addEventListener('drop', (e) => {
            e.preventDefault();
            slot.classList.remove('puzzle__slot--hover');
            handleDrop(slot);
        });

        slot.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    });

    const shuffled = [...PUZZLE_STEPS].sort(() => Math.random() - 0.5);

    shuffled.forEach((step) => {
        const piece = document.createElement('div');
        piece.classList.add('puzzle__piece');
        piece.draggable = true;
        piece.dataset.id = step.id;
        piece.innerHTML = `<span class="puzzle__piece-icon">${step.icon}</span><span class="puzzle__piece-label">${step.label}</span>`;
        bank.appendChild(piece);

        piece.addEventListener('dragstart', (e) => {
            draggedPiece = piece;
            piece.classList.add('puzzle__piece--dragging');
            e.dataTransfer.effectAllowed = 'move';
        });

        piece.addEventListener('dragend', () => {
            piece.classList.remove('puzzle__piece--dragging');
            draggedPiece = null;
        });

        initTouchDrag(piece);
    });

    function handleDrop(slot) {
        if (!draggedPiece || slot.classList.contains('puzzle__slot--filled')) return;

        const pieceId = parseInt(draggedPiece.dataset.id);
        const slotId = parseInt(slot.dataset.id);

        if (pieceId !== slotId) {
            playAudio('wrong');

            const correctStep = PUZZLE_STEPS.find((s) => s.id === slotId);
            const droppedStep = PUZZLE_STEPS.find((s) => s.id === pieceId);
            showFeedback(droppedStep.label, correctStep.hint, slotId);

            slot.classList.add('puzzle__slot--wrong');
            draggedPiece.classList.add('puzzle__piece--wrong');
            setTimeout(() => {
                slot.classList.remove('puzzle__slot--wrong');
                draggedPiece?.classList.remove('puzzle__piece--wrong');
            }, 800);
            return;
        }

        const step = PUZZLE_STEPS.find((s) => s.id === pieceId);
        slot.classList.add('puzzle__slot--filled');
        slot.innerHTML = '';

        const placed = document.createElement('div');
        placed.classList.add('puzzle__piece', 'puzzle__piece--placed');
        placed.innerHTML = `<span class="puzzle__piece-icon">${step.icon}</span><span class="puzzle__piece-label">${step.label}</span>`;
        slot.style.position = 'relative';
        slot.appendChild(placed);

        draggedPiece.remove();
        draggedPiece = null;
        placedCount++;

        const prog = document.getElementById('puzzle-progress');
        prog.innerHTML = `<i class="fa-solid fa-trophy"></i> ${placedCount} / ${PUZZLE_STEPS.length} placed`;

        playAudio('snap');

        if (placedCount === PUZZLE_STEPS.length) {
            prog.classList.add('puzzle__progress--done');
            prog.innerHTML = `<i class="fa-solid fa-trophy"></i> Complete!`;
            const divider = document.querySelector('.puzzle__divider');
            if (divider) divider.style.display = 'none';

            const descriptions = PUZZLE_STEPS.map((s) => `<strong>${s.label}:</strong> ${s.description}`).join('. ');
            resultText.innerHTML = descriptions;
            result.classList.add('puzzle__result--visible');
            playAudio('chime');
        }
    }

    function showFeedback(pieceName, hintText, slotNum) {
        const fb = document.getElementById('puzzle-feedback');
        fb.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <strong>"${pieceName}"</strong> doesn't belong in Step ${slotNum}. <i class="fa-solid fa-lightbulb"></i> <em>${hintText}</em>`;
        fb.classList.add('puzzle__feedback--visible');

        clearTimeout(fb._timer);
        fb._timer = setTimeout(() => {
            fb.classList.remove('puzzle__feedback--visible');
        }, 5000);
    }

    function initTouchDrag(piece) {
        let clone = null;

        piece.addEventListener('touchstart', (e) => {
            draggedPiece = piece;
            const touch = e.touches[0];

            clone = piece.cloneNode(true);
            clone.style.position = 'fixed';
            clone.style.zIndex = '1000';
            clone.style.pointerEvents = 'none';
            clone.style.opacity = '0.85';
            clone.style.width = piece.offsetWidth + 'px';
            clone.style.transform = 'scale(1.05)';
            document.body.appendChild(clone);
            positionClone(clone, touch);
            piece.style.opacity = '0.3';
        }, { passive: true });

        piece.addEventListener('touchmove', (e) => {
            if (!clone) return;
            e.preventDefault();
            positionClone(clone, e.touches[0]);
        }, { passive: false });

        piece.addEventListener('touchend', (e) => {
            if (!clone) return;
            const touch = e.changedTouches[0];
            clone.remove();
            clone = null;
            piece.style.opacity = '1';

            const target = document.elementFromPoint(touch.clientX, touch.clientY);
            const slot = target?.closest('.puzzle__slot');
            if (slot) handleDrop(slot);
            draggedPiece = null;
        });
    }

    function positionClone(clone, touch) {
        clone.style.left = (touch.clientX - 50) + 'px';
        clone.style.top = (touch.clientY - 50) + 'px';
    }
}
