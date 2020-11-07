import { IGuestRoomUsecase } from "../usecase/roomUsecase";
import { RoomMast } from '../../../entity/type';
export declare class GuestRoomInteractor implements IGuestRoomUsecase {
    private roomMastRepository;
    getBlancMast(): Promise<RoomMast>;
    addMast(roomMast: RoomMast | null): Promise<any>;
    updateMast(roomMast: RoomMast | null): Promise<any>;
    fetchRoomMasts(roomID: string | undefined): Promise<RoomMast[] | null>;
}
