"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planMastRepository = void 0;
const graphql_request_1 = require("graphql-request");
const mutations_1 = require("./mutations");
const graphqlClient = new graphql_request_1.GraphQLClient(`http://localhost:8080`);
const sdk = mutations_1.getSdk(graphqlClient);
class planMastRepository {
    async updatePlan(planMast) {
        await sdk.updatePlanMast({ planMast });
    }
    async addPlan(planMast) {
        await sdk.addPlanMast({ planMast });
    }
    // 他の処理も追加可能
    async fetchPlanMasts(planID) {
        const res = await sdk.fetchPlanMasts({ planID });
        if (res && res.data) {
            return res.data.fetchPlanMasts;
        }
        else {
            return null;
        }
    }
}
exports.planMastRepository = planMastRepository;
;
