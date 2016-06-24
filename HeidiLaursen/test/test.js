const chai = require('chai');
const expect = chai.expect;
const greet = require(__dirname + '/../bin/greet');

describe('greet', () => {
  before(() => {
    this.process_backup = process.argv;
    process.argv = [null,null, 'Janice'];
  });

  after(() => {
    process.argv = this.process_backup;
  });

  it('should be a greeting', () => {
    expect(greet()).to.eql('Hello, Janice');
  });
});

describe('arguments', () => {
  before(() => {
    process.argv = [];
  });

  it('should be a greeting', () => {
    expect(greet()).to.eql('Hello, undefined');
  });
});
