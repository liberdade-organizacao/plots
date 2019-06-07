function main() {
    /* IMAGE 1 */
    var x = plots.range(-Math.PI, Math.PI, 500);
    var f = function(t) {
        return ((t >= -Math.PI/2) && (t <= Math.PI/2))? 1 : 0;
    };
    plots.plot('img-1', x, f);

    /* IMAGE 2 */
    plots.plot('img-2', x, Math.sin);
}
