import { Scalars, ReservationObject } from '../../entity';
export declare class roomStockNum {
    private roomStatusRepository;
    private roomInteractor;
    roomStockNum(dateTimeRange: Scalars["AWSDate"][], roomID: string): Promise<number>;
    roomStockNumSingle(time: Scalars["AWSDate"], roomID: string): Promise<number>;
    roomStockUpdate(reservationObject: ReservationObject): Promise<void>;
}
