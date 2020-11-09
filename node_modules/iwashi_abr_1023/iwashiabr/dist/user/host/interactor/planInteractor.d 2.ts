import { IHostPlanUsecase } from "../usecase/planUsecase";
import { PlanMast } from '../../../entity/type';
export declare class HostPlanInteractor implements IHostPlanUsecase {
    private planMastRepository;
    getBlancMast(): Promise<PlanMast>;
    addMast(planMast: PlanMast | null): Promise<any>;
    updateMast(planMast: PlanMast | null): Promise<any>;
    fetchPlanMasts(planID: string | undefined): Promise<PlanMast[] | null>;
}
