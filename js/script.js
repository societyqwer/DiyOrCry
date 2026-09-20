document.addEventListener('DOMContentLoaded', () => {
    // Находим все кнопки вкладок
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
                parent.querySelector('#content-desc').classList.add('active');
            } else {
                parent.querySelector('#content-char').classList.add('active');
            }
        });
    });
});