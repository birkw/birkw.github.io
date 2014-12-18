function resize()
    {
        var heights = window.innerHeight;
        document.getElementById("first").style.height = heights + "px";
    }
    resize();
    window.onresize = function() {
        resize();
};