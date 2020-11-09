import { PolicyMast, Scalars } from '../../../entity';

export interface IHostPolicyUsecase {
    // 作ったものを更新
    updateMast(policyMast: PolicyMast | null): Promise<any>;
    // これまでのプラン一覧を取得
    fetchPolicyMast(policyID: Scalars['ID'] | undefined | null): Promise<any | undefined>;
}
