import selector from "./_dom_selector";
import Slider from "./classes";

const init = () => {
    let currentSlide = 0,
        maxSlide: number = 0;
    const slides = selector.slide();
    if (slides) {
        maxSlide = slides.length - 1;
    }

    // creating the dots for the slider
    const createDots = () => {
        if (slides) {
            slides.forEach(function (_, i) {
                if (selector.dotContainer) {
                    selector.dotContainer.insertAdjacentHTML(
                        "beforeend",
                        `<button class="dots__dot" data-slide="${i}"></button>`
                    );
                }
            });
        }
    };

    // moving the slide horizontally accordingly the slide number
    const goToSlide = (slide: number) => {
        if (slides) {
            slides.forEach(
                (s, i) =>
                    (s.style.transform = `translateX(${100 * (i - slide)}%)`)
            );
        }
    };
    // if slide number is equal to 0 then first slide   ===  100 * (0 - 0)  == 0
    // if slide number is equal to 0 then second slide  ===  100 * (1 - 0)  == 100
    // if slide number is equal to 0 then third slide   ===  100 * (2 - 0)  == 200
    // if slide number is equal to 0 then fourth slide    ===  100 * (3 - 0)  == 300

    // if slide number is equal to 1 then first slide   ===  100 * (0 - 1)  == -100
    // if slide number is equal to 1 then second slide  ===  100 * (1 - 1)  == 0
    // if slide number is equal to 1 then third slide   ===  100 * (2 - 1)  == 200
    // if slide number is equal to 1 then fourth slide  ===  100 * (3 - 1)  == 300

    const activeDot = (slide: number) => {
        selector.removeActiveClass();
        selector.addActiveClass(slide);
    };

    // Initializing the slider with the first slide
    createDots();
    goToSlide(0);
    activeDot(0);

    const prevSlide = () => {
        if (currentSlide == 0) currentSlide = maxSlide;
        else currentSlide--;
        goToSlide(currentSlide);
        activeDot(currentSlide);
    };

    const nextSlide = () => {
        if (currentSlide == maxSlide) currentSlide = 0;
        else currentSlide++;
        goToSlide(currentSlide);
        activeDot(currentSlide);
    };

    selector.btnLeft && selector.btnLeft.addEventListener("click", prevSlide);
    selector.btnRight && selector.btnRight.addEventListener("click", nextSlide);
    document.addEventListener("keydown", function (e) {
        e.key === "ArrowLeft" && prevSlide();
        e.key === "ArrowRight" && nextSlide();
    });

    if (selector.dotContainer) {
        selector.dotContainer.addEventListener("click", function (e) {
            const target = e.target as HTMLElement;
            if (target.classList.contains("dots__dot")) {
                const slide = target.dataset.slide; //  get data-slide attribute value
                // const { slide } = e.target.dataset   //  with destructuring
                if (slide) {
                    goToSlide(+slide);
                    activeDot(+slide);
                }
            }
        });
    }
};

const s1 = new Slider("src/images/desktop/img-1.jpg", "Mountain");
const s2 = new Slider("src/images/desktop/img-2.jpg", "Mountain");
const s3 = new Slider("src/images/desktop/img-3.jpg", "Mountain");
const s4 = new Slider("src/images/desktop/img-4.jpg", "Mountain");

// Call this function after creating instance of the Slider class otherwise slider will not work.
init();