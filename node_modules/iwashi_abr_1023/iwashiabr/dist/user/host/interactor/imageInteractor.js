"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostImageInteractor = void 0;
const repository_1 = require("../../../repository");
class HostImageInteractor {
    constructor() {
        // ここでimageMastをインスタンス化
        this.imageMastRepository = new repository_1.imageMastRepository();
    }
    async addMast(s3Object) {
        return await this.imageMastRepository.addS3Object(s3Object);
    }
    async updateMast(s3Object) {
        return await this.imageMastRepository.updateS3Object(s3Object);
    }
    async fetchImageMasts(keyName) {
        return await this.imageMastRepository.fetchS3Objects(keyName);
    }
}
exports.HostImageInteractor = HostImageInteractor;
