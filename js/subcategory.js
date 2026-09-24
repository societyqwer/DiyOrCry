document.addEventListener('DOMContentLoaded', () => {

    const titles = {
        'mcu': 'МИКРОКОНТРОЛЛЕРЫ',
        'resistors': 'РЕЗИСТОРЫ И КОНДЕНСАТОРЫ',
        'leds': 'СВЕТОДИОДЫ',
        'radiators': 'РАДИАТОРЫ',
        'fans': 'ВЕНТИЛЯТОРЫ',
        'cases': 'КОРПУСА',
        'batteries': 'АККУМУЛЯТОРЫ',
        'psu': 'БЛОКИ ПИТАНИЯ',
        'lbp': 'ЛАБОРАТОРНЫЕ БЛОКИ',
    };


    const urlParams = new URLSearchParams(window.location.search);
    const subcatType = urlParams.get('type');

    const titleElement = document.getElementById('subcategory-title');
    const cards = document.querySelectorAll('.product-card');


    if (subcatType && titles[subcatType]) {

        if (titleElement) {
            titleElement.textContent = titles[subcatType];
        }


        cards.forEach(card => {
            if (card.getAttribute('data-subcat') === subcatType) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    } else {

        if (titleElement) {
            titleElement.textContent = 'ВСЕ ТОВАРЫ ПОДКАТЕГОРИИ';
        }
        cards.forEach(card => {
            card.style.display = '';
        });
    }
});