
$(function () {
    var tabContainers = $('div.tabs > div'); // массив контейнеров
    tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
    // обработчик клик по вкладке
    $('div.tabs ul.tabNav a').click(function () {
        tabContainers.hide(); // прячем все табы
        tabContainers.filter(this.hash).show(); // показываем содержимое текущего
        $('div.tabs ul.tabNav a').removeClass('selected'); 
        $(this).addClass('selected'); 
        return false;
    }).filter(':first').click();
});