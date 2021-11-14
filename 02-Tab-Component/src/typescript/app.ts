import { tabTitle, tabTitle2, tabTitle3, tabBody } from "./_utils";
import { tabButton } from "./_dom_selector";
import { Tab } from "./_classes";

tabButton.addEventListener("click", (event: Event) => {
  const target = event.target as HTMLElement;
  const tabValue = target.dataset.tab;
  if (target.classList.contains("button__item")) {
    const tabContents = document.querySelectorAll(
      ".tab .tab__content"
    )! as NodeListOf<HTMLDivElement>;
    tabContents.forEach((tabContent) => {
      if (tabValue != tabContent.dataset.tab) {
        tabContent.classList.add("tab__content--hidden");
      } else {
        tabContent.classList.remove("tab__content--hidden");
      }
    });
  }
});

const tab1 = new Tab("Instant Transfer", 1, tabTitle, tabBody, "1.jpg");
const tab2 = new Tab("Instant Loan", 2, tabTitle2, tabBody, "2.jpg");
const tab3 = new Tab("Instant Closing", 3, tabTitle3, tabBody, "3.jpg");
