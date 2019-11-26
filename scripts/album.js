(function(album) {
    class Album extends modal.Modal {
        constructor(images) {
            super(`
                <div class="album">

                </div>
            `);

            // preload images
        }
    }

    album.Album = Album;
})((window.album = {}));
