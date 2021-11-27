import selector from "./_dom_selector";

class Slider {
    constructor(src: string, alt: string) {
        selector.sliderContainer.insertAdjacentHTML(
            "beforeend",
            `<div class="slide"><img src="${src}" alt="${alt}" /></div>`
        );
    }
}

export default Slider;
