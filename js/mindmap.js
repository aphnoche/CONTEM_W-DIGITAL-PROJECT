document.addEventListener('DOMContentLoaded', () => {
    const topicId = getQueryParam('t');
    const topic = TOPICS[topicId];

    if (!topic) {
        window.location.href = 'index.html';
        return;
    }

    document.title = `${topic.fullTitle} — Human Rights Violations`;
    document.getElementById('mindmap-title').textContent = `${topic.fullTitle} — ${topic.subtitle}`;

    initMindmap(topic);
    initFlyout(topic);

    const hint = document.getElementById('mindmap-hint');
    if (hint) {
        const mql = window.matchMedia('(max-width: 768px)');
        const updateHint = (e) => {
            if (e.matches) {
                hint.classList.add('is-mobile');
            } else {
                hint.classList.remove('is-mobile');
            }
        };
        mql.addEventListener('change', updateHint);
        updateHint(mql);
    }
});

function initMindmap(topic) {
    const container = document.getElementById('mindmap-container');

    const nodeStyles = {
        center: {
            shape: 'box',
            font: { size: 15, color: '#ffffff', face: 'Poppins', bold: true },
            color: {
                background: topic.color,
                border: topic.color,
                highlight: { background: topic.color, border: '#2c2825' },
                hover: { background: topic.color, border: '#2c2825' }
            },
            borderWidth: 0,
            shadow: { enabled: true, color: 'rgba(0,0,0,0.1)', size: 12 },
            margin: 14,
            borderRadius: 10
        },
        branch: {
            shape: 'box',
            font: { size: 12, color: '#2c2825', face: 'Poppins' },
            color: {
                background: '#ffffff',
                border: '#e5ddd3',
                highlight: { background: '#faf5ee', border: topic.color },
                hover: { background: '#faf5ee', border: topic.color }
            },
            borderWidth: 1.5,
            shadow: { enabled: true, color: 'rgba(0,0,0,0.06)', size: 6 },
            margin: 10,
            borderRadius: 8
        },
        leaf: {
            shape: 'box',
            font: { size: 11, color: '#5d5650', face: 'Poppins' },
            color: {
                background: '#faf5ee',
                border: '#e5ddd3',
                highlight: { background: '#ffffff', border: topic.color },
                hover: { background: '#ffffff', border: topic.color }
            },
            borderWidth: 1,
            shadow: { enabled: true, color: 'rgba(0,0,0,0.04)', size: 4 },
            margin: 8,
            borderRadius: 6
        }
    };

    const nodes = new vis.DataSet(
        topic.nodes.map((n) => ({
            id: n.id,
            label: n.label,
            ...nodeStyles[n.group],
            group: n.group
        }))
    );

    const edges = new vis.DataSet(
        topic.edges.map((e) => ({
            from: e.from,
            to: e.to,
            color: { color: '#e5ddd3', highlight: topic.color, hover: topic.color + '80' },
            width: 1.5,
            smooth: { type: 'cubicBezier', roundness: 0.5 },
            selectionWidth: 0,
            hoverWidth: 0
        }))
    );

    const network = new vis.Network(container, { nodes, edges }, {
        physics: {
            enabled: true,
            solver: 'forceAtlas2Based',
            forceAtlas2Based: {
                gravitationalConstant: -60,
                centralGravity: 0.008,
                springLength: 160,
                springConstant: 0.04,
                damping: 0.4
            },
            stabilization: { iterations: 200, fit: true }
        },
        interaction: {
            hover: true,
            tooltipDelay: 300,
            zoomView: true,
            dragView: true,
            navigationButtons: false
        },
        layout: {
            improvedLayout: true
        }
    });

    network.on('click', (params) => {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const node = topic.nodes.find((n) => n.id === nodeId);
            if (node.group !== 'center' && topic.content[nodeId]) {
                openFlyout(topic, nodeId);
                playAudio('click');
            }
        }
    });

    network.once('stabilizationIterationsDone', () => {
        network.fit({ animation: { duration: 600, easingFunction: 'easeOutQuad' } });
    });
}

function initFlyout() {
    const closeBtn = document.getElementById('flyout-close');
    const overlay = document.getElementById('flyout-overlay');
    closeBtn.addEventListener('click', closeFlyout);
    overlay.addEventListener('click', closeFlyout);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeFlyout();
    });
}

function openFlyout(topic, nodeId) {
    const flyout = document.getElementById('flyout');
    const overlay = document.getElementById('flyout-overlay');
    const title = document.getElementById('flyout-title');
    const body = document.getElementById('flyout-body');
    const accent = document.getElementById('flyout-accent');
    const content = topic.content[nodeId];
    if (!content) return;

    title.textContent = content.title;
    body.innerHTML = content.body;
    accent.style.background = topic.color;

    const sourceContainer = document.getElementById('flyout-source');
    if (sourceContainer) {
        sourceContainer.innerHTML = `
            <a href="references.html#references" class="flyout__source-btn" target="_blank" rel="noopener">
                <i class="fa-solid fa-bookmark"></i> View Sources
            </a>
        `;
    }

    // Setup reflection section
    const reflectionContainer = document.getElementById('flyout-reflection');
    const questionsContainer = document.getElementById('flyout-reflection-questions');
    const submitBtn = document.getElementById('flyout-reflection-submit');
    const feedback = document.getElementById('flyout-reflection-feedback');

    if (reflectionContainer && content.reflections && content.reflections.length > 0) {
        reflectionContainer.style.display = 'block';
        questionsContainer.innerHTML = '';
        feedback.style.display = 'none';
        submitBtn.style.display = 'block';
        submitBtn.style.backgroundColor = topic.color; // tint button

        content.reflections.forEach((q, index) => {
            const item = document.createElement('div');
            item.className = 'reflection-item';

            const qtext = document.createElement('div');
            qtext.className = 'reflection-item__question';
            qtext.innerHTML = `<strong>Q${index + 1}:</strong> ${q.text}`;
            item.appendChild(qtext);

            if (q.type === 'essay') {
                const input = document.createElement('textarea');
                input.className = 'reflection-item__input reflection-input-element';
                input.placeholder = 'Type your thoughts here...';
                input.setAttribute('aria-label', `Reflection ${index + 1}`);
                item.appendChild(input);
            }
            else if (q.type === 'multiple-choice') {
                const optionsDiv = document.createElement('div');
                optionsDiv.className = 'reflection-mcq';
                q.options.forEach((opt, i) => {
                    const id = `mcq-${nodeId}-${index}-${i}`;
                    const label = document.createElement('label');
                    label.className = 'reflection-mcq__label';
                    label.innerHTML = `<input type="radio" name="mcq-${nodeId}-${index}" value="${opt}" class="reflection-input-element"> <span>${opt}</span>`;
                    optionsDiv.appendChild(label);
                });
                item.appendChild(optionsDiv);
            }
            else if (q.type === 'matching') {
                const matchContainer = document.createElement('div');
                matchContainer.className = 'reflection-matching';
                q.pairs.forEach((pair, i) => {
                    const row = document.createElement('div');
                    row.className = 'reflection-matching__row';

                    const term = document.createElement('div');
                    term.className = 'reflection-matching__term';
                    term.textContent = pair.term;

                    // Custom dropdown to support multi-line mobile wrapping
                    const select = document.createElement('div');
                    select.className = 'custom-select reflection-input-element';
                    select.dataset.value = '';

                    const trigger = document.createElement('div');
                    trigger.className = 'custom-select__trigger';
                    trigger.innerHTML = `<span>Select definition...</span> <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem; opacity: 0.5;"></i>`;

                    const optionsContainer = document.createElement('div');
                    optionsContainer.className = 'custom-select__options';

                    q.shuffledOptions.forEach(opt => {
                        const optionDiv = document.createElement('div');
                        optionDiv.className = 'custom-select__option';
                        optionDiv.textContent = opt;
                        optionDiv.addEventListener('click', (e) => {
                            e.stopPropagation();
                            select.dataset.value = opt;
                            trigger.querySelector('span').textContent = opt;
                            optionsContainer.classList.remove('open');
                        });
                        optionsContainer.appendChild(optionDiv);
                    });

                    trigger.addEventListener('click', (e) => {
                        e.stopPropagation();
                        // Close others
                        document.querySelectorAll('.custom-select__options.open').forEach(el => {
                            if (el !== optionsContainer) {
                                el.classList.remove('open');
                                el.classList.remove('open-up');
                            }
                        });

                        const rect = trigger.getBoundingClientRect();
                        const spaceBelow = window.innerHeight - rect.bottom;

                        if (spaceBelow < 220) {
                            optionsContainer.classList.add('open-up');
                        } else {
                            optionsContainer.classList.remove('open-up');
                        }

                        optionsContainer.classList.toggle('open');
                    });

                    select.appendChild(trigger);
                    select.appendChild(optionsContainer);

                    row.appendChild(term);
                    row.appendChild(select);
                    matchContainer.appendChild(row);
                });
                item.appendChild(matchContainer);
            }

            // Add hidden insight/feedback text
            const insightText = document.createElement('div');
            insightText.className = 'reflection-item__insight';
            insightText.innerHTML = `<strong>Insight:</strong> ${q.insight}`;
            insightText.style.display = 'none';
            item.appendChild(insightText);

            questionsContainer.appendChild(item);
        });

        // Document listener to close custom dropdowns on outside click
        document.addEventListener('click', () => {
            document.querySelectorAll('.custom-select__options.open').forEach(el => el.classList.remove('open'));
        });

        // Remove old listeners by replacing button
        const newSubmitBtn = submitBtn.cloneNode(true);
        submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);

        newSubmitBtn.addEventListener('click', () => {
            // Check if user answered
            const inputs = questionsContainer.querySelectorAll('.reflection-input-element');
            let answeredCount = 0;
            let totalExpected = 0;

            content.reflections.forEach(q => {
                if (q.type === 'matching') totalExpected += q.pairs.length;
                else totalExpected += 1;
            });

            inputs.forEach(input => {
                if (input.tagName === 'TEXTAREA' && input.value.trim() !== '') answeredCount++;
                if (input.tagName === 'INPUT' && input.type === 'radio' && input.checked) answeredCount++;
                if (input.tagName === 'DIV' && input.classList.contains('custom-select') && input.dataset.value !== '') answeredCount++;
            });

            if (answeredCount < totalExpected) {
                // Shake animation or brief alert if incomplete
                newSubmitBtn.textContent = 'Please answer all questions';
                newSubmitBtn.style.backgroundColor = '#e74c3c';
                setTimeout(() => {
                    newSubmitBtn.textContent = 'Save Answers';
                    newSubmitBtn.style.backgroundColor = topic.color;
                }, 1500);
                return;
            }

            // Reveal insights with evaluated feedback
            const items = questionsContainer.querySelectorAll('.reflection-item');
            items.forEach((item, index) => {
                const q = content.reflections[index];
                const insightEl = item.querySelector('.reflection-item__insight');

                let feedbackHtml = `<strong>Broader Insight:</strong> ${q.insight}`;

                if (q.type === 'multiple-choice') {
                    const selected = item.querySelector('input[type="radio"]:checked');
                    if (selected) {
                        const userVal = selected.value;
                        const isCorrect = userVal === q.correctOption;
                        const explanation = q.explanations && q.explanations[userVal] ? q.explanations[userVal] : '';

                        feedbackHtml = `
                            <div style="margin-bottom: 8px;">
                                <strong style="color: ${isCorrect ? '#27ae60' : '#e67e22'}">
                                    ${isCorrect ? 'Accurate Perspective.' : 'Consider this perspective.'}
                                </strong>
                            </div>
                            ${explanation ? `<p style="margin-top: 0; margin-bottom: 8px; line-height: 1.4;">${explanation}</p>` : ''}
                            <strong>Broader Insight:</strong> ${q.insight}
                        `;
                    }
                } else if (q.type === 'matching') {
                    let allCorrect = true;
                    const rows = item.querySelectorAll('.reflection-matching__row');
                    rows.forEach((row, i) => {
                        const select = row.querySelector('.custom-select');
                        const pair = q.pairs[i];
                        if (select.dataset.value !== pair.match) {
                            allCorrect = false;
                        }
                    });

                    let correctList = q.pairs.map(p => `<li style="margin-bottom: 4px;"><strong>${p.term}:</strong> ${p.match}</li>`).join('');

                    feedbackHtml = `
                        <div style="margin-bottom: 8px;">
                                <strong style="color: ${allCorrect ? '#27ae60' : '#e67e22'}">
                                    ${allCorrect ? 'All connections are accurate.' : 'Here are the accurate connections:'}
                                </strong>
                        </div>
                        <ul style="margin-top: 4px; margin-bottom: 12px; padding-left: 20px; font-size: 0.8rem; line-height: 1.4;">
                            ${correctList}
                        </ul>
                        <strong>Broader Insight:</strong> ${q.insight}
                    `;
                }

                insightEl.innerHTML = feedbackHtml;
                insightEl.style.display = 'block';
            });

            newSubmitBtn.style.display = 'none';
            feedback.style.display = 'block';
            if (typeof playAudio === 'function') playAudio('bubble');
        });
    } else if (reflectionContainer) {
        reflectionContainer.style.display = 'none';
    }

    flyout.classList.add('flyout--open');
    overlay.classList.add('flyout-overlay--visible');

    const scrollArea = document.getElementById('flyout-scroll-area');
    const indicator = document.getElementById('flyout-scroll-indicator');
    if (scrollArea && indicator) {
        scrollArea.scrollTop = 0;
        const checkScroll = () => {
            if (scrollArea.scrollHeight > scrollArea.clientHeight + 10) {
                const isAtBottom = scrollArea.scrollHeight - scrollArea.scrollTop - scrollArea.clientHeight < 20;
                if (isAtBottom) {
                    indicator.classList.remove('visible');
                } else {
                    indicator.classList.add('visible');
                }
            } else {
                indicator.classList.remove('visible');
            }
        };
        setTimeout(checkScroll, 100);
        scrollArea.addEventListener('scroll', checkScroll);
    }
}

function closeFlyout() {
    document.getElementById('flyout').classList.remove('flyout--open');
    document.getElementById('flyout-overlay').classList.remove('flyout-overlay--visible');
}
