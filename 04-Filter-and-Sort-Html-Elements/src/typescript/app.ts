import selector from "./_dom_selector";
import "./_utils";

selector.buttons().addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("btn")) {
        const buttonValue = target.dataset.filter;
        for (const filterItem of selector.filterItems()) {
            const filterItemValue = filterItem.dataset.filterElement;
            if (filterItemValue && buttonValue) {
                if (filterItemValue.split(" ").includes(buttonValue)) {
                    /* Converting filterItemValue in to an array and checking if it has the value of the button element */
                    filterItem.classList.remove("opacity");
                    filterItem.classList.add("add-opacity");
                    setTimeout(
                        () => filterItem.classList.remove("d-none"),
                        700
                    );
                } else {
                    filterItem.classList.add("opacity");
                    filterItem.classList.remove("add-opacity");
                    setTimeout(() => filterItem.classList.add("d-none"), 700);
                }
            }
        }
    }
});
