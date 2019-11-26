document
    .querySelector(".map.social-item")
    .addEventListener("click", function() {
        const modalInst = new modal.Modal(
            `<div id="address-map" style="width: 40vw; height: 37.5vw;"></div>`
        );
        modalInst.attach();

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

        L.popup({
            keepInView: true,
            closeButton: false
        })
            .setLatLng([24.957821, 121.243812])
            .setContent(
                "桃園市中壢區中北路 200 號 中原大學企管系<br />企管系三乙 陳秋樺"
            )
            .openOn(map);
    });

const lifeAlbum = new album.Album([
    "assets/images/pictures/life/life1.jpg",
    "assets/images/pictures/life/life2.jpg",
    "assets/images/pictures/life/life3.jpg",
    "assets/images/pictures/life/life4.jpg",
    "assets/images/pictures/life/life5.jpg",
    "assets/images/pictures/life/life6.jpg"
]);

const campAlbum = new album.Album([
    "assets/images/pictures/groups/camp1.jpg",
    "assets/images/pictures/groups/camp2.jpg",
    "assets/images/pictures/groups/camp3.jpg",
    "assets/images/pictures/groups/camp4.jpg",
    "assets/images/pictures/groups/camp5.jpg",
    "assets/images/pictures/groups/camp6.jpg"
]);

const clubAlbum = new album.Album([
    "assets/images/pictures/groups/club1.jpg",
    "assets/images/pictures/groups/club2.jpg",
    "assets/images/pictures/groups/club3.jpg",
    "assets/images/pictures/groups/club4.jpg",
    "assets/images/pictures/groups/club5.jpg",
    "assets/images/pictures/groups/club6.jpg"
]);

document.querySelectorAll("section.life li.photo").forEach(function(el, index) {
    el.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        lifeAlbum.attach(index);
    });
});

document.querySelector("#camp-button").addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    campAlbum.attach();
});

document.querySelector("#club-button").addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    clubAlbum.attach();
});
