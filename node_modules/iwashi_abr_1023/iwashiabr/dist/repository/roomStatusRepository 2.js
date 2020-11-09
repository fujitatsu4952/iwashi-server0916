"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomStatusRepository = void 0;
const graphql_request_1 = require("graphql-request");
const mutations_1 = require("./mutations");
const graphqlClient = new graphql_request_1.GraphQLClient(`http://localhost:8080`);
const sdk = mutations_1.getSdk(graphqlClient);
class roomStatusRepository {
    async updateRoomStatus(roomStatus) {
        await sdk.updateRoomStatus({ roomStatus });
    }
    async addRoomStatus(roomStatus) {
        await sdk.addRoomStatus({ roomStatus });
    }
    async fetchRoomStatus(Time, roomID) {
        const res = (await sdk.fetchRoomStatus({ Time, roomID })).data;
        if (res && res.fetchRoomStatus) {
            return res.fetchRoomStatus[0];
        }
        else {
            return null;
        }
    }
}
exports.roomStatusRepository = roomStatusRepository;
;
