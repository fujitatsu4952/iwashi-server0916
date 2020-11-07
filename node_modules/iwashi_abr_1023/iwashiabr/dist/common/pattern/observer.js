"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = void 0;
class Observer {
    constructor() {
        this.cbs = [];
    }
    add(cb) {
        this.cbs.push(cb);
    }
    delete(cb) {
        this.cbs = this.cbs.filter((fn) => fn !== cb);
    }
    emit() {
        this.cbs.forEach(async (cb) => {
            await cb();
        });
    }
}
exports.Observer = Observer;
