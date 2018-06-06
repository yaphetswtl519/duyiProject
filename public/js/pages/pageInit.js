import move from 'move-js';

export default function () {
    let userAgent = navigator.userAgent;
    if (window.scrollY 
        || userAgent.indexOf('Android') > -1 
        || userAgent.indexOf('iPhone') > -1 
        || userAgent.indexOf('iPad') > -1 
        || userAgent.indexOf('iPod') > -1 
        || userAgent.indexOf('Symbian') > -1
    ) {
        $('.duyi-dom-translate').removeClass('duyi-dom-translate');
    }
    $('.duyi-dom-translate').each((index, item) => {
        $(window).scroll(() => {
            if ($(item).offset().top <= $(window).height() + $(window).scrollTop()) {
                move($('.duyi-dom-translate')[index])
                    .ease('in-out')
                    .duration('1s')
                    .translate(0, 0)
                    .end();
            }
        });
    });
}