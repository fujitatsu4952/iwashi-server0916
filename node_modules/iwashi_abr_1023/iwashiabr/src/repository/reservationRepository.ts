import { ReservationObject } from "../index";
import { request, GraphQLClient, gql } from "graphql-request";
import { getSdk } from "./mutations";

const graphqlClient = new GraphQLClient(`18.180.113.27:8080`);
const sdk = getSdk(graphqlClient);

export class reservationRepository {
  async updateReservation(reservationObject: ReservationObject | null) {
    await sdk.updateReservationObject({ reservationObject });
  }

  async addReservation(reservationObject: ReservationObject | null) {
    await sdk.addReservationObject({ reservationObject });
  }

  // 他の処理も追加可能
  async fetchReservationObjects(reservationID: string | null | undefined): Promise<ReservationObject | null> {
    const res = (await sdk.fetchReservationObjects({ reservationID })).data;
    if(res && res.fetchReservationObjects) {
      return res.fetchReservationObjects[0]
    } else {
      return null
    }
  }
};
