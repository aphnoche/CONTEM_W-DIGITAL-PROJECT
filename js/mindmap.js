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
});

function initMindmap(topic) {
    const container = document.getElementById('mindmap-container');

    const nodeStyles = {
        center: {
            shape: 'box',
            font: { size: 15, color: '#ffffff', face: 'Poppins', bold: true, multi: true },
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
            font: { size: 12, color: '#2c2825', face: 'Poppins', multi: true },
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
            font: { size: 11, color: '#5d5650', face: 'Poppins', multi: true },
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
    flyout.classList.add('flyout--open');
    overlay.classList.add('flyout-overlay--visible');
}

function closeFlyout() {
    document.getElementById('flyout').classList.remove('flyout--open');
    document.getElementById('flyout-overlay').classList.remove('flyout-overlay--visible');
}
