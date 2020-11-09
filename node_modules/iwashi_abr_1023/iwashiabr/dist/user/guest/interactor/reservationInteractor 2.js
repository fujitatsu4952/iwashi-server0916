"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestReservationInteractor = void 0;
const index_1 = require("./../index");
const repository_1 = require("../../../repository");
const generateUuid_1 = require("../../../util/generateUuid");
class GuestReservationInteractor {
    constructor() {
        this.planStatusInteractor = new index_1.GuestPlanStatusInteractor();
        this.roomStatusInteractor = new index_1.GuestRoomStatusInteractor();
        // ここでplanMastをインスタンス化
        this.reservationRepository = new repository_1.reservationRepository();
    }
    async getBlanc() {
        const reservationID = generateUuid_1.getUniqueID.getUniqueID(3);
        return {
            reservationID,
            checkInTime: '',
            checkOutTime: '',
            planID: '',
            roomID: '',
            roomNum: 0,
            planNum: 0,
            peopleNum: 0,
            policyID: '174da08566682',
            totalPrice: 0,
            guestName: null,
            guestEmail: null,
            GuestTell: null,
            canceledAt: null
        };
    }
    async addMast(reservationObject) {
        await Promise.all([this.planStatusInteractor.updateStatus(reservationObject), this.roomStatusInteractor.updateStatus(reservationObject)]);
        await this.reservationRepository.addReservation(reservationObject);
    }
    ;
    async updateMast(reservationObject) {
        return await this.reservationRepository.updateReservation(reservationObject);
    }
    ;
    async fetchReservationObjects(reservationID) {
        return await this.reservationRepository.fetchReservationObjects(reservationID);
    }
}
exports.GuestReservationInteractor = GuestReservationInteractor;
