import { ReservationObject } from "../index";
export declare class reservationRepository {
    updateReservation(reservationObject: ReservationObject | null): Promise<void>;
    addReservation(reservationObject: ReservationObject | null): Promise<void>;
    fetchReservationObjects(reservationID: string | null | undefined): Promise<ReservationObject | null>;
}
