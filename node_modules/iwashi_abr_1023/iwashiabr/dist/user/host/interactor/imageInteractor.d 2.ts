import { IHostImageUsecase } from "../usecase/imageUsecase";
import { S3Object } from '../../../entity/type';
export declare class HostImageInteractor implements IHostImageUsecase {
    private imageMastRepository;
    addMast(s3Object: S3Object | null): Promise<any>;
    updateMast(s3Object: S3Object | null): Promise<any>;
    fetchImageMasts(keyName: string | null | undefined): Promise<any>;
}
