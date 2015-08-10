/***********************************************
 *
 * Jquery Fontsizer plugin...
 * Author : Md.Atiqul Haque
 * email : md_atiqulhaque@yahoo.com
 *
 ***********************************************/

(function ($){
    var fontSizer = {
        init: function (options, elem) {
            var self = this;
            this.elem = elem;
            this.$elem = $(elem);
            self.options = $.extend({}, $.fn.fontSizer.options, options);
            self.createHtml();
            self.addListner();
        },
        createHtml: function () {
            var self = this;
            if(self.options.zoomInContainer.length == 0) {
                $(self.options.zoomInContainer, {
                    text: self.options.zoomInIcon
                }).addClass(self.options.zoomInClass).appendTo($(self.options.controlContainer));
            }
            if(self.options.zoomOutContainer.length == 0) {
                $(self.options.zoomOutContainer, {
                    text: self.options.zoomOutIcon
                }).addClass(self.options.zoomOutClass).appendTo($(self.options.controlContainer));
            }
        },
        addListner: function () {
            var self = this;
            $('body').on('click', '.' + self.options.zoomInClass,function () {
                self.zoomIn(self);
            }).on('click', '.' + self.options.zoomOutClass, function () {
                self.zoomOut(self);
            });
        },
        zoomIn: function (self) {
            var container = $(self.options.container);
            if (parseInt(container.css('fontSize')) <= self.options.maxSize) {
                container.css({
                    fontSize: "+=" + self.options.zoomAmount
                });
            }
        },
        zoomOut: function (self) {
            var container = $(self.options.container);
            if (parseInt(container.css('fontSize')) >= self.options.minSize) {
                container.css({
                    fontSize: "-=" + self.options.zoomAmount
                });
            }
        }
    };
    $.fn.fontSizer = function (options) {
        return this.each(function () {
            var Zoom = Object.create(fontSizer);
            Zoom.init(options, this);
        })
    };
    $.fn.fontSizer.options = {
        controlContainer: '.content-header > .font-sizer',
        zoomInIcon: '+',
        zoomOutIcon: '-',
        zoomInContainer: '<span>',
        zoomOutContainer: '<span>',
        zoomAmount: 2,
        zoomInClass: 'zoomIn',
        zoomOutClass: 'zoomOut',
        maxSize: 30,
        minSize: 14,
        container : '.content-body'
    };
})(jQuery);

