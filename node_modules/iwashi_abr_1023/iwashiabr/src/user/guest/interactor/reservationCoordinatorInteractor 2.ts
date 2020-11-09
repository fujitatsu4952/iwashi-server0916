import { Observer } from '../../../index';
import { GuestReservationInteractor } from "./reservationInteractor"
import {
    ReservationObject
} from '../../../entity/type'
export class GuestReservationCoordinatorInteractor {
    private observer!: Observer;
    public reservationObject: ReservationObject | null = null
    public reservationInteractor = new GuestReservationInteractor();

    public async start() {
        this.observer = new Observer();
    }

    public get getReservationObject(): ReservationObject | null {
        return this.reservationObject;
    }
    public addObserver(cb: () => void): void {
        this.observer.add(cb);
    }
    public removeObserver(cb: () => void): void {
        this.observer.delete(cb);
    }
    // storeを更新する
    public async updateReservation( reservationObject: ReservationObject ): Promise<void> {
        this.reservationObject = reservationObject;
        this.observer.emit();
    }
}