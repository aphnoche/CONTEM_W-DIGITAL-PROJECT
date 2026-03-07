const COUNTRY_GEOJSON_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';

const MAP_HIGHLIGHT = {
    PHL: { color: '#c44b3f', tooltip: 'Philippines — 30,000+ killed in the War on Drugs (2016–2022)' },
    USA: { color: '#3d7fad', tooltip: 'United States — 68,000+ detained by ICE, 73.6% with no criminal record' },
    PSE: { color: '#cf7c33', tooltip: 'Palestine — 69,000+ Palestinians killed, 81% of buildings destroyed' },
    ISR: { color: '#cf7c33', tooltip: 'Israel — ICC arrest warrants pursued for war crimes and crimes against humanity' },

    ISL: { color: '#c44b3f', secondary: true, tooltip: 'Iceland — Led the UNHRC resolution demanding an investigation into Philippine EJK' },

    EGY: { color: '#cf7c33', secondary: true, tooltip: 'Egypt — Suez Canal revenue collapsed due to Red Sea shipping disruption; refugee intake pressure' },
    JOR: { color: '#cf7c33', secondary: true, tooltip: 'Jordan — Faces political pressure over Palestinian refugee intake' },
    LBN: { color: '#cf7c33', secondary: true, tooltip: 'Lebanon — Direct conflict escalation with Israel; deaths, displacement, and infrastructure damage' },
    TUR: { color: '#cf7c33', secondary: true, tooltip: 'Turkey — Recalled ambassador from Israel; suspended trade over Gaza offensive' },
    ZAF: { color: '#cf7c33', secondary: true, tooltip: 'South Africa — Filed ICJ genocide case against Israel over Gaza' },
    YEM: { color: '#cf7c33', secondary: true, tooltip: 'Yemen — Houthi Red Sea shipping attacks in solidarity with Gaza disrupted global trade' },
    DEU: { color: '#cf7c33', secondary: true, tooltip: 'Germany — 2nd largest arms supplier to Israel; suspended Gaza-bound arms exports Aug 2025' },
    GBR: { color: '#cf7c33', secondary: true, tooltip: 'United Kingdom — Arms export pressure; partner in F-35 program supplying Israel' },
    COL: { color: '#cf7c33', secondary: true, tooltip: 'Colombia — Severed diplomatic relations with Israel; refused US deportation flights' },

    MEX: { color: '#3d7fad', secondary: true, tooltip: 'Mexico — Primary ICE deportation destination; detainees increased nearly 8x (2024–2025)' },
    GTM: { color: '#3d7fad', secondary: true, tooltip: 'Guatemala — ~25% of all US deportation flights in 2025; used as third-country transit' },
    HND: { color: '#3d7fad', secondary: true, tooltip: 'Honduras — ~20% of deportation flights; used as stopover for Venezuelan deportees' },
    SLV: { color: '#3d7fad', secondary: true, tooltip: 'El Salvador — Received deported Venezuelans into maximum security prisons' },
    HTI: { color: '#3d7fad', secondary: true, tooltip: 'Haiti — TPS stripped from nationals; families blocked from asylum access' },
    VEN: { color: '#3d7fad', secondary: true, tooltip: 'Venezuela — TPS rescinded for ~350,000 nationals; deportation flights via Honduras' },
    ECU: { color: '#3d7fad', secondary: true, tooltip: 'Ecuador — Highest deportation flights in South America; twice-weekly flights in 2025' },
    NIC: { color: '#3d7fad', secondary: true, tooltip: 'Nicaragua — Record 10 deportation flights in Sept 2025; legal status stripped from nationals' }
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

    const indicator = document.getElementById('map-indicator');
    const defaultIndicatorHtml = `<i class="fa-solid fa-earth-americas"></i> <span>Hover over any highlighted region on the map to see its involvement</span>`;

    fetch(COUNTRY_GEOJSON_URL)
        .then((res) => res.json())
        .then((data) => {
            data.features.forEach((feature) => {
                const code = feature.properties.ISO_A3 || feature.properties.ADM0_A3;
                const cfg = MAP_HIGHLIGHT[code];
                if (!cfg) return;

                const isSecondary = cfg.secondary || false;
                const layer = L.geoJSON(feature, {
                    style: {
                        fillColor: cfg.color,
                        fillOpacity: isSecondary ? 0.15 : 0.3,
                        color: cfg.color,
                        weight: isSecondary ? 1.5 : 2,
                        opacity: isSecondary ? 0.5 : 0.7
                    }
                }).addTo(map);

                layer.bindTooltip(cfg.tooltip, {
                    sticky: true,
                    direction: 'top',
                    offset: [0, -10]
                });

                layer.on('mouseover', function () {
                    this.setStyle({ fillOpacity: isSecondary ? 0.3 : 0.5, weight: isSecondary ? 2 : 3 });

                    if (indicator) {
                        // Split the tooltip by the em-dash to bold the country name
                        const parts = cfg.tooltip.split(' — ');
                        // Adding '1a' to hex color creates a 10% opacity background
                        if (parts.length > 1) {
                            indicator.innerHTML = `<i class="fa-solid fa-location-dot" style="color:${cfg.color}; background:${cfg.color}1a"></i> <span><strong>${parts[0]}</strong> — ${parts.slice(1).join(' — ')}</span>`;
                        } else {
                            indicator.innerHTML = `<i class="fa-solid fa-location-dot" style="color:${cfg.color}; background:${cfg.color}1a"></i> <span>${cfg.tooltip}</span>`;
                        }
                    }
                });

                layer.on('mouseout', function () {
                    this.setStyle({ fillOpacity: isSecondary ? 0.15 : 0.3, weight: isSecondary ? 1.5 : 2 });

                    if (indicator) {
                        indicator.innerHTML = defaultIndicatorHtml;
                    }
                });
            });
        });
}
