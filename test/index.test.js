require('babel-register')
const Events = require('../src/index.js')
const chai = require('chai')
chai.should()

const events = new Events()
events.on('aaa', (a)=>{
	console.log(a)
})
events.emit('aaa', 123)

describe('test index.js', () => {
	it('test function.', () => {
		const list1 = [1, 2, 3]
		const list2 = [1, 2, 3]
		list1.length.should.equal(3)
		assertListEqual(list1, list2)
	})
})
