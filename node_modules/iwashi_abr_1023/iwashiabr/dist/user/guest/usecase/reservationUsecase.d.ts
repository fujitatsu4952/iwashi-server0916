import { ReservationObject, Scalars } from '../../../entity';
export interface IGuestReservationUsecase {
    getBlanc(): Promise<ReservationObject>;
    addMast(reservationObject: ReservationObject | null): Promise<any>;
    updateMast(reservationObject: ReservationObject | null): Promise<any>;
    fetchReservationObjects(reservationID: Scalars['ID'] | undefined | null): Promise<ReservationObject | null>;
}
