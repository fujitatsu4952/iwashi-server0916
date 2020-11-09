export interface IGuestImageUsecase {
    fetchImageMasts(keyName: string | null | undefined): Promise<any | undefined>;
}
