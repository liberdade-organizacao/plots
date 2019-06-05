describe('math functions', function() {
    describe('max and min', function() {
        it('should be able to deal with an empty array', function(done) {
            var expected = null;
            chai.assert.equal(expected, max([]));
            chai.assert.equal(expected, min([]));
            done();
        });

        it('should be able to deal with arrays with one value only', function(done) {
            var arrayWithOneItem = [1];
            chai.assert.equal(min(arrayWithOneItem), max(arrayWithOneItem));
            done();
        });

        it('should find the maximum and the minimum value in an array', function(done) {
            var array = [1,5,9,7,5,3,4,5,6];
            chai.assert.equal(9, max(array));
            chai.assert.equal(1, min(array));
            done();
        });

    });
});
