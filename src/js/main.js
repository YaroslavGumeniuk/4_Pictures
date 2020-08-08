import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import acordion from "./modules/acordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modals();
    sliders('.main-slider', '.slider-wrapper', '.main-slider-item', '', {
        isCycling: true,
        direction: "down",
        interval: 2000,
    });
    sliders('.feedback-slider', '.slider-wrapper', '.feedback-slider-item', '.main-slider-btn', {
        isCycling: true,
        direction: "right",
        interval: 2000,
    });
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    // showMoreStyles('.button-styles', '.styles-2');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    acordion('.accordion-heading', '.accordion-block');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();
});
