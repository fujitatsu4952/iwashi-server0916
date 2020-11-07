import { IHostPolicyUsecase } from "../usecase/policyUsecase";
import { PolicyMast } from '../../../entity/type';
export declare class HostPolicyInteractor implements IHostPolicyUsecase {
    private policyMastRepository;
    updateMast(policyMast: PolicyMast | null): Promise<any>;
    fetchPolicyMast(policyID: string | undefined | null): Promise<any>;
}
