import { PlanMast, Scalars } from '../../../entity';
export interface IGuestPlanUsecase {
    getBlancMast(): Promise<PlanMast>;
    addMast(planMast: PlanMast | null): Promise<any>;
    updateMast(planMast: PlanMast | null): Promise<any>;
    fetchPlanMasts(planID: Scalars['ID'] | undefined): Promise<PlanMast[] | null>;
}
