var plots = { };

plots.compare_pairwise = function(v, f) {
    var o = v[0];

    for (var i = 1; i < v.length; i++) {
        o = (f(o, v[i]))? o : v[i];
    }

    return o;
}

plots.max = function(v) {
    return plots.compare_pairwise(v, function(a, b) {
        return a > b;
    });
}

plots.min = function(v) {
    return plots.compare_pairwise(v, function(a, b) {
        return a < b;
    });
}

plots.apply = function(f, x) {
    var o = [];
    for (var i = 0; i < x.length; i++) {
        o[i] = f(x[i]);
    }
    return o;
}

plots.range = function(from, to, steps) {
    var outlet = [];
    var step = (to-from) / steps;
    var value = from;

    for (var i = 0; i < steps; i++) {
        outlet[i] = value;
        value += step;
    }

    return outlet;
}

plots.scale = function(x, y, w, h) {
    var outlet = [];
    var dy = plots.max(y) - plots.min(y);
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

plots.plot = function(where, x, f) {
    // TODO Implement me!
    var canvas = document.getElementById(where);
    var f_x = plots.apply(f, x);
    var width = canvas.width;
    var height = canvas.height;
    var points = plots.scale(x, f_x, width, height);
    debugger;
}
