import { PlanStatus } from "../index";
import { request, GraphQLClient, gql } from "graphql-request";
import { getSdk } from "./mutations";

const graphqlClient = new GraphQLClient(`http://18.180.113.27:8080`);
const sdk = getSdk(graphqlClient);

export class planStatusRepository {
  async updatePlanStatus(planStatus: PlanStatus[] | null) {
    await sdk.updatePlanStatus({ planStatus });
  }

  async addPlanStatus(planStatus: PlanStatus[] | null) {
    await sdk.addPlanStatus({ planStatus });
  }

  async fetchPlanStatus(Time: string, planID: string): Promise<PlanStatus | null> {
    const res = (await sdk.fetchPlanStatus({ Time, planID })).data;
    if(res && res.fetchPlanStatus) {
      return res.fetchPlanStatus[0]
    } else {
      return null
    }
  }
};
