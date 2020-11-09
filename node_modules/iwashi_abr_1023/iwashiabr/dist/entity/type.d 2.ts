import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type RequireFields<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X];
} & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    AWSDate: string;
    AWSDateTime: string;
    AWSTimestamp: number;
    AWSTime: string;
    AWSEmail: string;
    AWSJSON: string;
    AWSURL: string;
    AWSPhone: string;
    AWSIPAddress: string;
};
export declare type DateStatusObject = {
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
    key: Scalars['String'];
    value?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};
export declare type PriceObject = {
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
    planID: Scalars['String'];
    imageID?: Maybe<Scalars['String']>;
};
export declare type PlanImageMappingTemplateInput = {
    planID: Scalars['String'];
    imageID?: Maybe<Scalars['String']>;
};
export declare type PlanMast = {
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
    policyID: Scalars['ID'];
    roomChargePrice?: Maybe<Scalars['Int']>;
};
export declare type PolicyMastInput = {
    policyID: Scalars['ID'];
    roomChargePrice?: Maybe<Scalars['Int']>;
};
export declare type ReservationObject = {
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
    roomID: Scalars['String'];
    imageID?: Maybe<Scalars['String']>;
};
export declare type RoomImageMappingTemplateInput = {
    roomID: Scalars['String'];
    imageID?: Maybe<Scalars['String']>;
};
export declare type RoomMast = {
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
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
    DateStatusObject: ResolverTypeWrapper<DateStatusObject>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    DateStatusObjectInput: DateStatusObjectInput;
    KeyValueObject: ResolverTypeWrapper<KeyValueObject>;
    String: ResolverTypeWrapper<Scalars['String']>;
    PriceObject: ResolverTypeWrapper<PriceObject>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    PriceObjectInput: PriceObjectInput;
    CurrencyType: CurrencyType;
    DayOfTheWeek: DayOfTheWeek;
    TimeZone: TimeZone;
    Query: ResolverTypeWrapper<{}>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    Mutation: ResolverTypeWrapper<{}>;
    CancelPolicyMast: ResolverTypeWrapper<CancelPolicyMast>;
    CancelPolicyMastInput: CancelPolicyMastInput;
    ImageMast: ResolverTypeWrapper<ImageMast>;
    ImageMastInput: ImageMastInput;
    PlanImageMappingTemplate: ResolverTypeWrapper<PlanImageMappingTemplate>;
    PlanImageMappingTemplateInput: PlanImageMappingTemplateInput;
    PlanMast: ResolverTypeWrapper<PlanMast>;
    PlanMastInput: PlanMastInput;
    PlanStatus: ResolverTypeWrapper<PlanStatus>;
    PlanStatusInput: PlanStatusInput;
    PolicyMast: ResolverTypeWrapper<PolicyMast>;
    PolicyMastInput: PolicyMastInput;
    ReservationObject: ResolverTypeWrapper<ReservationObject>;
    ReservationObjectInput: ReservationObjectInput;
    ReservationPlanInfo: ResolverTypeWrapper<ReservationPlanInfo>;
    ReservationPlanInfoInput: ReservationPlanInfoInput;
    ReservationRoomInfo: ResolverTypeWrapper<ReservationRoomInfo>;
    ReservationRoomInfoInput: ReservationRoomInfoInput;
    RoomImageMappingTemplate: ResolverTypeWrapper<RoomImageMappingTemplate>;
    RoomImageMappingTemplateInput: RoomImageMappingTemplateInput;
    RoomMast: ResolverTypeWrapper<RoomMast>;
    RoomMastInput: RoomMastInput;
    RoomStatus: ResolverTypeWrapper<RoomStatus>;
    RoomStatusInput: RoomStatusInput;
    S3Object: ResolverTypeWrapper<S3Object>;
    S3ObjectInput: S3ObjectInput;
    AWSDate: ResolverTypeWrapper<Scalars['AWSDate']>;
    AWSDateTime: ResolverTypeWrapper<Scalars['AWSDateTime']>;
    AWSTimestamp: ResolverTypeWrapper<Scalars['AWSTimestamp']>;
    AWSTime: ResolverTypeWrapper<Scalars['AWSTime']>;
    AWSEmail: ResolverTypeWrapper<Scalars['AWSEmail']>;
    AWSJSON: ResolverTypeWrapper<Scalars['AWSJSON']>;
    AWSURL: ResolverTypeWrapper<Scalars['AWSURL']>;
    AWSPhone: ResolverTypeWrapper<Scalars['AWSPhone']>;
    AWSIPAddress: ResolverTypeWrapper<Scalars['AWSIPAddress']>;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
    DateStatusObject: DateStatusObject;
    Boolean: Scalars['Boolean'];
    DateStatusObjectInput: DateStatusObjectInput;
    KeyValueObject: KeyValueObject;
    String: Scalars['String'];
    PriceObject: PriceObject;
    Int: Scalars['Int'];
    PriceObjectInput: PriceObjectInput;
    Query: {};
    ID: Scalars['ID'];
    Mutation: {};
    CancelPolicyMast: CancelPolicyMast;
    CancelPolicyMastInput: CancelPolicyMastInput;
    ImageMast: ImageMast;
    ImageMastInput: ImageMastInput;
    PlanImageMappingTemplate: PlanImageMappingTemplate;
    PlanImageMappingTemplateInput: PlanImageMappingTemplateInput;
    PlanMast: PlanMast;
    PlanMastInput: PlanMastInput;
    PlanStatus: PlanStatus;
    PlanStatusInput: PlanStatusInput;
    PolicyMast: PolicyMast;
    PolicyMastInput: PolicyMastInput;
    ReservationObject: ReservationObject;
    ReservationObjectInput: ReservationObjectInput;
    ReservationPlanInfo: ReservationPlanInfo;
    ReservationPlanInfoInput: ReservationPlanInfoInput;
    ReservationRoomInfo: ReservationRoomInfo;
    ReservationRoomInfoInput: ReservationRoomInfoInput;
    RoomImageMappingTemplate: RoomImageMappingTemplate;
    RoomImageMappingTemplateInput: RoomImageMappingTemplateInput;
    RoomMast: RoomMast;
    RoomMastInput: RoomMastInput;
    RoomStatus: RoomStatus;
    RoomStatusInput: RoomStatusInput;
    S3Object: S3Object;
    S3ObjectInput: S3ObjectInput;
    AWSDate: Scalars['AWSDate'];
    AWSDateTime: Scalars['AWSDateTime'];
    AWSTimestamp: Scalars['AWSTimestamp'];
    AWSTime: Scalars['AWSTime'];
    AWSEmail: Scalars['AWSEmail'];
    AWSJSON: Scalars['AWSJSON'];
    AWSURL: Scalars['AWSURL'];
    AWSPhone: Scalars['AWSPhone'];
    AWSIPAddress: Scalars['AWSIPAddress'];
};
export declare type DateStatusObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['DateStatusObject'] = ResolversParentTypes['DateStatusObject']> = {
    date?: Resolver<ResolversTypes['AWSDate'], ParentType, ContextType>;
    isStayable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['PriceObject']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type KeyValueObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyValueObject'] = ResolversParentTypes['KeyValueObject']> = {
    key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PriceObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceObject'] = ResolversParentTypes['PriceObject']> = {
    currencyType?: Resolver<ResolversTypes['CurrencyType'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    fetchPlanMasts?: Resolver<Array<ResolversTypes['PlanMast']>, ParentType, ContextType, RequireFields<QueryFetchPlanMastsArgs, never>>;
    fetchPlanStatus?: Resolver<Array<ResolversTypes['PlanStatus']>, ParentType, ContextType, RequireFields<QueryFetchPlanStatusArgs, never>>;
    fetchPolicyMast?: Resolver<Array<ResolversTypes['PolicyMast']>, ParentType, ContextType, RequireFields<QueryFetchPolicyMastArgs, never>>;
    fetchReservationObjects?: Resolver<Array<ResolversTypes['ReservationObject']>, ParentType, ContextType, RequireFields<QueryFetchReservationObjectsArgs, never>>;
    fetchRoomMasts?: Resolver<Array<ResolversTypes['RoomMast']>, ParentType, ContextType, RequireFields<QueryFetchRoomMastsArgs, never>>;
    fetchRoomStatus?: Resolver<Array<ResolversTypes['RoomStatus']>, ParentType, ContextType, RequireFields<QueryFetchRoomStatusArgs, never>>;
    fetchS3Objects?: Resolver<Array<ResolversTypes['S3Object']>, ParentType, ContextType, RequireFields<QueryFetchS3ObjectsArgs, never>>;
};
export declare type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
    addPlanMast?: Resolver<Maybe<ResolversTypes['PlanMast']>, ParentType, ContextType, RequireFields<MutationAddPlanMastArgs, never>>;
    addPlanStatus?: Resolver<Maybe<ResolversTypes['PlanStatus']>, ParentType, ContextType, RequireFields<MutationAddPlanStatusArgs, never>>;
    addPolicyMast?: Resolver<Maybe<ResolversTypes['PolicyMast']>, ParentType, ContextType, RequireFields<MutationAddPolicyMastArgs, never>>;
    addReservationObject?: Resolver<Maybe<ResolversTypes['ReservationObject']>, ParentType, ContextType, RequireFields<MutationAddReservationObjectArgs, never>>;
    addRoomMast?: Resolver<Maybe<ResolversTypes['RoomMast']>, ParentType, ContextType, RequireFields<MutationAddRoomMastArgs, never>>;
    addRoomStatus?: Resolver<Maybe<ResolversTypes['RoomStatus']>, ParentType, ContextType, RequireFields<MutationAddRoomStatusArgs, never>>;
    addS3Object?: Resolver<Maybe<ResolversTypes['S3Object']>, ParentType, ContextType, RequireFields<MutationAddS3ObjectArgs, never>>;
    updatePlanMast?: Resolver<Maybe<ResolversTypes['PlanMast']>, ParentType, ContextType, RequireFields<MutationUpdatePlanMastArgs, never>>;
    updatePlanStatus?: Resolver<Maybe<ResolversTypes['PlanStatus']>, ParentType, ContextType, RequireFields<MutationUpdatePlanStatusArgs, never>>;
    updatePolicyMast?: Resolver<Maybe<ResolversTypes['PolicyMast']>, ParentType, ContextType, RequireFields<MutationUpdatePolicyMastArgs, never>>;
    updateReservationObject?: Resolver<Maybe<ResolversTypes['ReservationObject']>, ParentType, ContextType, RequireFields<MutationUpdateReservationObjectArgs, never>>;
    updateRoomMast?: Resolver<Maybe<ResolversTypes['RoomMast']>, ParentType, ContextType, RequireFields<MutationUpdateRoomMastArgs, never>>;
    updateRoomStatus?: Resolver<Maybe<ResolversTypes['RoomStatus']>, ParentType, ContextType, RequireFields<MutationUpdateRoomStatusArgs, never>>;
    updateS3Object?: Resolver<Maybe<ResolversTypes['S3Object']>, ParentType, ContextType, RequireFields<MutationUpdateS3ObjectArgs, never>>;
};
export declare type CancelPolicyMastResolvers<ContextType = any, ParentType extends ResolversParentTypes['CancelPolicyMast'] = ResolversParentTypes['CancelPolicyMast']> = {
    policyID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    beforeTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    chargeRatio?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type ImageMastResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageMast'] = ResolversParentTypes['ImageMast']> = {
    imageID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    bucket?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PlanImageMappingTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanImageMappingTemplate'] = ResolversParentTypes['PlanImageMappingTemplate']> = {
    planID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    imageID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PlanMastResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanMast'] = ResolversParentTypes['PlanMast']> = {
    planID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    subDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    stockNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    inSale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PlanStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanStatus'] = ResolversParentTypes['PlanStatus']> = {
    planID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    Time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    soldNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    availableNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    isAvailabe?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PolicyMastResolvers<ContextType = any, ParentType extends ResolversParentTypes['PolicyMast'] = ResolversParentTypes['PolicyMast']> = {
    policyID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    roomChargePrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type ReservationObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReservationObject'] = ResolversParentTypes['ReservationObject']> = {
    reservationID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    checkInTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    checkOutTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    planID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    roomID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    roomNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    planNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    peopleNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    policyID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    totalPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    guestName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    guestEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    GuestTell?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    canceledAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type ReservationPlanInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReservationPlanInfo'] = ResolversParentTypes['ReservationPlanInfo']> = {
    reservationID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    planID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type ReservationRoomInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReservationRoomInfo'] = ResolversParentTypes['ReservationRoomInfo']> = {
    reservationID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    roomID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type RoomImageMappingTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoomImageMappingTemplate'] = ResolversParentTypes['RoomImageMappingTemplate']> = {
    roomID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    imageID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type RoomMastResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoomMast'] = ResolversParentTypes['RoomMast']> = {
    roomID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    subDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    maxPeopleNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    stockNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    minOrderNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    inSale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type RoomStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoomStatus'] = ResolversParentTypes['RoomStatus']> = {
    roomID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    Time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    soldNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    availableNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    isAvailabe?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type S3ObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['S3Object'] = ResolversParentTypes['S3Object']> = {
    bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    keyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export interface AwsDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSDate'], any> {
    name: 'AWSDate';
}
export interface AwsDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSDateTime'], any> {
    name: 'AWSDateTime';
}
export interface AwsTimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSTimestamp'], any> {
    name: 'AWSTimestamp';
}
export interface AwsTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSTime'], any> {
    name: 'AWSTime';
}
export interface AwsEmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSEmail'], any> {
    name: 'AWSEmail';
}
export interface AwsjsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSJSON'], any> {
    name: 'AWSJSON';
}
export interface AwsurlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSURL'], any> {
    name: 'AWSURL';
}
export interface AwsPhoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSPhone'], any> {
    name: 'AWSPhone';
}
export interface AwsipAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSIPAddress'], any> {
    name: 'AWSIPAddress';
}
export declare type Resolvers<ContextType = any> = {
    DateStatusObject?: DateStatusObjectResolvers<ContextType>;
    KeyValueObject?: KeyValueObjectResolvers<ContextType>;
    PriceObject?: PriceObjectResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    CancelPolicyMast?: CancelPolicyMastResolvers<ContextType>;
    ImageMast?: ImageMastResolvers<ContextType>;
    PlanImageMappingTemplate?: PlanImageMappingTemplateResolvers<ContextType>;
    PlanMast?: PlanMastResolvers<ContextType>;
    PlanStatus?: PlanStatusResolvers<ContextType>;
    PolicyMast?: PolicyMastResolvers<ContextType>;
    ReservationObject?: ReservationObjectResolvers<ContextType>;
    ReservationPlanInfo?: ReservationPlanInfoResolvers<ContextType>;
    ReservationRoomInfo?: ReservationRoomInfoResolvers<ContextType>;
    RoomImageMappingTemplate?: RoomImageMappingTemplateResolvers<ContextType>;
    RoomMast?: RoomMastResolvers<ContextType>;
    RoomStatus?: RoomStatusResolvers<ContextType>;
    S3Object?: S3ObjectResolvers<ContextType>;
    AWSDate?: GraphQLScalarType;
    AWSDateTime?: GraphQLScalarType;
    AWSTimestamp?: GraphQLScalarType;
    AWSTime?: GraphQLScalarType;
    AWSEmail?: GraphQLScalarType;
    AWSJSON?: GraphQLScalarType;
    AWSURL?: GraphQLScalarType;
    AWSPhone?: GraphQLScalarType;
    AWSIPAddress?: GraphQLScalarType;
};
/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export declare type IResolvers<ContextType = any> = Resolvers<ContextType>;
