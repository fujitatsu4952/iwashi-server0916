import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  fetchPlanMasts: Array<PlanMast>;
  fetchPolicyMast: Array<PolicyMast>;
  fetchRoomMasts: Array<RoomMast>;
};


export type QueryFetchPlanMastsArgs = {
  planID?: Maybe<Scalars['ID']>;
};


export type QueryFetchPolicyMastArgs = {
  policyID?: Maybe<Scalars['ID']>;
};


export type QueryFetchRoomMastsArgs = {
  roomID?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  addPlanMast?: Maybe<PlanMast>;
  addPolicyMast?: Maybe<PolicyMast>;
  addRoomMast?: Maybe<RoomMast>;
  updatePlanMast?: Maybe<PlanMast>;
  updatePolicyMast?: Maybe<PolicyMast>;
  updateRoomMast?: Maybe<RoomMast>;
};


export type MutationAddPlanMastArgs = {
  input?: Maybe<PlanMastInput>;
};


export type MutationAddPolicyMastArgs = {
  input?: Maybe<PolicyMastInput>;
};


export type MutationAddRoomMastArgs = {
  input?: Maybe<RoomMastInput>;
};


export type MutationUpdatePlanMastArgs = {
  input?: Maybe<PlanMastInput>;
};


export type MutationUpdatePolicyMastArgs = {
  input?: Maybe<PolicyMastInput>;
};


export type MutationUpdateRoomMastArgs = {
  input?: Maybe<RoomMastInput>;
};

export type CancelPolicyMast = {
  policyID: Scalars['ID'];
  beforeTime?: Maybe<Scalars['String']>;
  chargeRatio?: Maybe<Scalars['Int']>;
};

export type CancelPolicyMastInput = {
  policyID: Scalars['ID'];
  beforeTime?: Maybe<Scalars['String']>;
  chargeRatio?: Maybe<Scalars['Int']>;
};

export type ImageMast = {
  imageID: Scalars['ID'];
  bucket: Scalars['String'];
  key: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
};

export type ImageMastInput = {
  imageID: Scalars['ID'];
  bucket: Scalars['String'];
  key: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
};

export type PlanImageMappingTemplate = {
  planID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type PlanImageMappingTemplateInput = {
  planID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type PlanMast = {
  planID: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  subDescription: Scalars['String'];
  price: Scalars['Int'];
  stockNum: Scalars['Int'];
  deletedAt?: Maybe<Scalars['String']>;
  inSale?: Maybe<Scalars['Boolean']>;
};

export type PlanMastInput = {
  planID: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  subDescription?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  stockNum: Scalars['Int'];
  deletedAt?: Maybe<Scalars['String']>;
  inSale?: Maybe<Scalars['Boolean']>;
};

export type PlanStatus = {
  planID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type PlanStatusInput = {
  planID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type PolicyMast = {
  policyID: Scalars['ID'];
  roomChargePrice?: Maybe<Scalars['Int']>;
};

export type PolicyMastInput = {
  policyID: Scalars['ID'];
  roomChargePrice?: Maybe<Scalars['Int']>;
};

export type ReservationObject = {
  reservationID: Scalars['String'];
  checkInTime: Scalars['String'];
  checkOutTime: Scalars['String'];
  roomNum: Scalars['Int'];
  planNum: Scalars['Int'];
  peopleNum: Scalars['Int'];
  totalPrice: Scalars['Int'];
  guestName: Scalars['String'];
  guestEmail: Scalars['String'];
  GuestTell: Scalars['String'];
  canceledAt?: Maybe<Scalars['String']>;
  policyID: Scalars['String'];
};

export type ReservationObjectInput = {
  reservationID: Scalars['String'];
  checkInTime: Scalars['String'];
  checkOutTime: Scalars['String'];
  roomNum: Scalars['Int'];
  planNum: Scalars['Int'];
  peopleNum: Scalars['Int'];
  totalPrice: Scalars['Int'];
  guestName: Scalars['String'];
  guestEmail: Scalars['String'];
  GuestTell: Scalars['String'];
  canceledAt?: Maybe<Scalars['String']>;
  policyID: Scalars['String'];
};

export type ReservationPlanInfo = {
  reservationID: Scalars['String'];
  planID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type ReservationPlanInfoInput = {
  reservationID: Scalars['String'];
  planID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type ReservationRoomInfo = {
  reservationID: Scalars['String'];
  roomID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type ReservationRoomInfoInput = {
  reservationID: Scalars['String'];
  roomID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type RoomImageMappingTemplate = {
  roomID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type RoomImageMappingTemplateInput = {
  roomID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type RoomMast = {
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

export type RoomMastInput = {
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

export type RoomStatus = {
  roomID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type RoomStatusInput = {
  roomID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  CancelPolicyMast: ResolverTypeWrapper<CancelPolicyMast>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CancelPolicyMastInput: CancelPolicyMastInput;
  ImageMast: ResolverTypeWrapper<ImageMast>;
  ImageMastInput: ImageMastInput;
  PlanImageMappingTemplate: ResolverTypeWrapper<PlanImageMappingTemplate>;
  PlanImageMappingTemplateInput: PlanImageMappingTemplateInput;
  PlanMast: ResolverTypeWrapper<PlanMast>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
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
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars['ID'];
  Mutation: {};
  CancelPolicyMast: CancelPolicyMast;
  String: Scalars['String'];
  Int: Scalars['Int'];
  CancelPolicyMastInput: CancelPolicyMastInput;
  ImageMast: ImageMast;
  ImageMastInput: ImageMastInput;
  PlanImageMappingTemplate: PlanImageMappingTemplate;
  PlanImageMappingTemplateInput: PlanImageMappingTemplateInput;
  PlanMast: PlanMast;
  Boolean: Scalars['Boolean'];
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
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  fetchPlanMasts?: Resolver<Array<ResolversTypes['PlanMast']>, ParentType, ContextType, RequireFields<QueryFetchPlanMastsArgs, never>>;
  fetchPolicyMast?: Resolver<Array<ResolversTypes['PolicyMast']>, ParentType, ContextType, RequireFields<QueryFetchPolicyMastArgs, never>>;
  fetchRoomMasts?: Resolver<Array<ResolversTypes['RoomMast']>, ParentType, ContextType, RequireFields<QueryFetchRoomMastsArgs, never>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addPlanMast?: Resolver<Maybe<ResolversTypes['PlanMast']>, ParentType, ContextType, RequireFields<MutationAddPlanMastArgs, never>>;
  addPolicyMast?: Resolver<Maybe<ResolversTypes['PolicyMast']>, ParentType, ContextType, RequireFields<MutationAddPolicyMastArgs, never>>;
  addRoomMast?: Resolver<Maybe<ResolversTypes['RoomMast']>, ParentType, ContextType, RequireFields<MutationAddRoomMastArgs, never>>;
  updatePlanMast?: Resolver<Maybe<ResolversTypes['PlanMast']>, ParentType, ContextType, RequireFields<MutationUpdatePlanMastArgs, never>>;
  updatePolicyMast?: Resolver<Maybe<ResolversTypes['PolicyMast']>, ParentType, ContextType, RequireFields<MutationUpdatePolicyMastArgs, never>>;
  updateRoomMast?: Resolver<Maybe<ResolversTypes['RoomMast']>, ParentType, ContextType, RequireFields<MutationUpdateRoomMastArgs, never>>;
};

export type CancelPolicyMastResolvers<ContextType = any, ParentType extends ResolversParentTypes['CancelPolicyMast'] = ResolversParentTypes['CancelPolicyMast']> = {
  policyID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  beforeTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chargeRatio?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ImageMastResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageMast'] = ResolversParentTypes['ImageMast']> = {
  imageID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bucket?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PlanImageMappingTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanImageMappingTemplate'] = ResolversParentTypes['PlanImageMappingTemplate']> = {
  planID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PlanMastResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanMast'] = ResolversParentTypes['PlanMast']> = {
  planID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stockNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inSale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PlanStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanStatus'] = ResolversParentTypes['PlanStatus']> = {
  planID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  Time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  soldNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  availableNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isAvailabe?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PolicyMastResolvers<ContextType = any, ParentType extends ResolversParentTypes['PolicyMast'] = ResolversParentTypes['PolicyMast']> = {
  policyID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  roomChargePrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReservationObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReservationObject'] = ResolversParentTypes['ReservationObject']> = {
  reservationID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  checkInTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  checkOutTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roomNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  planNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  peopleNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  guestName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  guestEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  GuestTell?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  canceledAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  policyID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReservationPlanInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReservationPlanInfo'] = ResolversParentTypes['ReservationPlanInfo']> = {
  reservationID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  planID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReservationRoomInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReservationRoomInfo'] = ResolversParentTypes['ReservationRoomInfo']> = {
  reservationID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roomID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RoomImageMappingTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoomImageMappingTemplate'] = ResolversParentTypes['RoomImageMappingTemplate']> = {
  roomID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RoomMastResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoomMast'] = ResolversParentTypes['RoomMast']> = {
  roomID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxPeopleNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stockNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minOrderNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inSale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RoomStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoomStatus'] = ResolversParentTypes['RoomStatus']> = {
  roomID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  Time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  soldNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  availableNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isAvailabe?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
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
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
