"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planStatusRepository = void 0;
const graphql_request_1 = require("graphql-request");
const mutations_1 = require("./mutations");
const graphqlClient = new graphql_request_1.GraphQLClient(`http://localhost:8080`);
const sdk = mutations_1.getSdk(graphqlClient);
class planStatusRepository {
    async updatePlanStatus(planStatus) {
        await sdk.updatePlanStatus({ planStatus });
    }
    async addPlanStatus(planStatus) {
        await sdk.addPlanStatus({ planStatus });
    }
    async fetchPlanStatus(Time, planID) {
        const res = (await sdk.fetchPlanStatus({ Time, planID })).data;
        if (res && res.fetchPlanStatus) {
            return res.fetchPlanStatus[0];
        }
        else {
            return null;
        }
    }
}
exports.planStatusRepository = planStatusRepository;
;
