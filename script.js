// Разблокировка
const lockscreen = document.querySelector('.lockscreen');
let startY;

lockscreen.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

lockscreen.addEventListener('touchmove', (e) => {
    const moveY = e.touches[0].clientY;
    if (startY - moveY > 50) {
        lockscreen.style.display = 'none';
        document.querySelector('.homescreen').style.display = 'block';
    }
});

// Открытие приложения с анимацией
const appIcons = document.querySelectorAll('.app-icon');
const appWindow = document.getElementById('app-window');
const appTitle = document.querySelector('.app-title');
const backBtn = document.querySelector('.back-btn');

appIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const appName = icon.getAttribute('data-app');
        appTitle.textContent = getAppName(appName);
        appWindow.classList.add('active');
    });
});

// Закрытие приложения
backBtn.addEventListener('click', () => {
    appWindow.classList.remove('active');
});

// Названия приложений
function getAppName(key) {
    const apps = {
        phone: "Телефон",
        messages: "Сообщения",
        browser: "Браузер",
        music: "Музыка",
        camera: "Камера",
        gallery: "Галерея",
        maps: "Карты",
        weather: "Погода",
        calendar: "Календарь",
        notes: "Заметки",
        settings: "Настройки",
        calculator: "Калькулятор",
        clock: "Часы",
        mail: "Почта",
        files: "Файлы",
        contacts: "Контакты"
    };
    return apps[key] || "Приложение";
}
