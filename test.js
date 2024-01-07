'use strict';

/**
 * Add event listener to multiple elements
 */
const addEventOnElements = function (elements, eventtype, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventtype, callback);
    }
}

/**
 * NAVBAR TOGGLE FOR MOBILE
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER: Activate header when window scrolls down to 100px
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

/**
 * SLIDER
 */
const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {
    const sliderContainer = currentSlider.querySelector("[data-slider-container]");
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

    let currentSlidePos = 0;

    const moveSliderItem = function () {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    }

    /**
     * NEXT SLIDE
     */
    const slideNext = function () {
        const slideEnd = currentSlidePos >= sliderContainer.childElementCount - 1;

        if (slideEnd) {
            currentSlidePos = 0;
        } else {
            currentSlidePos++;
        }

        moveSliderItem() ;
    }
    
sliderNextBtn.addEventListener("click", slideNext);


    /**
     * PREVIOUS SLIDE
     */
     const slidePrev = function () {
        

        if (currentSlidePos) {
            currentSlidePos = sliderContainer.childElementCount - 1;
        } else {
            currentSlidePos--;
        }

        moveSliderItem() ;
    }
    
sliderPrevBtn.addEventListener("click", slidePrev);

const dontHaveExtraItem = sliderContainer.childElementCount <= 0;
if (dontHaveExtraItem) {
    sliderNextBtn.style.display =  "none";
    sliderPrevBtn.style.display =  "none";
}

}

for (let i=0, len = sliders.length; i , len; i++) {initSlider(sliders[i]); }

/**
 * ACCORDION
 */

// Get all the elements with the class 'accordion-card'
const accordionCards = document.querySelectorAll('.accordion-card');

// Loop through each accordion card and add a click event listener to toggle them
accordionCards.forEach(card => {
  const accordionButton = card.querySelector('.accordion-btn');
  const accordionContent = card.querySelector('.accordion-content');

  accordionButton.addEventListener('click', () => {
    card.classList.toggle('expanded');
    if (card.classList.contains('expanded')) {
      // When expanded, show the content by setting max-height to max-content
      accordionContent.style.maxHeight = 'max-content';
    } else {
      // When collapsed, hide the content by setting max-height to 0
      accordionContent.style.maxHeight = '0';
    }
  });
});

























