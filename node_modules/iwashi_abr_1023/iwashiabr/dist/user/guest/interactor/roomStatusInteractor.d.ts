import { IGuestRoomStatusUsecase } from "../usecase/roomStatusUsecase";
import { ReservationObject } from '../../../entity/type';
export declare class GuestRoomStatusInteractor implements IGuestRoomStatusUsecase {
    private roomStatusRepository;
    private roomStockNumCalc;
    updateStatus(resevationObject: ReservationObject): Promise<void>;
    fetchStatus(time: string, roomID: string): Promise<number>;
    fetchStatusWithinRange(dateTimeRange: string[], roomID: string): Promise<number>;
}
