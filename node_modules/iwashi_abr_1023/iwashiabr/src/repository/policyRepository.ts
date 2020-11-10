import { PolicyMast } from "../index";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "./mutations";

const graphqlClient = new GraphQLClient(`18.180.113.27:8080`);
const sdk = getSdk(graphqlClient);

export class policyMastRepository {
  async updatePolicy(policyMast: PolicyMast | null) {
    await sdk.updatePolicyMast({ policyMast });
  }

  async addPolicy(policyMast: PolicyMast | null) {
    await sdk.addPolicyMast({ policyMast });
  }

  // 他の処理も追加可能
  async fetchPolicyMast(policyID: string | null | undefined) {
    const res = await sdk.fetchPolicyMast({ policyID });
    return res;
  }
};
