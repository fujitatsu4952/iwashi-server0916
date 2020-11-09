"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestPolicyInteractor = void 0;
const repository_1 = require("../../../repository");
class GuestPolicyInteractor {
    constructor() {
        // ここでpolicyMastをインスタンス化
        this.policyMastRepository = new repository_1.policyMastRepository();
    }
    async fetchPolicyMast(policyID) {
        return (await this.policyMastRepository.fetchPolicyMast('174da08566682'));
    }
}
exports.GuestPolicyInteractor = GuestPolicyInteractor;
