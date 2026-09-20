document.addEventListener('DOMContentLoaded', () => {

    const productsData = {
        'apm32': {
            title: 'APM32F030K6T6,<br>Микроконтроллер 32-Бит',
            price: '90 р.',
            image: 'images/Микроконтроллер APM32F103C8T6.png',
            description: 'APM32F030K6T6 — это высокопроизводительный и энергоэффективный 32-битный микроконтроллер от компании Geehy Semiconductor. Он построен на базе ядра Arm® Cortex®-M0+ и позиционируется как доступная, но мощная альтернатива популярной серии STM32F030, обеспечивая полную совместимость по выводам и программному обеспечению.',
            specs: [
                { name: 'Производитель', val: 'Geehy Semiconductor' },
                { name: 'Ядро', val: 'Arm® Cortex®-M0+' },
                { name: 'Flash-память', val: '32 КБ' },
                { name: 'RAM', val: '4 КБ' },
                { name: 'Частота', val: '48 МГц' },
                { name: 'Напряжение питания', val: '2.0В – 3.6В' },
                { name: 'Интерфейсы', val: 'I2C, SPI, UART/USART' },
                { name: 'Корпус', val: 'LQFP32' }
            ]
        },
        'led-rgb': {
            title: 'Светодиод 5мм,<br>RGB (полноцветный), Диффузный',
            price: '15 р.',
            image: 'images/Светодиод.png',
            description: 'Яркий четырехвыводной RGB-светодиод с общим катодом. Матовая (диффузная) линза обеспечивает мягкое и равномерное смешивание цветов. Отлично подходит для индикации состояний устройства или создания декоративной подсветки в проектах на базе микроконтроллеров.',
            specs: [
                { name: 'Типоразмер', val: '5 мм' },
                { name: 'Тип линзы', val: 'Матовая (diffused)' },
                { name: 'Цвет свечения', val: 'RGB (Red, Green, Blue)' },
                { name: 'Прямое напряжение (Vf)', val: 'R: 2.0В, G/B: 3.2В' },
                { name: 'Рабочий ток', val: '20 мА' },
                { name: 'Угол обзора', val: '60°' },
                { name: 'Схема включения', val: 'Общий катод' }
            ]
        },
        'resistor-100w': {
            title: 'AH-100, 100Вт, 1 Ом,<br>Мощный резистор',
            price: '900 р.',
            image: 'images/Резистор 100W 1.png',
            description: 'Силовой резистор в надежном алюминиевом корпусе для эффективного рассеивания тепла. Предназначен для работы в цепях с высокой нагрузкой и тестовых стендах.',
            specs: [
                { name: 'Номинальная мощность', val: '100 Вт' },
                { name: 'Сопротивление', val: '1 Ом' },
                { name: 'Допуск', val: '±5%' },
                { name: 'Материал корпуса', val: 'Алюминий' },
                { name: 'Тип монтажа', val: 'На радиатор' }
            ]
        },
        'battery-18650': {
            title: 'Li-ion Аккумулятор 18650,<br>3.7В 550мАч, Высокотоковый',
            price: '450 р.',
            image: 'images/Аккумулятор.png',
            description: 'Высококачественный литий-ионный аккумулятор типоразмера 18650. Обладает высокой энергетической плотностью и отсутствием эффекта памяти. Идеально подходит для питания мощных фонарей, электроинструмента, вейпов и сборки аккумуляторных сборок для портативной электроники.',
            specs: [
                { name: 'Типоразмер', val: '18650' },
                { name: 'Тип химии', val: 'Li-ion (литий-ионный)' },
                { name: 'Емкость', val: '550 мАч' },
                { name: 'Напряжение (номинал)', val: '3.7 В' },
                { name: 'Напряжение (полный заряд)', val: '4.2 В' },
                { name: 'Ток разряда (макс)', val: '20 А' },
                { name: 'Защита', val: 'Нет (Flat Top)' }
            ]
        },
        'case-rea': {
            title: 'Корпус для РЭА,<br>100x60x25мм, ABS-пластик',
            price: '250 р.',
            image: 'images/Корпусы.png',
            description: 'Универсальный корпус из ударопрочного ABS-пластика, предназначенный для размещения электронных модулей, датчиков и самодельных устройств. Корпус состоит из двух частей, которые надежно фиксируются винтами. Легко поддается механической обработке: сверлению отверстий под разъемы, выключатели и индикаторы.',
            specs: [
                { name: 'Материал', val: 'ABS-пластик' },
                { name: 'Цвет', val: 'Черный (матовый)' },
                { name: 'Внешние размеры', val: '100 x 60 x 25 мм' },
                { name: 'Тип крепления', val: 'Винтовое (4 винта в комплекте)' },
                { name: 'Класс защиты', val: 'IP54' },
                { name: 'Рабочая температура', val: '-20... +80°C' }
            ]
        },
        'fan-120mm': {
            title: 'Вентилятор корпусной,<br>120мм, 12В, Тихий',
            price: '350 р.',
            image: 'images/Вентилятор.png',
            description: 'Классический осевой вентилятор типоразмера 120мм для обеспечения притока холодного воздуха или вытяжки горячего из корпуса вашего устройства. Оптимальное соотношение цены, производительности и уровня шума. Простой монтаж и стандартное подключение делают его универсальным решением для любого DIY-проекта.',
            specs: [
                { name: 'Размер', val: '120 x 120 x 25 мм' },
                { name: 'Напряжение питания', val: '12 В (DC)' },
                { name: 'Номинальный ток', val: '0.15 А' },
                { name: 'Скорость вращения', val: '1200 об/мин (фиксированная)' },
                { name: 'Тип подшипника', val: 'Скольжения (Sleeve Bearing)' },
                { name: 'Разъем', val: '3-pin / Molex' },
                { name: 'Длина кабеля', val: '30 см' }
            ]
        },
        'heatsink-100': {
            title: 'Радиатор охлаждения,<br>100x40x20мм, Анодированный',
            price: '320 р.',
            image: 'images/Радиатор.png',
            description: 'Высококачественный игольчато-ребристый радиатор из алюминиевого сплава. Предназначен для пассивного охлаждения силовых полупроводников: транзисторов, диодных мостов, модулей Пельтье или мощных светодиодов. Увеличенная площадь поверхности обеспечивает эффективный теплоотвод даже при естественной конвекции воздуха.',
            specs: [
                { name: 'Материал', val: 'Алюминий (6063-T5)' },
                { name: 'Покрытие', val: 'Черное анодирование' },
                { name: 'Размеры', val: '100 x 40 x 20 мм' },
                { name: 'Количество ребер', val: '14' },
                { name: 'Тип крепления', val: 'Винтовое / Термоклей' },
                { name: 'Тепловое сопротивление', val: '~2.5 °C/W' }
            ]
        },
        'psu-12v': {
            title: 'Блок питания 12В 5А,<br>В металлическом корпусе',
            price: '1200 р.',
            image: 'images/Блок питания.png',
            description: 'Импульсный источник питания в перфорированном корпусе. Обеспечивает стабильную работу светодиодных лент и систем автоматизации.',
            specs: [
                { name: 'Выходное напряжение', val: '12 В (DC)' },
                { name: 'Ток', val: '5 А' },
                { name: 'Мощность', val: '60 Вт' },
                { name: 'Входное напряжение', val: '110/220 В' }
            ]
        },
        'lbp-30v': {
            title: 'Лабораторный блок питания<br>30В 10А, Импульсный',
            price: '4500 р.',
            image: 'images/ЛБП.png',
            description: 'Компактный и мощный лабораторный блок питания, идеально подходящий для настройки и ремонта электроники. Оснащен ярким цифровым дисплеем для контроля тока и напряжения в реальном времени. Имеет встроенную защиту от короткого замыкания и перегрева, что делает его безопасным для начинающих мастеров и профессионалов.',
            specs: [
                { name: 'Выходное напряжение', val: '0 – 30 В' },
                { name: 'Выходной ток', val: '0 – 10 А' },
                { name: 'Тип питания', val: 'Импульсный' },
                { name: 'Дисплей', val: 'LED (4 разряда)' },
                { name: 'Охлаждение', val: 'Активное (вентилятор)' },
                { name: 'Точность регулировки', val: '0.1 В / 0.01 А' },
                { name: 'Вес', val: '1.8 кг' }
            ]
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Если мы на главной странице (нет параметра id), прерываем выполнение скрипта товара
    if (!productId || !productsData[productId]) {
        return;
    }

    const product = productsData[productId];
    const cleanTitle = product.title.replace(/<br\s*[\/]?>/gi, ' ');

    document.title = `${cleanTitle} — DIY OR CRY`;

    const titlehtml = document.getElementById('title');
    if (titlehtml) titlehtml.innerHTML = product.title;

    const titleEl = document.querySelector('.product-info-box h1');
    if (titleEl) titleEl.innerHTML = product.title;

    const priceEl = document.querySelector('.main-price');
    if (priceEl) priceEl.textContent = product.price;

    const imgEl = document.querySelector('.product-image-box img');
    if (imgEl) {
        imgEl.src = product.image;
        imgEl.alt = cleanTitle;
    }

    const descEl = document.querySelector('#content-desc p');
    if (descEl) descEl.textContent = product.description;

    const tableEl = document.querySelector('.char-table');
    if (tableEl && product.specs) {
        tableEl.innerHTML = product.specs.map(item => `
            <tr>
                <td>${item.name}</td>
                <td>${item.val}</td>
            </tr>
        `).join('');
    }

    // Логика переключения вкладок
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.closest('.details-section');
            if (!parent) return;

            const isDesc = button.textContent.trim() === 'Описание';

            parent.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            parent.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            button.classList.add('active');

            if (isDesc) {
                const descContent = parent.querySelector('#content-desc');
                if (descContent) descContent.classList.add('active');
            } else {
                const charContent = parent.querySelector('#content-char');
                if (charContent) charContent.classList.add('active');
            }
        });
    });
});