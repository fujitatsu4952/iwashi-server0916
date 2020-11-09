import { PlanStatus, Scalars, ReservationObject } from '../../../entity';

export interface IGuestPlanStatusUsecase {
    // 作ったものを更新
    updateStatus(reservationObject: ReservationObject): Promise<void>;
    // 在庫情報を取得
    fetchStatus(time: Scalars['AWSDate'], planID: Scalars['ID']): Promise<number>;
    // 該当期間内での提供可能数を取得
    fetchStatusWithinRange(dateTimeRange: Scalars["AWSDate"][], planID: string): Promise<number>;
}