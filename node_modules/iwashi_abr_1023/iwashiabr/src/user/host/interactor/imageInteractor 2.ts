import {IHostImageUsecase} from "../usecase/imageUsecase";
import {
    S3Object
} from '../../../entity/type'
import {imageMastRepository} from "../../../repository"


export class HostImageInteractor implements IHostImageUsecase {
    // ここでimageMastをインスタンス化
    private imageMastRepository = new imageMastRepository()

    public async addMast(s3Object: S3Object | null): Promise<any> {
        return await this.imageMastRepository.addS3Object(s3Object)
    }
    public async updateMast(s3Object: S3Object | null): Promise<any> {
        return await this.imageMastRepository.updateS3Object(s3Object)
    }
    public async fetchImageMasts(keyName: string | null | undefined): Promise<any> {
        return await this.imageMastRepository.fetchS3Objects(keyName)
    }
}