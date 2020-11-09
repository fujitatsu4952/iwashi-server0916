import { RoomStatus, Scalars, ReservationObject } from '../../../entity';

export interface IGuestRoomStatusUsecase {
    // 作ったものを更新
    updateStatus(reservationObject: ReservationObject): Promise<void>;
    // 在庫情報を取得
    fetchStatus(time: Scalars['AWSDate'], roomID: Scalars['ID']): Promise<number>;
    // 該当期間内での提供可能数を取得
    fetchStatusWithinRange(dateTimeRange: Scalars['AWSDate'][], roomID: Scalars['ID']): Promise<number>;
}
