var filePath = (function() {
    var scripts = document.getElementsByTagName('script'),
        script = scripts[scripts.length - 1];
    return script.getAttribute('src', 2);
}());
var setGraphicsdir = filePath.replace('highslide/highslide.config.js', 'highslide/graphics/');

hs.graphicsDir = setGraphicsdir;
hs.wrapperClassName = 'borderless';
hs.align = 'center';
hs.dimmingOpacity = 0.9;
hs.transitions = ['expand', 'crossfade'];
hs.fadeInOut = false;

hs.registerOverlay({
    html: '<div class="closebutton" onclick="return hs.close(this)" title="Close"></div>',
    position: 'top right',
    fade: 2 // fading the semi-transparent overlay looks bad in IE
});

hs.isUnobtrusiveAnchor = function(el) {
    if (el.href && /\.(jpg|gif|png)$/.test(el.href) && !el.onclick) {
        el.className = 'highslide';
        el.title = 'Click to enlarge';
        return 'image';
    }
};