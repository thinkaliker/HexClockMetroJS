$(document).ready(function () {

    setInterval(function () {

        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();

        var color_n = normal(h, m, s);
        var color_s = scaled(h, m, s);

        if ($("#scaledtext").length)
        {
            $("body").css("background-color", color_s);
            $("#scaledtext").text(color_s);
            if (h > 12) {
                $("#scaledtext").css("color", "black")
            } else {
                $("#scaledtext").css("color", "white")
            }
        }   
        
        if ($("#normaltext").length) {
            $("body").css("background-color", color_n);
            $("#normaltext").text(color_n);
        }

    }, 1000);

});

function scaled(h, m, s) {
    var h_s = map_range(h, 0, 23, 0, 230).toString(16);
    var m_s = map_range(m, 0, 59, 0, 236).toString(16);
    var s_s = map_range(s, 0, 59, 0, 236).toString(16);

    var hz = (h < 10) ? "0" : "";
    var mz = (m < 10) ? "0" : "";
    var sz = (s < 10) ? "0" : "";

    //console.info("" + h_s +" "+ m_s+" "+ s_s + " ");

    return ("#" + hz + h_s + mz + m_s + sz + s_s);
}

function normal(h, m, s) {
    var hz = (h < 10) ? "0" : "";
    var mz = (m < 10) ? "0" : "";
    var sz = (s < 10) ? "0" : "";

    //console.info("#" + hz + h + mz + m + sz + s);

    return ("#" + hz + h + mz + m + sz + s);
}

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}