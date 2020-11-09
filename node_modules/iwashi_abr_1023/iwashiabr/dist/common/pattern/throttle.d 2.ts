export declare class Throttle {
    /**
     * debounceの待機時間
     * 0ならば待機しない
     */
    protected waitFor: number;
    constructor(waitFor: number);
    /**
     * 待機時間分だけrequestを間引く
     * @param func スロットルで間引く関数
     */
    throttleForMast<F extends (...args: any[]) => Promise<void>>(func: F): F;
    throttleForMastAndResponse<T, F extends (...args: any[]) => Promise<T>>(func: F): F;
}
