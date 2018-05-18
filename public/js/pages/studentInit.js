import IScroll from 'iscroll/build/iscroll.js';

export default function () {
    // video 初始化
    let $video = $('.duyi-student-story-video').get(0),
        defaultPSOptions = {
            duration: 1000,
            start: 0,
            direction: 1,
            loop: false,
            ease: 'ease',
            mouse: false,
            arrowkey: false
        };
    $('.duyi-student-story-left-video-icon').on('click', function () {
        $video.play();
        $video.controls = true;
        $(this).hide();
        $('.duyi-student-story-left-video-time').hide();
    });

    new IScroll('.duyi-student-campus-content', {
        scrollX: true,
        scrollY: false
    });
    new IScroll('.duyi-student-activity-content', {
        scrollX: true,
        scrollY: false
    });
}