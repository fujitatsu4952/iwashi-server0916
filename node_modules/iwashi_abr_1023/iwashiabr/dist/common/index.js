"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// pattern
__exportStar(require("./pattern/observer"), exports);
__exportStar(require("./pattern/debounce"), exports);
__exportStar(require("./pattern/throttle"), exports);
__exportStar(require("./pattern/decorator"), exports);
// util
__exportStar(require("./util/compare"), exports);
__exportStar(require("./util/dateUtil"), exports);
// function
