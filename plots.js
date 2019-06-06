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

plots.map = function(x, in_min, in_max, out_min, out_max) {
    // thanks arduino
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
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
    var min_x = plots.min(x);
    var max_x = plots.max(x);
    var min_y = plots.min(y);
    var max_y = plots.max(y);

    for (var i = 0; i < x.length; i++) {
        outlet[i] = {
            x: plots.map(x[i], min_x, max_x, 0, w),
            y: plots.map(y[i], min_y, max_y, 0, h)
        };
    }

    return outlet;
}

plots.plot = function(where, x, f) {
    var canvas = document.getElementById(where);
    var points = plots.scale(x, plots.apply(f, x), canvas.width, canvas.height);
    // TODO draw points in canvas
}
