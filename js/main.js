$(document).ready(function() {

//sweet slider + slick
    $('.presentation').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        speed:600
});

//team tabs
    var delayer = true;
    $('.team__member-button')
        .click(function (e) {
            e.preventDefault();
            var
                $this = $(this),
                item = $this.closest('.team__member-switcher'),
                container = $this.closest('.team'),
                content = container.find('.team__member'),
                index = item.index(),
                reqItem = content.eq(index),
                activeItem = content.filter('.team__member--active')
                ;
            item.addClass('team__member-switcher--active')
                .siblings()
                .removeClass('team__member-switcher--active');
            console.log(delayer);
            if (delayer == true) {
                delayer = false;
                console.log(delayer);

                activeItem.fadeOut(500, function () {
                    reqItem.fadeIn(500, function () {
                        console.log(delayer);
                        $(this).addClass('team__member--active')
                            .siblings()
                            .removeClass('team__member--active');
                        delayer = true;
                        console.log(delayer);
                    });

                });
            }
        });


    $(".form__anchor").click(function (e) {
        e.preventDefault();
        $("body, html").animate({
            scrollTop: $('.form').offset().top
        }, 800);
    });


    //маска формы
    $(".form__tel").inputmask("8 (999) 999-99-99", {
            placeholder: "8 (___) ___-__-__"
        });

    //   $('.form__tel').mask("8 (999) 999-99-99", {
    //       placeholder:"8 (___) ___-__-__"
    //  });

    //аккордеон faq
    var flag = true;

    $('.faq__question').on('click', function(e){
        e.preventDefault();

        var
            $this = $(this),
            container = $this.closest('.faq__accordion'),
            item = $this.closest('.accordion__item'),
            currentContent = item.find('.faq__answer'),
            duration = 500;

        if (flag) {
            flag = false;
            if (!item.hasClass('accordion__item--active')) {

                item
                    .addClass('accordion__item--active')
                    .siblings()
                    .removeClass('accordion__item--active')
                    .find('.faq__answer')
                    .slideUp(duration);

                currentContent.slideDown(duration, function () {
                    flag = true
                });
            } else {

                item.removeClass('accordion__item--active');
                currentContent.slideUp(function() {
                    flag = true
                });
            }
        }
    });

    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [54.98, 82.89],
            zoom: 13,
            scrollWheelZoom:false
        });

        myIcon = DG.icon({
            iconUrl: 'images/map/marker.png',
            iconSize: [42, 59]
        });

        DG.marker([54.98, 82.89], {
            icon: myIcon
        }).addTo(map).bindPopup('Спасите, меня держат здесь насильно, заставляют верстать сайты');
    });
});
