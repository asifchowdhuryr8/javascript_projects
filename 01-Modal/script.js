'use strict';
const modalWrapper = document.querySelector('.modal--wrapper');
const modalButtons = document.querySelector('.modal-buttons');
const modalOverlay = document.querySelector('.modal__overlay');

class Modal {
    constructor(buttonText, id, modalTitle, modalBody) {
        modalButtons.insertAdjacentHTML('beforeend', `<button class="modal-buttons--show" data-modal="${id}">${buttonText}</button>`);
        modalWrapper.insertAdjacentHTML('beforeend',
            `<div class="modal modal--hidden" data-modal="${id}">
                <button class="modal__close">&times;</button>
                <h1 class="modal__title">${modalTitle}</h1>
                <p class="modal__body">${modalBody}</p>
            </div>`)
    }
    static showModal(modal) {
        modal.classList.remove('modal--hidden')
        modalOverlay.classList.remove('modal__overlay--hidden')
    }
    static closeModal(modal) {
        modal.classList.add('modal--hidden')
        modalOverlay.classList.add('modal__overlay--hidden')
    }
    static loopModal(modals) {
        modals.forEach(modal => Modal.closeModal(modal));
    }
}

// show modal window
modalButtons.addEventListener("click", function (e) {
    if (e.target.classList.contains('modal-buttons--show')) {
        Modal.showModal(document.querySelector(`.modal[data-modal="${e.target.dataset.modal}"]`))
    }
})

// close modal window
modalWrapper.addEventListener("click", function (e) {
    const modals = document.querySelectorAll(".modal");
    if (e.target.classList.contains('modal__close')) Modal.loopModal(modals)
    else if (e.target.classList.contains('modal__overlay')) Modal.loopModal(modals)
})

// close modal window
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            Modal.closeModal(modal);
        }
    });
});

const modal1Title = "What is Lorem Ipsum?"
const modal1Body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const modal2Title = "Where does it come from?"
const modal2Body = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.Rackham."

const modal1 = new Modal('MyButton', 1, modal1Title, modal1Body);
const modal2 = new Modal('MyButton2', 2, modal2Title, modal2Body);