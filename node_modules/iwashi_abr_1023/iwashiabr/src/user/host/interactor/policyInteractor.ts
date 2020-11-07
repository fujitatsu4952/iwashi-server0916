import {IHostPolicyUsecase} from "../usecase/policyUsecase";
import {
    PolicyMast
} from '../../../entity/type'
import {policyMastRepository} from "../../../repository"


export class HostPolicyInteractor implements IHostPolicyUsecase {
    // ここでpolicyMastをインスタンス化
    private policyMastRepository = new policyMastRepository()

    public async updateMast(policyMast: PolicyMast | null): Promise<any> {
        return await this.policyMastRepository.updatePolicy(policyMast)
    }

    public async fetchPolicyMast(policyID: string | undefined | null): Promise<any> {
        return (await this.policyMastRepository.fetchPolicyMast('174da08566682'))
    }
   
}