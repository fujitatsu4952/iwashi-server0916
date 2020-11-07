"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Throttle = void 0;
class Throttle {
    constructor(waitFor) {
        this.waitFor = waitFor;
    }
    /**
     * 待機時間分だけrequestを間引く
     * @param func スロットルで間引く関数
     */
    throttleForMast(func) {
        let isCalled = false;
        if (this.waitFor === 0) {
            return func;
        }
        let fn;
        const throttle = async (...args) => {
            return new Promise((resolveFunc) => {
                if (!fn) {
                    fn = func(...args);
                }
                if (!isCalled) {
                    isCalled = true;
                    setTimeout(() => {
                        fn = undefined;
                        isCalled = false;
                    }, this.waitFor);
                }
                resolveFunc(fn);
            });
        };
        return throttle;
    }
    throttleForMastAndResponse(func) {
        let isCalled = false;
        if (this.waitFor === 0) {
            return func;
        }
        let fn;
        const throttle = async (...args) => {
            return new Promise((resolveFunc) => {
                if (!fn) {
                    fn = func(...args);
                }
                if (!isCalled) {
                    isCalled = true;
                    setTimeout(() => {
                        fn = undefined;
                        isCalled = false;
                    }, this.waitFor);
                }
                resolveFunc(fn);
            });
        };
        return throttle;
    }
}
exports.Throttle = Throttle;
