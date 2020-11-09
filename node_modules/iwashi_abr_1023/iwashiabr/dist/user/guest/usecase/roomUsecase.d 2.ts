import { RoomMast, Scalars } from '../../../entity';
export interface IGuestRoomUsecase {
    getBlancMast(): Promise<RoomMast>;
    addMast(roomMast: RoomMast | null): Promise<any>;
    updateMast(roomMast: RoomMast | null): Promise<any>;
    fetchRoomMasts(roomID: Scalars['ID'] | undefined): Promise<RoomMast[] | null>;
}
