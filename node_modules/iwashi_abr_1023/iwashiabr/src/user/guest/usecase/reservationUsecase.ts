import { ReservationObject, Scalars } from '../../../entity';

export interface IGuestReservationUsecase {
    // 新しい予約作成
    getBlanc(): Promise<ReservationObject>;
    // 新しく作ったものを送信
    addMast(reservationObject: ReservationObject | null): Promise<any>;
    // 作ったものを更新
    updateMast(reservationObject: ReservationObject | null): Promise<any>;
    // これまでのプラン一覧を取得
    fetchReservationObjects(reservationID: Scalars['ID'] | undefined | null): Promise<ReservationObject | null>;
}
