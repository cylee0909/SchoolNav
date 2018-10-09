/**
 * Created by cylee on 2018/10/9.
 */

stopNav();

function startNav() {
    geolocation.getCurrentPosition();
    navInterval = setInterval(function () {
        geolocation.getCurrentPosition();
    }, 10 * 1000); // 10s
    var navOp = document.querySelector("#nav_op");
    navOp.style.backgroundImage = 'url("./images/stop_nav.png")';
    navOp.onclick = function (item) {
        stopNav()
    }
}

function stopNav() {
    if (navInterval) {
        clearInterval(navInterval);
        navInterval = null;
    }
    var navOp = document.querySelector("#nav_op");
    navOp.style.backgroundImage = 'url("./images/start_nav.png")';
    navOp.onclick = function () {
        startNav()
    };
    map.setZoomAndCenter(16, [119.727949, 30.256489]);
}