function initMap() {
    const map = L.map('impact-map', {
        center: [25, 20],
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

    MAP_REGIONS.forEach((region) => {
        const feature = {
            type: 'Feature',
            properties: { id: region.id, label: region.label },
            geometry: region.geometry
        };

        const layer = L.geoJSON(feature, {
            style: {
                fillColor: region.color,
                fillOpacity: 0.3,
                color: region.color,
                weight: 2,
                opacity: 0.7
            }
        }).addTo(map);

        layer.bindTooltip(region.tooltip, {
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
}
