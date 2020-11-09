import { PlanMast } from "../index";
export declare class planMastRepository {
    updatePlan(planMast: PlanMast | null): Promise<void>;
    addPlan(planMast: PlanMast | null): Promise<void>;
    fetchPlanMasts(planID: string | undefined): Promise<PlanMast[] | null>;
}
