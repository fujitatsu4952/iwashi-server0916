"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debounce = void 0;
class Debounce {
    constructor(waitFor) {
        this.waitFor = waitFor;
    }
    /**
     * @todo promiseが溜まってしまうので、どこかのタイミングでクリアしないといけない。
     * 指定時間分だけリクエスト前に待機する
     * @param func 関数
     */
    debounceForDtRange(func) {
        let timer;
        let startDtLocal;
        let endDtLocal;
        if (this.waitFor === 0) {
            return func;
        }
        const promises = [];
        const debounced = async (startDt, endDt, ...args) => {
            // 日付の変更
            startDtLocal = startDtLocal || startDt;
            endDtLocal = endDtLocal || endDt;
            startDtLocal = startDtLocal < startDt ? startDtLocal : startDt;
            endDtLocal = endDtLocal > endDt ? endDtLocal : endDt;
            return new Promise((resolveFunc) => {
                // timeoutの指定
                clearTimeout(timer);
                timer = setTimeout(async () => {
                    const result = func(startDtLocal, endDtLocal, ...args);
                    startDtLocal = '';
                    endDtLocal = '';
                    await Promise.all(promises.map(async (r) => await r(result)));
                    promises.splice(0);
                }, this.waitFor);
                resolveFunc(new Promise((r) => promises.push(r)));
            });
        };
        return debounced;
    }
}
exports.Debounce = Debounce;
