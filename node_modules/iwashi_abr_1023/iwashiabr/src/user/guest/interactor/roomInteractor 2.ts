import {IGuestRoomUsecase} from "../usecase/roomUsecase";
import {
    RoomMast
} from '../../../entity/type'
import {roomMastRepository} from "../../../repository"
import { getUniqueID } from "../../../util/generateUuid";


export class GuestRoomInteractor implements IGuestRoomUsecase {
    // ここでroomMastをインスタンス化
    private roomMastRepository = new roomMastRepository()

    public async getBlancMast(): Promise<RoomMast> {
        const roomID: string = getUniqueID.getUniqueID(3);
        return {
            roomID,
            name: "",
            description: "",
            subDescription: "",
            maxPeopleNum: 0,
            stockNum: 0,
            minOrderNum: 0,
            deletedAt: null,
            inSale: null
        };
    }
    public async addMast(roomMast: RoomMast | null): Promise<any> {
        throw new Error('Method not implemented.');
    }
    public async updateMast(roomMast: RoomMast | null): Promise<any> {
        throw new Error('Method not implemented.');
    }
    public async fetchRoomMasts(roomID: string | undefined): Promise<RoomMast[] | null> {
        return (await this.roomMastRepository.fetchRoomMasts(roomID))
    }   
}