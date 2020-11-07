import { PolicyMast, Scalars } from '../../../entity';

export interface IGuestPolicyUsecase {
    // これまでのプラン一覧を取得
    fetchPolicyMast(policyID: Scalars['ID'] | undefined | null): Promise<any | undefined>;
}
