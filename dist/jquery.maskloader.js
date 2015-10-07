
;(function ($) {

    'use strict';

    $.fn.maskLoader = function (options)
    {
        var settings = $.extend({
            'fade': true,
            'z-index': '999',
            'background': 'white',
            'opacity': '0.6',
            'position': 'absolute',
            'imgLoader': false,
            'autoCreate':true
        }, options);

        var el = $(this);

        var fade = settings.fade;
        
        var imgLoader = settings.imgLoader;

        var autoCreate = settings.autoCreate;

        delete settings.fade;
        delete settings.imgLoader;
        delete settings.autoCreate;

        var additionalClass = '';
        if (fade) {
            additionalClass = 'hide-loader';
        } else {
            additionalClass = 'show-loader';
        }


        var maskLoaderEl = $('<div class="mask-loader ' + additionalClass + '"></div>');
        var imgLoaderEl = $('<div class="mask-loader img '+ additionalClass +'"></div>');
        
        
        

        maskLoaderEl.css(settings);

        if (el[0].tagName == 'BODY') {
            maskLoaderEl.css({
                'position': 'fixed',
                'width': '100%',
                'height': '100%',
                'left': '0',
                'top': '0'
            });
            imgLoaderEl.css({
                'position':'fixed'
            });
        } else {
            maskLoaderEl.css({
                'width': el.width() - 2,
                'height': el.height() - 2
            });
            imgLoaderEl.css({
                'position':'absolute'
            });
        }

        imgLoaderEl.css({
            'z-index':parseInt(maskLoaderEl.css('z-index') + 5),
            'width':maskLoaderEl.css('width'),
            'height':maskLoaderEl.css('height')
        });

        if(imgLoader){
            imgLoaderEl.css({
                'background':'url('+imgLoader+') center center no-repeat'
            });
        }


        var functions = {
            create: function () {
                el.each(function () {
                    el.prepend(imgLoaderEl);
                    el.prepend(maskLoaderEl);
                    if (fade) {
                        el.find('.mask-loader').fadeIn('slow');
                    }

                });
            },
            destroy: function () {
                el.each(function () {
                    if (fade) {
                        el.find('.mask-loader').eq(0).fadeOut('slow', function () {
                            $(this).remove();
                        });
                        el.find('.mask-loader').eq(1).fadeOut('slow', function () {
                            $(this).remove();
                        });
                    } else {
                        el.find('.mask-loader').eq(0).remove();
                        el.find('.mask-loader').eq(1).remove();
                    }

                });
            }
        };

        if(autoCreate){
            functions.create();
        }

        return functions;

    };
})(jQuery);