"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostPlanInteractor = void 0;
const repository_1 = require("../../../repository");
const generateUuid_1 = require("../../../util/generateUuid");
class HostPlanInteractor {
    constructor() {
        // ここでplanMastをインスタンス化
        this.planMastRepository = new repository_1.planMastRepository();
    }
    async getBlancMast() {
        const planID = generateUuid_1.getUniqueID.getUniqueID(3);
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
    async addMast(planMast) {
        return await this.planMastRepository.addPlan(planMast);
    }
    async updateMast(planMast) {
        return await this.planMastRepository.updatePlan(planMast);
    }
    async fetchPlanMasts(planID) {
        return await this.planMastRepository.fetchPlanMasts(planID);
    }
}
exports.HostPlanInteractor = HostPlanInteractor;
