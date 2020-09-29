import { planRoot } from './planMasts';
import { roomRoot } from './roomMast';
import { policyRoot } from './policyMast';
// export default root;
const rootFunc = {
    ...planRoot,
    ...roomRoot,
    ...policyRoot,
};
export default rootFunc;
