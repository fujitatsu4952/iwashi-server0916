import { Scalars, ReservationObject } from '../../../entity';
export interface IGuestPlanStatusUsecase {
    updateStatus(reservationObject: ReservationObject): Promise<void>;
    fetchStatus(time: Scalars['AWSDate'], planID: Scalars['ID']): Promise<number>;
    fetchStatusWithinRange(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number>;
}
