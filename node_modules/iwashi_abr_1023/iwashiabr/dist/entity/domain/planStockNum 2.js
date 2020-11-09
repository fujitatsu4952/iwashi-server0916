"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planStockNum = void 0;
const repository_1 = require("../../repository");
const index_1 = require("../../index");
class planStockNum {
    constructor() {
        // ここでplanStatusRepositoryをインスタンス化
        this.planStatusRepository = new repository_1.planStatusRepository();
        this.planInteractor = new repository_1.planMastRepository();
    }
    async planStockNum(dateTimeRange, planID) {
        let stockNumList = [];
        let planMastStockNum = 0;
        const planMastStockNumTemp = (await this.planInteractor.fetchPlanMasts(planID));
        if (planMastStockNumTemp) {
            planMastStockNum = planMastStockNumTemp[0].stockNum;
        }
        for (let i = 0; i < dateTimeRange.length; i++) {
            const tempStockNum = (await this.planStatusRepository.fetchPlanStatus(dateTimeRange[i], planID));
            // もし該当時間に売れていた記録があればいったん保持する
            if (tempStockNum && tempStockNum.soldNum) {
                stockNumList.push(tempStockNum.soldNum);
            }
        }
        //もしデータ構造がまだ作られていなかったら = まだ一つも予約されていなかったら
        if (stockNumList.length < 1) {
            return planMastStockNum;
        }
        else { //プラン構造が作られているもの
            const maxSoldNum = Math.max.apply(null, stockNumList);
            return (planMastStockNum - maxSoldNum);
        }
    }
    async planStockNumSingle(time, planID) {
        let planMastStockNum = 0;
        const planMastStockNumTemp = (await this.planInteractor.fetchPlanMasts(planID));
        if (planMastStockNumTemp) {
            planMastStockNum = planMastStockNumTemp[0].stockNum;
        }
        const tempStockNum = (await this.planStatusRepository.fetchPlanStatus(time, planID));
        if (tempStockNum && tempStockNum.soldNum) {
            return (planMastStockNum - tempStockNum.soldNum);
        }
        else {
            return planMastStockNum;
        }
    }
    async planStockUpdate(reservationObject) {
        let planStatusList = [];
        const timeRangeArray = index_1.getTimeRangeArray(reservationObject.checkInTime, reservationObject.checkOutTime);
        const reservationPlan = JSON.parse(reservationObject.planID);
        for (let i = 0; i < timeRangeArray.length; i++) {
            for (let m = 0; m < reservationPlan.length; m++) {
                let planStatus = {
                    planID: reservationPlan[m].planID,
                    Time: timeRangeArray[i],
                    soldNum: reservationPlan[m].planNum,
                    availableNum: null,
                    isAvailabe: null
                };
                planStatusList.push(planStatus);
            }
        }
        await this.planStatusRepository.updatePlanStatus(planStatusList);
    }
}
exports.planStockNum = planStockNum;
