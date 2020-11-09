"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationRepository = void 0;
const graphql_request_1 = require("graphql-request");
const mutations_1 = require("./mutations");
const graphqlClient = new graphql_request_1.GraphQLClient(`http://18.180.113.27:8080`);
const sdk = mutations_1.getSdk(graphqlClient);
class reservationRepository {
    async updateReservation(reservationObject) {
        await sdk.updateReservationObject({ reservationObject });
    }
    async addReservation(reservationObject) {
        await sdk.addReservationObject({ reservationObject });
    }
    // 他の処理も追加可能
    async fetchReservationObjects(reservationID) {
        const res = (await sdk.fetchReservationObjects({ reservationID })).data;
        if (res && res.fetchReservationObjects) {
            return res.fetchReservationObjects[0];
        }
        else {
            return null;
        }
    }
}
exports.reservationRepository = reservationRepository;
;
