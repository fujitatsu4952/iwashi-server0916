import {
    Scalars, ReservationObject, RoomStatus
} from '../../entity'
import { roomMastRepository, roomStatusRepository} from "../../repository"
import { getTimeRangeArray } from '../../index';

interface reservationRoomItemTemp {
    roomID: Scalars['ID'];
    roomNum: number;
}

export class roomStockNum {
    // ここでroomStatusRepositoryをインスタンス化
    private roomStatusRepository = new roomStatusRepository()
    private roomInteractor = new roomMastRepository();
    
    public async roomStockNum(dateTimeRange: Scalars["AWSDate"][], roomID: string): Promise<number> {
        let stockNumList: number[]=[]
        let roomMastStockNum = 0

        const roomMastStockNumTemp = (await this.roomInteractor.fetchRoomMasts(roomID))
        if(roomMastStockNumTemp) {
            roomMastStockNum = roomMastStockNumTemp[0].stockNum
        }

        for (let i = 0; i < dateTimeRange.length; i++) {
            const tempStockNum  = (await this.roomStatusRepository.fetchRoomStatus(dateTimeRange[i], roomID));
            // もし該当時間に売れていた記録があればいったん保持する
            if (tempStockNum && tempStockNum.soldNum) {
                stockNumList.push(tempStockNum.soldNum);
            }
        }
        //もしデータ構造がまだ作られていなかったら = まだ一つも予約されていなかったら
        if (stockNumList.length < 1) {
            return roomMastStockNum;
        } else { //プラン構造が作られているもの
            const maxSoldNum = Math.max.apply(null, stockNumList);
            return (roomMastStockNum - maxSoldNum);
        }
    }

    public async roomStockNumSingle(time: Scalars["AWSDate"], roomID: string): Promise<number> {
        let roomMastStockNum = 0

        const roomMastStockNumTemp = (await this.roomInteractor.fetchRoomMasts(roomID))
        if(roomMastStockNumTemp) {
            roomMastStockNum = roomMastStockNumTemp[0].stockNum
        }

        const tempStockNum  = (await this.roomStatusRepository.fetchRoomStatus(time, roomID));

        if (tempStockNum && tempStockNum.soldNum) {
            return (roomMastStockNum - tempStockNum.soldNum);
        } else {
            return roomMastStockNum
        }
    }

    public async roomStockUpdate(reservationObject: ReservationObject) {
        let roomStatusList: RoomStatus[] = []
        const timeRangeArray:Scalars['AWSDateTime'][] = getTimeRangeArray(reservationObject.checkInTime, reservationObject.checkOutTime)
        const reservationRoom = JSON.parse(
            reservationObject.roomID
        ) as reservationRoomItemTemp[];
        for (let i = 0; i < timeRangeArray.length; i++) {
            for (let m = 0; m < reservationRoom.length; m++) {
                let roomStatus: RoomStatus = {
                    roomID: reservationRoom[m].roomID,
                    Time: timeRangeArray[i],
                    soldNum: reservationRoom[m].roomNum,
                    availableNum: null,
                    isAvailabe: null
                };
                roomStatusList.push(roomStatus);
            }
        }

        await this.roomStatusRepository.updateRoomStatus(roomStatusList)
    }
}