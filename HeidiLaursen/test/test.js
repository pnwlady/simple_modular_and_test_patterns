const chai = require('chai');
const expect = chai.expect;
const Dayman = require(__dirname + '/../lib/greet.js');

describe('greetings', () => {
    it('should be a greeting', () => {
        expect(greet.greeting).to.eql('Hello');
    });
    it('should have a name', () => {
        expect(greet.name).to.eql(name);
    });
});
