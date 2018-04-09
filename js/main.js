$(document).ready(function (){
    $('.scroll').click(function (){
        var scroll_el = $(this).attr('href');// из href хватаем id секции на которую будем скролить
        if ($(scroll_el).length != 0){
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
        }
        return false;
    });
    $('.credits-scroll_top').click(function (){
        var scroll_el = $(this).attr('href');// из href хватаем id секции на которую будем скролить
        if ($(scroll_el).length != 0){
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
        }
        return false;
    });
});

