import { PolicyMast } from '../../../entity/type';

const connection = require('../../../database.js');
let tableName = 'PolicyMast';

const policyRoot = {
    fetchPolicyMast: (path: any) => {
        console.log('in');
        console.log(path);
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
    updatePolicyMast: (path: any) => {
        const mast: PolicyMast = path.input;
        console.log(path);
        let conditions = `
        UPDATE ${tableName} SET 
        roomChargePrice= '${mast.roomChargePrice}'   
        WHERE PolicyID='${mast.policyID}'`;
        connection.query(conditions, (err: any, results: any, fields: any) => {
            console.log(err);
        });
    },
    addPolicyMast: (path: any) => {
        const mast: PolicyMast = path.input;

        let conditions = `
                INSERT INTO ${tableName}
                (policyID, roomChargePrice)
                VALUES
                ('${mast.policyID}', '${mast.roomChargePrice}')`;

        connection.query(conditions, (err: any, results: any, fields: any) => {
            console.log(err);
        });
        return path.input;
    },
};

export { policyRoot };
