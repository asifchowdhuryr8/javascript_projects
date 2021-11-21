const domSelector = {
    tab: document.querySelector(".tab")! as HTMLDivElement,
    tabButton: document.querySelector(".tab .button")! as HTMLDivElement,

    tabItems: () =>
        document.querySelectorAll(
            ".tab .tab__content"
        )! as NodeListOf<HTMLDivElement>,

    button: (tabDataId: string) =>
        document.querySelector(
            `[data-tab="${tabDataId}"]`
        )! as HTMLButtonElement,
};

export default domSelector;
