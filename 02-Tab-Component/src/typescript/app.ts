import { tabTitle, tabTitle2, tabTitle3, tabBody } from "./_utils";
import domSelector from "./_dom_selector";
import { Tab } from "./_classes";

domSelector.tabButton.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;
    const tabButtonId = target.dataset.tab;
    if (target.classList.contains("button__item")) {
        const tabContents = domSelector.tabItems();
        tabContents.forEach((tabItem) => {
            const tabDataId: string = tabItem.dataset.tab!;
            const button = domSelector.button(tabDataId);
            if (tabButtonId !== tabDataId) {
                tabItem.classList.add("tab__content--hidden");
                button.classList.remove("button__item--active");
            } else {
                tabItem.classList.remove("tab__content--hidden");
                button.classList.add("button__item--active");
            }
        });
    }
});

const tab1 = new Tab("Instant Transfer", 1, tabTitle, tabBody, "1.jpg");
const tab2 = new Tab("Instant Loan", 2, tabTitle2, tabBody, "2.jpg");
const tab3 = new Tab("Instant Closing", 3, tabTitle3, tabBody, "3.jpg");
