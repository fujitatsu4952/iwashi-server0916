"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostRoomInteractor = void 0;
const repository_1 = require("../../../repository");
const generateUuid_1 = require("../../../util/generateUuid");
class HostRoomInteractor {
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
        return await this.roomMastRepository.addRoom(roomMast);
    }
    async updateMast(roomMast) {
        throw await this.roomMastRepository.updateRoom(roomMast);
    }
    async fetchRoomMasts(roomID) {
        return (await this.roomMastRepository.fetchRoomMasts(roomID));
    }
}
exports.HostRoomInteractor = HostRoomInteractor;
