"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.FetchS3ObjectsDocument = exports.AddS3ObjectDocument = exports.UpdateS3ObjectDocument = exports.FetchRoomStatusDocument = exports.AddRoomStatusDocument = exports.UpdateRoomStatusDocument = exports.FetchRoomMastsDocument = exports.AddRoomMastDocument = exports.UpdateRoomMastDocument = exports.FetchReservationObjectsDocument = exports.AddReservationObjectDocument = exports.UpdateReservationObjectDocument = exports.FetchPolicyMastDocument = exports.AddPolicyMastDocument = exports.UpdatePolicyMastDocument = exports.FetchPlanStatusDocument = exports.AddPlanStatusDocument = exports.UpdatePlanStatusDocument = exports.FetchPlanMastsDocument = exports.AddPlanMastDocument = exports.UpdatePlanMastDocument = exports.TimeZone = exports.DayOfTheWeek = exports.CurrencyType = void 0;
const graphql_1 = require("graphql");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var CurrencyType;
(function (CurrencyType) {
    CurrencyType["Jpy"] = "jpy";
    CurrencyType["Usd"] = "usd";
})(CurrencyType = exports.CurrencyType || (exports.CurrencyType = {}));
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek["Sun"] = "SUN";
    DayOfTheWeek["Mon"] = "MON";
    DayOfTheWeek["Tue"] = "TUE";
    DayOfTheWeek["Wed"] = "WED";
    DayOfTheWeek["Thu"] = "THU";
    DayOfTheWeek["Fri"] = "FRI";
    DayOfTheWeek["Sat"] = "SAT";
})(DayOfTheWeek = exports.DayOfTheWeek || (exports.DayOfTheWeek = {}));
var TimeZone;
(function (TimeZone) {
    TimeZone["AsiaTokyo"] = "Asia__Tokyo";
    TimeZone["AmericaNewYork"] = "America__New_York";
    TimeZone["EuropeLondon"] = "Europe__London";
})(TimeZone = exports.TimeZone || (exports.TimeZone = {}));
exports.UpdatePlanMastDocument = graphql_tag_1.default `
    mutation updatePlanMast($planMast: PlanMastInput) {
  updatePlanMast(input: $planMast) {
    name
  }
}
    `;
exports.AddPlanMastDocument = graphql_tag_1.default `
    mutation addPlanMast($planMast: PlanMastInput) {
  addPlanMast(input: $planMast) {
    planID
    name
    description
    subDescription
    price
    stockNum
    deletedAt
    inSale
  }
}
    `;
exports.FetchPlanMastsDocument = graphql_tag_1.default `
    query fetchPlanMasts($planID: ID) {
  fetchPlanMasts(planID: $planID) {
    planID
    name
    description
    subDescription
    price
    stockNum
    deletedAt
    inSale
  }
}
    `;
exports.UpdatePlanStatusDocument = graphql_tag_1.default `
    mutation updatePlanStatus($planStatus: [PlanStatusInput!]) {
  updatePlanStatus(input: $planStatus) {
    planID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
exports.AddPlanStatusDocument = graphql_tag_1.default `
    mutation addPlanStatus($planStatus: [PlanStatusInput!]) {
  addPlanStatus(input: $planStatus) {
    planID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
exports.FetchPlanStatusDocument = graphql_tag_1.default `
    query fetchPlanStatus($Time: String!, $planID: ID!) {
  fetchPlanStatus(Time: $Time, planID: $planID) {
    planID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
exports.UpdatePolicyMastDocument = graphql_tag_1.default `
    mutation updatePolicyMast($policyMast: PolicyMastInput) {
  updatePolicyMast(input: $policyMast) {
    policyID
  }
}
    `;
exports.AddPolicyMastDocument = graphql_tag_1.default `
    mutation addPolicyMast($policyMast: PolicyMastInput) {
  addPolicyMast(input: $policyMast) {
    policyID
  }
}
    `;
exports.FetchPolicyMastDocument = graphql_tag_1.default `
    query fetchPolicyMast($policyID: ID) {
  fetchPolicyMast(policyID: $policyID) {
    policyID
    roomChargePrice
  }
}
    `;
exports.UpdateReservationObjectDocument = graphql_tag_1.default `
    mutation updateReservationObject($reservationObject: ReservationObjectInput) {
  updateReservationObject(input: $reservationObject) {
    reservationID
  }
}
    `;
exports.AddReservationObjectDocument = graphql_tag_1.default `
    mutation addReservationObject($reservationObject: ReservationObjectInput) {
  addReservationObject(input: $reservationObject) {
    reservationID
  }
}
    `;
exports.FetchReservationObjectsDocument = graphql_tag_1.default `
    query fetchReservationObjects($reservationID: ID) {
  fetchReservationObjects(reservationID: $reservationID) {
    reservationID
    checkInTime
    checkOutTime
    planID
    roomID
    roomNum
    planNum
    peopleNum
    policyID
    totalPrice
    guestName
    guestEmail
    GuestTell
    canceledAt
  }
}
    `;
exports.UpdateRoomMastDocument = graphql_tag_1.default `
    mutation updateRoomMast($roomMast: RoomMastInput) {
  updateRoomMast(input: $roomMast) {
    name
  }
}
    `;
exports.AddRoomMastDocument = graphql_tag_1.default `
    mutation addRoomMast($roomMast: RoomMastInput) {
  addRoomMast(input: $roomMast) {
    name
  }
}
    `;
exports.FetchRoomMastsDocument = graphql_tag_1.default `
    query fetchRoomMasts($roomID: ID) {
  fetchRoomMasts(roomID: $roomID) {
    roomID
    name
    description
    subDescription
    maxPeopleNum
    stockNum
    minOrderNum
    deletedAt
    inSale
  }
}
    `;
exports.UpdateRoomStatusDocument = graphql_tag_1.default `
    mutation updateRoomStatus($roomStatus: [RoomStatusInput!]) {
  updateRoomStatus(input: $roomStatus) {
    roomID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
exports.AddRoomStatusDocument = graphql_tag_1.default `
    mutation addRoomStatus($roomStatus: [RoomStatusInput!]) {
  addRoomStatus(input: $roomStatus) {
    roomID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
exports.FetchRoomStatusDocument = graphql_tag_1.default `
    query fetchRoomStatus($Time: String!, $roomID: ID!) {
  fetchRoomStatus(Time: $Time, roomID: $roomID) {
    roomID
    Time
    soldNum
    availableNum
    isAvailabe
  }
}
    `;
exports.UpdateS3ObjectDocument = graphql_tag_1.default `
    mutation updateS3Object($s3Object: S3ObjectInput) {
  updateS3Object(input: $s3Object) {
    bucket
  }
}
    `;
exports.AddS3ObjectDocument = graphql_tag_1.default `
    mutation addS3Object($s3Object: S3ObjectInput) {
  addS3Object(input: $s3Object) {
    bucket
    keyName
    region
    mimeType
    fileName
  }
}
    `;
exports.FetchS3ObjectsDocument = graphql_tag_1.default `
    query fetchS3Objects($keyName: String) {
  fetchS3Objects(keyName: $keyName) {
    bucket
    keyName
    region
    mimeType
    fileName
  }
}
    `;
const defaultWrapper = sdkFunction => sdkFunction();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        updatePlanMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.UpdatePlanMastDocument), variables));
        },
        addPlanMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.AddPlanMastDocument), variables));
        },
        fetchPlanMasts(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.FetchPlanMastsDocument), variables));
        },
        updatePlanStatus(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.UpdatePlanStatusDocument), variables));
        },
        addPlanStatus(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.AddPlanStatusDocument), variables));
        },
        fetchPlanStatus(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.FetchPlanStatusDocument), variables));
        },
        updatePolicyMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.UpdatePolicyMastDocument), variables));
        },
        addPolicyMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.AddPolicyMastDocument), variables));
        },
        fetchPolicyMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.FetchPolicyMastDocument), variables));
        },
        updateReservationObject(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.UpdateReservationObjectDocument), variables));
        },
        addReservationObject(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.AddReservationObjectDocument), variables));
        },
        fetchReservationObjects(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.FetchReservationObjectsDocument), variables));
        },
        updateRoomMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.UpdateRoomMastDocument), variables));
        },
        addRoomMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.AddRoomMastDocument), variables));
        },
        fetchRoomMasts(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.FetchRoomMastsDocument), variables));
        },
        updateRoomStatus(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.UpdateRoomStatusDocument), variables));
        },
        addRoomStatus(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.AddRoomStatusDocument), variables));
        },
        fetchRoomStatus(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.FetchRoomStatusDocument), variables));
        },
        updateS3Object(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.UpdateS3ObjectDocument), variables));
        },
        addS3Object(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.AddS3ObjectDocument), variables));
        },
        fetchS3Objects(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.FetchS3ObjectsDocument), variables));
        }
    };
}
exports.getSdk = getSdk;
