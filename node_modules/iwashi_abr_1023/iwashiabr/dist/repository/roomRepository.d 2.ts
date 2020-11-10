import { RoomMast } from "../index";
export declare class roomMastRepository {
    updateRoom(roomMast: RoomMast | null): Promise<void>;
    addRoom(roomMast: RoomMast | null): Promise<void>;
    fetchRoomMasts(roomID: string | undefined): Promise<RoomMast[] | null>;
}
