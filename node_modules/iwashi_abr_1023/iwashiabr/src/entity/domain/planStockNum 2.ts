import {
    Scalars, ReservationObject, PlanStatus
} from '../../entity'
import { planMastRepository, planStatusRepository} from "../../repository"
import { getTimeRangeArray } from '../../index';

interface reservationPlanItemTemp {
    planID: Scalars['ID'];
    planNum: number;
}

export class planStockNum {
    // ここでplanStatusRepositoryをインスタンス化
    private planStatusRepository = new planStatusRepository()
    private planInteractor = new planMastRepository();
    
    public async planStockNum(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number> {
        let stockNumList: number[]=[]
        let planMastStockNum = 0

        const planMastStockNumTemp = (await this.planInteractor.fetchPlanMasts(planID))
        if(planMastStockNumTemp) {
            planMastStockNum = planMastStockNumTemp[0].stockNum
        }

        for (let i = 0; i < dateTimeRange.length; i++) {
            const tempStockNum  = (await this.planStatusRepository.fetchPlanStatus(dateTimeRange[i], planID));
            // もし該当時間に売れていた記録があればいったん保持する
            if (tempStockNum && tempStockNum.soldNum) {
                stockNumList.push(tempStockNum.soldNum);
            }
        }
        //もしデータ構造がまだ作られていなかったら = まだ一つも予約されていなかったら
        if (stockNumList.length < 1) {
            return planMastStockNum;
        } else { //プラン構造が作られているもの
            const maxSoldNum = Math.max.apply(null, stockNumList);
            return (planMastStockNum - maxSoldNum);
        }
    }

    public async planStockNumSingle(time: Scalars["AWSDate"], planID: string): Promise<number> {
        let planMastStockNum = 0

        const planMastStockNumTemp = (await this.planInteractor.fetchPlanMasts(planID))
        if(planMastStockNumTemp) {
            planMastStockNum = planMastStockNumTemp[0].stockNum
        }

        const tempStockNum  = (await this.planStatusRepository.fetchPlanStatus(time, planID));

        if (tempStockNum && tempStockNum.soldNum) {
            return (planMastStockNum - tempStockNum.soldNum);
        } else {
            return planMastStockNum
        }
    }

    public async planStockUpdate(reservationObject: ReservationObject) {
        let planStatusList: PlanStatus[] = []
        const timeRangeArray:Scalars['AWSDateTime'][] = getTimeRangeArray(reservationObject.checkInTime, reservationObject.checkOutTime)
        const reservationPlan = JSON.parse(
            reservationObject.planID
        ) as reservationPlanItemTemp[];
        for (let i = 0; i < timeRangeArray.length; i++) {
            for (let m = 0; m < reservationPlan.length; m++) {
                let planStatus: PlanStatus = {
                    planID: reservationPlan[m].planID,
                    Time: timeRangeArray[i],
                    soldNum: reservationPlan[m].planNum,
                    availableNum: null,
                    isAvailabe: null
                };
                planStatusList.push(planStatus);
            }
        }
        await this.planStatusRepository.updatePlanStatus(planStatusList)
    }
}