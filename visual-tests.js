function main() {
    let pi = 3.1415926;

    /* IMAGE 1 */
    var x = range(-pi, pi, 500);
    var f = function(t) {
        return ((t >= -pi/2) && (t <= pi/2))? 1 : 0;
    };
    plot('img-1', x, f);
}
