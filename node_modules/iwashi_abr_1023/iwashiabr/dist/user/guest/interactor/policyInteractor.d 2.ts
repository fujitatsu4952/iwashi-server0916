import { IGuestPolicyUsecase } from "../usecase/policyUsecase";
export declare class GuestPolicyInteractor implements IGuestPolicyUsecase {
    private policyMastRepository;
    fetchPolicyMast(policyID: string | undefined | null): Promise<any>;
}
