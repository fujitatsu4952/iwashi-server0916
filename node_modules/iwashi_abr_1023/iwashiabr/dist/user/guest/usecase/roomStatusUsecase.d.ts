import { Scalars, ReservationObject } from '../../../entity';
export interface IGuestRoomStatusUsecase {
    updateStatus(reservationObject: ReservationObject): Promise<void>;
    fetchStatus(time: Scalars['AWSDate'], roomID: Scalars['ID']): Promise<number>;
    fetchStatusWithinRange(dateTimeRange: Scalars['AWSDate'][], roomID: Scalars['ID']): Promise<number>;
}
