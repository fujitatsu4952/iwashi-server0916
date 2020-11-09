import { PlanMast, Scalars } from '../../../entity';

export interface IGuestPlanUsecase {
    // 新しいプランフォーム作成
    getBlancMast(): Promise<PlanMast>;
    // 新しく作ったものを送信
    addMast(planMast: PlanMast | null): Promise<any>;
    // 作ったものを更新
    updateMast(planMast: PlanMast | null): Promise<any>;
    // これまでのプラン一覧を取得
    fetchPlanMasts(planID: Scalars['ID'] | undefined): Promise<PlanMast[] | null>;
}
