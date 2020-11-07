import { S3Object } from 'iwashi_abr_1023/iwashiabr';


import { connection } from '../../../database'
let tableName = 'S3Object';

const s3Root = {
        fetchS3Objects: (path: any) => {
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
        updateS3Object: (path: any) => {
            let conditions = `
            UPDATE ${tableName} SET 
            bucket= '${path.input.bucket}', region= '${path.input.region}',
            mimeType= ${path.input.mimeType}, fileName= ${path.input.fileName}
            WHERE keyName= '${path.input.keyName}'`;
            connection.query(conditions, (err: any, results: any, fields: any) => {
                console.log(err);
            });
        },
        addS3Object: (path: any) => {
            const mast: S3Object = path.input
    
            let conditions = `INSERT INTO ${tableName} (keyName, bucket, region, mimeType, fileName) VALUES ('${mast.keyName}', '${mast.bucket}', '${mast.region}', '${mast.mimeType}', '${mast.fileName}')`;
    
            connection.query(conditions, (err: any, results: any, fields: any) => {
                console.log('エラー', err);
            });
            return path.input;
        },
};
    
    export { s3Root };