import selector from "./_dom_selector";

class FilterElement {
    constructor(
        src: string,
        alt: string,
        ElementValue: string,
        buttonValue: string
    ) {
        selector
            .buttons()
            .insertAdjacentHTML(
                "beforeend",
                `<button class="btn" type="button" data-filter="${buttonValue.toLowerCase()}">${buttonValue}</button>`
            );

        selector.filterElement.insertAdjacentHTML(
            "beforeend",
            `<div class="filter__item" data-filter-element="${ElementValue.toLowerCase()}">
                <h1>image ${buttonValue}</h1>
                <img src="${src}" alt="${alt}" />
            </div>`
        );
    }
}

export default FilterElement;
