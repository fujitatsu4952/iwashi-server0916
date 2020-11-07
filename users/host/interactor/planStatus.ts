import connection from "../../../database"
let tableName = 'PlanStatus';
import { PlanStatus } from 'iwashi_abr_1023/iwashiabr';

const planStatusRoot = {
    fetchPlanStatus: (path: any) => {
        const PlanStatus: PlanStatus = path.input
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
                    console.log(JSON.parse(JSON.stringify(results)));
                    resolve(JSON.parse(JSON.stringify(results)));
                },
            );
        });
    },
    updatePlanStatus: (path: any) => {
        const planStatus: PlanStatus[] = path.input
        for(let i = 0; i < planStatus.length; i++) {
            let conditions = `
            INSERT INTO ${tableName}
            (planID, Time, soldNum, availableNum, isAvailable)
            VALUES
            ('${planStatus[i].planID}', '${planStatus[i].Time}', '${planStatus[i].soldNum}', ${planStatus[i].availableNum}, ${planStatus[i].isAvailabe})
            ON DUPLICATE KEY UPDATE
            soldNum = soldNum + VALUES(soldNum)
            `;
        
            connection.query(conditions, (err: any, results: any, fields: any) => {
                console.log(err);
            });
        }
    },
};

export { planStatusRoot };