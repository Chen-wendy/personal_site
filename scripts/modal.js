(function(modal) {
    function createRandomId() {
        const charSet =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return [0, 1, 2, 3, 4, 5, 6, 7]
            .map(function() {
                return charSet.charAt(
                    Math.floor(Math.random() * charSet.length)
                );
            })
            .join("");
    }

    let container = undefined;
    let instances = [];

    function getContainer() {
        if (container === undefined) {
            document.body.insertAdjacentHTML(
                "beforeend",
                `<div class="modal-container"></div>`
            );

            container = document.body.querySelector(".modal-container");
            container.addEventListener("click", function(event) {
                if (event.target === container) {
                    const top = instances[instances.length - 1];
                    if (top) {
                        top.destroy();
                    }
                }
            });
        }
        return container;
    }

    class Modal {
        constructor(template) {
            this.id = createRandomId();
            instances.push(this);
            this.template = template;
        }
        attach() {
            getContainer().insertAdjacentHTML(
                "beforeend",
                `<div class="modal" id="${this.id}">${this.template}</div>`
            );
            this.ref = getContainer().querySelector(`#${this.id}`);
        }
        destroy() {
            this.ref.remove();
            this.ref = undefined;
            instances.splice(instances.indexOf(this), 1);
        }
    }

    modal.Modal = Modal;
})((window.modal = {}));
