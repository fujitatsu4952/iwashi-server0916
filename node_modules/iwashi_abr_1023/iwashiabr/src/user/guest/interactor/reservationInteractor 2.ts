import {IGuestReservationUsecase} from "../usecase/reservationUsecase";
import {
    ReservationObject
} from '../../../entity/type'
import {GuestPlanStatusInteractor, GuestRoomStatusInteractor} from './../index'
import {reservationRepository} from "../../../repository"
import { getUniqueID } from "../../../util/generateUuid";

export class GuestReservationInteractor implements IGuestReservationUsecase {
    private planStatusInteractor = new GuestPlanStatusInteractor();
    private roomStatusInteractor = new GuestRoomStatusInteractor()

    // ここでplanMastをインスタンス化
    private reservationRepository = new reservationRepository()
    public async getBlanc(): Promise<ReservationObject> {
        const reservationID: string = getUniqueID.getUniqueID(3);
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
    public async addMast(reservationObject: ReservationObject): Promise<void> {
        await Promise.all([this.planStatusInteractor.updateStatus(reservationObject), this.roomStatusInteractor.updateStatus(reservationObject)]);
        await this.reservationRepository.addReservation(reservationObject);
    };
    public async updateMast(reservationObject: ReservationObject | null): Promise<any> {
        return await this.reservationRepository.updateReservation(reservationObject)
    };
    public async fetchReservationObjects(reservationID: string | undefined | null): Promise<ReservationObject | null> {
        return await this.reservationRepository.fetchReservationObjects(reservationID)
    }
}