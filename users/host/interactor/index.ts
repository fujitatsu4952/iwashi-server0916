import { planRoot } from './planMasts';
import { roomRoot } from './roomMast';
import { policyRoot } from './policyMast';
import { s3Root } from './s3Object'
// export default root;
const rootFunc = {
    ...planRoot,
    ...roomRoot,
    ...policyRoot,
    ...s3Root
};
export default rootFunc;
