require('babel-register')
const Events = require('../src/index.js')
const chai = require('chai')
chai.should()

describe('测试 Events 类：', () => {
	it('绑定事件', () => {
		const events = new Events()
		events.on('test', (a) => {
			a.should.equal(11)
		})
		events.emit('test', 11)
		events._monaEvents['test'].length.should.equal(1)
	})

	it('使用同一个事件名绑定多个事件', () => {
		const events = new Events()
		events.on('test', (a) => {
			a.should.equal(11)
		})
		events.on('test', (b) => {
			b.should.equal(11)
		})
		events.on('test', (c) => {
			c.should.equal(11)
		})
		events.emit('test', 11)
		events._monaEvents['test'].length.should.equal(3)
	})

	it('绑定的事件触发一次后失效', () => {
		const events = new Events()
		events.once('test', (a) => {
			a.should.equal(11)
		})
		events._monaEvents['test'].length.should.equal(1)
		events.emit('test', 11)
		events._monaEvents['test'].length.should.equal(0)
	})

	it('解绑事件，使用对应方法名', () => {
		function test1 (a) {
			a.should.equal(11)
		}
		function test2 (b) {
			b.should.equal(11)
		}
		const events = new Events()
		events.on('test', test1)
		events.on('test', test2)
		events._monaEvents['test'].length.should.equal(2)
		events.emit('test', 11)
		events.off('test', test1)
		events._monaEvents['test'].length.should.equal(1)
		events.off('test', test2)
		events._monaEvents['test'].length.should.equal(0)
	})

	it('解绑所有事件', () => {
		function test1 (a) {
			a.should.equal(11)
		}
		function test2 (b) {
			b.should.equal(11)
		}
		const events = new Events()
		events.on('test', test1)
		events.on('test', test2)
		events._monaEvents['test'].length.should.equal(2)
		events.off('test')
		String(events._monaEvents['test']).should.equal('undefined')
	})
})
