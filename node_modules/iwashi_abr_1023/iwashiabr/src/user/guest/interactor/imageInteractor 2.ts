import {IGuestImageUsecase} from "../usecase/imageUsecase";
import {
    S3Object
} from '../../../entity/type'
import {imageMastRepository} from "../../../repository"


export class GuestImageInteractor implements IGuestImageUsecase {
    // ここでimageMastをインスタンス化
    private imageMastRepository = new imageMastRepository()

    public async fetchImageMasts(keyName: string | null | undefined): Promise<any> {
        return await this.imageMastRepository.fetchS3Objects(keyName)
    }
}