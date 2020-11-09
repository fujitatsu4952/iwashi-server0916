import { RoomMast, Scalars } from '../../../entity';
export interface IHostRoomUsecase {
    getBlancMast(): Promise<RoomMast>;
    addMast(roomMast: RoomMast | null): Promise<any>;
    updateMast(roomMast: RoomMast | null): Promise<any>;
    fetchRoomMasts(roomID: Scalars['ID'] | undefined | null): Promise<RoomMast[] | null>;
}
