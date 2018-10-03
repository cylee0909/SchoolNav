/**
 * Created by cylee on 2018/10/3.
 */

map.on('complete', function () {
    var tw = 277 * scale
    var th = 299 * scale
    start = new AMap.LngLat(lng, lat)
    for (var i = 0; i < 81; i++) {
        var col = i % 9
        var row = parseInt(i / 9)
        startPos = start.offset(col * tw, row * (-th))
        name = prefixInteger(i + 1, 2)
        console.log(col + " " + row + " " + name)
        // 地图图块加载完成后触发
        var imageLayer = new AMap.ImageLayer({
            url: 'images/school_' + name + '.jpg',
            opacity: 0.1,
            bounds: new AMap.Bounds(
                startPos,
                startPos.offset(tw + 1, -th - 1)),
            zoom: 17,
        });
        map.add(imageLayer);
    }
});

function loadTile(scale, lng, lat) {
    map.setLayers([satellite, roadNet]);

    var tw = 277 * scale
    var th = 299 * scale
    var start = new AMap.LngLat(lng, lat)
    for (var i = 0; i < 81; i++) {
        var col = i % 9
        var row = parseInt(i / 9)
        startPos = start.offset(col * tw, row * (-th))
        name = prefixInteger(i + 1, 2)
//            console.log(col + " "+row+" "+name)
        // 地图图块加载完成后触发
        var imageLayer = new AMap.ImageLayer({
            url: 'images/school_' + name + '.jpg',
            opacity: 0.4,
            bounds: new AMap.Bounds(
                startPos,
                startPos.offset(tw + 1, -th - 1)),
            zoom: 17,
        });
        map.add(imageLayer);
    }
}

var lng = 119.7192339
var lat = 30.265579
var step = 0.000001
var scale = 0.639
var scaleStep = 0.0001

scale = 0.641, lng = 119.71920199999998, lat = 30.265627000000002
scale = 0.6390000000000002, lng = 119.71923389999992, lat = 30.26557899999995
function reload() {
    document.getElementById('tip').innerHTML = "scale = " + scale + ", lng= " + lng + ", lat = " + lat;
    console.log("scale = " + scale + ", lng= " + lng + ", lat = " + lat)
    loadTile(scale, lng, lat)
}

function keyUp(e) {
    var currKey = 0, e = e || event;
    currKey = e.keyCode || e.which || e.charCode;
    var keyName = String.fromCharCode(currKey);
    console.log("key = " + keyName)
    if (keyName == 'C') {
        map.setLayers([satellite, roadNet]);
    } else if (keyName == 'W') {
        lat += step
        reload()
    } else if (keyName == 'S') {
        lat -= step
        reload()
    } else if (keyName == 'A') {
        lng -= step
        reload()
    } else if (keyName == 'D') {
        lng += step
        reload()
    } else if (keyName == 'J') {
        scale += scaleStep
        reload()
    } else if (keyName == 'K') {
        scale -= scaleStep
        reload()
    }
}
document.onkeyup = keyUp;