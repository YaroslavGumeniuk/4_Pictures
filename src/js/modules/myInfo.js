const myInfo = () => {
    let infoBtn = document.createElement('div');
    let infoBlock = document.createElement('div');
    let close = document.createElement('div');

    infoBtn.innerHTML = "Что реализовано <br> в этом проекте?"
    infoBlock.innerHTML = "В этом проекте на 'чистом' JS реализовано: <br><br> 1. Модальные окна (кнопки 'Заказать...'). <br> 2. Блок с подарком (справа сверху) и отслеживание того, что пользователь долистал страницу до конца (появляется модальное окно). <br> 3. Вертикальный и горизонтальный слайдер, автопереключение и изменение направления движения элементов. <br> 4. Формы и отправка данных на сервер. <br> 5. Маска ввода номера телефона и запрет ввода латиницы. <br> 6. Показ дополнительных стилей портретов (секция 'Популярные стили'). <br> 7. Получение данных с сервера и подгрузка дополнительных стилей портретов (секция 'Популярные стили').  <br> 8. Калькулятор расчета стоимости с отправкой данных на сервер (секция 'Рассчитайте стоимость'). <br> 9. Фильтрация картин (секция 'Для кого делаем'). <br> 10. Изменение изображения при наведении. (секция 'Можем изготовить'). <br> 11. Аккордеон (секция 'Ответим на любой...'). <br> 12. Плавная равномерная прокрутка вверх. <br> 13. drag&drop загрузка изображений (перетаскивание из папки на поле 'Загрузить файл')."
    close.innerHTML = "&times";

    infoBtn.style.cssText = `
                // display: none;
                position: fixed;
                background: rgba(255, 245, 255, 0.7);
                transition: ease-in 0.7s all;
                width: 300px;
                height: 100px;
                border: 3px solid red;
                left: 100px;
                top: 50px;
                border-radius: 20px;
                cursor: pointer;
                font-size: 30px;
                color: #2546bc;
                text-align: center;
                line-height: 46px;
            `;

    infoBlock.style.cssText = `
                display: none;
                opacity: 0;
                position: fixed;
                padding: 15px;
                font-size: 18px;
                background: rgba(255, 245, 255, 0.7);
                transition: ease-in 0.7s all;
                width: 480px;
                min-height: 300px;
                border: 2px solid #2546bc;
                left: 100px;
                top: 50px;
                border-radius: 20px;
            `;

    close.style.cssText = `
                position: fixed;
                left: 585px;
                top: 50px;
                width: 50px;
                height: 50px;
                font-size: 60px;
                color: red;
                line-height: 42px;
                text-align: center;
                cursor: pointer;
            `;

    document.body.append(infoBtn);
    document.body.append(infoBlock);
    infoBlock.append(close);

    function showBlock() {
        infoBtn.style.display = 'none';
        infoBtn.style.opacity = '0';
        infoBlock.style.display = 'block';
        setTimeout(() => {
            infoBlock.style.opacity = '1';
        }, 20);
    }

    function hideBlock() {
        infoBtn.style.display = 'block';
        setTimeout(() => {
            infoBtn.style.opacity = '1';
        }, 20);
        infoBlock.style.opacity = '0';
        setTimeout(() => {
            infoBlock.style.display = 'none';
        }, 500);
    }

    infoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showBlock();
    })

    close.addEventListener('click', () => {
        hideBlock();
    })

    document.addEventListener('click', (e) => {
        hideBlock();
    })

}
export default myInfo;
