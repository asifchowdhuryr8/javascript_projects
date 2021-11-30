import selector from "./_dom_selector";

class FilterElement {
    constructor(
        src: string,
        alt: string,
        ElementValue: string,
        buttonValue: string
    ) {
        if (!this.checkButton(buttonValue.toLowerCase())) {
            /* If there is any button called HTML then don't include it(HTML) again if user creates a new filter element instance with it(HTML) */
            selector
                .buttons()
                .insertAdjacentHTML(
                    "beforeend",
                    `<button class="btn" type="button" data-filter="${buttonValue.toLowerCase()}">${buttonValue}</button>`
                );
        }

        selector.filterElement.insertAdjacentHTML(
            "beforeend",
            `<div class="filter__item" data-filter-element="${ElementValue.toLowerCase()}">
                <h1>image ${buttonValue}</h1>
                <img src="${src}" alt="${alt}" />
            </div>`
        );
    }
    checkButton(buttonValue: string) {
        /* Get all the filter buttons of buttons div and make a list of it. If there is already a button of an element then return true else return false */
        const filterButtons = selector.buttons().children;
        const buttonList: string[] = [];
        for (const filterButton of filterButtons) {
            const button = filterButton.textContent;
            button && buttonList.push(button.toLowerCase());
        }
        const uniqueButtonList = [...new Set(buttonList)];
        return uniqueButtonList.includes(buttonValue);
    }
}

export default FilterElement;
