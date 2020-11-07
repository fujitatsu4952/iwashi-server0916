"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestRoomStatusInteractor = void 0;
const repository_1 = require("../../../repository");
const index_1 = require("../../../index");
class GuestRoomStatusInteractor {
    constructor() {
        // ここでroomStatusRepositoryをインスタンス化
        this.roomStatusRepository = new repository_1.roomStatusRepository();
        // これはUtilをインスタンス化
        this.roomStockNumCalc = new index_1.roomStockNum();
    }
    async updateStatus(resevationObject) {
        await this.roomStockNumCalc.roomStockUpdate(resevationObject);
    }
    async fetchStatus(time, roomID) {
        return await this.roomStockNumCalc.roomStockNumSingle(time, roomID);
    }
    async fetchStatusWithinRange(dateTimeRange, roomID) {
        return await this.roomStockNumCalc.roomStockNum(dateTimeRange, roomID);
    }
}
exports.GuestRoomStatusInteractor = GuestRoomStatusInteractor;
