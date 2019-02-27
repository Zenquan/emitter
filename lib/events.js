function emitter() {
  this.events = {}
  // 最大绑定数量
  this._maxListeners = null
}

var proto = emitter.prototype

// on监听事件
proto.on = proto.addListener = function (type, listener) {
  if (this.events[type]) {
    if(this._maxListeners!=0>this.events[type].length>this._maxListeners) {
      console.error(` MaxListenersExceededWarning: Possible EventEmitter memory leak detected. ${this.events[type].length-this._maxListeners} 响 listeners added. Use emitter.setMaxListeners() to increase limit`)
    }
    this.events[type].push(listener)
  } else {
    this.events[type] = [listener]
  }
  return this
}
// once一次监听事件
proto.once = function (type, listener) {
  let wrapper = (...args) => {
    // 先执行，后删除
    listener.apply(this, args)
    this.removeListener(type, wrapper)
  }
  // 监听合并的事件
  this.on(type, wrapper)
  return this
}
// 设置最大绑定数量
proto.setMaxListeners = function(maxListeners) {
  this._maxListeners = maxListeners;
}
// 所有的监听函数
proto.listeners = function(event) {
    return this.events[event];
}
// removeListener移除监听事件
proto.removeListener = function (type, listener) {
  if (this.events[type]) {
    // 过滤掉指定的事件
    this.events[type] = this.events[type].filter(l => l != listener)
  }
  return this
}
// removeAllListener移除所有监听事件
proto.removeAllListener = function (type) {
  delete this.events[type];
}
// 触发on监听的事件
proto.emit = function (type, ...args) {
  this.events[type] && this.events[type].forEach(listener => listener.apply(this, args));
  return this
}
module.exports = emitter