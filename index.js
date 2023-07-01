window.addEventListener("DOMContentLoaded", function() {
    var mediaQuery = window.matchMedia("(max-width: 968px)");
    var imageElement = document.getElementById("main-img");

    function handleMediaQuery(mediaQuery) {
        if (mediaQuery.matches) {
            // Mobile image source
            imageElement.src = "./assets/images/image-web-3-mobile.jpg";
        } else {
            // Desktop image source
            imageElement.src = "./assets/images/image-web-3-desktop.jpg";
        }
    }

    // Initial check
    handleMediaQuery(mediaQuery);

    // Add event listener for changes in the media query
    mediaQuery.addListener(handleMediaQuery);
}); 