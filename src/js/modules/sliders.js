const sliders = function (slider, wrapper, items, controls, config) {
    let mainElement = document.querySelector(slider), // основный элемент блока
        sliderWrapper = mainElement.querySelector(wrapper), // обертка для .slider-item
        sliderItems = mainElement.querySelectorAll(items), // элементы (.slider-item)
        // sliderControls = mainElement.querySelectorAll(controls), // элементы управления
        positionLeftItem = 0, // позиция левого активного элемента
        transformWrapper = 0, // значение транфсофрмации .slider_wrapper
        step = 100, // величина шага (для трансформации)
        itemsArray = [], // массив элементов
        interval = 0,
        configSlider = {
            isCycling: false, // автоматическая смена слайдов
            direction: "right", // направление смены слайдов
            interval: 1500, // интервал между автоматической сменой слайдов
            pause: true, // устанавливать ли паузу при поднесении курсора к слайдеру
        };

    for (let key in config) {
        if (key in configSlider) {
            configSlider[key] = config[key];
        }
    }

    sliderItems.forEach(function (item, index) {
        itemsArray.push({
            itemSlide: item,
            positionSlide: index,
            transformSlide: 0,
        });
    });

    const getPositions = {
        getIndexMin: function () {
            let itemIndex = 0;
            itemsArray.forEach(function (item, index) {
                if (item.positionSlide < itemsArray[itemIndex].positionSlide) {
                    itemIndex = index;
                }
            });
            return itemIndex;
        },
        getIndexMax: function () {
            let itemIndex = 0;
            itemsArray.forEach(function (item, index) {
                if (item.positionSlide > itemsArray[itemIndex].positionSlide) {
                    itemIndex = index;
                }
            });
            return itemIndex;
        },
        getMin: function () {
            return itemsArray[getPositions.getIndexMin()].positionSlide;
        },
        getMax: function () {
            return itemsArray[getPositions.getIndexMax()].positionSlide;
        },
    };

    const transformItem = function (direction) {
        let nextItem;
        if (direction === "right") {
            positionLeftItem++;
            if (positionLeftItem > getPositions.getMax()) {
                nextItem = getPositions.getIndexMin(); // ищем элемент с минимальной позицией
                itemsArray[nextItem].positionSlide = getPositions.getMax() + 1; // устанавливаем позицию на 1 больше от текущего элемента
                itemsArray[nextItem].transformSlide += itemsArray.length * 100; // перемещаем его в конещ
                itemsArray[nextItem].itemSlide.style.transform = "translateX(" + itemsArray[nextItem].transformSlide + "%)";
            }
            transformWrapper -= step;
        }

        if (direction === "left") {
            positionLeftItem--;
            if (positionLeftItem < getPositions.getMin()) {
                nextItem = getPositions.getIndexMax();
                itemsArray[nextItem].positionSlide = getPositions.getMin() - 1;
                itemsArray[nextItem].transformSlide -= itemsArray.length * 100;
                itemsArray[nextItem].itemSlide.style.transform = "translateX(" + itemsArray[nextItem].transformSlide + "%)";
            }
            transformWrapper += step;
        }
        sliderWrapper.style.transform = "translateX(" + transformWrapper + "%)";

        if (direction === "up") {
            sliderWrapper.style.flexDirection = "column";
            positionLeftItem++;
            if (positionLeftItem > getPositions.getMax()) {
                nextItem = getPositions.getIndexMin(); // ищем элемент с минимальной позицией
                itemsArray[nextItem].positionSlide = getPositions.getMax() + 1; // устанавливаем позицию на 1 больше от текущего элемента
                itemsArray[nextItem].transformSlide += itemsArray.length * 100; // перемещаем его в конещ
                itemsArray[nextItem].itemSlide.style.transform = "translateY(" + itemsArray[nextItem].transformSlide + "%)";
            }
            transformWrapper -= step;
            sliderWrapper.style.transform = "translateY(" + transformWrapper + "%)";
        }

        if (direction === "down") {
            sliderWrapper.style.flexDirection = "column";
            positionLeftItem--;
            if (positionLeftItem < getPositions.getMin()) {
                nextItem = getPositions.getIndexMax();
                itemsArray[nextItem].positionSlide = getPositions.getMin() - 1;
                itemsArray[nextItem].transformSlide -= itemsArray.length * 100;
                itemsArray[nextItem].itemSlide.style.transform = "translateY(" + itemsArray[nextItem].transformSlide + "%)";
            }
            transformWrapper += step;
            sliderWrapper.style.transform = "translateY(" + transformWrapper + "%)";
        }
    };

    const cycle = function (direction) {
        if (!configSlider.isCycling) {
            return;
        }
        interval = setInterval(function () {
            transformItem(direction);
        }, configSlider.interval);
    };

    const controlClick = function (e) {
        let direction = e.target.parentNode.classList.contains("main-next-btn") ? "right" : "left";
        transformItem(direction);
        clearInterval(interval);
        // cycle(configSlider.direction); // при клике на кнопку цикл продолжается
    };

    const setUpListeners = function () {
        if (controls) {
            let sliderControls = mainElement.querySelectorAll(controls);
            sliderControls.forEach(function (item) {
                item.addEventListener("click", controlClick);
            });
        }

        if (configSlider.pause && configSlider.isCycling) {
            mainElement.addEventListener("mouseenter", function () {
                clearInterval(interval);
            });
            mainElement.addEventListener("mouseleave", function () {
                clearInterval(interval);
                cycle(configSlider.direction);
            });
        }
    };

    setUpListeners();
    cycle(configSlider.direction);

};

export default sliders;