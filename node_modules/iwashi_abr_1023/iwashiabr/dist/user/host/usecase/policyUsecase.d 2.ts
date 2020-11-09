import { PolicyMast, Scalars } from '../../../entity';
export interface IHostPolicyUsecase {
    updateMast(policyMast: PolicyMast | null): Promise<any>;
    fetchPolicyMast(policyID: Scalars['ID'] | undefined | null): Promise<any | undefined>;
}
