(function(){
    var doc = document.documentElement;
    var w = window;

    var currentScroll = previousScroll = w.scrollY || doc.scrollTop;
    var direction = previousDirection = 0;

    var header = document.getElementById("navbar");

    var checkScroll = function () {

        /** Direction of scroll: 0 - initial, 1 - up, 2 - down */

        currentScroll = w.scrollY || doc.scrollTop;
        if (currentScroll > previousScroll) {
            direction = 2;
        } else {
            direction = 1;
        }
        if (direction != previousDirection) {
            toggleHeader(direction, currentScroll);
        }
        previousDirection = direction;
        previousScroll = currentScroll;
    };

    var toggleHeader = function(direction, currentScroll) {
        if (direction === 2) {
            header.classList.add("hide");
        } else if (direction === 1) {
            header.classList.remove("hide");
        }
    };

    window.addEventListener("scroll", checkScroll);
})();