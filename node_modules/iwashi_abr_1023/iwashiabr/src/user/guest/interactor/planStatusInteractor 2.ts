import {IGuestPlanStatusUsecase} from "../usecase/planStatusUsecase";
import { PlanStatus, ReservationObject } from '../../../entity/type'
import { planStatusRepository } from "../../../repository"
import { planStockNum } from "../../../index";


export class GuestPlanStatusInteractor implements IGuestPlanStatusUsecase {

    // ここでplanStatusRepositoryをインスタンス化
    private planStatusRepository = new planStatusRepository()
    // これはUtilをインスタンス化
    private planStockNumCalc = new planStockNum();

    public async updateStatus(resevationObject: ReservationObject): Promise<void> {
        await this.planStockNumCalc.planStockUpdate(resevationObject);
    }
    public async fetchStatus(time: string, planID: string): Promise<number> {
        return await this.planStockNumCalc.planStockNumSingle(time, planID)
    }
    public async fetchStatusWithinRange(dateTimeRange: string[], planID: string): Promise<number> {
        return await this.planStockNumCalc.planStockNum(dateTimeRange, planID)
    }
}