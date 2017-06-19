var expect = require('chai').expect;

test('variant-danger', function(context) {
    var output = context.render({ variant: 'danger' });
    expect(output.html).to.contain('input');
});