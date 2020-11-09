"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.policyMastRepository = void 0;
const graphql_request_1 = require("graphql-request");
const mutations_1 = require("./mutations");
const graphqlClient = new graphql_request_1.GraphQLClient(`https://18.180.113.27:8080`);
const sdk = mutations_1.getSdk(graphqlClient);
class policyMastRepository {
    async updatePolicy(policyMast) {
        await sdk.updatePolicyMast({ policyMast });
    }
    async addPolicy(policyMast) {
        await sdk.addPolicyMast({ policyMast });
    }
    // 他の処理も追加可能
    async fetchPolicyMast(policyID) {
        const res = await sdk.fetchPolicyMast({ policyID });
        return res;
    }
}
exports.policyMastRepository = policyMastRepository;
;
