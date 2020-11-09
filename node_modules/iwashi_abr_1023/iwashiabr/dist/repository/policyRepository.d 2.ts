import { PolicyMast } from "../index";
export declare class policyMastRepository {
    updatePolicy(policyMast: PolicyMast | null): Promise<void>;
    addPolicy(policyMast: PolicyMast | null): Promise<void>;
    fetchPolicyMast(policyID: string | null | undefined): Promise<{
        data?: import("./mutations").FetchPolicyMastQuery | undefined;
        extensions?: any;
        headers: import("graphql-request/dist/types.dom").Headers;
        status: number;
        errors?: import("graphql-request/dist/types").GraphQLError[] | undefined;
    }>;
}
