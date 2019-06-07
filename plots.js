var plots = { };

/**
 * This implements a wrapper to compare all elements in an array to find a
 * winner
 * @param v the array to be analyzed
 * @param f the comparing function
 * @returns the winner
 */
plots.compare_pairwise = function(v, f) {
    var o = v[0];

    for (var i = 1; i < v.length; i++) {
        o = (f(o, v[i]))? o : v[i];
    }

    return o;
}

/**
 * finds the biggest number in an array
 * @param v the array
 * @returns the biggest element
 */
plots.max = function(v) {
    return plots.compare_pairwise(v, function(a, b) {
        return a > b;
    });
}

/**
 * finds the smallest number in an array
 * @param v the array
 * @returns the smallest element
 */
plots.min = function(v) {
    return plots.compare_pairwise(v, function(a, b) {
        return a < b;
    });
}

/**
 * maps a value in a range to another
 * @param x the value tp be mapped
 * @param in_min the lower bound of the input range
 * @param in_min the upper bound of the input range
 * @param in_min the lower bound of the output range
 * @param in_min the upper bound of the output range
 * @returns the mapped value
 */
plots.map = function(x, in_min, in_max, out_min, out_max) {
    // thanks arduino
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

/**
 * applies a function to every value in an array
 * @param f the function
 * @param x the array
 * @returns the mapped array
 */
plots.apply = function(f, x) {
    var o = [];
    for (var i = 0; i < x.length; i++) {
        o[i] = f(x[i]);
    }
    return o;
}

/**
 * creates an array from a range between 2 numbers
 * @param from the lower bound of the range
 * @param to the upper bound of the range
 * @param steps the size of the output
 * @returns an array with numbers between the specified range
 */
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

/**
 * zips two vectors while mapping their values as coordinates in a plane
 * @param x the array representing the values on the x axis
 * @param y the array representing the values on the y axis
 * @param w the plane width
 * @param h the plane height
 * @returns an array with objects contain x and y as the coordinates in the
 *          specified plane
 */
plots.scale = function(x, y, w, h) {
    var outlet = [];
    var min_x = plots.min(x);
    var max_x = plots.max(x);
    var min_y = plots.min(y);
    var max_y = plots.max(y);

    for (var i = 0; i < x.length; i++) {
        outlet[i] = {
            x: plots.map(x[i], min_x, max_x, 0, w),
            y: plots.map(y[i], min_y, max_y, h, 0)
        };
    }

    return outlet;
}

/**
 * draws points in the canvas
 * @param canvas a HTML canvas object
 * @param points the points to be drawn on screen
 */
plots.draw = function(canvas, points) {
    var context = canvas.getContext("2d");
    var lastPoint = points[0];

    context.lineCap = "round";
    context.lineWidth = 2;
    context.strokeStyle = "#AEAEAE";

    for (var i = 1; i < points.length; i++) {
        var currentPoint = points[i];

        context.moveTo(lastPoint.x, lastPoint.y);
        context.lineTo(currentPoint.x, currentPoint.y);
        context.stroke();

        lastPoint = currentPoint;
    }
}

/**
 * draws the plot of a function in a HTML canvas
 * @param where the id of the HTML canvas element
 * @param x the function input
 * @param f the function
 */
plots.plot = function(where, x, f) {
    var canvas = document.getElementById(where);
    var points = plots.scale(x, plots.apply(f, x), canvas.width, canvas.height);
    plots.draw(canvas, points);
}
