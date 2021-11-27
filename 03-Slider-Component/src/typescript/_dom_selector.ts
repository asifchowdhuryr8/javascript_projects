const selector = {
    sliderContainer: document.querySelector("#slider")!,
    dotContainer: document.querySelector(".dots"),
    btnLeft: document.querySelector(".slider__btn--left"),
    btnRight: document.querySelector(".slider__btn--right"),

    // Remove active class from all the slider dot element
    removeActiveClass: function () {
        if (this.dotContainer) {
            document.querySelectorAll(".dots__dot").forEach((dot) => {
                dot.classList.remove("dots__dot--active");
            });
        }
    },

    // Add active class to the slider dot that is currently active
    addActiveClass: function (slide: number) {
        if (this.dotContainer) {
            const dot = document.querySelector(
                `.dots__dot[data-slide="${slide}"]`
            );
            if (dot) {
                dot.classList.add("dots__dot--active");
            }
        }
    },

    slide: function () {
        const slides = document.querySelectorAll(
            ".slide"
        ) as NodeListOf<HTMLElement>;
        return slides;
    },
};
export default selector;
