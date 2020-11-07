export class Throttle {
    /**
     * debounceの待機時間
     * 0ならば待機しない
     */
    protected waitFor: number;
    constructor(
        waitFor: number,
    ) {
        this.waitFor = waitFor;
    }

    /**
     * 待機時間分だけrequestを間引く
     * @param func スロットルで間引く関数
     */
    public throttleForMast<F extends (...args: any[]) => Promise<void>>(func: F): F {
        let isCalled = false;
        if (this.waitFor === 0) {
            return func;
        }
        let fn: Promise<void> | undefined;
        const throttle = async (...args: any[]) => {
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
            }) as Promise<void>;
        };
        return throttle as F;
    }

    public throttleForMastAndResponse<T, F extends (...args: any[]) => Promise<T>>(func: F): F {
        let isCalled = false;
        if (this.waitFor === 0) {
            return func;
        }
        let fn: Promise<T> | undefined;
        const throttle = async (...args: any[]) => {
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
            }) as Promise<T>;
        };
        return throttle as F;
    }
}
