"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestRoomInteractor = void 0;
const repository_1 = require("../../../repository");
const generateUuid_1 = require("../../../util/generateUuid");
class GuestRoomInteractor {
    constructor() {
        // ここでroomMastをインスタンス化
        this.roomMastRepository = new repository_1.roomMastRepository();
    }
    async getBlancMast() {
        const roomID = generateUuid_1.getUniqueID.getUniqueID(3);
        return {
            roomID,
            name: "",
            description: "",
            subDescription: "",
            maxPeopleNum: 0,
            stockNum: 0,
            minOrderNum: 0,
            deletedAt: null,
            inSale: null
        };
    }
    async addMast(roomMast) {
        throw new Error('Method not implemented.');
    }
    async updateMast(roomMast) {
        throw new Error('Method not implemented.');
    }
    async fetchRoomMasts(roomID) {
        return (await this.roomMastRepository.fetchRoomMasts(roomID));
    }
}
exports.GuestRoomInteractor = GuestRoomInteractor;
