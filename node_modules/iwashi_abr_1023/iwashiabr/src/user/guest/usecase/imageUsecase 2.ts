import { S3Object, Scalars } from '../../../entity';

export interface IGuestImageUsecase {
    // これまでの画像一覧を取得
    fetchImageMasts(keyName: string | null | undefined): Promise<any | undefined>;
}
