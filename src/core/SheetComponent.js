import { DomListner } from '@core/DomListner';

export class SheetComponent extends DomListner {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.onsubscribers = [];

    this.prepare();
  }

  prepare() {
  }

  // Return template of component
  toHTML() {
    return '';
  }

  // Notification listeners about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Subscribe on event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.onsubscribers.push(unsub);
  }

  // Init listeners, add DOM listeners
  init() {
    this.initDOMListners();
  }

  // Remove component.
  // Erase listeners
  destroy() {
    this.removeDOMListners();
    this.onsubscribers.forEach(unsub => unsub());
  }
}
