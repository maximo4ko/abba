// Разблокировка по свайпу вверх
const lockscreen = document.querySelector('.lockscreen');
let startY;

lockscreen.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

lockscreen.addEventListener('touchmove', (e) => {
    const moveY = e.touches[0].clientY;
    if (startY - moveY > 50) { // Свайп вверх
        lockscreen.style.display = 'none';
        document.querySelector('.homescreen').style.display = 'block';
    }
});

// Открытие шторки уведомлений
document.querySelector('.status-bar').addEventListener('click', () => {
    document.querySelector('.quick-settings-panel').style.display = 'block';
});
