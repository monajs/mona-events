# Mona - 事件机制

✨✨ 一款小而全的事件监听产品，满足你的各种体位

[![npm](https://img.shields.io/npm/v/@monajs/events.svg?style=flat-square)](https://www.npmjs.com/package/@monajs/events) [![npm](https://img.shields.io/npm/dt/@monajs/events.svg?style=flat-square)](https://www.npmjs.com/package/@monajs/events)

## 大致介绍

这款轻量版 events 主要实现了事件的监听和消息的分发功能，你可以基于这个方法进行赋能。
> 可以参考 [监听者模式实战应用](https://github.com/func-star/blog/issues/23)

## 使用场景

- 单页面应用页面之间的通信
- 组件之间的相互通信
- 全局事件通信

...

## 相关产品

- [mor-scroll-watcher](https://github.com/func-star/mor-scroll-watcher)
- [mo-react-router](https://github.com/func-star/mo-react-router)
- [mor-mobile](https://github.com/func-star/mor-mobile)
- [mov-mobile](https://github.com/func-star/mov-mobile)

## 安装

```bash
$ npm i --save @monajs/events
```


## 代码演示

```js
import Events from '@monajs/events'

const event = new Events()

event.on('eventName', (data)=>{
	// do something
})

event.emit('eventName' ,{...})
```

## 进一步应用

你也可以继承 `@monajs/events` ，结合自己的业务逻辑来实现更高级的功能

```js
import Events from '@monajs/events'

class Ctrl extends Events {
	...
}

export default new Ctrl

```

## 方法

| 参数 | 说明 | 参数 | 返回值 |
| --- | --- | --- | :-- |
| on | 绑定事件 | 1.事件名，2.监听函数 | - |
| emit | 触发事件 | 1.事件名，2.监听函数传值 | - |
| once | 只监听一次，触发后失效 | 1.事件名，2.监听函数 | - |
| off | 取消监听，若没有传被监听函数，则取消事件名对应的全部监听 | 1.事件名，2.监听函数 | - |

## 联系我
> 微信：599321378

