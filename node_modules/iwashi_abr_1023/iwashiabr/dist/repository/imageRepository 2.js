"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageMastRepository = void 0;
const graphql_request_1 = require("graphql-request");
const mutations_1 = require("./mutations");
const graphqlClient = new graphql_request_1.GraphQLClient(`https://18.180.113.27:8080`);
const sdk = mutations_1.getSdk(graphqlClient);
class imageMastRepository {
    async updateS3Object(s3Object) {
        await sdk.updateS3Object({ s3Object });
    }
    async addS3Object(s3Object) {
        const res = await sdk.addS3Object({ s3Object });
        console.log(res.data);
    }
    // 他の処理も追加可能
    async fetchS3Objects(keyName) {
        const res = await sdk.fetchS3Objects({ keyName });
        return res;
    }
}
exports.imageMastRepository = imageMastRepository;
;
