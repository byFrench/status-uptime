window.onload = function(e){
    var link = document.querySelector("link[type='image/png']");
    var svg = document.querySelector("link[type='image/svg']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    if (svg) {
        svg.remove();
    }

    link.href = `${window.location.href}custom/img/favicon.png`;
}