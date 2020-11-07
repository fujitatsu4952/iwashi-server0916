import { Scalars, DayOfTheWeek, TimeZone } from '../../entity/type';
export declare function getDateRangeArray(startDt: Scalars['AWSDate'], endDt: Scalars['AWSDate']): Scalars['AWSDate'][];
export declare function getTimeRangeArray(startTime: Scalars['AWSDate'], endTime: Scalars['AWSDate']): Scalars['AWSDate'][];
export declare function getDateTimeRangeArray(startAt: string, endAt: string, stepMin: number): Scalars['AWSDate'][];
export declare function getDayOfTheWeek(date: Scalars['AWSDate']): DayOfTheWeek;
/**
 * タイムゾーンを受け取ることで現地時間にパースする。
 * @param timestamp タイムスタンプ
 * @param timezone タイムゾーン
 * @param formatVar フォーマッティング
 */
export declare function format(timestamp: number, timezone: TimeZone, formatVar: string): string;
/**
 * 標準時刻で1970/01/01 00:00:00からの経過㎳を返す。
 * @param timeZone タイムゾーン
 */
export declare function getCurrentTimeStamp(): number;
/**
 * @param date 日付
 * @param time 時間
 */
export declare function getMilliSecBySpecificDateAndTime(date: Scalars['AWSDate'], time: Scalars['AWSTime'], timezone: TimeZone): number;
/**
 * 現地（ホテルの存在するタイムゾーン）の現在の日付を返す
 * @param timeZone タイムゾーン
 */
export declare function getCurrentDate(timeZone: TimeZone): Scalars['AWSDate'];
/**
 * 現地（ホテルの存在するタイムゾーン）の現在の日付を返す
 * @param timeZone タイムゾーン
 */
export declare function getCurrentDateTime(timeZone: TimeZone): Scalars['AWSDate'];
export declare function DateTimeToDate(dateTime: string): Scalars['AWSDate'];
export declare function DateTimeToTime(dateTime: string): string;
/**
 * 現地の23:59:59の1970/01/01 00:00:00からの経過㎳を返す。
 * @param date 指定日
 */
export declare function getEndOfDateMilli(date: Scalars['AWSDate'], timezone: TimeZone): number;
declare type HH = string;
declare type mm = string;
export declare function getSubOfEndOfDates(HH: HH, mm: mm): number;
export declare function getSubOfDateAMinusDateB(dateA: Scalars['AWSDate'], dateB: Scalars['AWSDate']): number;
/**
 * 日付を加算する
 * @param target ターゲットの日付
 * @param inc 増加数
 */
export declare function addDate(target: Scalars['AWSDate'], inc: number): Scalars['AWSDate'];
export declare function addMinutes(target: string, inc: number): string;
export {};
