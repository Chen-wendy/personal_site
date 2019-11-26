(function(album) {
    class Album extends modal.Modal {
        constructor(images) {
            super(`
                <div class="album">
                    <button class="prev"><i class="far fa-chevron-left"></i></button>
                    <button class="next"><i class="far fa-chevron-right"></i></button>
                    <img class="view">
                </div>
            `);

            for (let i = 0; i < images.length; i++) {
                fetch(images[i]);
            }

            this.images = images;
        }
        show(i) {
            const images = this.images;
            const showIndex = (i || 0) % images.length;
            this.ref.querySelector("img").src = images[showIndex];
            this.currentIndex = showIndex;
        }
        attach(i) {
            super.attach();
            this.show(i);

            const images = this.images;
            const length = images.length;
            const self = this;

            this.ref
                .querySelector(".next")
                .addEventListener("click", function() {
                    self.show((self.currentIndex + 1) % length);
                });
            this.ref
                .querySelector(".prev")
                .addEventListener("click", function() {
                    self.show((self.currentIndex + length - 1) % length);
                });
        }
        destroy() {
            super.destroy();
        }
    }

    album.Album = Album;
})((window.album = {}));
