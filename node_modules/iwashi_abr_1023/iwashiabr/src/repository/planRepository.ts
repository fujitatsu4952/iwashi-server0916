import { PlanMast } from "../index";
import { request, GraphQLClient, gql } from "graphql-request";
import { getSdk } from "./mutations";

const graphqlClient = new GraphQLClient(`https://18.180.113.27:8080`);
const sdk = getSdk(graphqlClient);

export class planMastRepository {
  async updatePlan(planMast: PlanMast | null) {
    await sdk.updatePlanMast({ planMast });
  }

  async addPlan(planMast: PlanMast | null) {
    await sdk.addPlanMast({ planMast });
  }

  // 他の処理も追加可能
  async fetchPlanMasts(planID: string | undefined): Promise<PlanMast[] | null> {
    const res = await sdk.fetchPlanMasts({ planID });
    if(res && res.data) {
      return res.data.fetchPlanMasts
    } else {
      return null;
    }
  }
};
