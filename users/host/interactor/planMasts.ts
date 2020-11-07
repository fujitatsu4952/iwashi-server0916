let tableName = 'PlanMast';
import connection from "../../../database"

const planRoot = {
    fetchPlanMasts: (path: any) => {
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
    updatePlanMast: (path: any) => {
        let conditions = `
        UPDATE PlanMast SET 
        name= '${path.input.name}', description= '${path.input.description}', subDescription= '${path.input.subDescription}',
        price= '${path.input.price}', stockNum= '${path.input.stockNum}', deletedAt= '${path.input.deletedAt}', inSale= ${path.input.inSale}
        WHERE planID='${path.input.planID}'`;
        connection.query(conditions, (err: any, results: any, fields: any) => {
            console.log(err);
        });
    },
    addPlanMast: (path: any) => {

        let conditions = `
                INSERT INTO PlanMast
                (planID, name, description, subDescription, price, stockNum, deletedAt, inSale)
                VALUES
                ('${path.input.planID}', '${path.input.name}', '${path.input.description}', '${path.input.subDescription}',
                '${path.input.price}', '${path.input.stockNum}', ${path.input.deletedAt}, ${path.input.inSale})`;

        connection.query(conditions, (err: any, results: any, fields: any) => {
            console.log(err);
        });
        return path.input;
    },
};

export { planRoot };
