const expectChai = require('chai').expect;
const checking = require('./hot-dog-detector');

describe('Check if the food is hot-dog', () => {
	it('hod-dog should return true', () => {
		expectChai(checking('hot-dog')).to.be.equal(true);
	});
	it('chimichanga should return false', () => {
		expectChai(checking('chimichanga')).to.be.equal(false);
	});
});
