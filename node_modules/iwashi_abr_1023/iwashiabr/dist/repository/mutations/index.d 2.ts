import { GraphQLClient } from 'graphql-request';
import { GraphQLError } from 'graphql-request/dist/types';
import { Headers } from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    AWSDate: any;
    AWSDateTime: any;
    AWSTimestamp: any;
    AWSTime: any;
    AWSEmail: any;
    AWSJSON: any;
    AWSURL: any;
    AWSPhone: any;
    AWSIPAddress: any;
};
export declare type DateStatusObject = {
    __typename?: 'DateStatusObject';
    date: Scalars['AWSDate'];
    isStayable: Scalars['Boolean'];
    price?: Maybe<PriceObject>;
};
export declare type DateStatusObjectInput = {
    date: Scalars['AWSDate'];
    isStayable: Scalars['Boolean'];
    price?: Maybe<PriceObjectInput>;
};
export declare type KeyValueObject = {
    __typename?: 'KeyValueObject';
    key: Scalars['String'];
    value?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};
export declare type PriceObject = {
    __typename?: 'PriceObject';
    currencyType: CurrencyType;
    amount: Scalars['Int'];
};
export declare type PriceObjectInput = {
    currencyType: CurrencyType;
    amount: Scalars['Int'];
};
export declare enum CurrencyType {
    Jpy = "jpy",
    Usd = "usd"
}
export declare enum DayOfTheWeek {
    Sun = "SUN",
    Mon = "MON",
    Tue = "TUE",
    Wed = "WED",
    Thu = "THU",
    Fri = "FRI",
    Sat = "SAT"
}
export declare enum TimeZone {
    AsiaTokyo = "Asia__Tokyo",
    AmericaNewYork = "America__New_York",
    EuropeLondon = "Europe__London"
}
export declare type Query = {
    __typename?: 'Query';
    fetchPlanMasts: Array<PlanMast>;
    fetchPlanStatus: Array<PlanStatus>;
    fetchPolicyMast: Array<PolicyMast>;
    fetchReservationObjects: Array<ReservationObject>;
    fetchRoomMasts: Array<RoomMast>;
    fetchRoomStatus: Array<RoomStatus>;
    fetchS3Objects: Array<S3Object>;
};
export declare type QueryFetchPlanMastsArgs = {
    planID?: Maybe<Scalars['ID']>;
};
export declare type QueryFetchPlanStatusArgs = {
    Time?: Maybe<Scalars['String']>;
    planID?: Maybe<Scalars['ID']>;
};
export declare type QueryFetchPolicyMastArgs = {
    policyID?: Maybe<Scalars['ID']>;
};
export declare type QueryFetchReservationObjectsArgs = {
    reservationID?: Maybe<Scalars['ID']>;
};
export declare type QueryFetchRoomMastsArgs = {
    roomID?: Maybe<Scalars['ID']>;
};
export declare type QueryFetchRoomStatusArgs = {
    Time?: Maybe<Scalars['String']>;
    roomID?: Maybe<Scalars['ID']>;
};
export declare type QueryFetchS3ObjectsArgs = {
    keyName?: Maybe<Scalars['String']>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    addPlanMast?: Maybe<PlanMast>;
    addPlanStatus?: Maybe<PlanStatus>;
    addPolicyMast?: Maybe<PolicyMast>;
    addReservationObject?: Maybe<ReservationObject>;
    addRoomMast?: Maybe<RoomMast>;
    addRoomStatus?: Maybe<RoomStatus>;
    addS3Object?: Maybe<S3Object>;
    updatePlanMast?: Maybe<PlanMast>;
    updatePlanStatus?: Maybe<PlanStatus>;
    updatePolicyMast?: Maybe<PolicyMast>;
    updateReservationObject?: Maybe<ReservationObject>;
    updateRoomMast?: Maybe<RoomMast>;
    updateRoomStatus?: Maybe<RoomStatus>;
    updateS3Object?: Maybe<S3Object>;
};
export declare type MutationAddPlanMastArgs = {
    input?: Maybe<PlanMastInput>;
};
export declare type MutationAddPlanStatusArgs = {
    input?: Maybe<Array<Maybe<PlanStatusInput>>>;
};
export declare type MutationAddPolicyMastArgs = {
    input?: Maybe<PolicyMastInput>;
};
export declare type MutationAddReservationObjectArgs = {
    input?: Maybe<ReservationObjectInput>;
};
export declare type MutationAddRoomMastArgs = {
    input?: Maybe<RoomMastInput>;
};
export declare type MutationAddRoomStatusArgs = {
    input?: Maybe<Array<Maybe<RoomStatusInput>>>;
};
export declare type MutationAddS3ObjectArgs = {
    input?: Maybe<S3ObjectInput>;
};
export declare type MutationUpdatePlanMastArgs = {
    input?: Maybe<PlanMastInput>;
};
export declare type MutationUpdatePlanStatusArgs = {
    input?: Maybe<Array<Maybe<PlanStatusInput>>>;
};
export declare type MutationUpdatePolicyMastArgs = {
    input?: Maybe<PolicyMastInput>;
};
export declare type MutationUpdateReservationObjectArgs = {
    input?: Maybe<ReservationObjectInput>;
};
export declare type MutationUpdateRoomMastArgs = {
    input?: Maybe<RoomMastInput>;
};
export declare type MutationUpdateRoomStatusArgs = {
    input?: Maybe<Array<Maybe<RoomStatusInput>>>;
};
export declare type MutationUpdateS3ObjectArgs = {
    input?: Maybe<S3ObjectInput>;
};
export declare type CancelPolicyMast = {
    __typename?: 'CancelPolicyMast';
    policyID: Scalars['ID'];
    beforeTime?: Maybe<Scalars['String']>;
    chargeRatio?: Maybe<Scalars['Int']>;
};
export declare type CancelPolicyMastInput = {
    policyID: Scalars['ID'];
    beforeTime?: Maybe<Scalars['String']>;
    chargeRatio?: Maybe<Scalars['Int']>;
};
export declare type ImageMast = {
    __typename?: 'ImageMast';
    imageID: Scalars['ID'];
    bucket: Scalars['String'];
    key: Scalars['String'];
    mimeType?: Maybe<Scalars['String']>;
    fileName?: Maybe<Scalars['String']>;
};
export declare type ImageMastInput = {
    imageID: Scalars['ID'];
    bucket: Scalars['String'];
    key: Scalars['String'];
    mimeType?: Maybe<Scalars['String']>;
    fileName?: Maybe<Scalars['String']>;
};
export declare type PlanImageMappingTemplate = {
    __typename?: 'PlanImageMappingTemplate';
    planID: Scalars['String'];
    imageID?: Maybe<Scalars['String']>;
};
export declare type PlanImageMappingTemplateInput = {
    planID: Scalars['String'];
    imageID?: Maybe<Scalars['String']>;
};
export declare type PlanMast = {
    __typename?: 'PlanMast';
    planID: Scalars['ID'];
    name: Scalars['String'];
    description: Scalars['String'];
    subDescription: Scalars['String'];
    price: Scalars['Int'];
    stockNum: Scalars['Int'];
    deletedAt?: Maybe<Scalars['String']>;
    inSale?: Maybe<Scalars['Boolean']>;
};
export declare type PlanMastInput = {
    planID: Scalars['ID'];
    name: Scalars['String'];
    description: Scalars['String'];
    subDescription?: Maybe<Scalars['String']>;
    price: Scalars['Int'];
    stockNum: Scalars['Int'];
    deletedAt?: Maybe<Scalars['String']>;
    inSale?: Maybe<Scalars['Boolean']>;
};
export declare type PlanStatus = {
    __typename?: 'PlanStatus';
    planID: Scalars['ID'];
    Time: Scalars['String'];
    soldNum?: Maybe<Scalars['Int']>;
    availableNum?: Maybe<Scalars['Int']>;
    isAvailabe?: Maybe<Scalars['Boolean']>;
};
export declare type PlanStatusInput = {
    planID: Scalars['ID'];
    Time: Scalars['String'];
    soldNum?: Maybe<Scalars['Int']>;
    availableNum?: Maybe<Scalars['Int']>;
    isAvailabe?: Maybe<Scalars['Boolean']>;
};
export declare type PolicyMast = {
    __typename?: 'PolicyMast';
    policyID: Scalars['ID'];
    roomChargePrice?: Maybe<Scalars['Int']>;
};
export declare type PolicyMastInput = {
    policyID: Scalars['ID'];
    roomChargePrice?: Maybe<Scalars['Int']>;
};
export declare type ReservationObject = {
    __typename?: 'ReservationObject';
    reservationID: Scalars['ID'];
    checkInTime: Scalars['String'];
    checkOutTime: Scalars['String'];
    planID: Scalars['ID'];
    roomID: Scalars['ID'];
    roomNum?: Maybe<Scalars['Int']>;
    planNum?: Maybe<Scalars['Int']>;
    peopleNum: Scalars['Int'];
    policyID: Scalars['ID'];
    totalPrice?: Maybe<Scalars['Int']>;
    guestName?: Maybe<Scalars['String']>;
    guestEmail?: Maybe<Scalars['String']>;
    GuestTell?: Maybe<Scalars['String']>;
    canceledAt?: Maybe<Scalars['String']>;
};
export declare type ReservationObjectInput = {
    reservationID: Scalars['ID'];
    checkInTime: Scalars['String'];
    checkOutTime: Scalars['String'];
    planID: Scalars['ID'];
    roomID: Scalars['ID'];
    roomNum?: Maybe<Scalars['Int']>;
    planNum?: Maybe<Scalars['Int']>;
    peopleNum: Scalars['Int'];
    policyID: Scalars['ID'];
    totalPrice?: Maybe<Scalars['Int']>;
    guestName?: Maybe<Scalars['String']>;
    guestEmail?: Maybe<Scalars['String']>;
    GuestTell?: Maybe<Scalars['String']>;
    canceledAt?: Maybe<Scalars['String']>;
};
export declare type ReservationPlanInfo = {
    __typename?: 'ReservationPlanInfo';
    reservationID: Scalars['String'];
    planID: Scalars['String'];
    name: Scalars['String'];
    amount: Scalars['String'];
    price: Scalars['String'];
};
export declare type ReservationPlanInfoInput = {
    reservationID: Scalars['String'];
    planID: Scalars['String'];
    name: Scalars['String'];
    amount: Scalars['String'];
    price: Scalars['String'];
};
export declare type ReservationRoomInfo = {
    __typename?: 'ReservationRoomInfo';
    reservationID: Scalars['String'];
    roomID: Scalars['String'];
    name: Scalars['String'];
    amount: Scalars['String'];
    price: Scalars['String'];
};
export declare type ReservationRoomInfoInput = {
    reservationID: Scalars['String'];
    roomID: Scalars['String'];
    name: Scalars['String'];
    amount: Scalars['String'];
    price: Scalars['String'];
};
export declare type RoomImageMappingTemplate = {
    __typename?: 'RoomImageMappingTemplate';
    roomID: Scalars['String'];
    imageID?: Maybe<Scalars['String']>;
};
export declare type RoomImageMappingTemplateInput = {
    roomID: Scalars['String'];
    imageID?: Maybe<Scalars['String']>;
};
export declare type RoomMast = {
    __typename?: 'RoomMast';
    roomID: Scalars['ID'];
    name: Scalars['String'];
    description: Scalars['String'];
    subDescription: Scalars['String'];
    maxPeopleNum: Scalars['Int'];
    stockNum: Scalars['Int'];
    minOrderNum: Scalars['Int'];
    deletedAt?: Maybe<Scalars['String']>;
    inSale?: Maybe<Scalars['Boolean']>;
};
export declare type RoomMastInput = {
    roomID: Scalars['ID'];
    name: Scalars['String'];
    description: Scalars['String'];
    subDescription: Scalars['String'];
    maxPeopleNum: Scalars['Int'];
    stockNum: Scalars['Int'];
    minOrderNum: Scalars['Int'];
    deletedAt?: Maybe<Scalars['String']>;
    inSale?: Maybe<Scalars['Boolean']>;
};
export declare type RoomStatus = {
    __typename?: 'RoomStatus';
    roomID: Scalars['ID'];
    Time: Scalars['String'];
    soldNum?: Maybe<Scalars['Int']>;
    availableNum?: Maybe<Scalars['Int']>;
    isAvailabe?: Maybe<Scalars['Boolean']>;
};
export declare type RoomStatusInput = {
    roomID: Scalars['ID'];
    Time: Scalars['String'];
    soldNum?: Maybe<Scalars['Int']>;
    availableNum?: Maybe<Scalars['Int']>;
    isAvailabe?: Maybe<Scalars['Boolean']>;
};
export declare type S3Object = {
    __typename?: 'S3Object';
    bucket?: Maybe<Scalars['String']>;
    keyName: Scalars['String'];
    region: Scalars['String'];
    mimeType?: Maybe<Scalars['String']>;
    fileName?: Maybe<Scalars['String']>;
};
export declare type S3ObjectInput = {
    bucket?: Maybe<Scalars['String']>;
    keyName: Scalars['String'];
    region: Scalars['String'];
    mimeType?: Maybe<Scalars['String']>;
    fileName?: Maybe<Scalars['String']>;
};
export declare type UpdatePlanMastMutationVariables = Exact<{
    planMast?: Maybe<PlanMastInput>;
}>;
export declare type UpdatePlanMastMutation = ({
    __typename?: 'Mutation';
} & {
    updatePlanMast?: Maybe<({
        __typename?: 'PlanMast';
    } & Pick<PlanMast, 'name'>)>;
});
export declare type AddPlanMastMutationVariables = Exact<{
    planMast?: Maybe<PlanMastInput>;
}>;
export declare type AddPlanMastMutation = ({
    __typename?: 'Mutation';
} & {
    addPlanMast?: Maybe<({
        __typename?: 'PlanMast';
    } & Pick<PlanMast, 'planID' | 'name' | 'description' | 'subDescription' | 'price' | 'stockNum' | 'deletedAt' | 'inSale'>)>;
});
export declare type FetchPlanMastsQueryVariables = Exact<{
    planID?: Maybe<Scalars['ID']>;
}>;
export declare type FetchPlanMastsQuery = ({
    __typename?: 'Query';
} & {
    fetchPlanMasts: Array<({
        __typename?: 'PlanMast';
    } & Pick<PlanMast, 'planID' | 'name' | 'description' | 'subDescription' | 'price' | 'stockNum' | 'deletedAt' | 'inSale'>)>;
});
export declare type UpdatePlanStatusMutationVariables = Exact<{
    planStatus?: Maybe<Array<PlanStatusInput>>;
}>;
export declare type UpdatePlanStatusMutation = ({
    __typename?: 'Mutation';
} & {
    updatePlanStatus?: Maybe<({
        __typename?: 'PlanStatus';
    } & Pick<PlanStatus, 'planID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>)>;
});
export declare type AddPlanStatusMutationVariables = Exact<{
    planStatus?: Maybe<Array<PlanStatusInput>>;
}>;
export declare type AddPlanStatusMutation = ({
    __typename?: 'Mutation';
} & {
    addPlanStatus?: Maybe<({
        __typename?: 'PlanStatus';
    } & Pick<PlanStatus, 'planID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>)>;
});
export declare type FetchPlanStatusQueryVariables = Exact<{
    Time: Scalars['String'];
    planID: Scalars['ID'];
}>;
export declare type FetchPlanStatusQuery = ({
    __typename?: 'Query';
} & {
    fetchPlanStatus: Array<({
        __typename?: 'PlanStatus';
    } & Pick<PlanStatus, 'planID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>)>;
});
export declare type UpdatePolicyMastMutationVariables = Exact<{
    policyMast?: Maybe<PolicyMastInput>;
}>;
export declare type UpdatePolicyMastMutation = ({
    __typename?: 'Mutation';
} & {
    updatePolicyMast?: Maybe<({
        __typename?: 'PolicyMast';
    } & Pick<PolicyMast, 'policyID'>)>;
});
export declare type AddPolicyMastMutationVariables = Exact<{
    policyMast?: Maybe<PolicyMastInput>;
}>;
export declare type AddPolicyMastMutation = ({
    __typename?: 'Mutation';
} & {
    addPolicyMast?: Maybe<({
        __typename?: 'PolicyMast';
    } & Pick<PolicyMast, 'policyID'>)>;
});
export declare type FetchPolicyMastQueryVariables = Exact<{
    policyID?: Maybe<Scalars['ID']>;
}>;
export declare type FetchPolicyMastQuery = ({
    __typename?: 'Query';
} & {
    fetchPolicyMast: Array<({
        __typename?: 'PolicyMast';
    } & Pick<PolicyMast, 'policyID' | 'roomChargePrice'>)>;
});
export declare type UpdateReservationObjectMutationVariables = Exact<{
    reservationObject?: Maybe<ReservationObjectInput>;
}>;
export declare type UpdateReservationObjectMutation = ({
    __typename?: 'Mutation';
} & {
    updateReservationObject?: Maybe<({
        __typename?: 'ReservationObject';
    } & Pick<ReservationObject, 'reservationID'>)>;
});
export declare type AddReservationObjectMutationVariables = Exact<{
    reservationObject?: Maybe<ReservationObjectInput>;
}>;
export declare type AddReservationObjectMutation = ({
    __typename?: 'Mutation';
} & {
    addReservationObject?: Maybe<({
        __typename?: 'ReservationObject';
    } & Pick<ReservationObject, 'reservationID'>)>;
});
export declare type FetchReservationObjectsQueryVariables = Exact<{
    reservationID?: Maybe<Scalars['ID']>;
}>;
export declare type FetchReservationObjectsQuery = ({
    __typename?: 'Query';
} & {
    fetchReservationObjects: Array<({
        __typename?: 'ReservationObject';
    } & Pick<ReservationObject, 'reservationID' | 'checkInTime' | 'checkOutTime' | 'planID' | 'roomID' | 'roomNum' | 'planNum' | 'peopleNum' | 'policyID' | 'totalPrice' | 'guestName' | 'guestEmail' | 'GuestTell' | 'canceledAt'>)>;
});
export declare type UpdateRoomMastMutationVariables = Exact<{
    roomMast?: Maybe<RoomMastInput>;
}>;
export declare type UpdateRoomMastMutation = ({
    __typename?: 'Mutation';
} & {
    updateRoomMast?: Maybe<({
        __typename?: 'RoomMast';
    } & Pick<RoomMast, 'name'>)>;
});
export declare type AddRoomMastMutationVariables = Exact<{
    roomMast?: Maybe<RoomMastInput>;
}>;
export declare type AddRoomMastMutation = ({
    __typename?: 'Mutation';
} & {
    addRoomMast?: Maybe<({
        __typename?: 'RoomMast';
    } & Pick<RoomMast, 'name'>)>;
});
export declare type FetchRoomMastsQueryVariables = Exact<{
    roomID?: Maybe<Scalars['ID']>;
}>;
export declare type FetchRoomMastsQuery = ({
    __typename?: 'Query';
} & {
    fetchRoomMasts: Array<({
        __typename?: 'RoomMast';
    } & Pick<RoomMast, 'roomID' | 'name' | 'description' | 'subDescription' | 'maxPeopleNum' | 'stockNum' | 'minOrderNum' | 'deletedAt' | 'inSale'>)>;
});
export declare type UpdateRoomStatusMutationVariables = Exact<{
    roomStatus?: Maybe<Array<RoomStatusInput>>;
}>;
export declare type UpdateRoomStatusMutation = ({
    __typename?: 'Mutation';
} & {
    updateRoomStatus?: Maybe<({
        __typename?: 'RoomStatus';
    } & Pick<RoomStatus, 'roomID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>)>;
});
export declare type AddRoomStatusMutationVariables = Exact<{
    roomStatus?: Maybe<Array<RoomStatusInput>>;
}>;
export declare type AddRoomStatusMutation = ({
    __typename?: 'Mutation';
} & {
    addRoomStatus?: Maybe<({
        __typename?: 'RoomStatus';
    } & Pick<RoomStatus, 'roomID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>)>;
});
export declare type FetchRoomStatusQueryVariables = Exact<{
    Time: Scalars['String'];
    roomID: Scalars['ID'];
}>;
export declare type FetchRoomStatusQuery = ({
    __typename?: 'Query';
} & {
    fetchRoomStatus: Array<({
        __typename?: 'RoomStatus';
    } & Pick<RoomStatus, 'roomID' | 'Time' | 'soldNum' | 'availableNum' | 'isAvailabe'>)>;
});
export declare type UpdateS3ObjectMutationVariables = Exact<{
    s3Object?: Maybe<S3ObjectInput>;
}>;
export declare type UpdateS3ObjectMutation = ({
    __typename?: 'Mutation';
} & {
    updateS3Object?: Maybe<({
        __typename?: 'S3Object';
    } & Pick<S3Object, 'bucket'>)>;
});
export declare type AddS3ObjectMutationVariables = Exact<{
    s3Object?: Maybe<S3ObjectInput>;
}>;
export declare type AddS3ObjectMutation = ({
    __typename?: 'Mutation';
} & {
    addS3Object?: Maybe<({
        __typename?: 'S3Object';
    } & Pick<S3Object, 'bucket' | 'keyName' | 'region' | 'mimeType' | 'fileName'>)>;
});
export declare type FetchS3ObjectsQueryVariables = Exact<{
    keyName?: Maybe<Scalars['String']>;
}>;
export declare type FetchS3ObjectsQuery = ({
    __typename?: 'Query';
} & {
    fetchS3Objects: Array<({
        __typename?: 'S3Object';
    } & Pick<S3Object, 'bucket' | 'keyName' | 'region' | 'mimeType' | 'fileName'>)>;
});
export declare const UpdatePlanMastDocument: import("graphql").DocumentNode;
export declare const AddPlanMastDocument: import("graphql").DocumentNode;
export declare const FetchPlanMastsDocument: import("graphql").DocumentNode;
export declare const UpdatePlanStatusDocument: import("graphql").DocumentNode;
export declare const AddPlanStatusDocument: import("graphql").DocumentNode;
export declare const FetchPlanStatusDocument: import("graphql").DocumentNode;
export declare const UpdatePolicyMastDocument: import("graphql").DocumentNode;
export declare const AddPolicyMastDocument: import("graphql").DocumentNode;
export declare const FetchPolicyMastDocument: import("graphql").DocumentNode;
export declare const UpdateReservationObjectDocument: import("graphql").DocumentNode;
export declare const AddReservationObjectDocument: import("graphql").DocumentNode;
export declare const FetchReservationObjectsDocument: import("graphql").DocumentNode;
export declare const UpdateRoomMastDocument: import("graphql").DocumentNode;
export declare const AddRoomMastDocument: import("graphql").DocumentNode;
export declare const FetchRoomMastsDocument: import("graphql").DocumentNode;
export declare const UpdateRoomStatusDocument: import("graphql").DocumentNode;
export declare const AddRoomStatusDocument: import("graphql").DocumentNode;
export declare const FetchRoomStatusDocument: import("graphql").DocumentNode;
export declare const UpdateS3ObjectDocument: import("graphql").DocumentNode;
export declare const AddS3ObjectDocument: import("graphql").DocumentNode;
export declare const FetchS3ObjectsDocument: import("graphql").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    updatePlanMast(variables?: Exact<{
        planMast?: PlanMastInput | null | undefined;
    }> | undefined): Promise<{
        data?: UpdatePlanMastMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    addPlanMast(variables?: Exact<{
        planMast?: PlanMastInput | null | undefined;
    }> | undefined): Promise<{
        data?: AddPlanMastMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    fetchPlanMasts(variables?: Exact<{
        planID?: string | null | undefined;
    }> | undefined): Promise<{
        data?: FetchPlanMastsQuery | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    updatePlanStatus(variables?: Exact<{
        planStatus?: PlanStatusInput[] | null | undefined;
    }> | undefined): Promise<{
        data?: UpdatePlanStatusMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    addPlanStatus(variables?: Exact<{
        planStatus?: PlanStatusInput[] | null | undefined;
    }> | undefined): Promise<{
        data?: AddPlanStatusMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    fetchPlanStatus(variables: FetchPlanStatusQueryVariables): Promise<{
        data?: FetchPlanStatusQuery | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    updatePolicyMast(variables?: Exact<{
        policyMast?: PolicyMastInput | null | undefined;
    }> | undefined): Promise<{
        data?: UpdatePolicyMastMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    addPolicyMast(variables?: Exact<{
        policyMast?: PolicyMastInput | null | undefined;
    }> | undefined): Promise<{
        data?: AddPolicyMastMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    fetchPolicyMast(variables?: Exact<{
        policyID?: string | null | undefined;
    }> | undefined): Promise<{
        data?: FetchPolicyMastQuery | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    updateReservationObject(variables?: Exact<{
        reservationObject?: ReservationObjectInput | null | undefined;
    }> | undefined): Promise<{
        data?: UpdateReservationObjectMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    addReservationObject(variables?: Exact<{
        reservationObject?: ReservationObjectInput | null | undefined;
    }> | undefined): Promise<{
        data?: AddReservationObjectMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    fetchReservationObjects(variables?: Exact<{
        reservationID?: string | null | undefined;
    }> | undefined): Promise<{
        data?: FetchReservationObjectsQuery | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    updateRoomMast(variables?: Exact<{
        roomMast?: RoomMastInput | null | undefined;
    }> | undefined): Promise<{
        data?: UpdateRoomMastMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    addRoomMast(variables?: Exact<{
        roomMast?: RoomMastInput | null | undefined;
    }> | undefined): Promise<{
        data?: AddRoomMastMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    fetchRoomMasts(variables?: Exact<{
        roomID?: string | null | undefined;
    }> | undefined): Promise<{
        data?: FetchRoomMastsQuery | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    updateRoomStatus(variables?: Exact<{
        roomStatus?: RoomStatusInput[] | null | undefined;
    }> | undefined): Promise<{
        data?: UpdateRoomStatusMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    addRoomStatus(variables?: Exact<{
        roomStatus?: RoomStatusInput[] | null | undefined;
    }> | undefined): Promise<{
        data?: AddRoomStatusMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    fetchRoomStatus(variables: FetchRoomStatusQueryVariables): Promise<{
        data?: FetchRoomStatusQuery | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    updateS3Object(variables?: Exact<{
        s3Object?: S3ObjectInput | null | undefined;
    }> | undefined): Promise<{
        data?: UpdateS3ObjectMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    addS3Object(variables?: Exact<{
        s3Object?: S3ObjectInput | null | undefined;
    }> | undefined): Promise<{
        data?: AddS3ObjectMutation | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
    fetchS3Objects(variables?: Exact<{
        keyName?: string | null | undefined;
    }> | undefined): Promise<{
        data?: FetchS3ObjectsQuery | undefined;
        extensions?: any;
        headers: Headers;
        status: number;
        errors?: GraphQLError[] | undefined;
    }>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
