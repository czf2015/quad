export class EventBus {
  constructor() {
    this.eventBus = {}
  }
  on(eventName, eventCallback, thisArg) {
    if (!this.eventBus[eventName]) {
      this.eventBus[eventName] = []
    }
    this.eventBus[eventName].push({ eventCallback, thisArg })
  }
  off(eventName, eventCallback) {
    if (this.eventBus[eventName]) {
      this.eventBus[eventName] = this.eventBus[eventName].filter(handler => handler.eventCallback !== eventCallback)
    }
  }
  emit(eventName, ...argsArray) {
    this.eventBus[eventName]?.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, argsArray)
    })
  }
}