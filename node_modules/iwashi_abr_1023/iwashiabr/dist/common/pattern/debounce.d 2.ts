import { Scalars } from '../../entity/type';
export declare class Debounce {
    /**
     * debounceの待機時間
     * 0ならば待機しない
     */
    protected waitFor: number;
    constructor(waitFor: number);
    /**
     * @todo promiseが溜まってしまうので、どこかのタイミングでクリアしないといけない。
     * 指定時間分だけリクエスト前に待機する
     * @param func 関数
     */
    debounceForDtRange<F extends (startDt: Scalars['AWSDate'], endDt: Scalars['AWSDate'], ...args: any[]) => Promise<void>>(func: F): F;
}
