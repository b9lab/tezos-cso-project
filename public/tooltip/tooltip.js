(function($, window, undefined) {
    function Tooltip() {
        var targets = [],
            target = null,
            tip = null,
            tooltip = null;
    
        const setup = () => {
            targets = $('.glossarizer_replaced');
            targets.on('mouseenter', _make);
        }
    
        const _make = (e) => {
            target = $(e.target);
            tip = target.attr('title');
            tooltip = $('<div id="tooltip"></div>');
    
            if(!tip || tip == '') return false;
    
            target.removeAttr('title');
            tooltip.css('opacity', 0).html(tip).appendTo('body');
    
            _addListeners();
            _init();
        }

        const _addListeners = () => {
            $(window).on('resize', _init);
            target.on('mouseleave', _remove);
            tooltip.on('mouseleave', _remove);
            tooltip.on('click', _remove);
        }
    
        const _init = () => {
            tooltip.css('max-width', _calcMaxWidth($(window).width(), tooltip.outerWidth()));
                        
            var posLeft = target.offset().left + (target.outerWidth() / 2) - (tooltip.outerWidth() / 2);
            var posTop  = target.offset().top - tooltip.outerHeight() - 20;
            _handlePosition(posLeft, posTop);
        }
    
        const _remove = () => {
            if (tooltip.is(':hover')) return;

            tooltip.remove();
    
            target.attr('title', tip);
        }

        const _handlePosition = (left, top) => {
            if(left < 0) {
                left = target.offset().left + target.outerWidth() / 2 - 20;
                tooltip.addClass('left');
            } else {
                tooltip.removeClass('left');
            }
    
            if(left + tooltip.outerWidth() > $(window).width()) {
                left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                tooltip.addClass('right');
            } else {
                tooltip.removeClass('right');
            }
    
            if(top < 0) {
                top  = target.offset().top + target.outerHeight();
                tooltip.addClass('top');
            } else {
                tooltip.removeClass('top');
            }
    
            tooltip.css({ left: left, top: top }).animate({ top: '+=10', opacity: 1 }, 50);
        }
    
        const _calcMaxWidth = (windowWidth, tooltipWidth) => {
            var width = windowWidth / 2;
            var fallbackWidth = 340;
            return (windowWidth < tooltipWidth * 1.5) ? width : fallbackWidth;
        }
    
        setup();
    }

    window.tooltip = Tooltip;
})(jQuery, window)
