import { RoomMast } from 'iwashi_abr_1023/iwashiabr';

import { connection } from '../../../database'
let tableName = 'RoomMast';

const roomRoot = {
    fetchRoomMasts: (path: any) => {
        return new Promise(async (resolve) => {
            let conditions = `SELECT * FROM ${tableName}`;
            const filter = Object.keys(path);
            // 検索条件がある場合、SQL文に条件を追加
            if (filter.length !== 0) {
                conditions +=
                    ' WHERE `' + filter[0] + '` = "' + path[filter[0]] + '"';
            }
            connection.query(
                conditions,
                (err: any, results: any, fields: any) => {
                    console.log(JSON.parse(JSON.stringify(results)));
                    resolve(JSON.parse(JSON.stringify(results)));
                },
            );
        });
    },
    updateRoomMast: (path: any) => {
        const mast: RoomMast = path.input;
        let conditions = `
        UPDATE ${tableName} SET 
        name= '${mast.name}', description= '${mast.description}', subDescription= '${mast.subDescription}',
        maxPeopleNum= '${mast.maxPeopleNum}', stockNum= '${mast.stockNum}', minOrderNum= '${mast.minOrderNum}', deletedAt= '${mast.deletedAt}', inSale= ${mast.inSale}
        WHERE roomID='${mast.roomID}'`;
        connection.query(conditions, (err: any, results: any, fields: any) => {
            console.log(err);
        });
    },
    addRoomMast: (path: any) => {
        const mast: RoomMast = path.input;

        let conditions = `
                INSERT INTO ${tableName}
                (roomID, name, description, subDescription, maxPeopleNum, stockNum, minOrderNum, deletedAt, inSale)
                VALUES
                ('${mast.roomID}', '${mast.name}', '${mast.description}', '${mast.subDescription}', '${mast.maxPeopleNum}',
                '${mast.stockNum}','${mast.minOrderNum}', '${mast.deletedAt}', ${mast.inSale})`;

        connection.query(conditions, (err: any, results: any, fields: any) => {
            console.log(err);
        });
        return path.input;
    },
};

export { roomRoot };
