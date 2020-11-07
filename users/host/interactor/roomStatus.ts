import { connection } from '../../../database'
let tableName = 'RoomStatus';
import { RoomStatus } from 'iwashi_abr_1023/iwashiabr';

const roomStatusRoot = {
    fetchRoomStatus: (path: any) => {
        const RoomStatus: RoomStatus = path.input
        return new Promise(async (resolve) => {
            let conditions = `SELECT * FROM ${tableName}`;
            const filter = Object.keys(path);
            // 検索条件がある場合、SQL文に条件を追加
            if (filter.length !== 0) {
                conditions +=
                    ' WHERE `' + filter[0] + '` = "' + path[filter[0]] + '" AND  `' + filter[1] + '` = "' + path[filter[1]] + '"';
            }
            connection.query(
                conditions,
                (err: any, results: any, fields: any) => {
                    resolve(JSON.parse(JSON.stringify(results)));
                },       
            );
        });
    },
    updateRoomStatus: (path: any) => {
        const roomStatus: RoomStatus[] = path.input
        for(let i = 0; i < roomStatus.length; i++) {
            let conditions = `
            INSERT INTO ${tableName}
            (roomID, Time, soldNum, availableNum, isAvailable)
            VALUES
            ('${roomStatus[i].roomID}', '${roomStatus[i].Time}', '${roomStatus[i].soldNum}', ${roomStatus[i].availableNum}, ${roomStatus[i].isAvailabe})
            ON DUPLICATE KEY UPDATE
            soldNum = soldNum + VALUES(soldNum)
            `;
        
            connection.query(conditions, (err: any, results: any, fields: any) => {
                console.log(err);
            });
        }
    },
};

export { roomStatusRoot };