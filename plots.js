function apply(f, x) {
    var o = [];
    for (var i = 0; i < x.length; i++) {
        o[i] = f(x[i]);
    }
    return o;
}

function range(from, to, steps) {
    var outlet = [];
    var step = (to-from) / steps;
    var value = from;

    for (var i = 0; i < steps; i++) {
        outlet[i] = value;
        value += step;
    }

    return outlet;
}

function scale(x, y, w, h) {
    var outlet = [];
    var dy = max(y) - min(y);
    var dx = x[x.length-1] - x[0];

    for (var i = 0; i < x.length; i++) {
        // TODO turn these points into canvas points
        o[i] = {
            x: 0,
            y: 0
        };
    }

    return outlet;
}

function plot(where, x, f) {
    // TODO Implement me!
    var canvas = document.getElementById(where);
    var f_x = apply(f, x);
    var width = canvas.width;
    var height = canvas.height;
    var points = scale(x, f_x, width, height);
    debugger;
}
