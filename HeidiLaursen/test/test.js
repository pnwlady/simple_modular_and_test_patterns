const chai = require('chai');
const expect = chai.expect;
const greet = require(__dirname + '/../lib/greet.js');

describe('greetings', () => {
  it('should be a greeting', () => {
    expect(greet("Janice")).to.eql('Hello Janice');
  });
});
