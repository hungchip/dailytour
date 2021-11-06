$(document).ready(function() {
    $('.tab-panel:first').show();
    $('.tab-link:first a').addClass('active');

    $('.tab-link').click(function() {
        // var index = $('.tab-link').index(this);
        // tương đương ( lấy vị trí của đối tượng đang thực thi nó)
        var index = $(this).index();

        console.log(index);
        $('.tab-link a').removeClass('active');
        $(this).children().addClass('active');
        $('.tab-panel').hide();
        $('.tab-panel').eq(index).show();
    });


    $('.owl-carousel-1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: { //số item hiển thị theo kích thước màn hình
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('.owl-carousel-2').owlCarousel({
        loop: true,
        items: 6,
        margin: 20,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
    $('.back-top').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    });
    $(".back-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});