$(function(){
    // 탑 버튼
    const scrollToTop = () => {
        $("html, body").animate({ scrollTop: 0 }, 300);
    };
    $(".top").on("click", function () {
        scrollToTop();
    });

    // 모바일 헤더
    $('.m_menu').on('click', function(){
        $('body').toggleClass('fixed');
        $('.dim').fadeToggle(100);
        $('header .nav, .m_menu').toggleClass('active');
    });
    $('.dim').on('click', function(){
        $('body').removeClass('fixed');
        $('.dim').fadeOut(100);
        $('header .nav, .m_menu').removeClass('active');
    });
    $('.m_arrow').on('click', function(){
        $(this).toggleClass('active');
        $(this).next('.sub_nav').slideToggle(300);
    });

    // 이용약관
    $('#terms_btn01').on('click', function(){
        $('#terms_01').fadeIn(300);
        $('body').addClass('fixed');
    });
    $('#terms_btn02').on('click', function(){
        $('#terms_02').fadeIn(300);
        $('body').addClass('fixed');
    });
    $('.terms_close, .terms_wrap').on('click', function(){
        $('.terms_wrap').fadeOut(300);
        $('body').removeClass('fixed');
    });
    $(".terms_box").on("click", function (e) {
        e.stopPropagation();
    });
});