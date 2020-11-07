"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueID = void 0;
class GetUniqueIDUtil {
    getUniqueID(digit) {
        let strong = 1000;
        if (digit) {
            strong = Math.pow(10, digit);
        }
        return (new Date().getTime().toString(16) +
            Math.floor(strong * Math.random()).toString(16));
    }
}
const getUniqueID = new GetUniqueIDUtil();
exports.getUniqueID = getUniqueID;
