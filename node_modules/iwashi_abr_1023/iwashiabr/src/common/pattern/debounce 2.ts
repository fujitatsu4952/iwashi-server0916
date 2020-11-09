import { Scalars } from '../../entity/type';

export class Debounce {
    /**
     * debounceの待機時間
     * 0ならば待機しない
     */
    protected waitFor: number;
    constructor(waitFor: number) {
        this.waitFor = waitFor;
    }

    /**
     * @todo promiseが溜まってしまうので、どこかのタイミングでクリアしないといけない。
     * 指定時間分だけリクエスト前に待機する
     * @param func 関数
     */
    public debounceForDtRange<
        F extends (
            startDt: Scalars['AWSDate'],
            endDt: Scalars['AWSDate'],
            ...args: any[]
        ) => Promise<void>
    >(func: F): F {
        let timer: NodeJS.Timeout;
        let startDtLocal: Scalars['AWSDate'];
        let endDtLocal: Scalars['AWSDate'];
        if (this.waitFor === 0) {
            return func;
        }
        const promises: any[] = [];
        const debounced = async (
            startDt: Scalars['AWSDate'],
            endDt: Scalars['AWSDate'],
            ...args: any[]
        ) => {
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
                    await Promise.all(
                        promises.map(async (r) => await r(result)),
                    );
                    promises.splice(0);
                }, this.waitFor);
                resolveFunc(new Promise((r) => promises.push(r)));
            });
        };
        return debounced as F;
    }
}
