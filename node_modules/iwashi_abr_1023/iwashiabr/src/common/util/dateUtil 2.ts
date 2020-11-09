import dayjs = require('dayjs');
import { Scalars, DayOfTheWeek, TimeZone } from '../../entity/type';

export function getDateRangeArray(
    startDt: Scalars['AWSDate'],
    endDt: Scalars['AWSDate'],
): Scalars['AWSDate'][] {
    if (startDt > endDt) {
        console.log('ErrorCode.chillnn_400_startDtIsOverEndDt');
    }
    const dateArray = [];
    let currentDate = dayjs(startDt);
    const stopDate = dayjs(endDt);
    while (currentDate <= stopDate) {
        dateArray.push(dayjs(currentDate).format('YYYY-MM-DD'));
        currentDate = dayjs(currentDate).add(1, 'day');
    }
    return dateArray;
}

export function getTimeRangeArray(
    startTime: Scalars['AWSDate'],
    endTime: Scalars['AWSDate'],
): Scalars['AWSDate'][] {
    if (startTime > endTime) {
        console.log('ErrorCode.chillnn_400_startDtIsOverEndDt');
    }
    const timeArray = [];
    let currentTime = dayjs(startTime);
    const stopTime = dayjs(endTime);
    while (currentTime <= stopTime) {
        timeArray.push(dayjs(currentTime).format("YYYY-MM-DD-HH:mm"));
        currentTime = dayjs(currentTime).add(30, 'minute');
    }
    return timeArray;
}

export function getDateTimeRangeArray(
    startAt: string,
    endAt: string,
    stepMin: number,
): Scalars['AWSDate'][] {
    if (startAt > endAt) {
        console.log('ErrorCode.chillnn_400_startDtIsOverEndDt');
    }
    const dateArray = [];
    let currentDate = dayjs(startAt);
    const stopDate = dayjs(endAt);
    while (currentDate <= stopDate) {
        dateArray.push(dayjs(currentDate).format('YYYY-MM-DDTHH:mm'));
        currentDate = dayjs(currentDate).add(stepMin, 'minute');
    }
    return dateArray;
}

export function getDayOfTheWeek(date: Scalars['AWSDate']): DayOfTheWeek {
    const dayOfTheWeek = dayjs(date).format('ddd').toUpperCase();
    switch (dayOfTheWeek) {
        case DayOfTheWeek.Sun:
            return DayOfTheWeek.Sun;
        case DayOfTheWeek.Mon:
            return DayOfTheWeek.Mon;
        case DayOfTheWeek.Tue:
            return DayOfTheWeek.Tue;
        case DayOfTheWeek.Wed:
            return DayOfTheWeek.Wed;
        case DayOfTheWeek.Thu:
            return DayOfTheWeek.Thu;
        case DayOfTheWeek.Fri:
            return DayOfTheWeek.Fri;
        case DayOfTheWeek.Sat:
            return DayOfTheWeek.Sat;
        default:
            return DayOfTheWeek.Sat;
    }
}

/**
 * タイムゾーンを受け取ることで現地時間にパースする。
 * @param timestamp タイムスタンプ
 * @param timezone タイムゾーン
 * @param formatVar フォーマッティング
 */
export function format(
    timestamp: number,
    timezone: TimeZone,
    formatVar: string,
): string {
    const tz = timezone.split('__').join('/');
    return dayjs(
        new Date(timestamp).toLocaleString('en-US', { timeZone: tz }),
    ).format(formatVar);
}

/**
 * 標準時刻で1970/01/01 00:00:00からの経過㎳を返す。
 * @param timeZone タイムゾーン
 */
export function getCurrentTimeStamp(): number {
    return new Date().getTime();
}

/**
 * @param date 日付
 * @param time 時間
 */
export function getMilliSecBySpecificDateAndTime(
    date: Scalars['AWSDate'],
    time: Scalars['AWSTime'],
    timezone: TimeZone,
): number {
    return (
        new Date(`${date.split('-').join('/')} ${time}`).getTime() +
        getDiff(timezone)
    );
}

/**
 * 現地（ホテルの存在するタイムゾーン）の現在の日付を返す
 * @param timeZone タイムゾーン
 */
export function getCurrentDate(timeZone: TimeZone): Scalars['AWSDate'] {
    const tz = timeZone.split('__').join('/');
    return dayjs(new Date().toLocaleString('en-US', { timeZone: tz })).format(
        'YYYY-MM-DD',
    );
}
/**
 * 現地（ホテルの存在するタイムゾーン）の現在の日付を返す
 * @param timeZone タイムゾーン
 */
export function getCurrentDateTime(timeZone: TimeZone): Scalars['AWSDate'] {
    const tz = timeZone.split('__').join('/');
    return dayjs(new Date().toLocaleString('en-US', { timeZone: tz })).format(
        'YYYY-MM-DDTHH:mm',
    );
}
export function DateTimeToDate(dateTime: string): Scalars['AWSDate'] {
    return dateTime.split('T')[0];
}
export function DateTimeToTime(dateTime: string): string {
    return dateTime.split('T')[1];
}

/**
 * 現地の23:59:59の1970/01/01 00:00:00からの経過㎳を返す。
 * @param date 指定日
 */
export function getEndOfDateMilli(
    date: Scalars['AWSDate'],
    timezone: TimeZone,
): number {
    const dayStr = `${date.split('-').join('/')} 23:59:59`;
    return new Date(dayStr).getTime() + getDiff(timezone);
}

function getDiff(timeZone: TimeZone): number {
    const tz = timeZone.split('__').join('/');
    // 現地環境の時間
    const targetDate = dayjs(
        new Date().toLocaleString('en-US', { timeZone: tz }),
    )
        .toDate()
        .getTime();
    // 操作環境の時間
    const localDate = new Date().getTime();
    // 時差
    return localDate - targetDate;
}

type HH = string;
type mm = string;
// tslint:disable-next-line: no-shadowed-variable
export function getSubOfEndOfDates(HH: HH, mm: mm): number {
    const HHInt = Number(HH);
    const mmInt = Number(mm);
    const sub = HHInt * 60 * 60 * 1000 + mmInt * 60 * 1000;
    const last = 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000;
    return last - sub;
}

export function getSubOfDateAMinusDateB(
    dateA: Scalars['AWSDate'],
    dateB: Scalars['AWSDate'],
): number {
    return dayjs(dateA).diff(dayjs(dateB)) / (24 * 60 * 60 * 1000);
}
/**
 * 日付を加算する
 * @param target ターゲットの日付
 * @param inc 増加数
 */
export function addDate(
    target: Scalars['AWSDate'],
    inc: number,
): Scalars['AWSDate'] {
    return dayjs(target).add(inc, 'day').format('YYYY-MM-DD');
}

export function addMinutes(target: string, inc: number): string {
    return dayjs(target).add(inc, 'minute').format('YYYY-MM-DDTHH:mm');
}
