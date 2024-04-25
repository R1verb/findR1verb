document.getElementById('copyLink').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное действие перехода по ссылке
    var textToCopy = this.textContent; // Получаем текст ссылки
    navigator.clipboard.writeText(textToCopy).then(function() {
        var copyNotification = document.getElementById('copyNotification');
        copyNotification.style.display = 'block';
        setTimeout(function() {
            copyNotification.style.display = 'none';
        }, 2000); // Скрыть сообщение через 2 секунды
    }, function(err) {
        console.error('Не удалось скопировать текст: ', err);
    });
});