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

document.getElementById('shareButton').addEventListener('click', function() {
    if (navigator.share) {
      navigator.share({
        url: window.location.href
      })
      .catch((error) => console.error('Ошибка поделиться', error));
    } else {
      // Если функция navigator.share недоступна, предложите альтернативный способ поделиться
      alert('К сожалению, ваш браузер не поддерживает функцию поделиться. Вы можете скопировать ссылку и отправить ее вручную.');
    }
  });