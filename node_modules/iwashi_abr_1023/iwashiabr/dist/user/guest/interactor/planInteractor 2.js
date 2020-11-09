"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestPlanInteractor = void 0;
const repository_1 = require("../../../repository");
const generateUuid_1 = require("../../../util/generateUuid");
class GuestPlanInteractor {
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
    addMast(planMast) {
        throw new Error('Method not implemented.');
    }
    updateMast(planMast) {
        throw new Error('Method not implemented.');
    }
    async fetchPlanMasts(planID) {
        return await this.planMastRepository.fetchPlanMasts(planID);
    }
}
exports.GuestPlanInteractor = GuestPlanInteractor;
