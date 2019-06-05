describe('math functions', function() {
    describe('max and min', function() {
        it('should be able to deal with an empty array', function(done) {
            var expected = null;
            chai.assert.equal(expected, plots.max([]));
            chai.assert.equal(expected, plots.min([]));
            done();
        });

        it('should be able to deal with arrays with one value only', function(done) {
            var arrayWithOneItem = [1];
            chai.assert.equal(plots.min(arrayWithOneItem), plots.max(arrayWithOneItem));
            done();
        });

        it('should find the maximum and the minimum value in an array', function(done) {
            var array = [1,5,9,7,5,3,4,5,6];
            chai.assert.equal(9, plots.max(array));
            chai.assert.equal(1, plots.min(array));
            done();
        });
    });

    describe('map', function() {
        it('should not map invalid values', function(done) {
            var result = plots.map(1, 2, 'oh yeah', null, {
                value: 1,
                what: 'i should not work'
            });
            chai.assert.equal(null, result);
        });

        it('should map accordingly', function(done) {
            var result = plots.map(5, 1, 10, 1, 100);
            chai.assert.equal(50, result);
        });

        it('should map ranges in opposite directions', function(done) {
            var result = plots.map(5, 1, 10, -12, -1);
            chai.assert.equal(-6, result);
        });
    });
});
