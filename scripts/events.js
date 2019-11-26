document
    .querySelector(".map.social-item")
    .addEventListener("click", function() {
        const modalInst = new modal.Modal(
            `<div id="address-map" style="width: 40vw; height: 37.5vw;"></div>`
        );

        const accessToken = `pk.eyJ1IjoiaHN1cGVuZ2p1biIsImEiOiJjazNmbHQ0M3YwNmF2M2RwNm4yc2FzMTZiIn0.R7HJViTXUh4pD8HjLxh35A`;
        const map = L.map("address-map", {
            closePopupOnClick: false,
            zoomControl: false,
            zoom: 16,
            center: [24.957821, 121.243812]
        });
        L.tileLayer(
            "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
            {
                attribution:
                    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: "mapbox.streets",
                accessToken: accessToken
            }
        ).addTo(map);

        var popup = L.popup({
            keepInView: true,
            closeButton: false
        })
            .setLatLng([24.957821, 121.243812])
            .setContent(
                "桃園市中壢區中北路 200 號 中原大學企管系<br />企管系三乙 陳秋樺"
            )
            .openOn(map);
    });
