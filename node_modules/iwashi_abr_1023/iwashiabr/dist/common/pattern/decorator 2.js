"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebounceForDtRange = exports.ThrottleForMast = void 0;
const throttle_1 = require("./throttle");
const debounce_1 = require("./debounce");
function ThrottleForMast(waitFor) {
    return (target, name, descriptor) => {
        const throttle = new throttle_1.Throttle(waitFor);
        const method = descriptor.value; // もともとのメソッドを退避しておきます。
        descriptor.value = throttle.throttleForMastAndResponse(method);
    };
}
exports.ThrottleForMast = ThrottleForMast;
function DebounceForDtRange(waitFor) {
    return (target, name, descriptor) => {
        const debounce = new debounce_1.Debounce(waitFor);
        const method = descriptor.value;
        descriptor.value = debounce.debounceForDtRange(method);
        return descriptor;
    };
}
exports.DebounceForDtRange = DebounceForDtRange;
