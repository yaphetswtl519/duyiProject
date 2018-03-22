export default class PhotoApp {
    constructor (options={}) {
        this.$photoWrapper = $('.duyi-student-photo');
        this.$photo = $('.duyi-student-photo-row').find('.duyi-student-photo-img');
        this.h = this.$photoWrapper.height();
        this.w = this.$photoWrapper.width();
        this.padding = options.padding ? options.padding : 11;
        this.hideH = this.$photo.height() * 2 + this.padding;
        this.hideW = this.$photo.width() * 2 + this.padding;
        this.previousPhoto = null;
        this.bindEvent();
    }
    bindEvent () {
        let $this = this;
        $this
            .$photoWrapper
            .find('.duyi-student-photo-img')
            .on('mouseenter', function (e) {
                let src = $(this).find('img').attr('src');
                let target = $(e.target).hasClass('duyi-student-photo-image')
                    ? $(e.target) : $(e.target).find('img');
                if ($this.previousPhoto !== target && ($this.previousPhoto = target)) {
                    let photoHideDiv = $('<div class="duyi-student-photo-hide"></div>');
                    photoHideDiv.on('mouseleave', function () {
                        $(photoHideDiv).remove();
                    });
                    $this.resetPosition(this, photoHideDiv);
                    photoHideDiv.css({
                        backgroundImage: `url(${src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    });
                }
            });
        $this.$photoWrapper.on('mouseleave', function () {
            $this.previousPhoto = null;
        });
        $(window).on('scroll', function () {
            $this.$photoWrapper.find('.duyi-student-photo-hide').remove();
        });
    }
    resetPosition (photoImg, dom) {
        let pos = $(photoImg).position();
        let photoHeight = this.$photo.height();
        let photoWidth = this.$photo.width();
        let index = $(photoImg).index() < 2 ? 0 : 1;
        pos.top = pos.top < (this.h - photoHeight - 12) 
            ? pos.top 
            : (pos.top / 2);
        pos.left = (this.w - pos.left) > (this.w - 2 * photoWidth) 
            ? (pos.left + this.padding) 
            : (this.w - 2 *photoWidth + this.padding * index);
        this.$photoWrapper.find('.duyi-student-photo-hide').remove();
        $(dom).appendTo(this.$photoWrapper).css({
            width: this.hideW,
            height: this.hideH,
            left: pos.left,
            top: pos.top
        });
    }
}