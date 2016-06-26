const chai = require('chai');
const expect = chai.expect;
const greet = require(__dirname + '/../lib/greet');

describe('greet', () => {
  it('should be a greeting', () => {
    expect(greet('Janice')).to.eql('Hello, Janice');
  });
});

describe('arguments', () => {
  it('should be a greeting', () => {
    expect(greet(process.argv[2])).to.eql('Hello, ' + process.argv[2]);
  });
});
