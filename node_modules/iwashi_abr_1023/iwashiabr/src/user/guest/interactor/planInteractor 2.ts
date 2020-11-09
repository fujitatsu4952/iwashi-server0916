import {IGuestPlanUsecase} from "../usecase/planUsecase";
import {
    PlanMast
} from '../../../entity/type'
import {planMastRepository} from "../../../repository"
import { getUniqueID } from "../../../util/generateUuid";


export class GuestPlanInteractor implements IGuestPlanUsecase {
    // ここでplanMastをインスタンス化
    private planMastRepository = new planMastRepository()
    public async getBlancMast(): Promise<PlanMast> {
        const planID: string = getUniqueID.getUniqueID(3);
        return {
            planID,
            name: "",
            description: "",
            subDescription: "",
            price: 0,
            stockNum: 0,
            deletedAt: null,
            inSale: null
        };
    }
    addMast(planMast: PlanMast | null): Promise<any> {
        throw new Error('Method not implemented.');
    }
    updateMast(planMast: PlanMast | null): Promise<any> {
        throw new Error('Method not implemented.');
    }
    public async fetchPlanMasts(planID: string | undefined): Promise<PlanMast[] | null> {
        return await this.planMastRepository.fetchPlanMasts(planID)
    }
}