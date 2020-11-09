"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomStockNum = void 0;
const repository_1 = require("../../repository");
const index_1 = require("../../index");
class roomStockNum {
    constructor() {
        // ここでroomStatusRepositoryをインスタンス化
        this.roomStatusRepository = new repository_1.roomStatusRepository();
        this.roomInteractor = new repository_1.roomMastRepository();
    }
    async roomStockNum(dateTimeRange, roomID) {
        let stockNumList = [];
        let roomMastStockNum = 0;
        const roomMastStockNumTemp = (await this.roomInteractor.fetchRoomMasts(roomID));
        if (roomMastStockNumTemp) {
            roomMastStockNum = roomMastStockNumTemp[0].stockNum;
        }
        for (let i = 0; i < dateTimeRange.length; i++) {
            const tempStockNum = (await this.roomStatusRepository.fetchRoomStatus(dateTimeRange[i], roomID));
            // もし該当時間に売れていた記録があればいったん保持する
            if (tempStockNum && tempStockNum.soldNum) {
                stockNumList.push(tempStockNum.soldNum);
            }
        }
        //もしデータ構造がまだ作られていなかったら = まだ一つも予約されていなかったら
        if (stockNumList.length < 1) {
            return roomMastStockNum;
        }
        else { //プラン構造が作られているもの
            const maxSoldNum = Math.max.apply(null, stockNumList);
            return (roomMastStockNum - maxSoldNum);
        }
    }
    async roomStockNumSingle(time, roomID) {
        let roomMastStockNum = 0;
        const roomMastStockNumTemp = (await this.roomInteractor.fetchRoomMasts(roomID));
        if (roomMastStockNumTemp) {
            roomMastStockNum = roomMastStockNumTemp[0].stockNum;
        }
        const tempStockNum = (await this.roomStatusRepository.fetchRoomStatus(time, roomID));
        if (tempStockNum && tempStockNum.soldNum) {
            return (roomMastStockNum - tempStockNum.soldNum);
        }
        else {
            return roomMastStockNum;
        }
    }
    async roomStockUpdate(reservationObject) {
        let roomStatusList = [];
        const timeRangeArray = index_1.getTimeRangeArray(reservationObject.checkInTime, reservationObject.checkOutTime);
        const reservationRoom = JSON.parse(reservationObject.roomID);
        for (let i = 0; i < timeRangeArray.length; i++) {
            for (let m = 0; m < reservationRoom.length; m++) {
                let roomStatus = {
                    roomID: reservationRoom[m].roomID,
                    Time: timeRangeArray[i],
                    soldNum: reservationRoom[m].roomNum,
                    availableNum: null,
                    isAvailabe: null
                };
                roomStatusList.push(roomStatus);
            }
        }
        await this.roomStatusRepository.updateRoomStatus(roomStatusList);
    }
}
exports.roomStockNum = roomStockNum;
