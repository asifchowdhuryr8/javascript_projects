const selector = {
    // buttons: document.querySelector(".buttons")! as HTMLButtonElement,
    // filterItems: document.querySelectorAll(
    //     ".filter__item"
    // ) as NodeListOf<HTMLDivElement>,
    filterElement: document.querySelector("#filter-element")! as HTMLDivElement,

    filterItems() {
        return document.querySelectorAll(
            ".filter__item"
        ) as NodeListOf<HTMLDivElement>;
    },

    buttons() {
        return document.querySelector(".buttons")! as HTMLButtonElement;
    },
};

export default selector;
