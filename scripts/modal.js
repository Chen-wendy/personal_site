(function(modal) {
    class Modal {
        constructor(template) {
            document.body.insertAdjacentHTML(
                "beforeend",
                `
                <div class="modal-container">
                    <div class="modal">
                        ${template}
                    </div>
                </div>
                `
            );

            const self = this;

            this.ref = document.body.querySelector(".modal-container");
            this.clickCallback = function(event) {
                if (event.target === self.ref) {
                    self.destroy();
                }
            };

            this.ref.addEventListener("click", this.clickCallback);
        }
        destroy() {
            this.ref.removeEventListener("click", this.clickCallback);
            this.ref.remove();

            this.ref = undefined;
            this.clickCallback = undefined;
        }
    }

    modal.Modal = Modal;
})((window.modal = {}));
