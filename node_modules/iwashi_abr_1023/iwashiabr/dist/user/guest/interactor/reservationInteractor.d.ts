import { IGuestReservationUsecase } from "../usecase/reservationUsecase";
import { ReservationObject } from '../../../entity/type';
export declare class GuestReservationInteractor implements IGuestReservationUsecase {
    private planStatusInteractor;
    private roomStatusInteractor;
    private reservationRepository;
    getBlanc(): Promise<ReservationObject>;
    addMast(reservationObject: ReservationObject): Promise<void>;
    updateMast(reservationObject: ReservationObject | null): Promise<any>;
    fetchReservationObjects(reservationID: string | undefined | null): Promise<ReservationObject | null>;
}
