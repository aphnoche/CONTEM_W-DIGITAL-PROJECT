const COUNTRY_GEOJSON_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';

const MAP_HIGHLIGHT = {
    PHL: { color: '#c44b3f', tooltip: 'Philippines — 30,000+ killed in the War on Drugs (2016–2022)' },
    USA: { color: '#3d7fad', tooltip: 'United States — 68,000+ detained by ICE, 73.6% with no criminal record' },
    PSE: { color: '#cf7c33', tooltip: 'Gaza — 69,000+ Palestinians killed, 81% of buildings destroyed' },
    ISR: { color: '#cf7c33', tooltip: 'Israel / Palestine — 69,000+ Palestinians killed, 81% of buildings destroyed' }
};

function initMap() {
    const map = L.map('impact-map', {
        center: [20, 30],
        zoom: 2,
        minZoom: 2,
        maxZoom: 6,
        zoomControl: false,
        attributionControl: false,
        worldCopyJump: true
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    fetch(COUNTRY_GEOJSON_URL)
        .then((res) => res.json())
        .then((data) => {
            data.features.forEach((feature) => {
                const code = feature.properties.ISO_A3 || feature.properties.ADM0_A3;
                const cfg = MAP_HIGHLIGHT[code];
                if (!cfg) return;

                const layer = L.geoJSON(feature, {
                    style: {
                        fillColor: cfg.color,
                        fillOpacity: 0.3,
                        color: cfg.color,
                        weight: 2,
                        opacity: 0.7
                    }
                }).addTo(map);

                layer.bindTooltip(cfg.tooltip, {
                    sticky: true,
                    direction: 'top',
                    offset: [0, -10]
                });

                layer.on('mouseover', function () {
                    this.setStyle({ fillOpacity: 0.5, weight: 3 });
                });

                layer.on('mouseout', function () {
                    this.setStyle({ fillOpacity: 0.3, weight: 2 });
                });
            });
        });
}
