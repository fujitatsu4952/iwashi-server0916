import { PlanStatus } from "../index";
export declare class planStatusRepository {
    updatePlanStatus(planStatus: PlanStatus[] | null): Promise<void>;
    addPlanStatus(planStatus: PlanStatus[] | null): Promise<void>;
    fetchPlanStatus(Time: string, planID: string): Promise<PlanStatus | null>;
}
