import ready from 'Utils/documentReady.js';
import getScrollSize from 'Utils/getScrollSize.js';

ready(function(){

    const modals = document.querySelectorAll("[data-modal]");

    modals.forEach(function (trigger) {
        const modal = document.getElementById(trigger.dataset.modal);
        trigger.addEventListener("click", function (event) {
            event.preventDefault();
            modal.classList.add("modal--active");
            document.body.style.marginRight = getScrollSize() + 'px';
            document.querySelector('.page__body').classList.add('no-scroll');
        });

        const exits = modal.querySelectorAll(".modal-exit");
        exits.forEach(function (exit) {
            exit.addEventListener("click", function (event) {
                event.preventDefault();
                if (document.querySelector('.menu--active')) {
                    modal.classList.remove("modal--active");
                } else {
                    modal.classList.remove("modal--active");
                    document.body.style.marginRight = 0;
                    document.querySelector('.page__body').classList.remove('no-scroll');
                }
            });
        });
    });
});
