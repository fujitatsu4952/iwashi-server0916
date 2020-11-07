import { S3Object, Scalars } from '../../../entity';

export interface IHostImageUsecase {
    // 新しく作ったものを送信
    addMast(s3Object: S3Object | null): Promise<any>;
    // 作ったものを更新
    updateMast(s3Object: S3Object | null): Promise<any>;
    // これまでの画像一覧を取得
    fetchImageMasts(keyName: string | null | undefined): Promise<any | undefined>;
}
