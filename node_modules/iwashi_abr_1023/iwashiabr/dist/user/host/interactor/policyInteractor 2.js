"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostPolicyInteractor = void 0;
const repository_1 = require("../../../repository");
class HostPolicyInteractor {
    constructor() {
        // ここでpolicyMastをインスタンス化
        this.policyMastRepository = new repository_1.policyMastRepository();
    }
    async updateMast(policyMast) {
        return await this.policyMastRepository.updatePolicy(policyMast);
    }
    async fetchPolicyMast(policyID) {
        return (await this.policyMastRepository.fetchPolicyMast('174da08566682'));
    }
}
exports.HostPolicyInteractor = HostPolicyInteractor;
