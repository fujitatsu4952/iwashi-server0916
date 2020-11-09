"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMinutes = exports.addDate = exports.getSubOfDateAMinusDateB = exports.getSubOfEndOfDates = exports.getEndOfDateMilli = exports.DateTimeToTime = exports.DateTimeToDate = exports.getCurrentDateTime = exports.getCurrentDate = exports.getMilliSecBySpecificDateAndTime = exports.getCurrentTimeStamp = exports.format = exports.getDayOfTheWeek = exports.getDateTimeRangeArray = exports.getTimeRangeArray = exports.getDateRangeArray = void 0;
const dayjs = require("dayjs");
const type_1 = require("../../entity/type");
function getDateRangeArray(startDt, endDt) {
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
exports.getDateRangeArray = getDateRangeArray;
function getTimeRangeArray(startTime, endTime) {
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
exports.getTimeRangeArray = getTimeRangeArray;
function getDateTimeRangeArray(startAt, endAt, stepMin) {
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
exports.getDateTimeRangeArray = getDateTimeRangeArray;
function getDayOfTheWeek(date) {
    const dayOfTheWeek = dayjs(date).format('ddd').toUpperCase();
    switch (dayOfTheWeek) {
        case type_1.DayOfTheWeek.Sun:
            return type_1.DayOfTheWeek.Sun;
        case type_1.DayOfTheWeek.Mon:
            return type_1.DayOfTheWeek.Mon;
        case type_1.DayOfTheWeek.Tue:
            return type_1.DayOfTheWeek.Tue;
        case type_1.DayOfTheWeek.Wed:
            return type_1.DayOfTheWeek.Wed;
        case type_1.DayOfTheWeek.Thu:
            return type_1.DayOfTheWeek.Thu;
        case type_1.DayOfTheWeek.Fri:
            return type_1.DayOfTheWeek.Fri;
        case type_1.DayOfTheWeek.Sat:
            return type_1.DayOfTheWeek.Sat;
        default:
            return type_1.DayOfTheWeek.Sat;
    }
}
exports.getDayOfTheWeek = getDayOfTheWeek;
/**
 * タイムゾーンを受け取ることで現地時間にパースする。
 * @param timestamp タイムスタンプ
 * @param timezone タイムゾーン
 * @param formatVar フォーマッティング
 */
function format(timestamp, timezone, formatVar) {
    const tz = timezone.split('__').join('/');
    return dayjs(new Date(timestamp).toLocaleString('en-US', { timeZone: tz })).format(formatVar);
}
exports.format = format;
/**
 * 標準時刻で1970/01/01 00:00:00からの経過㎳を返す。
 * @param timeZone タイムゾーン
 */
function getCurrentTimeStamp() {
    return new Date().getTime();
}
exports.getCurrentTimeStamp = getCurrentTimeStamp;
/**
 * @param date 日付
 * @param time 時間
 */
function getMilliSecBySpecificDateAndTime(date, time, timezone) {
    return (new Date(`${date.split('-').join('/')} ${time}`).getTime() +
        getDiff(timezone));
}
exports.getMilliSecBySpecificDateAndTime = getMilliSecBySpecificDateAndTime;
/**
 * 現地（ホテルの存在するタイムゾーン）の現在の日付を返す
 * @param timeZone タイムゾーン
 */
function getCurrentDate(timeZone) {
    const tz = timeZone.split('__').join('/');
    return dayjs(new Date().toLocaleString('en-US', { timeZone: tz })).format('YYYY-MM-DD');
}
exports.getCurrentDate = getCurrentDate;
/**
 * 現地（ホテルの存在するタイムゾーン）の現在の日付を返す
 * @param timeZone タイムゾーン
 */
function getCurrentDateTime(timeZone) {
    const tz = timeZone.split('__').join('/');
    return dayjs(new Date().toLocaleString('en-US', { timeZone: tz })).format('YYYY-MM-DDTHH:mm');
}
exports.getCurrentDateTime = getCurrentDateTime;
function DateTimeToDate(dateTime) {
    return dateTime.split('T')[0];
}
exports.DateTimeToDate = DateTimeToDate;
function DateTimeToTime(dateTime) {
    return dateTime.split('T')[1];
}
exports.DateTimeToTime = DateTimeToTime;
/**
 * 現地の23:59:59の1970/01/01 00:00:00からの経過㎳を返す。
 * @param date 指定日
 */
function getEndOfDateMilli(date, timezone) {
    const dayStr = `${date.split('-').join('/')} 23:59:59`;
    return new Date(dayStr).getTime() + getDiff(timezone);
}
exports.getEndOfDateMilli = getEndOfDateMilli;
function getDiff(timeZone) {
    const tz = timeZone.split('__').join('/');
    // 現地環境の時間
    const targetDate = dayjs(new Date().toLocaleString('en-US', { timeZone: tz }))
        .toDate()
        .getTime();
    // 操作環境の時間
    const localDate = new Date().getTime();
    // 時差
    return localDate - targetDate;
}
// tslint:disable-next-line: no-shadowed-variable
function getSubOfEndOfDates(HH, mm) {
    const HHInt = Number(HH);
    const mmInt = Number(mm);
    const sub = HHInt * 60 * 60 * 1000 + mmInt * 60 * 1000;
    const last = 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000;
    return last - sub;
}
exports.getSubOfEndOfDates = getSubOfEndOfDates;
function getSubOfDateAMinusDateB(dateA, dateB) {
    return dayjs(dateA).diff(dayjs(dateB)) / (24 * 60 * 60 * 1000);
}
exports.getSubOfDateAMinusDateB = getSubOfDateAMinusDateB;
/**
 * 日付を加算する
 * @param target ターゲットの日付
 * @param inc 増加数
 */
function addDate(target, inc) {
    return dayjs(target).add(inc, 'day').format('YYYY-MM-DD');
}
exports.addDate = addDate;
function addMinutes(target, inc) {
    return dayjs(target).add(inc, 'minute').format('YYYY-MM-DDTHH:mm');
}
exports.addMinutes = addMinutes;
