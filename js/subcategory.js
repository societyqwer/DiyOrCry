document.addEventListener('DOMContentLoaded', () => {
    // 1. Словарь подкатегорий и их заголовков
    const titles = {
        'mcu': 'МИКРОКОНТРОЛЛЕРЫ',
        'resistors': 'РЕЗИСТОРЫ',
        'leds': 'СВЕТОДИОДЫ',
        'radiators': 'РАДИАТОРЫ',
        'fans': 'ВЕНТИЛЯТОРЫ',
        'cases': 'КОРПУСА',
        'batteries': 'АККУМУЛЯТОРЫ',
        'psu': 'БЛОКИ ПИТАНИЯ',
        'lbp': 'ЛАБОРАТОРНЫЕ БЛОКИ'
    };

    // 2. Считываем параметр ?type= из URL страницы
    const urlParams = new URLSearchParams(window.location.search);
    const subcatType = urlParams.get('type');

    const titleElement = document.getElementById('subcategory-title');
    const cards = document.querySelectorAll('.product-card');

    // 3. Проверяем наличие параметра и подменяем контент
    if (subcatType && titles[subcatType]) {

        if (titleElement) {
            titleElement.textContent = titles[subcatType];
        }


        cards.forEach(card => {
            if (card.getAttribute('data-subcat') === subcatType) {
                card.style.display = ''; // Сбрасывает inline-стиль, разрешая работать CSS Grid
            } else {
                card.style.display = 'none'; // Скрывает ненужные
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