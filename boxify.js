(function ($) {
    
    
    $.fn.boxify = function(options) {


        var colorArr = ["#FCE4EC", '#512DA8', '#006064', '#FFF59D']
        var randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
        
        

        //for (var i of colorArr) {
        //    var backgroundclr = i;
        //    return backgroundclr;
        //}
        
        var textcolorArr = ["#FCE4EC", '#512DA8', '#006064', '#FFF59D']
        var randomtextColor = textcolorArr[Math.floor(Math.random() * textcolorArr.length)];
        
        
        var settings = $.extend({
            background: randomColor,
            smoothness:"500ms",
            textColor: "white"
        }, options );

        return this.css({
            background: settings.background,
            color: settings.textColor,
            transition: settings.smoothness
        });
    }
}(jQuery));