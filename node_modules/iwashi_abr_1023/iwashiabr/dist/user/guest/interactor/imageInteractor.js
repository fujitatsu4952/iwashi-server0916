"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestImageInteractor = void 0;
const repository_1 = require("../../../repository");
class GuestImageInteractor {
    constructor() {
        // ここでimageMastをインスタンス化
        this.imageMastRepository = new repository_1.imageMastRepository();
    }
    async fetchImageMasts(keyName) {
        return await this.imageMastRepository.fetchS3Objects(keyName);
    }
}
exports.GuestImageInteractor = GuestImageInteractor;
