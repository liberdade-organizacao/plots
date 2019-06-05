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

function plot(where, x, f) {
    // TODO Implement me!
}
