import {IGuestRoomStatusUsecase} from "../usecase/roomStatusUsecase";
import { RoomStatus, RoomMast, ReservationObject } from '../../../entity/type'
import {roomStatusRepository, roomMastRepository} from "../../../repository"
import { roomStockNum } from "../../../index";


export class GuestRoomStatusInteractor implements IGuestRoomStatusUsecase {

    // ここでroomStatusRepositoryをインスタンス化
    private roomStatusRepository = new roomStatusRepository()
    // これはUtilをインスタンス化
    private roomStockNumCalc = new roomStockNum();

    public async updateStatus(resevationObject: ReservationObject): Promise<void> {
        await this.roomStockNumCalc.roomStockUpdate(resevationObject);
    }
    public async fetchStatus(time: string, roomID: string): Promise<number> {
        return await this.roomStockNumCalc.roomStockNumSingle(time, roomID)
    }

    public async fetchStatusWithinRange(dateTimeRange: string[], roomID: string): Promise<number> {
        return await this.roomStockNumCalc.roomStockNum(dateTimeRange, roomID)
    }
}