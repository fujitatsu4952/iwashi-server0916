import { Scalars } from '../../entity/type';
declare type MastFunc = (...args: any[]) => Promise<any | void>;
export declare function ThrottleForMast(waitFor: number): <T extends MastFunc>(target: object, name: string | symbol, descriptor: TypedPropertyDescriptor<T>) => void;
declare type DtRange = (startDt: Scalars['AWSDate'], endDt: Scalars['AWSDate'], ...args: any[]) => Promise<any | void>;
export declare function DebounceForDtRange(waitFor: number): <T extends DtRange>(target: object, name: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T>;
export {};
