## emitter
>模仿nodejs里的events，帮助你实现事件的订阅和发布。

- 1.纯粹是为了学nodejs，理解EventEmitter的原理。
- 2.练习原生js

### 特点

原生无依赖

### 使用

```js
const EventEmitter = require('./events')
```

### API

on/addListener
>添加一个事件监听器，支持链式调用

```js
emitter.on(eventName, listener)
emitter.addListener(eventName, listener)
```
- eventName 事件名称
- listener 监听器函数

removeListener
>删除一个事件监听器，支持链式调用
```js
emitter.removeListener(eventName, listener)
```
- eventName 事件名称
- listener 监听器函数

removeAllListener
>触发事件，支持链式调用
```js
emitter.removeAllListener(eventName)
```
- eventName 事件名称

once
>添加一个只能触发一次的事件监听器，支持链式调用
```js
emitter.once(eventName, listener)
```
- eventName 事件名称
- listener 监听器函数

emit
>触发事件，支持链式调用
```js
emitter.emit(eventName, args)
```
- eventName 事件名称
- listener 监听器函数

setMaxListeners
>设置最大数量的监听事件数，设置为0时就是无限制

```js
emitter.setMaxListeners(num)
```
- num： 最大数量的监听事件数

### TODO
- [ ] 单元测试
- [ ] 覆盖率