import { tabButton, tab } from "./_dom_selector";

class Tab {
  constructor(
    buttonText: string,
    id: number,
    TabTitle: string,
    TabBody: string,
    TabImage: string
  ) {
    tabButton.insertAdjacentHTML(
      "beforeend",
      `<button class="button__item" data-tab="${id}">${buttonText}</button>`
    );
    tab.insertAdjacentHTML(
      "beforeend",
      `
        <div class="${
          id == 1 ? "tab__content" : "tab__content tab__content--hidden"
        }" data-tab="${id}">
        <div>
          <img class="tab__content__image" src="src/images/desktop/${TabImage}" alt="women-wearing-glass">
        </div>
        <div>
          <h2 class="tab__content__title">${TabTitle}</h2>
          <p class="tab__content__body">${TabBody}</p>
        </div>
      </div>`
    );
  }
}

export { Tab };
