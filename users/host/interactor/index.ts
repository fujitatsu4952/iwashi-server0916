import { planRoot } from './planMasts';
import { roomRoot } from './roomMast';
import { policyRoot } from './policyMast';
import { s3Root } from './s3Object'
import { reservationRoot } from './reservationMast'
import { planStatusRoot } from './planStatus'
import { roomStatusRoot } from './roomStatus'
// export default root;
const rootFunc = {
    ...planRoot,
    ...roomRoot,
    ...policyRoot,
    ...s3Root,
    ...reservationRoot,
    ...planStatusRoot,
    ...roomStatusRoot
};
export default rootFunc;
