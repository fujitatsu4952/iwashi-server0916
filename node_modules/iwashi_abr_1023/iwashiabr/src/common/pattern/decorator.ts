import {Throttle} from './throttle';
import {Debounce} from './debounce';
import {Scalars} from '../../entity/type';

type MastFunc=(...args: any[]) => Promise<any|void>;
export function ThrottleForMast(waitFor: number) {
    return <T extends MastFunc>(target: object, name: string | symbol, descriptor: TypedPropertyDescriptor<T>) => {
        const throttle=new Throttle(waitFor);
        const method=descriptor.value!; // もともとのメソッドを退避しておきます。
        descriptor.value=throttle.throttleForMastAndResponse(method);
    };
}

type DtRange=(startDt: Scalars['AWSDate'],endDt: Scalars['AWSDate'],...args: any[]) => Promise<any|void>;
export function DebounceForDtRange(waitFor: number) {
    return <T extends DtRange>(target: object,name: string|symbol,descriptor: TypedPropertyDescriptor<T>) => {
        const debounce=new Debounce(waitFor);
        const method=descriptor.value!;
        descriptor.value = debounce.debounceForDtRange(method);
        return descriptor;
    }
}
