import { Scalars } from '../../../entity';
export interface IGuestPolicyUsecase {
    fetchPolicyMast(policyID: Scalars['ID'] | undefined | null): Promise<any | undefined>;
}
