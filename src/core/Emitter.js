export class Emitter {
  constructor() {
    this.listners = {};
  }
  // dispatch, fire, trigger...
  // table.emit('table: select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listners[event])) {
      return false;
    }
    this.listners[event].forEach(listener => {
      listener(...args)
    });
    return true;
  }

  // on, listen...
  // formula.subscribe('table: select', () => {})
  subscribe(event, fn) {
    this.listners[event] = this.listners[event] || [];
    this.listners[event].push(fn);
    return () => {
      this.listners[event] =
        this.listners[event].filter(listener => listener !== fn);
    };
  }
}
