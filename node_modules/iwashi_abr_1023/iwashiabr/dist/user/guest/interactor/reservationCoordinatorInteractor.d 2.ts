import { GuestReservationInteractor } from "./reservationInteractor";
import { ReservationObject } from '../../../entity/type';
export declare class GuestReservationCoordinatorInteractor {
    private observer;
    reservationObject: ReservationObject | null;
    reservationInteractor: GuestReservationInteractor;
    start(): Promise<void>;
    get getReservationObject(): ReservationObject | null;
    addObserver(cb: () => void): void;
    removeObserver(cb: () => void): void;
    updateReservation(reservationObject: ReservationObject): Promise<void>;
}
