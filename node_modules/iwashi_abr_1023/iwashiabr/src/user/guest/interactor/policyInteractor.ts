import {IGuestPolicyUsecase} from "../usecase/policyUsecase";
import {
    PolicyMast
} from '../../../entity/type'
import {policyMastRepository} from "../../../repository"


export class GuestPolicyInteractor implements IGuestPolicyUsecase {
    // ここでpolicyMastをインスタンス化
    private policyMastRepository = new policyMastRepository()

    public async fetchPolicyMast(policyID: string | undefined | null): Promise<any> {
        return (await this.policyMastRepository.fetchPolicyMast('174da08566682'))
    }
   
}