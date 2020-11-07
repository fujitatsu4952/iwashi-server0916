import connection from "../../../database"
let tableName = 'ReservationObject';
import { ReservationObject } from 'iwashi_abr_1023/iwashiabr';

const reservationRoot = {
    addReservationObject: (path: any) => {
        const ReservationObject: ReservationObject = path.input
        let conditions = `
                INSERT INTO ${tableName}
                (reservationID, checkInTime, checkOutTime, planID, roomID, roomNum, planNum, peopleNum, policyID, totalPrice, guestName, guestEmail, GuestTell, canceledAt)
                VALUES
                ('${ReservationObject.reservationID}', '${ReservationObject.checkInTime}', '${ReservationObject.checkOutTime}', '${ReservationObject.planID}', '${ReservationObject.roomID}', 
                '${ReservationObject.roomNum}', '${ReservationObject.planNum}', '${ReservationObject.peopleNum}', '${ReservationObject.policyID}', '${ReservationObject.totalPrice}', '${ReservationObject.guestName}', 
                '${ReservationObject.guestEmail}', '${ReservationObject.GuestTell}', '${ReservationObject.canceledAt}')`;

        connection.query(conditions, (err: any, results: any, fields: any) => {
            console.log(err);
        });
        return path.input;
    },
    updateReservationObject: (path: any) => {
        const ReservationObject: ReservationObject = path.input
        let conditions = `
            UPDATE ${tableName} SET
            checkInTime = '${ReservationObject.checkInTime}', checkOutTime = '${ReservationObject.checkOutTime}', planID = '${ReservationObject.planID}', roomID = '${ReservationObject.roomID}', roomNum = '${ReservationObject.roomNum}', 
            planNum = '${ReservationObject.planNum}', peopleNum = '${ReservationObject.peopleNum}', policyID = '${ReservationObject.policyID}', totalPrice = '${ReservationObject.totalPrice}', 
            guestName = '${ReservationObject.guestName}', guestEmail = '${ReservationObject.guestEmail}', GuestTell = '${ReservationObject.GuestTell}', canceledAt = '${ReservationObject.canceledAt}'
            WHERE reservationID='${ReservationObject.reservationID}'`;

        connection.query(conditions, (err: any, results: any, fields: any) => {
            console.log(err);
        });
        return path.input;
    },
    fetchReservationObjects: (path: any) => {
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
};

export { reservationRoot };